import { useState } from "react"


const useInsertCommitteMember = () => {
    const [insertResponse, setInsertResponse] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const insertMember = async(insert_doc) =>{
        try{
            setIsLoading(true)
            const response = await fetch('https://server-null.vercel.app/committe/insert',{
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(insert_doc)
            })
            const res = await response.json()
            setInsertResponse(res)
        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }
    return [ insertMember , insertResponse , isLoading , error ]
}

export default useInsertCommitteMember