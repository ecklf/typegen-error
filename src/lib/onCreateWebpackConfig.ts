import { GatsbyNode } from "gatsby"
const path = require("path")

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  // Needs to be prefixed with ../../ because this file is located in src/lib.
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "../../src"), "node_modules"],
      alias: {
        $components: path.resolve(__dirname, "../../src/components"),
      },
    },
  })
}
