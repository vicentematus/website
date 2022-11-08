import path from "path";

/** @type {import("next-i18next").UserConfig} */
const i18config = {
  debug: process.env.NODE_ENV === "development",
  reloadOnPrerender: process.env.NODE_ENV === "development",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
  localePath: path.resolve("./public/locales"),
};
export default i18config;
