import React, { useEffect } from "react";
import { useState } from "react";
import useUpdateStudent from "../../../hooks/student/useUpdateStudent";
import useGetAllStudents from "../../../hooks/student/useGetAllStudents";
import toast from "react-hot-toast";
import Loader from "./Loader";

const StudentModal = ({ isEditModalOpen, setIsEditModalOpen , editDataId , fetchStart }) => {
  const [editStudent , response , isLoading , error] = useUpdateStudent()
  const [studentData,setStudentData] = useState({
    name:'',
    father_name:'',
    mother_name:'',
    date_of_brth:'',
    village:'',
    district:'',
    stnd_class:'',
    img_link:'',
  })

  useEffect(() => {
    if (response && response?.acknowledged) {
      toast.success('Edit successfull', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: 'green',
          color: '#fff',
        },
        icon: '👏',
        iconTheme: {
          primary: '#000',
          secondary: '#blue',
        },
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      fetchStart()
    }else if(response && !response?.acknowledged){
      toast.error('Failed to edit', {
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
          secondary: 'red',
        },
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    }
  }, [response])

  if(isLoading){
    return <Loader />
  }
  
  const handleFieldChange = (fieldName, value) => {
    setStudentData(prevData => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    await editStudent(studentData, editDataId);

    setStudentData({
        name: '',
        father_name: '',
        mother_name: '',
        date_of_brth: '',
        village: '',
        district: '',
        stnd_class: '',
        img_link: '',
    });

    setIsEditModalOpen(!isEditModalOpen);
}


  return (
      <div
        className={`${
          !isEditModalOpen
            ? "hidden"
            : "w-full mx-auto absolute mx-2 px-8 py-8 bg-gray-300 top-4"
        }`}
        style={{ maxHeight: '80vh', overflowY: 'auto' }}
        >
        <div className="flex justify-between mb-2 items-center">
          <h3 className="font-bold text-lg ">Student id: {editDataId}</h3>
          <button className="btn btn-sm bg-red-700 text-white" onClick={() => setIsEditModalOpen(!isEditModalOpen)}>
            X
          </button>
        </div>

        <div>
          <form className="bg-slate-100 w-full lg:w-1/2 mx-auto px-8 py-2">
            <div className="mb-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 p-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => handleFieldChange('name', e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="fatherName"
                className="block text-sm font-medium text-gray-700 p-2"
              >
                Father's Name
              </label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                onChange={(e) => handleFieldChange('father_name', e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="motherName"
                className="block text-sm font-medium text-gray-700 p-2"
              >
                Mother's Name
              </label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                onChange={(e) => handleFieldChange('mother_name', e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="studentClass"
                className="block text-sm font-medium text-gray-700 p-2"
              >
                Class
              </label>
              <input
                type="number"
                id="studentClass"
                name="studentClass"
                onChange={(e) => handleFieldChange('stnd_class', e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full p-2"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="village"
                className="block text-sm font-medium text-gray-700 p-2"
              >
                Village
              </label>
              <input
                type="text"
                id="village"
                name="village"
                onChange={(e) => handleFieldChange('village', e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full "
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="district"
                className="block text-sm font-medium text-gray-700 p-2"
              >
                District
              </label>
              <input
                type="text"
                id="district"
                name="district"
                onChange={(e) => handleFieldChange('district', e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700 p-2"
              >
                DOB
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                onChange={(e) => handleFieldChange('date_of_brth', e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="flex items-center justify-end mt-4">
              <button
                type="submit"
                onClick={handleUpdateSubmit}
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default StudentModal;
