/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
require("source-map-support").install()
require("ts-node").register()

exports.onCreateWebpackConfig = require("./src/lib/onCreateWebpackConfig").onCreateWebpackConfig
exports.createPages = require("./src/lib/createPages").createPages
