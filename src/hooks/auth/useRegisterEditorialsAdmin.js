import { useState } from "react";


const useRegisterEditorialsAdmin = () => {
    const [insertRegResponse,setInsertRegResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const insertAdmin = async (insert_doc) => {
      setIsLoading(true);
  
        try {
            const response = await fetch('http://localhost:7071/auth/create',{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(insert_doc),
            })
    
            const data = await response.json();

            setInsertRegResponse(data)
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }
      return [insertAdmin, insertRegResponse , isLoading , error]
}

export default useRegisterEditorialsAdmin