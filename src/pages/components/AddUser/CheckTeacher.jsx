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
        <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Img</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Number</th>
              <th className="px-4 py-2">Edit</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
  
          <tbody>
            {data?.map((teacher, index) => (
              <tr key={teacher?._id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">
                  <img src={teacher?.img_link}  className="max-w-full h-auto" />
                </td>
                <td className="border px-4 py-2 text-sm">{teacher?.name}</td>
                <td className="border px-4 py-2 text-sm">{teacher?.number}</td>
                <td className="border px-4 py-2 text-sm">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-blue-600"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(teacher?._id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td className="border px-4 py-2 text-sm">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-red-600"
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
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Img</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Number</th>
              <th className="px-4 py-2">Edit</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  
    return content
}

export default CheckTeacher