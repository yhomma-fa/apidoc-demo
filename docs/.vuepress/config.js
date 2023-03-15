"use strict"

import { defineUserConfig } from "vuepress"

export default defineUserConfig({
    base: "/apidoc-demo/",
    title: "Api Doc Demo",
    description: "API仕様書のDemoです",
    locales: {
        "/": {
            lang: "ja",
        },
    },
    themeConfig: {
        repo: "https://github.com/yhomma-fa/apidoc-demo",
        docsRepo: "https://github.com/yhomma-fa/apidoc-demo",
        docsBranch: "main",
        lastUpdated: true
    }
})