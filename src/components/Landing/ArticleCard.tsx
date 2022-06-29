import { Article } from "@modules/Article/utils/types"
import Link from "next/link"
import { FC } from "react"

export const ArticleCard: FC<{ data: Article; category: string }> = ({ data, category }) => {
  return (
    <Link passHref href={`/articles/${category}/${data.id}`}>
      <a className="group">
        <article className="flex flex-col items-center justify-center gap-4 rounded-md border border-outline bg-dark-400 py-6 px-10 transition-colors duration-300 group-hover:bg-dark-300 sm:flex-row sm:justify-start sm:gap-10">
          <p className="text-4xl transition-transform group-hover:rotate-12 sm:text-6xl">{data.emoji}</p>
          <div>
            <h3 className="text-center text-lg sm:text-left">{data.title}</h3>
            <p className="mt-1 text-center text-sm font-light text-slate-400 sm:text-left">{data.description}</p>
          </div>
        </article>
      </a>
    </Link>
  )
}
