import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import DeveloperCard from "../components/developer-card";
import {graphql, useStaticQuery} from "gatsby";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query DevSiteQuery {
            allSitesYaml {
                edges {
                    node {
                        url
                        name
                        childScreenshot {
                            screenshotFile {
                                childImageSharp {
                                    fixed(width: 384, height: 288) {
                                        ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    return (
        <Layout>
            <SEO title="Home"/>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
                <Image/>
                {
                    data.allSitesYaml.edges.map(({node}) => {
                        return (<DeveloperCard name={node.name} url={node.url} image={node.childScreenshot?.screenshotFile.childImageSharp}/>)
                    })
                }
            </div>
        </Layout>
    )
};


export default IndexPage
