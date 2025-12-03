// components/common/PlainRichText.jsx
"use client";

import React from "react";

export default function PlainRichText({
  html,
  as: Tag = "p",
  className = "",
}) {
  if (!html) return null;

  return (
    <Tag
      className={className}
      // html string içindeki <b>, <br>, <ul>, <li> vs. doğrudan render edilecek
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
