
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Applications/MAMP/Sites/pollycon/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Applications/MAMP/Sites/pollycon/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Applications/MAMP/Sites/pollycon/src/pages/about.js")),
  "component---src-pages-blog-index-jsx": preferDefault(require("/Applications/MAMP/Sites/pollycon/src/pages/blog/index.jsx")),
  "component---src-pages-blog-markdown-remark-frontmatter-slug-jsx": preferDefault(require("/Applications/MAMP/Sites/pollycon/src/pages/blog/{markdownRemark.frontmatter__slug}.jsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Applications/MAMP/Sites/pollycon/src/pages/index.tsx")),
  "component---src-pages-page-2-js": preferDefault(require("/Applications/MAMP/Sites/pollycon/src/pages/page-2.js")),
  "component---src-pages-using-ssr-js": preferDefault(require("/Applications/MAMP/Sites/pollycon/src/pages/using-ssr.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Applications/MAMP/Sites/pollycon/src/pages/using-typescript.tsx")),
  "component---src-templates-using-dsg-js": preferDefault(require("/Applications/MAMP/Sites/pollycon/src/templates/using-dsg.js"))
}

