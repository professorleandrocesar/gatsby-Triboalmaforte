module.exports = {
  siteMetadata: {
    title: `triboalmaforte`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tribo Alma Forte`,
        short_name: `#TriboAlmaForte`,
        start_url: `/`,
        background_color: `#c07b4f`,
        theme_color: `#000`,
        display: `standalone`,
        icon: 'src/images/logo.png'
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#000`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Philosopher`,
            file: `https://fonts.googleapis.com/css2?family=Philosopher&display=swap`,
          },
          {
            name: `Kalam`,
            file: `https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap`,
          },
        ],
      },
    },
  ]
}
