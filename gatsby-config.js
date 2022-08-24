module.exports = {
  siteMetadata: {
    siteTitle: `Toko Voucher`,
    defaultTitle: `Toko Voucher`,
    siteTitleShort: `Toko Voucher`,
    siteDescription: `Out of the box Gatsby Theme for creating documentation websites easily and quickly`,
    siteUrl: `https://tokovoucher.netlify.app`,
    siteAuthor: `@jpedroschmitz`,
    siteImage: `/banner.png`,
    siteLanguage: `id`,
    themeColor: `#D1B374`,
    basePath: `/`,
  },
  plugins: [{
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        // yamlFilesPath: `src/yamlFiles`,
        // repositoryUrl: `https://github.com/jpedroschmitz/rocketdocs`,
        // baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Toko Voucher`,
        short_name: `Toko Voucher`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://tokovoucher.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
