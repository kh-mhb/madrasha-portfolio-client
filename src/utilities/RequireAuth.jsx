import { useEffect } from "react"
import useUserdata from "../hooks/auth/useUserdata"
import { Navigate, useLocation } from "react-router"
import Loader from "../pages/components/shared/Loader"


const RequireAuth = ({ children }) => {
    const {loading ,u_email , u_role} = useUserdata()
    const pathname = useLocation()

    console.log(u_email,u_role,"inside require auth")
    return loading ? (
        <Loader /> 
      ) : u_email && u_role ? (
        children
      ) : (
        <Navigate to="/login" state={{ path: pathname }} replace />
      );
    //   return children
}

export default RequireAuth