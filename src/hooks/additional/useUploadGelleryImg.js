import { useState } from 'react'

const useUploadGelleryImg = () => {
    const [resp,setResp] = useState()
    const insertImage = async (insert_doc) => {
        const token = localStorage.getItem('access_token')
          try {
              const response = await fetch('http://localhost:7071/auth/image/upload',{
                  method: 'PUT',
                  headers: {
                      'Content-Type': 'application/json',
                      'authorization': `Bearer ${token}`
                  },
                  body: JSON.stringify(insert_doc),
              })
      
              const data = await response.json()
              console.log(data)
              setResp(data)
          } catch (err) {
              setError(err)
          } 
      }
        return [ resp , insertImage ]
}

export default useUploadGelleryImg