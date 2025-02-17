module.exports = {
  siteMetadata: {
    author: "@b-douglas",
    description: "A simple warehouse web app to accept returns",
    title: "Blank Brands Warehouse Returns Processor",
    siteUrl: "https://b-douglas.github.io/warehouse-return-screens",
  },
  pathPrefix: "/warehouse-return-screens",
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "static/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-125824667-2",
      },
    },
  ],
  proxy: {
    prefix: "/v1",
    url: "/api",
  },
}
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
