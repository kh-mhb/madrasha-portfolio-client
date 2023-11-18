import { useEffect } from 'react'
import useGetAllTeacher from '../../../hooks/teacher/UseGetAllTeacher'
import useDeleteTeacher from '../../../hooks/teacher/useDeleteTeacher'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import toast from 'react-hot-toast'


const CheckTeacher = () => {
    let content
    const navigate = useNavigate()
    const [ fetchStart , data , isLoading , error ] = useGetAllTeacher()
    const [deleteTeacher , response , isLoading1 , error1] = useDeleteTeacher()


    useEffect(() => {
      if (response && response?.deletedCount) {
          toast.success(`Teacher deleted!`, {
          duration: 4000,
          position: 'top-right',
          style: {
            background: 'green',
            color: '#fff',
          },
          icon: '👏',
          iconTheme: {
            primary: '#000',
            secondary: '#fff',
          },
          // Aria
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },
      })
      fetchStart()
    }else if(response && !response?.deletedCount){
      toast.error('Failed', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: 'red',
          color: '#fff',
        },
        className: '',
        icon: '👏',
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    }
  }, [response])

    const handleDeleteTeacher = async(id) =>{
        await deleteTeacher(id)
    }


    const handleNavigate = (id,name) =>{
        navigate(`/adminLayout/editteacher/${id}/${name}`)
    }

    // console.log(data)
    content = (
        <div className="overflow-x-auto">
          <p className="my-1 text-blue-700 font-bold">Check teacher's panel!</p>
          <div class="flex justify-end mt-2">
            <button onClick={()=>navigate('/adminLayout/addteacher')}  className=" btn btn-sm bg-blue-600 text-white px-4 rounded">Add teacher</button>
          </div>
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
                      handleNavigate(teacher?._id,teacher?.name);
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