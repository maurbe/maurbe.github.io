module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://maurbe.github.io/`,
    // Your Name
    name: 'Dr. Mauro Bernardini',
    // Main Site Title
    title: `Portfolio`,
    // Description that goes under your name in main bio
    description: `Astrophysicist with research experience in Numerical Galaxy Formation, High-Performance Computing, 
    and Data Science based in Berlin, Germany🇩🇪. 
    My interests focus on numerical and visualization methods, Machine Learning applications and AI integration 
    for scientific analysis pipelines.`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/maurbe`,
    ads: `https://ui.adsabs.harvard.edu/search/q=orcid%3A%220000-0002-2930-9509%22&sort=date%20desc%2C%20bibcode%20desc&p_=0`,
    researchgate: `https://www.researchgate.net/scientific-contributions/Mauro-Bernardini-2182139395`,
    orcid: `https://orcid.org/0000-0002-2930-9509`,
    // Optional: LinkedIn account URL
    // linkedin: `https://github.com/RyanFitzgerald/devfolio`,
    // Content of the About Me section
    about: `Hi there, I am an astrophysicist and data scientist by training with a passion for coding and everything AI-related.
    I love to explore new ways to visualize complex data sets and research results, 
    with a focus on design and simplicity.
    Find out more through my CV above or the projects section below.
    In my free time you will probably find me outdoors, training handstands or reading a good book.
    Feel free to reach out, whether it's serious business or just for a friendly hi!`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'ember-1',
        description:
          'A research project where I deployed neural networks to emulate the most expensive part of hydrodynamical simulations of galaxy formation: baryons! \
          While ember-1 achieves similar accuracy, it is over 30,000 times faster compared to the full simulation. \
          Built with TensorFlow and Keras.',
        link: 'https://github.com/maurbe/ember-1',
      },
      {
        name: 'ember-2',
        description:
          'The successor of ember-1, extending the framework to large simulation times and more emulated baryon channels. \
           Bigger, better, faster, and a little bit smarter too! \
           Built with PyTorch.',
        link: 'https://maurbe.github.io/ember-2/',
      },
      {
        name: 'punkt',
        description:
          'A python package to visualize simulation data. The package provides particle-to-grid operations using Smoothed Particle Hydrodynamics.\
          Try it out, it\'s free and blazingly fast!\
          Built with C++, OpenMP and Python.',
        link: 'https://github.com/maurbe/punkt',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Postdoctoral Researcher in Galaxy Formation',
        description: 'University of Zurich, December 2023 - December 2025',
        link: 'https://orcid.org/0000-0002-2930-9509',
      },
      {
        name: 'PhD in Data Science and Astrophysics',
        description: 'University of Zurich, October 2019 - October 2023',
        link: 'https://orcid.org/0000-0002-2930-9509',
      },
      {
        name: 'Master of Natural Sciences in Physics',
        description: 'University of Zurich, September 2013 - September 2019',
        link: 'https://orcid.org/0000-0002-2930-9509',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming',
        description:
          'Python, C, C++, Cython, SQL, Bash, HTML, CSS',
      },
      {
        name: 'Frameworks & Libraries',
        description: 'Git, Conda, VS-Code, TensorFlow, Keras, PyTorch, LibTorch, Lightning, Plotly',
      },
      {
        name: 'Soft',
        description:
          'Critical thinking, scientific writing, public speaking, teaching, team/project management',
      },
      {
        name: 'Languages',
        description:
          'German (native), English (proficient), Italian (fluent), French (basic)',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/portrait.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
