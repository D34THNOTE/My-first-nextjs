import '@/styles/style.css' // replaced css from the default globals
import type { AppProps } from 'next/app'
import Navigation from "@/components/fragments/navigation";
import Footer from "@/components/fragments/footer";
import Header from "@/components/fragments/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div>
        <Header />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </div>
      )

}
