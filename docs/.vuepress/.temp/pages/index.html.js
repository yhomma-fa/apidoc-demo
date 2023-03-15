export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"API Page Sample\",\"lang\":\"ja\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Contents\",\"slug\":\"contents\",\"link\":\"#contents\",\"children\":[{\"level\":3,\"title\":\"Demo\",\"slug\":\"demo\",\"link\":\"#demo\",\"children\":[]}]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"README.md\"}")

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
