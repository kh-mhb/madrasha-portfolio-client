import { useParams } from "react-router-dom"


const EditManagement = () => {
    let content
    const { id , p_email} = useParams()

    content = (
        <div>
            {id} ,{p_email}
        </div>
    )
    return content
}

export default EditManagement