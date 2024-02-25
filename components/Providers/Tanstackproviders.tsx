import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


type Propscontainer = {
    children: React.ReactNode
}
const Tanstackproviders = ({ children }: Propscontainer) => {

    const queryclient = new QueryClient({
        defaultOptions: {
            queries: {
                // staleTime:10000,
                // gcTime:50000
            }
        }
    })

    return (
        <div>
            <QueryClientProvider client={queryclient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </div>
    )
}

export default Tanstackproviders
