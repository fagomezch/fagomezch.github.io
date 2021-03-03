module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fagomezch/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/styles/settings/colors.scss";
        `,
      },
    },
  },
};
