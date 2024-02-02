import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'



const Course_Fetch = (currentPage: number,courseId:number) => {


    const { data: data_show_listCourse, isPending: pending_show_listCourse } = useQuery({
        queryKey: ['listCourses', currentPage],
        queryFn: async ({ queryKey }) => {
            let token = localStorage.getItem('token')
            const page = queryKey[1]
            let queryparams = { page: page }
            console.log('queryparams', queryparams)
            const result = await axios.get('https://learnify.v1r.ir/api/course/latest', {
                params: queryparams,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }

            })
            return result
        },

    })

    const { data: data_show_CourseId } = useQuery({
        queryKey: ['courseId'],
        queryFn: async () => {
            let token = localStorage.getItem('token')
            let id = courseId
            const response = await axios.get(`https://learnify.v1r.ir/api/course/show/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            return response
        }
    })

    return {
        data_show_listCourse,
        pending_show_listCourse,
        data_show_CourseId,
    }
}

export default Course_Fetch
