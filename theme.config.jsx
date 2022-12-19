import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useTheme } from "nextra-theme-docs";

export default {
  logo: () => {
    const { resolvedTheme } = useTheme();
    if (resolvedTheme === "light") {
      return (
        <span>
          <img src="/LOGO_GRINN.png" alt="Logo Grinn" className=" max-h-8" />
        </span>
      );
    }
    return (
      <span className="">
        <img
          src="/LOGO_GRINN.png"
          alt="Logo Grinn dark"
          className=" max-h-8 "
        />
      </span>
    );
  },
  project: {
    link: "https://github.com/GRINN-dev/docs",
  },
  docsRepositoryBase: "https://github.com/GRINN-dev/docs/blob/main",

  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – SWR",
      };
    }
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property="og:url" content={`https://my-app.com${asPath}`} />
        <meta property="og:title" content={frontMatter.title || "Nextra"} />
        <meta
          property="og:description"
          content={frontMatter.description || "The next site builder"}
        />
      </>
    );
  },
  darkMode: true,
  primaryHue: { dark: 158, light: 191 },
  banner: {
    dismissible: true,
    key: "bannerState",
    text: "Doc en cours de construction, merci de votre patience ! N'hesitez pas à commenter via vercel !",
  },
  faviconGlyph: "😀",
};
