import { jwtDecode } from "jwt-decode"
import { useState } from "react"
import { useEffect } from "react"

const useUserdata = () => {
    const [loading, setLoading] = useState(true);
  const [u_email, setU_email] = useState('');
  const [u_role, setU_role] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    try {
      const decoded = jwtDecode(token);
      const { email, role } = decoded.data;
      
      setU_email(email);
      setU_role(role);
    } catch (error) {
      console.error('Error decoding JWT token:', error);
    } finally {
      setLoading(false)
    }
  }, []);

  return { loading, u_email, u_role };
}

export default useUserdata