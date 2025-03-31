import comp from "C:/Users/Jason/purdue-wiki/docs/.vuepress/.temp/pages/docs/course.html.vue"
const data = JSON.parse("{\"path\":\"/docs/course.html\",\"title\":\"课程推荐\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"课程推荐\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"docs/course.md\"}")
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
