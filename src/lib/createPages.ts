import { GatsbyNode } from "gatsby"
import graphql from "graphql-tag"
import { print } from "graphql/language/printer"

/**
 * Export graphql AST for the gatsby-plugin-typegen to generate type definitions
 * https://git.io/JeoRO
 */
export const schema = graphql`
  query Posts {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            slug
            categories
            tags
          }
          body
        }
      }
    }
  }
`

/**
 * Entry point for creating all pages
 *
 * @param {*} {
 *   graphql: graphqlQuery,
 *   actions,
 * }
 */
export const createPages: GatsbyNode["createPages"] = async ({
  graphql: graphqlQuery,
  actions,
}) => {
  const result = await graphqlQuery<GatsbyTypes.PostsQuery>(print(schema))
  // do other things
}
