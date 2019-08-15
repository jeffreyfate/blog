export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d54cc2362ef1edf61f82f07',
                  title: 'Sanity Studio',
                  name: 'blog-studio-bvoa6sbg',
                  apiId: '32707116-7a76-4e6f-a704-97443e22f8f0'
                },
                {
                  buildHookId: '5d54cc2467d29917c4f831f4',
                  title: 'Blog Website',
                  name: 'blog-web-k9efw4bc',
                  apiId: '88df82c3-3fd0-43fb-b383-c2d869ad3634'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeffreyfate/blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://blog-web-k9efw4bc.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
