import { getAllArticles } from "@modules/Article/server/getArticle"
import { Article } from "@modules/Article/utils/types"
import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps<{ articles: Record<string, Article[]> }> = async (ctx) => {
  const articles = await getAllArticles()

  return {
    props: {
      articles,
    },
  }
}
