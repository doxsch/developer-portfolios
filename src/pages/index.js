import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DeveloperCard from "../components/developer-card";
import {graphql, useStaticQuery} from "gatsby";
import Letter from "../components/letter";

const IndexPage = () => {
    const data = useStaticQuery(graphql`query DevSiteQuery {
  allSitesYaml {
    edges {
      node {
        url
        name
        childScreenshot {
          screenshotFile {
            childImageSharp {
              gatsbyImageData(width: 700, layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
}
`);
    let tmpLetter = "";

    return (
        <Layout>
            <SEO title="Home"/>
            <h2>Hi people</h2>
            <p>On this page you will find a list of developer portfolios from which you can be inspired. This page was
                made possible by Emma Bostian, who provides this information in her <a
                    href='https://github.com/emmabostian/developer-portfolios' rel="noreferrer"
                    target='_blank'>Github-Repo</a>. Thanks a lot ☺</p>
            <p>If you would like to see your portfolio on this page as well, please share the information about your
                portfolio <a href='https://github.com/emmabostian/developer-portfolios' rel="noreferrer"
                             target='_blank'>here</a>.</p>
            <p>Now get inspired and build something great.</p>

            <h2>Today's featured portfolio</h2>
            {
                [data.allSitesYaml.edges].map(edges => {
                    const numberOfPortfolios = edges.length - 1
                    const date = new Date()
                    const dateHash = date.getFullYear() + date.getMonth() + date.getDay()
                    const hashIndex = dateHash % numberOfPortfolios
                    const selectedPortfolio = edges[hashIndex].node

                    return (
                        <>
                            <Letter key={'featured'} letter={selectedPortfolio.name[0].toUpperCase()}/>
                            <DeveloperCard
                                key={'feat-' + selectedPortfolio.name}
                                name={selectedPortfolio.name}
                                url={selectedPortfolio.url}
                                image={selectedPortfolio.childScreenshot?.screenshotFile.childImageSharp}/>
                        </>
                    )
                })

            }

                <h2>All portfolios</h2>
            {
                data.allSitesYaml.edges.map(({node}) => {
                if (tmpLetter !== node.name[0].toLowerCase()) {
                tmpLetter = node.name[0].toLowerCase();
                return (
                <>
                <Letter key={tmpLetter} letter={tmpLetter.toUpperCase()}/>
                <DeveloperCard
                key={node.name}
                name={node.name}
                url={node.url}
                image={node.childScreenshot?.screenshotFile.childImageSharp}/>
                </>
                )

            } else {
                return (<DeveloperCard name={node.name}
                key={node.name}
                url={node.url}
                image={node.childScreenshot?.screenshotFile.childImageSharp}/>)
            }

            })


            }
                </Layout>
                );
                };


                export default IndexPage
