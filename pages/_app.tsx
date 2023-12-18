 import '@/styles/globals.css'
import 'flowbite';
import type { AppProps } from 'next/app'
  

export default function App({ Component, pageProps }: AppProps) {
   const showSidbar = false
   return (
             <Component {...pageProps} />
     )
}

   