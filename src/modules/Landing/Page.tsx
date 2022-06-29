import { ArticleCard } from "@components/Landing/ArticleCard"
import { DescribeRoute } from "@components/Meta/DescribeRoute"
import { InferGetStaticPropsType, NextPage } from "next"
import { getStaticProps } from "./SSG"

const LandingPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ articles }) => {
  return (
    <DescribeRoute title="Next.js boilerplate" description="by betich">
      <div className="mx-auto min-h-screen max-w-4xl py-10">
        <h1 className="text-2xl font-semibold">Learn Web Development 😻</h1>
        <p className="mt-2 text-lg text-silver">Taught by Thee.</p>

        <h2 className="mt-8 text-lg text-white">Basic Web Development</h2>

        <section className="mt-4 flex flex-col gap-4">
          {articles["web-dev"]
            .sort((a, b) => +a.section - +b.section)
            .map((article) => (
              <ArticleCard category="web-dev" key={article.id} data={article} />
            ))}
        </section>
      </div>
    </DescribeRoute>
  )
}

export default LandingPage
