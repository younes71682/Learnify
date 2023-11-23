import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '@/component/navbar/Layout'
import type { AppProps } from 'next/app'
  

export default function App({ Component, pageProps }: AppProps) {
  return (
    
      <Layout>
        <Component {...pageProps} />
      </Layout>
   )
}

