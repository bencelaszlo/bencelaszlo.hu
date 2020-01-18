module.exports = {
  title: 'Bence László // Blog',
  description: 'Bence László - Software Developer',
  base: '/blog/',
  dest: './dist/blog/',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Main Site',
        link: 'https://bencelaszlo.github.io',
      },
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/bence-laszlo/'
        },
        {
          type: 'github',
          link: 'https://github.com/bencelaszlo',
        },
        {
          type: 'gitlab',
          link: 'https://gitlab.com/bencelaszlo'
        }
      ],
      copyright: [
        {
          text: '2020 | Bence László',
          link: 'https://bencelaszlo.github.io',
        },
      ],
    },
  },
}
