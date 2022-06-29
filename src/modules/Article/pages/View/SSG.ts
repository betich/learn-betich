import { getAllArticles, getArticle, getArticlesInCategory } from "@modules/Article/server/getArticle"
import { Article } from "@modules/Article/utils/types"
import { GetStaticPaths, GetStaticProps } from "next"

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getAllArticles()

  // paths => [{ category: string, id: string }]
  const paths = [] as { category: string; id: string }[]
  Object.keys(articles).map((category) => {
    const articlesInCategory = articles[category]

    articlesInCategory.forEach((article) => {
      paths.push({
        category,
        id: article.id,
      })
    })
  })

  return {
    paths: paths.map((path) => ({
      params: path,
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{
  article: { metadata: Article; content: string }
  nextArticle: { link: string; title: string; emoji: string } | null
  previousArticle: { link: string; title: string; emoji: string } | null
}> = async ({ params }) => {
  const article = await getArticle(`${params?.category}/${params?.id}`)

  const articlesInCategory = await getArticlesInCategory(params?.category as string)
  const articleIndex = articlesInCategory.findIndex((article) => article.id === params?.id)

  const nextArticle = articlesInCategory[articleIndex + 1] ?? null
  const previousArticle = articlesInCategory[articleIndex - 1] ?? null

  if (!article) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        article,
        nextArticle: nextArticle
          ? { link: `${params?.category}/${nextArticle.id}`, title: nextArticle.title, emoji: nextArticle.emoji }
          : null,
        previousArticle: previousArticle
          ? {
              link: `${params?.category}/${previousArticle.id}`,
              title: previousArticle.title,
              emoji: previousArticle.emoji,
            }
          : null,
      },
    }
  }
}
