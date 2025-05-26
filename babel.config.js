module.exports = function (api) {
  api.cache(true);

  return {
    // for bare React Native
    // presets: ['module:@react-native/babel-preset'],

    // or for Expo
    presets: ["babel-preset-expo"],

    // other config
    plugins: [
      // other plugins
      [
        "react-native-unistyles/plugin",
        {
          // pass root folder of your application
          // all files under this folder will be processed by the Babel plugin.
          root: ".",
        },
      ],
    ],
  };
};
