import parseMD from "@utils/parseMD"
import { existsSync, readdirSync, readFileSync } from "fs"
import { readdir, readFile } from "fs/promises"
import path from "path"
import { Article } from "../utils/types"

const basePath = path.join(process.cwd(), "/src/articles")

// example @params id => web-dev/article
export const getArticle = async (id: string): Promise<{ metadata: Article; content: string } | null> => {
  const articlePath = path.join(basePath, `${id}.md`)

  if (!existsSync(articlePath)) {
    return null
  } else {
    const article = await readFile(articlePath, "utf8")
    const { metadata, content } = parseMD(article)

    const { title, emoji, description, section } = metadata as {
      title?: string
      emoji?: string
      description?: string
      section?: string
    }

    return {
      metadata: {
        id: id.split("/")[1],
        title: title ?? "",
        emoji: emoji ?? "",
        description: description ?? "",
        section: section ?? "",
      },
      content,
    }
  }
}

// example @return => { web-dev: [{<article1>}, ...] }
export const getAllArticles = async () => {
  const categoryPaths = await readdir(basePath) // ["web-dev", ...]

  const articles: Record<string, Article[]> = categoryPaths.reduce((acc, category) => {
    const articlesInCategoryPaths = readdirSync(path.join(basePath, category)).filter(async (file) =>
      file.endsWith(".md")
    ) // ["article1.md", ...]

    const articlesInCategory: Article[] = articlesInCategoryPaths.map((articlePath) => {
      const file = readFileSync(path.join(basePath, category, articlePath), "utf8")
      const { metadata, content } = parseMD(file)

      const { title, emoji, description, section } = metadata as {
        title?: string
        emoji?: string
        description?: string
        section?: string
      }

      // return article
      return {
        id: articlePath.replace(".md", ""),
        title: title ?? "",
        emoji: emoji ?? "",
        description: description ?? "",
        section: section ?? "",
      }
    }) // [{<article1>}, ...]

    return { ...acc, [category]: articlesInCategory }
  }, {}) // { web-dev: [{<article1>}, ...] }

  return articles
}

// example @return => [{<article1>}, ...]
export const getArticlesInCategory = async (category: string) => {
  if (!category) return []

  const articlesInCategoryPaths = (await readdir(path.join(basePath, category))).filter(async (file) =>
    file.endsWith(".md")
  ) // ["article1.md", ...]

  const articles = await Promise.all(
    articlesInCategoryPaths.map(async (articlePath) => {
      const file = await readFile(path.join(basePath, category, articlePath), "utf8")
      const { metadata, content } = parseMD(file)

      const { title, emoji, description, section } = metadata as {
        title?: string
        emoji?: string
        description?: string
        section?: string
      }

      // return article
      return {
        id: articlePath.replace(".md", ""),
        title: title ?? "",
        emoji: emoji ?? "",
        description: description ?? "",
        section: section ?? "",
      }
    })
  )

  return articles
}
