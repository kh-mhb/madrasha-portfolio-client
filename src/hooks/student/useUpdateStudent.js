import { useState } from "react"

const useUpdateStudent = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [response,setResponse] = useState(null)


    const editStudent = async(data) =>{

        setIsLoading(true)
        try{
            const updateRes = await fetch(`http://localhost:7071/student/edit`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })

            if(!updateRes.ok){
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            const res = await updateRes.json()
            setResponse(res)

        }catch(err){
            setError(err)
        }finally{
            setIsLoading(false)
        }
    }

    return [editStudent , response , isLoading , error]
}


export default useUpdateStudent