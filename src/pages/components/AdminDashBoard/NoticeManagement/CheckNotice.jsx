import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetAllNotices from "../../../../hooks/notice/useGetAllNotices";
import Loader from "../../shared/Loader";
import useDeleteNotice from "../../../../hooks/notice/useDeleteNotice";
import { useEffect } from "react";
import toast from "react-hot-toast";


const CheckNotice = () => {
    let content
    const navigate = useNavigate()
    const [fetchNotices , notices , message , error , isLoading] = useGetAllNotices()
    const [ deleteNotice , response , delMessage , isLoadingDel , delError] = useDeleteNotice()


  useEffect(() => {
    if (response && response?.deletedCount === 1) {
      toast.success(`${delMessage}`, {
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
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      fetchNotices()
    }else if(response && !response?.deletedCount){
      toast.error('Failed', {
        duration: 4000,
        position: 'top-center',
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



    if(isLoading || isLoadingDel){
        content = <Loader />
    }

    const handleDeleteNotice = async(id) =>{
        await deleteNotice(id)
    }

    content = (
        <div className="mt-9  w-full px-1 mx-auto absolute lg:relative">
            <div className="flex justify-between mt-6">
                <h2 className='text-blue-900 font-bold font-2'>Check all notices</h2>
                <button onClick={()=>navigate('/adminLayout/addnotice')}  className="btn btn-sm bg-blue-600 text-white py-2 px-4 rounded">Add notice</button>
            </div>
            <div className="overflow-x-auto">
              <div className="table-container mt-8" style={{ maxHeight: "600px", overflowY: "auto" }}>
                  <table className="table-auto w-full border border-gray-300">
                  <thead>
                      <tr>
                      <th className="px-4 py-2">No</th>
                      <th className="px-4 py-2">Image</th>
                      <th className="px-4 py-2">Title</th>
                      <th className="px-4 py-2">Description</th>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Posted_by</th>
                      <th className="px-4 py-2">Edited_by(last)</th>
                      <th className="px-4 py-2">Edited(times)</th>
                      <th className="px-4 py-2">Edit</th>
                      <th className="px-4 py-2">Details</th>
                      <th className="px-4 py-2">Delete</th>
                      </tr>
                  </thead>

                  <tbody>
                      {notices?.map((notice, index) => (
                      <tr key={notice?._id}>
                          <td className="border px-2 py-2">{index + 1}</td>
                          <td className="border px-2 py-2">
                              <img src={notice?.file_url} className="w-16 h-8" />
                          </td>
                          <td className="border px-2 py-2 text-sm">{notice?.title?.slice(0, 20)}.....</td>
                          <td className="border px-2 py-2 text-sm">{notice?.description?.slice(0, 30)}.....</td>
                          <td className="border px-2 py-2 text-sm">{notice?.date}</td>
                          <td className="border px-2 py-2 text-sm">{notice?.posted_by}</td>
                          <td className="border px-2 py-2 text-sm">{notice?.edited_by}</td>
                          <td className="border px-2 py-2 text-sm">{notice?.edited}</td>
                          <td className="border px-2 py-2 text-sm">
                              <button
                                  className="bg-blue-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-blue-600"
                                  onClick={() => navigate(`/adminLayout/editnotice/${notice?._id}`)}
                              >
                                  Edit
                              </button>
                          </td>
                          <td className="border px-2 py-2 text-sm">
                              <button
                                  className="bg-blue-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-blue-600"
                                  onClick={() => navigate(`/noticedetails/${notice?._id}`)}
                              >
                                  Details
                              </button>
                          </td>
                          <td className="border px-2 py-2 text-sm">
                          <button
                              className="bg-red-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-red-600"
                              onClick={(e) => {
                                  e.preventDefault();
                                  handleDeleteNotice(notice?._id)
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
                      <th className="px-4 py-2">Title</th>
                      <th className="px-4 py-2">Description</th>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Posted_by</th>
                      <th className="px-4 py-2">Edited_by(last)</th>
                      <th className="px-4 py-2">Edited(times)</th>
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

export default CheckNotice