import { jwtDecode } from "jwt-decode"
import { useState, useEffect } from "react"

const useUserdata = () => {
    const [loading, setLoading] = useState(true)
    const [u_email, setU_email] = useState('')
    const [u_role, setU_role] = useState('')

    const checkLocalStorage = () => {
        const token = localStorage.getItem('access_token')
        try {
            const decoded = jwtDecode(token)
            if (Date.now() >= decoded.exp * 1000) {
                localStorage.removeItem('access_token')
                setU_email('')
                setU_role('')
            } else {
                const { email, role } = decoded.data
                setU_email(email)
                setU_role(role)
            }
        } catch (error) {
            localStorage.removeItem('access_token')
            setU_email('')
            setU_role('')
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        checkLocalStorage()
    }, [])

    const forceCheckLocalStorage = () => {
        setLoading(true)
        checkLocalStorage()
    };

    return { loading, u_email, u_role, forceCheckLocalStorage, setU_email, setU_role }
}

export default useUserdata

// import { jwtDecode } from "jwt-decode"
// import { useState, useEffect } from "react"

// const useUserdata = () => {
//     const [loading, setLoading] = useState(true)
//     const [u_email, setU_email] = useState('')
//     const [u_role, setU_role] = useState('')

//     const checkLocalStorage = () => {
//         const token = localStorage.getItem('access_token')

//         try {
//             const decoded = jwtDecode(token);
//             const { email, role } = decoded.data;
//             console.log(Date.now() >= (decoded.exp)*1000)
//             setU_email(email)
//             setU_role(role)
//         } catch (error) {
//             setU_email('')
//             setU_role('')
//         } finally {
//             setLoading(false)
//         }
//     };

//     useEffect(() => {
//         checkLocalStorage()
//     }, [u_email, u_role])

//     const forceCheckLocalStorage = () => {
//         setLoading(true)
//         checkLocalStorage()
//     };

//     return { loading, u_email, u_role, forceCheckLocalStorage , setU_email , setU_role }
// };

// export default useUserdata

// new one 






















// import { jwtDecode } from "jwt-decode";
// import { useState, useEffect } from "react";

// const useUserdata = () => {
//     const [loading, setLoading] = useState(true)
//     const [u_email, setU_email] = useState('')
//     const [u_role, setU_role] = useState('')

//     const checkLocalStorage = async() => {
//         const token = localStorage.getItem('access_token')
//         try {
//             const decoded = jwtDecode(token)
//             if(decoded.data){
//                 const response = await fetch(`https://server-null.vercel.app/auth/single/${decoded.data.email}/${decoded.data.role}`)
//                 const res = await response.json()
//                 console.log(res)
//                 if(response.ok) {
//                     const { email, role } = decoded.data
//                     setU_email(email)
//                     setU_role(role)
//                 } else {
//                     console.error('Failed to fetch user data:', response.statusText)
//                     localStorage.removeItem('access_token')
//                     setU_email('')
//                     setU_role('')
//                 }
//             }
//         } catch (error) {
//             console.error('Error decoding JWT or fetching user data:', error)
//             localStorage.removeItem('access_token')
//             setU_email('')
//             setU_role('')
//         } finally {
//             setLoading(false)
//         }
//     };

//     useEffect(() => {
//         checkLocalStorage()
//     }, [])

//     const forceCheckLocalStorage = () => {
//         setLoading(true)
//         checkLocalStorage()
//     }

//     return { loading, u_email, u_role, forceCheckLocalStorage, setU_email, setU_role }
// };

// export default useUserdata