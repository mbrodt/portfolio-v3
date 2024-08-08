import glob from "fast-glob"

interface Article {
  title: string
  description: string
  author: string
  date: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = await import(`../app/(content)/blog/${articleFilename}`)

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ""),
    ...article,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob("*/page.mdx", {
    cwd: "./src/app/(content)/blog",
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  const sorted = articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))

  return sorted
}
