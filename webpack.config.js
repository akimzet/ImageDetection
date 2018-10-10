const path = require("path"),
  webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    app: ["./src/app/App.tsx", "webpack-hot-middleware/client"],
    vendor: ["react", "react-dom"]
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js"
  },

  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: ["handlebars-loader", "extract-loader", "css-loader"]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "app", "index.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
