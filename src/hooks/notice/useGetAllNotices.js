import { useEffect } from 'react'
import { useState } from 'react'

const useGetAllNotices = () => {
    const [notices,setNotices] = useState([])
    const [message,setMessage] = useState(null)
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [notesCount,setNotesCount]  = useState(0)
    
    
    const fetchNotices = async() =>{
        setIsLoading(true)
        try{
            const res = await fetch('https://server-null.vercel.app/notice/all')
            const response = await res.json()
            setNotices(response?.notices)
            setMessage(response?.message)
            setNotesCount(response?.count)
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchNotices()
    },[])

    return [fetchNotices , notices , notesCount , message , error , isLoading]
}

export default useGetAllNotices