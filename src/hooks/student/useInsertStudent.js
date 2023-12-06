import { useEffect , useState } from "react"

const useInsertStudent = () => {
  const [insertStresponse, setInsertStresponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const insertStudent = async (insert_doc) => {
    const token = localStorage.getItem('access_token')
    setIsLoading(true)
      try{
        const response = await fetch('https://server-null.vercel.app/student/insert', {
            method: 'POST',
            headers: {
              'Content-Type' : 'application/json',
              'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(insert_doc),
        })
        if (!response.ok) {
          setInsertStresponse(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        setInsertStresponse(data)
      }catch(err) {
        setError(err)
      }finally {
        setIsLoading(false)
      }
  }

  return [insertStudent, insertStresponse , isLoading , error]
}

export default useInsertStudent;