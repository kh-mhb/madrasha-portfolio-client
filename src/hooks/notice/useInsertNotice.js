import { useState } from "react"

const useInsertNotice = () => {
    const [message,setMessage] = useState(null)
    const [response,setResponse] = useState(null)
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
  
    const insertNotice = async(insert_doc) =>{
      console.log(insert_doc)
        const token = localStorage.getItem('access_token')
        setIsLoading(true)
        try{
            const response = await fetch('https://server-null.vercel.app/notice/insert', {
            // const response = await fetch('http://localhost:7071/notice/insert', {
                method: 'PUT',
                headers: {
                  'Content-Type' : 'application/json',
                  'authorization': `Bearer ${token}`
                },
                body: JSON.stringify(insert_doc),
            })
            const data = await response.json()
            console.log(data)
            setMessage(data?.message)
            setResponse(data?.response)
        }catch(err) {
          setError(err)
        }finally {
          setIsLoading(false)
        }
    }

    return [insertNotice , message , response , error , isLoading]
}

export default useInsertNotice