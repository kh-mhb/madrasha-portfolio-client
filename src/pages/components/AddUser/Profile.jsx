import { useNavigate } from "react-router-dom"
import useUserdata from "../../../hooks/auth/useUserdata"


const Profile = () => {
  let content
  const navigate = useNavigate()
  const { u_email, u_role } = useUserdata()

  content = (
    <div className="card w-1/2 mx-auto bg-base-100 shadow-xl">
      <div className="card-body">
          <h2 className="card-title">Email- <span className="text-bold text-green-600">{u_email}</span></h2>
          <h2 className="card-title">Role- <span className="text-bold text-green-600">{u_role}</span></h2>
        <div className="card-actions justify-end">
          <button onClick={() => navigate('/adminLayout/checkeditorials')} className="btn btn-sm bg-blue-600 text-white">edit</button>
        </div>
      </div>
    </div>
  )
  
  return content
}

export default Profile;
