export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '612cd44c4a8cababb3cc85de',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ufzewspq',
                  apiId: 'a819a4ae-ca06-4e86-9aad-c9e6a508ab7c'
                },
                {
                  buildHookId: '612cd44c00da93fd8be52d95',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ohbjtfak',
                  apiId: 'bff508c9-9071-4ed3-8758-fe6a45770f28'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/henrikfischer/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ohbjtfak.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
