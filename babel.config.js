module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          '@components': './src/components',
          '@constant': './src/constant',
          '@utils': './src/utils',
          '@views': './src/views',
          '@routes': './src/screen/routes',
        },
      },
    ],
  ],
};
