/* Site-wide constants: one place for the copy that must stay consistent across
 * the page, the <head> metadata, the JSON-LD, and the OG image. */

export const SITE = {
  name: "Noeta",
  url: "https://noeta.dev",
  title: "Noeta — an AI-native, human-first programming language",
  description:
    "Noeta is an AI-native, human-first programming language for shipping reactive applications " +
    "as single binaries — web, desktop, or service — with a type system that makes illegal " +
    "states unrepresentable. LSP, DAP, MCP, and a formatter, all out of one binary.",
  ogImage: "https://noeta.dev/images/og-image.png",
  themeColor: "#0b0d10",
  themeColorLight: "#f6f8fb",
  /** The current Noeta release, baked in at build from NOETA_VERSION (the deploy workflow sets it to
   *  the latest release tag). null on an unreleased build, so the UI omits the version. */
  version: process.env.NOETA_VERSION ?? null,
  links: {
    docs: "https://docs.noeta.dev",
    registry: "https://registry.noeta.dev",
    playground: "https://play.noeta.dev",
    github: "https://github.com/noeta-lang/noeta",
  },
} as const;
