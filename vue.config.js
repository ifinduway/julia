const { defineConfig } = require('@vue/cli-service')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack(config) {
    // useBundleAnalyzer(config)
  },
  pages: {
    index: {
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Школа красивой речи | Брянск',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
})

function useBundleAnalyzer(config) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
  config.plugin('bundle-analyzer').use(BundleAnalyzerPlugin, [{}]);
}
