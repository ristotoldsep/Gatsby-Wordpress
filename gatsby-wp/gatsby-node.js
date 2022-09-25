/* exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
} */


const path = require("path")

exports.createPages = async({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
      allWpCategory {
        edges {
          node {
            id
            name
            count
            uri
            slug
          }
        }
      }
    }
  `)

  //Check for errors
  if (result.errors) {
    reporter.panicOnBuild(`Something went wrong! :(`, result.errors)
    return
  }

  const { wp, allWpCategory } = result.data

  // console.log(wp); //THIS IS IN NODE LAND, SO WE SEE THE LOG IN THE TERMINAL ONLY
}