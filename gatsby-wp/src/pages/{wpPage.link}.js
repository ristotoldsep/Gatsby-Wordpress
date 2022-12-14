import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
// Components
import Layout from "../components/Layout/Layout"
import PageHero from "../components/PageHero/PageHero"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import PageSidebar from "../components/PageSidebar/PageSidebar"
import { Content } from "../components/Header/Header.styles"

const Wrapper = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    padding: 20px;
`

const ContentWrapper = styled.div`
    display: block;

    @media (min-width: 992px) {
        display: flex;
    }
`

const PageContent = styled.article`
    margin: 20px 0 0 0;
`

const PageTemplate = ({ data }) => (
  <Layout>
    {data.wpPage.featuredImage ? (
      <PageHero
        img={
          data.wpPage.featuredImage.node.localFile.childImageSharp
            .gatsbyImageData
        }
      />
    ) : null}
    <Wrapper>
      <BreadCrumb
        parent={ data.wpPage.wpParent && data.wpPage.wpParent.node }
        title={ data.wpPage.title }
      />
      <ContentWrapper>
        <PageSidebar parentChildren={
          data.wpPage.wpParent && data.wpPage.wpParent.node.wpChildren.nodes
        }
        currentPage={ data.wpPage }
        parent={ data.wpPage.wpParent && data.wpPage.wpParent.node.title }
        >
          { data.wpPage.wpChildren /* For the children prop */ } 
        </PageSidebar>
        <PageContent>
          <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.title }} />
          <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
        </PageContent>
      </ContentWrapper>
    </Wrapper>
  </Layout>
)

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      link
      title
      content
      status
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, width: 1920)
            } 
          }
        }
      }
      wpChildren {
        nodes {
          ... on WpPage {
            id
            uri
            title
          }
        }
      }
      wpParent {
        node {
          ... on WpPage {
            id
            title
            uri
            wpChildren {
              nodes {
                ... on WpPage {
                  id
                  title
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`
