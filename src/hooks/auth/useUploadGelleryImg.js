import { useState } from 'react'

const useUploadGelleryImg = () => {
    const [resp,setResp] = useState()
    const insertAdmin = async (insert_doc) => {
          try {
              const response = await fetch('http://localhost:7071/auth/image/upload',{
                  method: 'PUT',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(insert_doc),
              })
      
              const data = await response.json()
              setResp(data)
          } catch (err) {
              setError(err)
          } 
      }
        return [ resp , insertAdmin ]
}

export default useUploadGelleryImg