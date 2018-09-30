module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/style/_vars.scss";`,
      },
    },
  },
  baseUrl: process.env.NODE_ENV === 'development' ? '/' : './',
};
