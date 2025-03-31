import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'Purdue Wiki',
  description: 'Purdue Wiki for Transfer Student',

  theme: defaultTheme({
    logo: '/purdue_wiki_logo.svg',

    navbar: [
      {text: '首页', link: '/'}, 
      {text:'开始', link: '/get-started'},
      { text: '文档', link: '/docs/' },
      { text: '资源', link: '/resources/' },
      { text: '关于', link: '/about' },
      ],

      sidebar: {
        '/docs/': [
          {
            text: '文档目录',
            children: [
              '/docs/README.md',
              '/docs/course.md',
              
              
            ],
          },
        ],
      },
  }),

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  
  bundler: viteBundler(),
})
