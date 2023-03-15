export const data = JSON.parse("{\"key\":\"v-1473bf53\",\"path\":\"/demo/\",\"title\":\"Demo Page\",\"lang\":\"ja\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Pages\",\"slug\":\"pages\",\"link\":\"#pages\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"demo/README.md\"}")

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
