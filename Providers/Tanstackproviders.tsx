import React, { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'


type Propscontainer = {
    children:React.ReactNode
}
const Tanstackproviders = ({ children }: Propscontainer) => {

const [queryclient] = useState(()=> new QueryClient())


    return (
        <div>
            <QueryClientProvider client={queryclient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </div>
    )
}

export default Tanstackproviders
