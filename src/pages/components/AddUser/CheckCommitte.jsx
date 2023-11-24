import React from 'react'
import useGetAllMember from '../../../hooks/committe/useGetAllMember'
import { useNavigate } from 'react-router'
import useDeleteCommitteMember from '../../../hooks/committe/useDeleteCommitteMember'
import Loader from '../shared/Loader'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

const CheckCommitte = () => {
    let content
    const navigate = useNavigate()
    const [ getAllMembers , members , isLoading , error] = useGetAllMember()
    const [ deleteMember , deleteResponse , error1 ,isLoading1 ] = useDeleteCommitteMember()


    useEffect(() => {
        if(deleteResponse && deleteResponse?.deletedCount) {
            toast.success(`Member deleted!`, {
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
        getAllMembers()
      }else if(deleteResponse && !deleteResponse?.deletedCount){
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
    }, [deleteResponse])


    if(isLoading || isLoading1){
        content = <Loader />
    }

    const handleDeleteMember = async(id) =>{
        await deleteMember(id)
    }



    content = (
        <div className="mt-9  w-11/12 mx-auto absolute overflow-x-hidden lg:w-full lg:relative lg:mx-auto">
          <div className="flex justify-between items-center mt-2 mb-2">
            <h2 className='text-blue-900 font-bold font-2'>Check all committe members</h2>
            <button onClick={()=>navigate('/adminLayout/addcommitte')}  className="btn btn-sm bg-blue-600 text-white rounded">Add member</button>
          </div>
          <div className='overflow-x-auto ml-2'>
            <div className="table-container mt-8" style={{ maxHeight: "600px", overflowY: "auto" }}>
              <table className="table-auto w-full border border-gray-300">
                <thead>
                  <tr>
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Occupation</th>
                    <th className="px-4 py-2">Number</th>
                    <th className="px-4 py-2">Edit</th>
                    <th className="px-4 py-2">Delete</th>
                  </tr>
                </thead>
        
                <tbody>
                  {members?.map((member, index) => (
                    <tr key={member?._id}>
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-4 py-2"><img src={member?.img_link} className="w-20 h-12" /></td>
                      <td className="border px-4 py-2 text-sm">{member?.name}</td>
                      <td className="border px-4 py-2 text-sm">{member?.email}</td>
                      <td className="border px-4 py-2 text-sm">{member?.occupation}</td>
                      <td className="border px-4 py-2 text-sm">{member?.number}</td>
                      <td className="border px-4 py-2 text-sm">
                        <button
                          className="bg-blue-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-blue-600"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(`/adminLayout/editcommitte/${member?._id}/${member?.email? member?.email : '-'}`)
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td className="border px-4 py-2 text-sm">
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-red-600"
                          onClick={(e) => {
                            e.preventDefault()
                            handleDeleteMember(member?._id)
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
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Occupation</th>
                    <th className="px-4 py-2">Number</th>
                    <th className="px-4 py-2">Edit</th>
                    <th className="px-4 py-2">Delete</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
      </div>
    )
  

    return content
}

export default CheckCommitte