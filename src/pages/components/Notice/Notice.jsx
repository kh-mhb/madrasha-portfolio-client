import React from 'react'
import useGetAllNotices from '../../../hooks/notice/useGetAllNotices'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Notice = () => {
    let content
    const navigate = useNavigate()
    const [fetchNotices , notices , message , error , isLoading] = useGetAllNotices()

    useEffect(() => {
        if (!notices && !isLoading) {
            fetchNotices()
        }
      }, [fetchNotices, notices, isLoading])

    content = (
        <div className='' style={{ width: "96%", margin: " 0 auto" }}>
            <h1 className='text-gray-900 text-2xl'>Checkout all notices!</h1>
            <div className="overflow-x-auto">
              <div className="table-container" style={{ maxHeight: "80vh", overflowY: "auto" }}>
                  <table className="table-auto w-full border border-gray-300">
                  <thead>
                      <tr>
                      <th className="px-4 py-2">No</th>
                      <th className="px-4 py-2">Title</th>
                      <th className="px-4 py-2">Description</th>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Details</th>
                      </tr>
                  </thead>

                  <tbody>
                      {notices?.map((notice, index) => (
                      <tr key={notice?._id}>
                          <td className="border px-2 py-2">{index + 1}</td>
                          <td className="border px-2 py-2 text-sm">{notice?.title?.slice(0, 20)}.....</td>
                          <td className="border px-2 py-2 text-sm">{notice?.description?.slice(0, 30)}.....</td>
                          <td className="border px-2 py-2 text-sm text-green-900 font-bold">{notice?.date}</td>
                          <td className="border px-2 py-2 text-sm">
                              <button
                                  className="bg-blue-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-blue-600"
                                  onClick={() => navigate(`/noticedetails/${notice?._id}`)}
                              >
                                  Details
                              </button>
                          </td>
                      </tr>
                      ))}
                  </tbody>

                  <tfoot>
                      <tr>
                        <th className="px-4 py-2">No</th>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Details</th>
                      </tr>
                  </tfoot>
                  </table>
              </div>
            </div>
        </div>
    )
    return content
}

export default Notice