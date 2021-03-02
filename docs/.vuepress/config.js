module.exports = {
  title: 'Foria App',
  description: '',
  themeConfig: {
    repo: 'foria-app/foria__docs',
    repoLabel: 'Suggest a change',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    sidebar: [
      ['/', 'Home'],
      {
        title: 'Philosophy',
        path: '/philosophy/',
        collapsable: false,
        children: [
          '/philosophy/what-is-foria',
          '/philosophy/links',
          '/philosophy/creators-first',
          '/philosophy/advertisement',
          '/philosophy/opensource',
        ],
      },
      {
        title: 'Tech',
        path: '/tech/',
        collapsable: false,
        children: [
          '/tech/free-and-serverful',
          '/tech/models-and-database',
          '/tech/federations',
        ],
      }
    ],
    smoothScroll: true
  }
}
