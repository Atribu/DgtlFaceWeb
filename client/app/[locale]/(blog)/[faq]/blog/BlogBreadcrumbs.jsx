"use client";

import React from "react";
import Link from "next/link";

const BlogBreadcrumbs = ({
  locale,
  department,
  deptName,
  postTitle,
  className = "",
  blogIndexHref, // opsiyonel: /{locale}/bloglar veya /{locale}/{department}/bloglar vs.
}) => {
  const items = [
    { href: `/${locale}`, label: "Home" }, // istersen Header t('home') ile de yapabiliriz
    { href: `/${locale}/${department}`, label: deptName }, // departman hub
    { href: blogIndexHref || `/${locale}/bloglar`, label: "Blog" }, // blog index
    { href: undefined, label: postTitle }, // current
  ];

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className={`w-[100%] md:w-[94%] lg:w-[88%] flex justify-start ${className}`}
      >
        <div className="gradient-blog-nav inline-flex max-w-full min-w-[370px] ">
          <ol className="flex flex-wrap items-center gap-1 px-3 py-1 text-[12px] lg:text-[14px] font-medium text-white">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <li
                  key={`${item.href ?? "current"}-${index}`}
                  className="inline-flex items-center gap-[2px] lg:gap-1"
                >
                  {index !== 0 && (
                    <span className="text-white/80 mx-1 font-semibold text-[18px] lg:text-[20px]">
                      ›
                    </span>
                  )}

                  {isLast || !item.href ? (
                    <span className="px-[6px] lg:px-2 py-0.5 rounded-full bg-gradient-to-r from-[#54B9CF] via-[#547DCF] to-[#A754CF] text-[12px] lg:text-[14px] text-white shadow-sm">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-[6px] lg:px-2 py-0.5 rounded-full bg-white/5 text-white/90 hover:bg-gradient-to-r from-[#54B9CF] via-[#547DCF] to-[#A754CF] transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>

      <style jsx>{`
        .gradient-blog-nav {
          width: 80vw;
          border-radius: 999px;
          position: relative;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .gradient-blog-nav::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 999px;
          padding: 0px;
          background-size: 100%;
          background-position: 50% 50%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>
    </>
  );
};

export default BlogBreadcrumbs;
