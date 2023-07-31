import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Qt Doc</span>,
  project: {
    link: "https://google.com",
  },
  chat: {
    link: "https://discord.com",
  },
  // docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  // footer: {
  //   text: "Qt Doc © 2023",
  // },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "fr", text: "Français" },
  ],
};

export default config;
