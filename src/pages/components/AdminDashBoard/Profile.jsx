import { useNavigate } from "react-router-dom"
import useUserdata from "../../../hooks/auth/useUserdata"


const Profile = () => {
  let content
  const navigate = useNavigate()
  const { u_email, u_role } = useUserdata()

  content = (
    <div className="card w-96 mx-auto top-24 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Your profile</h2>
        <p>Your Name: {u_email}</p>
        <p>Your Role: {u_role}</p>
        <div className="card-actions justify-end">
          <button onClick={() => navigate('/adminLayout/checkeditorials')} className="btn btn-sm">Edit</button>
        </div>
      </div>
  </div>
  )
  
  return content
}

export default Profile;
