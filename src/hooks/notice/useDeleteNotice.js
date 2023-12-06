import { useState } from 'react'

const useDeleteNotice = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [response,setResponse] = useState(null)
    const [message,setMessage] = useState(null)

    const deleteNotice = async(id) =>{
        const token = localStorage.getItem('access_token')
        setIsLoading(true)
        try{
            const deleteRes = await fetch(`https://server-null.vercel.app/notice/delete/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
            })
            if(!deleteRes.ok){
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const res = await deleteRes.json()
            setResponse(res?.response)
            setMessage(res?.message)
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }
  
    return [ deleteNotice , response , message , isLoading , error] 
}

export default useDeleteNotice