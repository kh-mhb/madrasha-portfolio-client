import { useState } from 'react'

const useUpdateNotice = () => {
    const [message,setMessage] = useState(null)
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [response,setResponse] = useState(null)
    
    const updateNotice = async(id,data) =>{
        const token = localStorage.getItem('access_token')
        setIsLoading(true)
        try{
            const updateRes = await fetch(`https://server-null.vercel.app/notice/update/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
            if (!updateRes.ok) {
                throw new Error(`HTTP error! Status: ${updateRes.status}`);
            }
            const res = await updateRes.json()
            setMessage(res?.message)
            setResponse(res?.update)
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }
    
    return [updateNotice , message , response , error , isLoading]
}

export default useUpdateNotice