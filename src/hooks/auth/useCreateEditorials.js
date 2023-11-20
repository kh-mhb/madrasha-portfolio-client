import { useState } from "react"


const useCreateEditorials = () => {
    const [insertResponse, setInsertResponse] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const insertEditorials = async(insert_doc) =>{
        try{
            setIsLoading(true)
            const response = await fetch('https://server-null.vercel.app/auth/create',{
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(insert_doc)
            })
            const res = await response.json()

            setInsertResponse(res.response)
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }
    return [ insertEditorials , insertResponse , isLoading , error ]
}

export default useCreateEditorials