import { useEffect } from 'react'
import useGetAllTeacher from '../../../hooks/teacher/UseGetAllTeacher'
import useDeleteTeacher from '../../../hooks/teacher/useDeleteTeacher'
import { useNavigate } from 'react-router'
import { useState } from 'react'


const CheckTeacher = () => {
    let content
    const navigate = useNavigate()
    const [ fetchStart , data , isLoading , error ] = useGetAllTeacher()
    const [deleteTeacher , response , isLoading1 , error1] = useDeleteTeacher()

    useEffect(() => {
        if(response?.deletedCount === 1) {    
          fetchStart();
        }
      }, [response?.deletedCount]);

    const handleDeleteTeacher = (id) =>{
        deleteTeacher(id)
        window.location.reload()
    }


    const handleNavigate = (id) =>{
        navigate(`/adminLayout/editteacher/${id}`)
    }

    // console.log(data)
    content = (
        <div className="overflow-x-hidden 	">
            <div className="">
                <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Img</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data?.map((teacher, index) => (
                    <tr key={teacher?._id}>
                        <th>{index + 1}</th>
                        <th>
                        <img src={teacher?.img_link} />
                        </th>
                            <th className={{ fontSize: "10px" }}>{teacher?.name}</th>
                            <td className={{ fontSize: "10px" }}>{teacher?.number}</td>
                        <td className={{ fontSize: "10px" }}>
                        <button
                            className="btn btn-sm"
                            onClick={(e) => {e.preventDefault() ;handleNavigate(teacher?._id)}}
                        >
                            Edit
                        </button>
                        </td>
                        <td className={{ fontSize: "10px" }}>
                        <button
                            className="btn glass text-red-700"
                            onClick={(e) => {
                                e.preventDefault();
                                handleDeleteTeacher(teacher?._id);
                            }}
                        >
                            Delete
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <th>No</th>
                        <th>Img</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
                </table>
            </div>
        </div>
    )
  
    return content
}

export default CheckTeacher