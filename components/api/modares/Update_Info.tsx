import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'

const Update_Info = () => {

    const client = useQueryClient()


    const { data:data_ShowTeacher, isPending:pending_data_ShowTeacher, isError:error_data_ShowTeacher } = useQuery({
        queryKey: ['info_teacher'],
        queryFn: async () => {
            let token = localStorage.getItem('token')
            const result = await axios.get('https://learnify.v1r.ir/api/user/show', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            return result
        },
    })


    const { mutate: updute_infoteacher } = useMutation({
        mutationFn: async (data) => {
            console.log('data rdrdr', data)
            let token = localStorage.getItem('token')
            const response = await axios.put('https://learnify.v1r.ir/api/user/update', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            return response
            console.log('res',response)
        },
        onSuccess: (res) => {
            console.log('res', res)
            // client.invalidateQueries({ queryKey: ['info_teacher'] })
        },
        onError: (errors) => {
            console.log('x', errors)
        }
    })

    return { updute_infoteacher, data_ShowTeacher, pending_data_ShowTeacher, error_data_ShowTeacher }
}

export default Update_Info



