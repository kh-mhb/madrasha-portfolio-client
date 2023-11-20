import { useState } from 'react'

const useDeleteCommitteMember = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [deleteResponse,setDeleteResponse] = useState(null)


    const deleteMember = async(id) =>{

        setIsLoading(true)
        try{
            const deleteRes = await fetch(`https://server-null.vercel.app/committe/delete/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const res = await deleteRes.json()
            
            setDeleteResponse(res)

        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }
  
    return [ deleteMember , deleteResponse , error , isLoading ]
}

export default useDeleteCommitteMember