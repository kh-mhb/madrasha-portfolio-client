import { jwtDecode } from "jwt-decode"
import { useState, useEffect } from "react"

const useUserdata = () => {
    const [loading, setLoading] = useState(true)
    const [u_email, setU_email] = useState('')
    const [u_role, setU_role] = useState('')

    const checkLocalStorage = () => {
        const token = localStorage.getItem('access_token')

        try {
            const decoded = jwtDecode(token);
            const { email, role } = decoded.data;
            
            setU_email(email)
            setU_role(role)
        } catch (error) {
            // console.error('Error decoding JWT token:', error);
            setU_email('')
            setU_role('')
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        checkLocalStorage()
    }, [u_email, u_role])

    const forceCheckLocalStorage = () => {
        setLoading(true)
        checkLocalStorage()
    };

    return { loading, u_email, u_role, forceCheckLocalStorage , setU_email , setU_role }
};

export default useUserdata