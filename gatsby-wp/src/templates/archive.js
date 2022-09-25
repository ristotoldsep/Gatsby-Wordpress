// Dependencies
import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// Components
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
// Styles
import { Wrapper, ContentWrapper, PageContent, StyledH2, StyledDate, StyledReadMore } from "./archive.styles"

const archiveTemplate = ({ data: { allWpPost } }) => (
    <Layout>
        { console.log(allWpPost) }
        Arhiiv!
    </Layout>
)

export default archiveTemplate
//! = can't be NULL
// skip = is connected to pagination
export const pageQuery = graphql`
    query($catId: String!, $skip:Int!, $limit: Int!) {
        allWpPost(
            filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
            skip: $skip
            limit: $limit
        ) {
            edges {
                node {
                    id
                    title
                    excerpt
                    uri
                    slug
                    date(formatString: "DD MM YYYY")
                }
            }
        }
    }
`