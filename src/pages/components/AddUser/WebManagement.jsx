import { useEffect } from "react";
import useGetAllEditorial from "../../../hooks/auth/useGetAllEditorial";
import Loader from "../shared/Loader";
import useDeleteEditorials from "../../../hooks/auth/useDeleteEditorials";


const WebManagement = () => {
    const [ getAllEditorials , editorials , isLoading , error] = useGetAllEditorial()
    const [ deleteEditorialsMember , deleteResponse , error1 , isLoading1 ] = useDeleteEditorials()
    let content

    useEffect(() => {
        if(deleteResponse) {    
            getAllEditorials();
        }
    }, [deleteResponse]);


    if(isLoading || isLoading1){
        content = <Loader />
    }

    const handleDelete = async (id) =>{

        await deleteEditorialsMember(id)
    }
    // console.log(deleteResponse)


    content = (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
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
                    <tr key={editorial?._id}>
                        <td className="border px-4 py-2">{index + 1}</td>
                        {/* <td className="border px-4 py-2">
                        <img src={editorial?.img_link}  className="max-w-full h-auto" />
                        </td> */}
                        <td className="border px-4 py-2 text-sm">{editorial?.email}</td>
                        <td className="border px-4 py-2 text-sm">{editorial?.name}</td>
                        <td className="border px-4 py-2 text-sm">{editorial?.number}</td>
                        <td className="border px-4 py-2 text-sm">{editorial?.role}</td>
                        <td className="border px-4 py-2 text-sm">
                            <button
                                className="bg-blue-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-blue-600"
                                onClick={(e) => {
                                e.preventDefault();
                                handleNavigate(editorial?._id);
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
    )
    return content
}

export default WebManagement