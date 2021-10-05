/**
 * @type {import("@babel/core").ConfigFunction}
 */
module.exports = (api) => ({
  presets: [
    require.resolve('@babel/preset-typescript'),
    [
      require.resolve('@babel/preset-env'),
      {
        useBuiltIns: 'usage',
        corejs: { version: '3.8', proposals: true },
        targets: 'last 2 versions, > 2%',
      },
    ],
    require.resolve('@babel/preset-react'),
  ],
  plugins: [
    require.resolve('@babel/plugin-transform-runtime'),
    [
      require.resolve('babel-plugin-styled-components'),
      // workaround for jest-styled-components not accessing style rules on styled components
      {
        ssr: api.env('test') ? false : undefined,
        displayName: api.env('test') ? false : undefined,
      },
    ],
    !(api.env('production') || api.env('test')) &&
      require.resolve('react-refresh/babel'),
  ].filter(Boolean),
});
