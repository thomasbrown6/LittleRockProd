const path = require("path");
const glob = require("glob");
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");

if (typeof require !== "undefined") {
  require.extensions[".css"] = file => {};
}

module.exports = withImages({
  webpack: (config, { dev }) => {
    config.node = {
      fs: "empty"
    };
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.css$/,
        use: ["babel-loader", "raw-loader", "postcss-loader"]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "babel-loader",
          "raw-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                indentedSyntax: true
              },
              outputStyle: "compressed", // These options are from node-sass: https://github.com/sass/node-sass
              includePaths: ["styles", "node_modules"]
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );
    return config;
  }
  // exportPathMap: function(defaultPathMap) {
  //   return {
  //     '/': { page: '/' },
  //     '/landing': { page: '/landing' },
  //     '/generic': { page: '/generic' },
  //     '/landing': { page: '/landing' }
  //   }
  // }
});

// module.exports = withCSS({
//   cssModules: true,
//   cssLoaderOptions: {
//       url: true,
//   },
// });
