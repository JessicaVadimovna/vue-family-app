module.exports = {
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      definitions[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = JSON.stringify(false);
      return definitions;
    });
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-family-app/'
    : '/'
};