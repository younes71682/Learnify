 import '@/styles/globals.css'
import 'flowbite';
// import 'smart-webcomponents-react/source/styles/smart.default.css';
 
// import '@coreui/coreui-pro/dist/css/coreui.min.css'
import Chart from 'chart.js/auto';
 

import type { AppProps } from 'next/app'
  

export default function App({ Component, pageProps }: AppProps) {
   const showSidbar = false
   return (
             <Component {...pageProps} />
     )
}

   