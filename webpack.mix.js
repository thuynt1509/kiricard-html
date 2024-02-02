const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Fo development Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
  plugins: [
    new BrowserSyncPlugin({
      files: ["src/**/*"],
      host: "localhost",
      port: 3000,
      server: {
        baseDir: "docs/",
        index: "index.html",
      },
    }),
  ],
});

/*
 |--------------------------------------------------------------------------
 | Website
 |--------------------------------------------------------------------------
 */

mix
  .js("./src/app.js", "./docs/assets/page_all.js")
  .sass("./src/app.scss", "./docs/assets/style.css")
  .options({
    processCssUrls: false,
    postCss: [tailwindcss("./tailwind.config.js")],
  })
  .copy("./src/app.html", "./docs/index.html")
  .copy("./src/login.html", "./docs/login.html")
  .copy("./src/product-list.html", "./docs/product-list.html")
  .copy("./src/product-list2.html", "./docs/product-list2.html")
  .copy("./src/product-order.html", "./docs/product-order.html")
  .copy("./src/product-detail.html", "./docs/product-detail.html")
  .copy("./src/aboutus.html", "./docs/aboutus.html");
