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
        children: [],
      },
      {
        title: 'Tech',
        path: '/tech/',
        children: [],
      }
    ]
  }
}
