import TanstackProviders from '@/components/Providers/Tanstackproviders';
import Store from '@/components/Redux/Store';
import '@/styles/globals.css'
import 'flowbite';
// import 'smart-webcomponents-react/source/styles/smart.default.css';

// import '@coreui/coreui-pro/dist/css/coreui.min.css'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';


export default function App({ Component, pageProps }: AppProps) {
        return (
                <Provider store={Store}>
                        <TanstackProviders >
                                <Component {...pageProps} />
                        </TanstackProviders>
                </Provider>
        )
}

