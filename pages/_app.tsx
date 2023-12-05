import '@/styles/globals.css'
import 'flowbite';
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout';
 

export default function App({ Component, pageProps }: AppProps) {
   const showSidbar = false
   return (
          <Layout>
            <Component {...pageProps} />
         </Layout>
    )
}

