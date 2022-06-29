import "@styles/tailwind.scss"
import "@styles/fonts.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-dark-600 p-8 font-display text-white">
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
