const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const path = require("path");

const BASE_JS = "./src/client/js/";

module.exports = {
  entry: {
    main: BASE_JS + "main.js",
    content: BASE_JS + "content.js",
    home: BASE_JS + "home.js",
    //generate: BASE_JS + "generate.js",
  },
  //mode: "development", //only on dev mode
  //watch: true, //only on dev mode
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|webp|ico)$/i,
        loader: "file-loader",
        options: {
          name: "imgs/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }) /*,
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)$/i,
          options: {
            quality: 75,
          },
        },
      ],
      overrideExtension: true,
      detailedLogs: false,
      silent: false,
      strict: true,
    }),*/,
  ],
};
