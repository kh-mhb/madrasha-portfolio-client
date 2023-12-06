import React from 'react'
import { useState } from 'react'

const useGetSingleNotice = () => {
    const [notice,setNotice] = useState({})
    const [message,setMessage] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null)

    const getSingleNotice = async(id) =>{
        setIsLoading(true)
        try{
            fetch(`https://server-null.vercel.app/notice/single/${id}`)
            .then(res => res.json())
            .then(data =>{
                setMessage(data?.message)
                setNotice(data?.notice)
            })
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }
  
    return [getSingleNotice,notice,message,isLoading,error]
}

export default useGetSingleNotice