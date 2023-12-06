import { useState } from 'react'

const useUpdateNotice = () => {
    const [message,setMessage] = useState(null)
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    
    const updateNotice = async(data) =>{
        const token = localStorage.getItem('access_token')
        setIsLoading(true)
        try{
            const updateRes = await fetch(`https://server-null.vercel.app/insert/edit/${id}`,{
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
            setMessage(res)
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }
    
    return [updateNotice , message , error , isLoading]
}

export default useUpdateNotice