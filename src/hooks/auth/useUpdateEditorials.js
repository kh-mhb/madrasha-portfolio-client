import { useState } from "react"


const useUpdateEditorials = () => {
    const [isLoading,setIsLoading]  = useState(false)
    const [error,setError]  = useState(null)
    const [resMessage,setResMessage]  = useState(null)

    const updateEditorials = async(data,id) =>{
        setIsLoading(true)
        try{
            const response = await fetch(`http://localhost:7071/committe/update/${id}`,{
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

    return [ updateEditorials , isLoading , error , resMessage ]
}

export default useUpdateEditorials