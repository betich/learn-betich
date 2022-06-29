import { DescribeRoute } from "@components/Meta/DescribeRoute"
import { InferGetStaticPropsType, NextPage } from "next"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { getStaticProps } from "./SSG"
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon } from "@heroicons/react/solid"

const ViewArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  article,
  nextArticle,
  previousArticle,
}) => {
  return (
    <DescribeRoute title={article.metadata.title} description={article.metadata.description}>
      <div className="relative mx-auto min-h-screen max-w-[1440px] px-4 py-10 sm:px-10 xl:px-48">
        <Link passHref href="/">
          <a className="inline-flex items-center gap-1 rounded-md border border-outline bg-dark-400 py-3 px-6 text-white transition-colors duration-300 hover:bg-dark-300">
            <ChevronLeftIcon className="h-5 w-5" />
            Back to Home
          </a>
        </Link>

        <article className="article-section mt-8">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </article>

        <section className="mt-12 flex gap-4">
          {previousArticle && (
            <Link passHref href={`/articles/${previousArticle.link}`}>
              <a className="flex items-center gap-2 rounded-md border border-outline bg-dark-400 py-4 px-6 text-white transition-colors duration-300 hover:bg-dark-300">
                <ArrowLeftIcon className="h-5 w-5" />
                Previous : {previousArticle.emoji} {previousArticle.title}
              </a>
            </Link>
          )}

          {nextArticle && (
            <Link passHref href={`/articles/${nextArticle.link}`}>
              <a className="flex items-center gap-2 rounded-md border border-outline bg-dark-400 py-4 px-6 text-white transition-colors duration-300 hover:bg-dark-300">
                <ArrowRightIcon className="h-5 w-5" />
                Next : {nextArticle.emoji} {nextArticle.title}
              </a>
            </Link>
          )}
        </section>
      </div>
    </DescribeRoute>
  )
}

export default ViewArticlePage
