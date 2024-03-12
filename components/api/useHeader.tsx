import React from 'react'
import { useSelector } from 'react-redux'

const useHeader = () => {
    const Token = useSelector((state: any) => state.TOKEN.Token)
    const headers = () => {
        // 'Content - Type': 'multipart/form-data',
        //     'Authorization': `Bearer ${Token}`,
    }

    return {
        headers
    }

}

export default useHeader
