import React from 'react'
import useGetAllMember from '../../../hooks/committe/useGetAllMember'

const CheckCommitte = () => {
    let content
    const [ getAllMembers , members , isLoading , error] = useGetAllMember()


    console.log(members)

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
            {members?.map((member, index) => (
              <tr key={member?._id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2 text-sm">{member?.name}</td>
                <td className="border px-4 py-2 text-sm">{member?.email}</td>
                <td className="border px-4 py-2 text-sm">{member?.position}</td>
                <td className="border px-4 py-2 text-sm">{member?.number}</td>
                <td className="border px-4 py-2 text-sm">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-blue-600"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(member?._id);
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
                      handleDeleteTeacher(member?._id);
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

export default CheckCommitte