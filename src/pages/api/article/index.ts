// next api
import { getAllArticles } from "@modules/Article/server/getArticle"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const articles = await getAllArticles()
  res.status(200).json(articles)
}
