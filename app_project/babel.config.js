module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    ['react-native-worklets/plugin', {}, 'worklets'],
    ['react-native-reanimated/plugin', {}, 'reanimated'], 
  ],
};
