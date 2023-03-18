require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Montas.NYC`,
    siteUrl: `https://montas.nyc/`,
    description: `Blazing fast modern site generator for React`,
    twitterUsername: `@montas.nyc`,
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `M O N T A S`,
        short_name: `M O N T A S`,
        description: `Guide for residents of the ABC123 Smart Home`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "00000000"
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }
  ]
};
