// next api
import { getArticlesInCategory } from "@modules/Article/server/getArticle"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const articles = await getArticlesInCategory(req.query?.category as string)
  res.status(200).json(articles)
}
