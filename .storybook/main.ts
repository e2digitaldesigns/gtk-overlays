import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    {
      name: "storybook-addon-module-mock",
      options: {
        exclude: ["**/node_modules/**"]
      }
    },
    "@storybook/addon-jest",
    "@chromatic-com/storybook",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/preset-create-react-app",
    "@storybook/addon-queryparams"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  staticDirs: ["../public"],

  webpackFinal: async (config, { configType }) => {
    console.log({ did: __dirname });
    if (!config.resolve) {
      config.resolve = {};
    }

    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }

    if (config.resolve.alias) {
      config.resolve.alias["socket.io-client"] = path.resolve(
        __dirname,
        "__mocks__\\mockSocketIoClient.ts"
      );
    }
    return config;
  }
};
export default config;
