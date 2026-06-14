import { ExpoConfig, ConfigContext } from "expo/config";

const IS_DEVELOPMENT = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEVELOPMENT) {
    return "com.devxabhishek.EasDemo.dev";
  }

  if (IS_PREVIEW) {
    return "com.devxabhishek.EasDemo.preview";
  }

  return "com.devxabhishek.EasDemo";
};

const getAppName = () => {
  if (IS_DEVELOPMENT) {
    return "Eas-Demo Dev";
  }

  if (IS_PREVIEW) {
    return "Eas-Demo Preview";
  }

  return "Eas-Demo";
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: "Eas-Demo",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "easdemo",
  userInterfaceStyle: "automatic",

  ios: {
    bundleIdentifier: getUniqueIdentifier(),
  },

  android: {
    package: getUniqueIdentifier(),
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage:
        "./assets/images/android-icon-foreground.png",
      backgroundImage:
        "./assets/images/android-icon-background.png",
      monochromeImage:
        "./assets/images/android-icon-monochrome.png",
    },
    predictiveBackGestureEnabled: false,
  },

  web: {
    output: "static",
    favicon: "./assets/images/favicon.png",
  },

  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        backgroundColor: "#208AEF",
        android: {
          image: "./assets/images/splash-icon.png",
          imageWidth: 76,
        },
      },
    ],
  ],

  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },

  extra: {
    router: {},
    eas: {
      projectId: "d3ff1ddf-321e-4b7b-be4a-6b3dc4baf614",
    },
  },
});