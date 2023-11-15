import { useEffect, useState } from "react";
import useDeleteStudent from "../../../hooks/student/useDeleteStudent";
import useGetAllStudents from "../../../hooks/student/useGetAllStudents";
import Loader from "../shared/Loader";
import StudentModal from "../shared/StudentModal";

const CheckStudents = () => {
  let content;
  const [fetchStart, data, isLoading1, error1] = useGetAllStudents();
  const [deleteStudent, response, isLoading2, error2] = useDeleteStudent();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editDataId, setEditDataId] = useState('')

  useEffect(() => {
    if (response) {
      console.log(response);

      fetchStart();
    }
  }, [response]);

  
  if (isLoading1 || isLoading2) {
    return (content = <Loader></Loader>);
  }



  const handleDeleteStudent = async (id) => {
    const res = await deleteStudent(id);
  };

  content = (
    <div className="overflow-x-auto overflow-y-auto">
      <div className="relative">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Img</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Father's name</th>
              <th className="px-4 py-2">Mother's name</th>
              <th className="px-4 py-2">DOB</th>
              <th className="px-4 py-2">Village</th>
              <th className="px-4 py-2">District</th>
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Edit</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((student, index) => (
              <tr key={student?._id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">
                  <img src={student?.img_link} className="max-w-full h-auto" />
                </td>
                <td className="border px-4 py-2 text-sm">{student?.name}</td>
                <td className="border px-4 py-2 text-sm">{student?.father_name}</td>
                <td className="border px-4 py-2 text-sm">{student?.mother_name}</td>
                <td className="border px-4 py-2 text-sm">{student?.date_of_brth}</td>
                <td className="border px-4 py-2 text-sm">{student?.village}</td>
                <td className="border px-4 py-2 text-sm">{student?.district}</td>
                <td className="border px-4 py-2 text-sm">{student?.stnd_class}</td>
                <td className="border px-4 py-2 text-sm">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-blue-600"
                    onClick={() => {
                      setIsEditModalOpen(true);
                      setEditDataId(student?._id);
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
                      handleDeleteStudent(student?._id);
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
              <th className="px-4 py-2">Father's name</th>
              <th className="px-4 py-2">Mother's name</th>
              <th className="px-4 py-2">DOB</th>
              <th className="px-4 py-2">Village</th>
              <th className="px-4 py-2">District</th>
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Edit</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </tfoot>
        </table>
      </div>
      <StudentModal
        className="absolute"
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        editDataId={editDataId}
      />
    </div>
  );

  return content;
};

export default CheckStudents;
