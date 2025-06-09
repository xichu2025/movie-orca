interface IConfig {
  appName: string;
  baseDomain: string;
  locales: string[];
  defaultLocale: string;
  colorScheme: "light" | "dark";
}

const appConfig: IConfig = {
  appName: "Viral Video",
  baseDomain: process.env.NEXT_PUBLIC_DOMAIN || "https://aitubo.ai",
  locales: ["en"],
  defaultLocale: "en",
  colorScheme: "light",
};

export default appConfig;
