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

  const archiveTemplate = path.resolve("./src/templates/archive.js")

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

  // Create pages for each category
  allWpCategory.edges.forEach(category => {
    const postsPerPage = wp.readingSettings.postsPerPage
    const numberOfPosts = category.node.count
    const numPages = Math.ceil(numberOfPosts / postsPerPage)

    //Some categories may be empty and we don't want to create pages for them
    // Also want uncategorized pages
    if ( numberOfPosts > 0 || category.node.name !== "uncategorized" ) {
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: 
            i === 0 ? category.node.uri : `${ category.node.uri }${ i + 1 }`,
          component: archiveTemplate,
          context: { 
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages: numPages,
            currentPage: i + 1,
            catId: category.node.id,
            catName: category.node.name,
            catUri: category.node.uri,
            categories: allWpCategory,
          }
        })
      })
    }
  })
}