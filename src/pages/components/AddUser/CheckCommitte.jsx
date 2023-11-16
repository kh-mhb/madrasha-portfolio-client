import React from 'react'
import useGetAllMember from '../../../hooks/committe/useGetAllMember'
import { useNavigate } from 'react-router'
import useDeleteCommitteMember from '../../../hooks/committe/useDeleteCommitteMember'
import Loader from '../shared/Loader'
import { useEffect } from 'react'

const CheckCommitte = () => {
    let content
    const navigate = useNavigate()
    const [ getAllMembers , members , isLoading , error] = useGetAllMember()
    const [ deleteMember , deleteResponse , error1 ,isLoading1 ] = useDeleteCommitteMember()

    useEffect(()=>{
        getAllMembers()
    },[deleteResponse])


    if(isLoading || isLoading1){
        content = <Loader />
    }

    const handleDeleteMember = async(id) =>{
        await deleteMember(id)
    }
    



    // console.log(deleteResponse , error1 ,isLoading1)

    content = (
        <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">No</th>
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
                <td className="border px-4 py-2 text-sm">{member?.name}</td>
                <td className="border px-4 py-2 text-sm">{member?.email}</td>
                <td className="border px-4 py-2 text-sm">{member?.occupation}</td>
                <td className="border px-4 py-2 text-sm">{member?.number}</td>
                <td className="border px-4 py-2 text-sm">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-blue-600"
                    onClick={(e) => {
                      e.preventDefault()
                      navigate(`/adminLayout/editcommitte/${member?._id}`)
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
    )
  
    return content
}

export default CheckCommitte