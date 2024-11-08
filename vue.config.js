const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/multi-step-form-frontend-mentor/"
      : "/",
  devServer: {
    historyApiFallback: true,
  },
});
