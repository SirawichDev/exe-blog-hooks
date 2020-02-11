const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACEID,
  accessToken: process.env.CONTENTFUL_D_ACCESS_TOKEN,
}

module.exports = {
  siteMetadata: {
    title: `exe blog`,
    description: `I'm Junior full stack developer Love to Learn everything :3.`,
    author: `@sirawichExE`,
    data: ["item1","item2"]
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
      'gatsby-plugin-antd',
      `gatsby-plugin-sass`,
      `gatsby-plugin-typescript`
  ],
}
