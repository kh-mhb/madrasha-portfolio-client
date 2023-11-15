import { useEffect , useState } from "react"

const useInsertTeacher = () => {
  const [insertStresponse, setInsertStresponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const insertTeacher = async (insert_doc) => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:7071/teacher/insert', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(insert_doc),
      })

      // if (!response.ok) {
      //   throw new Error(`HTTP error! Status: ${response.status}`)
      // }

      const data = await response.json()
      setInsertStresponse(data)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

//   useEffect(() => {
//   }, [insertStresponse, isLoading, error]);

  return [insertTeacher, insertStresponse , isLoading , error]
}

export default useInsertTeacher