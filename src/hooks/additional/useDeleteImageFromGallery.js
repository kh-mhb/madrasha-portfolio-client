import { useState } from 'react'

const useDeleteImageFromGallery = () => {
    const [deleteResponse,setDeleteResponse] = useState(null)
    const [error,setError] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const deleteImage = async(id) =>{
        const token = localStorage.getItem('access_token')
        setIsLoading(true)
        try{
            const deleteRes = await fetch(`https://server-null.vercel.app/auth/delete/image/${id}`,{
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

    return [ deleteResponse , error , isLoading , deleteImage ]
}

export default useDeleteImageFromGallery