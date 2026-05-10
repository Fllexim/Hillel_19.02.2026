const path = require("path");

const MiniCssExtractPlugin = require(
  "mini-css-extract-plugin"
);

const HtmlWebpackPlugin = require(
  "html-webpack-plugin"
);

const CssMinimizerPlugin = require(
  "css-minimizer-webpack-plugin"
);

const ImageMinimizerPlugin = require(
  "image-minimizer-webpack-plugin"
);

module.exports = {
  mode: "development",

  entry: "./src/js/index.js",

  output: {
    path: path.resolve(__dirname, "build"),

    filename: "bundle.js",

    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,

        loader: "html-loader",
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: "asset/resource",
      },

      {
        test: /\.css$/i,

        use: [
          MiniCssExtractPlugin.loader,

          "css-loader",
        ],
      },

      {
        test: /\.s[ac]ss$/i,

        use: [
          MiniCssExtractPlugin.loader,

          "css-loader",

          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),

    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  optimization: {
    minimizer: [
      "...",

      new CssMinimizerPlugin(),

      new ImageMinimizerPlugin({
        minimizer: {
          implementation:
            ImageMinimizerPlugin.imageminGenerate,

          options: {
            plugins: [],
          },
        },
      }),
    ],
  },

  devServer: {
    static: path.resolve(__dirname, "build"),

    port: 3000,

    open: true,
  },

  performance: {
    hints: false,
  },
};