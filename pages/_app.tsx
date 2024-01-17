import TanstackProviders from '@/components/Providers/Tanstackproviders';
import '@/styles/globals.css'
import 'flowbite';
// import 'smart-webcomponents-react/source/styles/smart.default.css';

// import '@coreui/coreui-pro/dist/css/coreui.min.css'

import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
        return (
                <TanstackProviders>
                        <Component {...pageProps} />
                </TanstackProviders>
        )
}

