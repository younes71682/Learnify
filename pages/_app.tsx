 import '@/styles/globals.css'
import 'flowbite';
// import 'smart-webcomponents-react/source/styles/smart.default.css';
  
import type { AppProps } from 'next/app'
  

export default function App({ Component, pageProps }: AppProps) {
   const showSidbar = false
   return (
             <Component {...pageProps} />
     )
}

   