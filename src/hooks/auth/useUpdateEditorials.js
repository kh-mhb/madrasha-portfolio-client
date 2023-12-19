import { useState } from "react"


const useUpdateEditorials = () => {
    const [isLoading,setIsLoading]  = useState(false)
    const [error,setError]  = useState(null)
    const [resMessage,setResMessage]  = useState(null)
    const [message,setMessage]  = useState(null)

    const updateEditorials = async(id,data) =>{
        const token = localStorage.getItem('access_token')
        setIsLoading(true)
        try{
            const response = await fetch(`https://server-null.vercel.app/auth/update/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
    
            const res = await response.json()
            console.log(res)
            setMessage(res.message)
            setResMessage(res.result)
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }

    return [ updateEditorials , isLoading , error , resMessage , message ]
}

export default useUpdateEditorials