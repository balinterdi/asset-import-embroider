'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // autoImport: {
    //   forbidEval: true,
    //   webpack: {
    //     module: {
    //       rules: [
    //         {
    //           test: /\.(png|jpg|gif|svg|webp)$/i,
    //           type: 'asset/resource',
    //           generator: {
    //             filename: 'assets/images/[name].[contenthash][ext][query]',
    //           },
    //         },
    //       ],
    //     },
    //   },
    // },
  });

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
  // return app.toTree();
};
