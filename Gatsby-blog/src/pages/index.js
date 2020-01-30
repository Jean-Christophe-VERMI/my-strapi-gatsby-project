import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"


const IndexPage = ({ data }) => (
  <Layout>
    
    
    <p>Welcome to GTZ, your best video game blog !</p>
    
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>
              {document.node.title}
            </Link>
          </h2>
          <Img fixed={document.node.image.childImageSharp.fixed}/>
          <p>{document.node.categories.name}</p>
          <p>{document.node.resume}</p>

        </li>))}
    </ul>

    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          resume
          content
          categories {
            id
            name
          }
          image {
            childImageSharp {
              fixed(width:200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          author {
            id
            username
          }
        }
      }
    }
  }`
