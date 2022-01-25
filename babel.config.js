module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['relay', { 'artifactDirectory': './src/__generated__' }],
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: { '~': './src' },
          extensions: ['.ts', '.tsx', '.android.tsx', '.ios.tsx', '.graphql'],
        },
      ],
    ],
  };
};
