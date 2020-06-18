module.exports = {
  pathPrefix: '/developer-portfolios',
  siteMetadata: {
    title: `Developer Portfolios`,
    description: `On this page you will find a list of developer portfolios from which you can be inspired.`,
    author: `@doxsch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `developer-portfolios`,
        short_name: `dev-portfolios`,
        start_url: `/`,
        background_color: `#2ba88e`,
        theme_color: `#2ba88e`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-yaml`,

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/data",
      },
    },

    `gatsby-transformer-screenshot`,
  ],
}
