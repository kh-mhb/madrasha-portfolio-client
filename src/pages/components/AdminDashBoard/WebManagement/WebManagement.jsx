import { useEffect } from "react";
import useGetAllEditorial from "../../../../hooks/auth/useGetAllEditorial";
import useDeleteEditorials from "../../../../hooks/auth/useDeleteEditorials";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useUserdata from "../../../../hooks/auth/useUserdata";
import useCheckAdmin from "../../../../hooks/auth/useCheckAdmin";
import Loader from "../../shared/Loader";


const WebManagement = () => {
    let content
    const navigate = useNavigate()
    const { u_email, u_role } = useUserdata()
    const [ checkWebAdmin , isAdminFound , admin_e ] = useCheckAdmin()
    const [ getAllEditorials , editorials , isLoading , error] = useGetAllEditorial()
    const [ deleteEditorialsMember , deleteResponse , error1 , isLoading1 ] = useDeleteEditorials()


    useEffect(() => {
        if(isLoading){
            content = <Loader/>
        }
    },[])

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
        getAllEditorials()
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
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },
        });
      }
    }, [deleteResponse])


    const handleDelete = async (id) =>{
        const present = editorials.find(editorial => editorial._id === id)
        if(present.role === 'admin'){
            toast.success(`Admin can't be deleted!`, {
                duration: 4000,
                position: 'top-right',
                style: {
                  background: 'red',
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
        }else{
            await deleteEditorialsMember(id)
        }
    }

    const handleNavigate = (id,email) =>{
        navigate(`/adminLayout/editmanagement/${id?id:'-'}/${email?email:'-'}`)
    }


    content = (
        <div className="mt-9 px-2 w-full px-1 mx-auto absolute overflow-x-hidden lg:w-full lg:relative lg:mx-auto">
            <div className="flex justify-between items-center mt-2 mb-2">
                <h2 className='text-blue-900 font-bold font-2'>Check editorial panel!</h2>
                <button onClick={()=>navigate('/adminLayout/addeditorials')}  className="btn btn-sm bg-blue-600 text-white rounded">Add editorials</button>
            </div>
            <div className="overflow-x-auto">
                <div className="table-container mt-8" style={{ maxHeight: "600px", overflowY: "auto" }}>
                    <table className="table-auto w-full border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">No</th>
                                    <th className="px-4 py-2">Email</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Number</th>
                                    <th className="px-4 py-2">Role</th>
                                    <th className="px-4 py-2">Edit</th>
                                    <th className="px-4 py-2">Delete</th>
                                </tr>
                            </thead>
                
                            <tbody>
                                {editorials?.map((editorial, index) => (
                                <tr className={u_email == editorial?.email?'bg-green-600 text-white':''} key={editorial?._id}>
                                    <td className="border px-4 py-2">{index + 1}</td>
                                    <td className="border px-4 py-2 text-sm">{editorial?.email}</td>
                                    <td className="border px-4 py-2 text-sm">{editorial?.name}</td>
                                    <td className="border px-4 py-2 text-sm">{editorial?.number}</td>
                                    <td className="border px-4 py-2 text-sm">{editorial?.role}</td>
                                    <td className="border px-4 py-2 text-sm">
                                        <button
                                            className="bg-blue-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-blue-600"
                                            // disabled={editorial?.email !== u_email}
                                            onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigate(editorial?._id,editorial?.email);
                                        }}>
                                            Edit
                                        </button> 
                                        {/* handle admin role  */}
                                    </td>
                                    <td className="border px-4 py-2 text-sm">
                                        <button
                                            className={`${u_role !== 'admin'? 'bg-red-100': 'bg-red-500'} text-white px-2 py-1 rounded-md focus:outline-none hover:bg-red-600`}
                                            disabled={u_role !== 'admin'}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleDelete(editorial?._id);
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
                                    <th className="px-4 py-2">Email</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Number</th>
                                    <th className="px-4 py-2">Role</th>
                                    <th className="px-4 py-2">Edit</th>
                                    <th className="px-4 py-2">Delete</th>
                                </tr>
                            </tfoot>
                    </table>
                </div>
            </div>
            {u_role === 'inactive' && <p className="font-bold text-red-700 text-sm">You can't edit or add member</p>}
            {u_role === 'inactive' && <p className="font-bold text-red-700 text-sm">Wait for admin confirmation</p>}
        </div>
    )
    return content
}

export default WebManagement