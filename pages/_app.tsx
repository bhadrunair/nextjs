import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {NextPage} from 'next'
import Layout from '../components/Layout'

type NextPageWithProps = NextPage & {
  getLayout?: (page:React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithProps
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? (page=>page);

  return getLayout(
  <Component {...pageProps}/>
  )
}

export default MyApp
