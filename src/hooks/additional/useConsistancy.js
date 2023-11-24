import { jwtDecode } from "jwt-decode";

const useConsistancy = () => {
    const trackConsistency = async() =>{
        const token = localStorage.getItem('access_token')
        const decoded = jwtDecode(token)
        if(decoded.data.email && decoded.data.role){
            const response = await fetch(`https://server-null.vercel.app/auth/single/${decoded.data.email}/${decoded.data.role}`)
            if(!response.ok){
                localStorage.removeItem('access_token')
            }
        }
    }
    return [trackConsistency]
}

export default useConsistancy