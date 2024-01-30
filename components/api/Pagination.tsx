import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { totalmem } from 'os'
import React from 'react'

type PageParams = {
    page: number
}

const Pagination = (pageparams: PageParams) => {

    let totalItem = 0
    const { data } = useQuery({
        queryKey: ['listCourses', pageparams],
        queryFn: async ({ queryKey }) => {
            let token = localStorage.getItem('token')
            const { page } = queryKey[1] as PageParams
            let queryparams: PageParams = { page: page }

            const result = await axios.get('https://learnify.v1r.ir/api/course/latest', {
                params: { queryparams },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }

            })
            return result.data
        },
        select: (result) => {
            // totalItem = result.to
            return result
        },


    })

    return { data, totalItem }
}

export default Pagination
