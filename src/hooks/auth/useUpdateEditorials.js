import { useState } from "react"


const useUpdateEditorials = () => {
    const [isLoading,setIsLoading]  = useState(false)
    const [error,setError]  = useState(null)
    const [resMessage,setResMessage]  = useState(null)

    const updateEditorials = async(id,data) =>{
        setIsLoading(true)
        try{
            const response = await fetch(`http://localhost:7071/auth/update/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
    
            const res = await response.json()
    console.log(res)
            setResMessage(res)
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }

    return [ updateEditorials , isLoading , error , resMessage ]
}

export default useUpdateEditorials