'use strict';
module.exports = (ctx) => {
  return ({
    parser: ctx.file.extname === '.sss' ? 'sugarss' : false,
    plugins: {
      cssnano: {
        discardComments: {
          removeAll: true
        },
        filterPlugins: false,
        discardDuplicates: true,
        discardOverridden: true,
        minifySelectors: true,
        mergeRules: true,
        core: true,
        reduceIdents: false,
        svgo: false
      }
    }
  });
};