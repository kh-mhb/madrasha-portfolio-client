import { useState } from "react"


const useDeleteEditorials = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [deleteResponse,setDeleteResponse] = useState(null)


    const deleteEditorialsMember = async(id) =>{
        const token = localStorage.getItem('access_token')
        setIsLoading(true)
        try{
            const deleteRes = await fetch(`https://server-null.vercel.app/auth/delete/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
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
    return [ deleteEditorialsMember , deleteResponse , error , isLoading ]
}

export default useDeleteEditorials