import { useEffect } from "react"
import useUserdata from "../hooks/auth/useUserdata"
import { Navigate, useLocation } from "react-router"
import Loader from "../pages/components/shared/Loader"


const RequireAuth = ({ children }) => {
    const {loading ,u_email , u_role , forceCheckLocalStorage} = useUserdata()
    const pathname = useLocation()

    useEffect(() => {
      if (!loading && u_email !== null && u_role !== null) {
        forceCheckLocalStorage();
      }
    }, [loading, u_email, u_role, forceCheckLocalStorage])

    // console.log(u_email,u_role)
    return loading ? (
        <Loader /> 
      ) : u_email && u_role ? (
        children
      ) : (
        <Navigate to="/login" state={{ path: pathname }} replace />
      )
}

export default RequireAuth