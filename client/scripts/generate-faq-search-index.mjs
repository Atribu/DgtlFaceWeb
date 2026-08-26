import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const CLIENT_DIR = resolve(SCRIPT_DIR, "..");
const FAQ_MAP_PATH = resolve(CLIENT_DIR, "app/[locale]/(faq)/faqMap.js");
const LOCALES = ["tr", "en"];

const HEADING_KEY_RE =
  /(^|\.)(h\d+|title|title\d+|heading|heading\d+|header|header\d+|services_title)$/i;
const QUESTION_KEY_RE = /(^|\.)sections\.[^.]+\.items\.\d+\.q$/i;

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function flattenMessages(value, prefix = "", output = []) {
  for (const [key, child] of Object.entries(value || {})) {
    const nextKey = prefix ? `${prefix}.${key}` : key;

    if (typeof child === "string") {
      output.push({ key: nextKey, text: child });
    } else if (child && typeof child === "object") {
      flattenMessages(child, nextKey, output);
    }
  }

  return output;
}

function getValueByPath(value, path) {
  return path
    .split(".")
    .reduce((current, key) => current?.[key], value);
}

function getLocaleNamespaces(faqMap, locale) {
  const namespaces = new Set();

  for (const [slug, namespace] of Object.entries(faqMap)) {
    const belongsToLocale =
      locale === "en"
        ? slug === "faq" || slug.endsWith("-faq")
        : slug === "sss" || slug.endsWith("-sss");

    if (belongsToLocale) namespaces.add(namespace);
  }

  return namespaces;
}

function createSearchRecords(messages, faqMap, locale) {
  const localeNamespaces = getLocaleNamespaces(faqMap, locale);
  const faqMessages = Object.fromEntries(
    Object.entries(messages).filter(
      ([namespace]) =>
        namespace.startsWith("Faq") && localeNamespaces.has(namespace)
    )
  );

  return flattenMessages(faqMessages).filter(
    ({ key }) => HEADING_KEY_RE.test(key) || QUESTION_KEY_RE.test(key)
  );
}

function validateSearchRecords(records, sourceMessages) {
  const keys = new Set();

  for (const record of records) {
    assert.equal(Object.keys(record).length, 2, `${record.key}: unexpected field`);
    assert.equal(typeof record.key, "string", "Index key must be a string");
    assert.equal(typeof record.text, "string", `${record.key}: text must be a string`);
    assert.equal(keys.has(record.key), false, `${record.key}: duplicate index key`);
    assert.equal(
      record.text,
      getValueByPath(sourceMessages, record.key),
      `${record.key}: source text was changed`
    );
    keys.add(record.key);
  }
}

async function loadFaqMap() {
  const source = await readFile(FAQ_MAP_PATH, "utf8");
  const sourceUrl = pathToFileURL(FAQ_MAP_PATH).href;
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(
    `${source}\n//# sourceURL=${sourceUrl}`
  ).toString("base64")}`;
  const faqMapModule = await import(moduleUrl);
  return faqMapModule.FAQ_MAP;
}

async function generateLocaleIndex(locale, faqMap) {
  const sourcePath = resolve(CLIENT_DIR, `messages/${locale}.json`);
  const outputPath = resolve(CLIENT_DIR, `public/search/faq-${locale}.json`);
  const sourceBefore = await readFile(sourcePath, "utf8");
  const sourceHashBefore = sha256(sourceBefore);
  const messages = JSON.parse(sourceBefore);
  const records = createSearchRecords(messages, faqMap, locale);

  validateSearchRecords(records, messages);

  const serialized = JSON.stringify(records);
  await writeFile(outputPath, serialized, "utf8");

  const writtenRecords = JSON.parse(await readFile(outputPath, "utf8"));
  assert.deepEqual(writtenRecords, records, `${locale}: written index differs from source records`);

  const sourceAfter = await readFile(sourcePath, "utf8");
  assert.equal(
    sha256(sourceAfter),
    sourceHashBefore,
    `${locale}: source message file was modified`
  );

  return {
    locale,
    records: records.length,
    sourceBytes: Buffer.byteLength(sourceBefore),
    indexBytes: Buffer.byteLength(serialized),
  };
}

const faqMap = await loadFaqMap();
const summaries = [];

for (const locale of LOCALES) {
  summaries.push(await generateLocaleIndex(locale, faqMap));
}

for (const summary of summaries) {
  const reduction = 100 - (summary.indexBytes / summary.sourceBytes) * 100;
  console.log(
    `[faq-index:${summary.locale}] ${summary.records} records, ` +
      `${summary.indexBytes} bytes (${reduction.toFixed(1)}% smaller than source)`
  );
}
