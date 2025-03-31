export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"C:/Users/Jason/purdue-wiki/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"关于"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/Jason/purdue-wiki/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Jason/purdue-wiki/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/docs/course.html", { loader: () => import(/* webpackChunkName: "docs_course.html" */"C:/Users/Jason/purdue-wiki/docs/.vuepress/.temp/pages/docs/course.html.js"), meta: {"title":"课程推荐"} }],
  ["/docs/", { loader: () => import(/* webpackChunkName: "docs_index.html" */"C:/Users/Jason/purdue-wiki/docs/.vuepress/.temp/pages/docs/index.html.js"), meta: {"title":"文档"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Jason/purdue-wiki/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
