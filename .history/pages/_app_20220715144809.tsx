import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from 'ne'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
