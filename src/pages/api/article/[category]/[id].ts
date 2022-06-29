// next api
import { getArticle } from "@modules/Article/server/getArticle"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const article = await getArticle(`${req.query?.category as string}/${req.query?.id as string}`)

  if (article) {
    res.status(200).json(article)
  } else {
    res.status(404).json({ message: "Article not found" })
  }
}
