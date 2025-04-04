import comp from "C:/Users/Jason/purdue-wiki/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/purdue_wiki_logo.svg\",\"actions\":[{\"text\":\"开始\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"GitHub页面\",\"link\":\"https://github.com/edjasonchn/Purdue-wiki\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Wiki for Purdue Students\",\"details\":\"提供有关 Purdue 大学课程、学习资源、经验分享的一站式平台。\"},{\"title\":\"Markdown & GitHub Powered\",\"details\":\"所有内容基于 Markdown 和 GitHub 协作，轻松贡献、轻松维护。\"},{\"title\":\"Clean & Fast\",\"details\":\"基于 VuePress 2，界面简洁，页面加载迅速，体验良好。\"}],\"footer\":\"MIT Licensed | Copyright © 2025 Purdue Wiki Contributors | 本网站为非官方项目，与普渡大学无关。 | This site is an independent project and is not affiliated with Purdue University.\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
