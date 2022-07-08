const siteUrl = process.env.URL || `humitalmain.gatsbyjs.io`

module.exports = {
  pathPrefix: "/HumitalWebsite",
  siteMetadata: {
    title: `Humital`,
    description: `Combining Human with Capital, Humital staat voor jou klaar. Wij helpen jou technologie te combineren met het menselijke`,
    author: `@Kwinten`,
    siteUrl: "https://humital.gatsbyjs.io",
    keywords:
      "human, help, human-centred, consulting, services, humital, capital",
    image: `/logoNew.png`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://humital.gatsbyjs.io/",
        sitemap: "https://humital.gatsbyjs.io/sitemap/sitemap-0.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    /*
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: true, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          // "script-src": "'self' www.google-analytics.com",
          //"style-src": "'self' 'unsafe-inline'",
          // "img-src": "'self' data: www.google-analytics.com",
          // you can add your directives or override defaults
        },
      },
    }*/ `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `tracedSVG`,
          quality: 50,
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Humital website`,
        short_name: `Humital`,
        start_url: `/`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `standalone`,
        icon: "src/images/logoFavIcon.png",
        // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    /*{
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
      },
    } /*{
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "GA-TRACKING_ID", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "YOUR_SELF_HOSTED_ORIGIN",
        },
      },
    },*/
  ],
}
