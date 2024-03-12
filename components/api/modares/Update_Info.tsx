import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Update_Info = () => {

    const Token = useSelector((state: any) => state.TOKEN.Token)

    const { data: data_Show_Information, isPending: pending_data_Show_Information, isError: error_data_Show_Information, } = useQuery({
        queryKey: ['info_teacher'],
        queryFn: async () => {
            const result = await axios.get('https://learnify.v1r.ir/api/user/show', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Token}`,
                }
            })
            return result
        },
    })



    const { mutate: mutate_uploadProfile, isPending: pending_uploadProfile, isSuccess: success_uploadProfile, isError: error_uploadProfile } = useMutation({
        mutationFn: (data) => {
            return axios.post('https://learnify.v1r.ir/api/media/image', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${Token}`,
                }
            })
        },
        onSuccess: (res) => {
            console.log('image', res.data.id)
            localStorage.setItem('ProfilePectureId', res.data.id)
        },
        onError: (error) => {
            console.log('errorimage', error)
        }

    })


    const { mutate: updute_infoteacher, isPending: pending_infoteacher } = useMutation({
        mutationFn: async (data) => {
            const response = await axios.put('https://learnify.v1r.ir/api/user/update', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Token}`,
                }
            })
            return response
        },
        onSuccess: (res) => {
            console.log('success', res)
        },
        onError: (errors) => {
            console.log('error', errors)
        }
    })

    return {
        updute_infoteacher,
        pending_infoteacher,
        data_Show_Information,
        pending_data_Show_Information,
        error_data_Show_Information,
        mutate_uploadProfile,
        pending_uploadProfile,
        success_uploadProfile,
        error_uploadProfile
    }
}

export default Update_Info


