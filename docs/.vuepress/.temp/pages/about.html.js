import comp from "C:/Users/Jason/purdue-wiki/docs/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"关于\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"关于\"},\"headers\":[{\"level\":2,\"title\":\"🎯 项目目标 / Goals\",\"slug\":\"🎯-项目目标-goals\",\"link\":\"#🎯-项目目标-goals\",\"children\":[]},{\"level\":2,\"title\":\"⚠️ 免责声明 / Disclaimer\",\"slug\":\"⚠️-免责声明-disclaimer\",\"link\":\"#⚠️-免责声明-disclaimer\",\"children\":[]},{\"level\":2,\"title\":\"🧑‍💻 贡献者 / Contributors\",\"slug\":\"🧑‍💻-贡献者-contributors\",\"link\":\"#🧑‍💻-贡献者-contributors\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"about.md\"}")
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
