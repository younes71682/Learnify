import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useSelector } from 'react-redux'



const Course_Fetch = (currentPage: number, courseId: number) => {

    const Token = useSelector((state: any) => state.TOKEN.Token)


    const { data: data_show_listCourse, isPending: pending_show_listCourse } = useQuery({
        queryKey: ['listCourses', currentPage],
        queryFn: async ({ queryKey }) => {
            const page = queryKey[1]
            let queryparams = { page: page }
            console.log('queryparams', queryparams)
            const result = await axios.get('https://learnify.v1r.ir/api/course/latest', {
                params: queryparams,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Token}`,
                }

            })
            return result
        },

    })

    const { data: data_show_CourseId, isPending: pending_show_CourseId } = useQuery({
        queryKey: ['courseId', courseId],
        queryFn: async ({ queryKey }) => {
            let id = queryKey[1]
            const response = await axios.get(`https://learnify.v1r.ir/api/course/show/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Token}`,
                }
            })
            return response
        }
    })

    return {
        data_show_listCourse,
        pending_show_listCourse,
        data_show_CourseId,
        pending_show_CourseId,
    }
}

export default Course_Fetch
