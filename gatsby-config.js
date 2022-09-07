module.exports = {
  siteMetadata: {
    siteTitle: `Dokumentasi API Toko Voucher`,
    defaultTitle: `Dokumentasi API Toko Voucher`,
    siteTitleShort: `Dokumentasi API Toko Voucher`,
    siteDescription: `Dokumentasi API Toko Voucher`,
    siteUrl: `https://docs.tokovoucher.id`,
    siteAuthor: `@tokovoucher`,
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
        name: `Dokumentasi API Toko Voucher`,
        short_name: `Dokumentasi API Toko Voucher`,
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
        siteUrl: `https://docs.tokovoucher.id`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
