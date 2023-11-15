import { useState } from "react"

const useDeleteStudent = (id) => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [response,setResponse] = useState(null)
    
    const deleteStudent = async() =>{
        console.log(id)
        setIsLoading(true)
        try{
            const deleteRes = await fetch(`http://localhost:7071/student/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if(!deleteRes.ok){
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            const res = await deleteRes.json()
            setResponse(res)

        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }

    return [deleteStudent , response , isLoading , error]
}

export default useDeleteStudent