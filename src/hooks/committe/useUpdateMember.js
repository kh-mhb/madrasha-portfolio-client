import { useState } from "react"


const useUpdateMember = () =>{
    const [isLoading,setIsLoading]  = useState(false)
    const [error,setError]  = useState(null)
    const [resMessage,setResMessage]  = useState(null)

    const updateMember = async(data,id) =>{
        setIsLoading(true)
        try{
            const response = await fetch(`https://server-null.vercel.app/committe/update/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
    
            const res = await response.json()
    
            setResMessage(res)

        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }

    return [ updateMember , isLoading , error , resMessage ]
}

export default useUpdateMember