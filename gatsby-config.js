module.exports = {
  siteMetadata: {
    title: 'Kirill Tchentsov | Web Developer',
    siteUrl: 'https://kirill-tchentsov.netlify.app/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Kirill Tchentsov | Web Developer',
        description: 'The Development Portfolio of Kirill Tchentsov',
        lang: 'en',
        start_url: '/',
        theme_color: '#346E9E',
        display: 'standalone',
        icon: 'src/images/favIcon.svg',
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-transformer-json',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-recaptcha',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/',
      },
    },
  ],
};
