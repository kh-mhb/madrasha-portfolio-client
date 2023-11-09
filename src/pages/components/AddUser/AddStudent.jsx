import React, { useState } from "react";

const AddStudent = () => {
  const [formArray, setFormArray] = useState([
    {
      name: "",
      fatherName: "",
      motherName: "",
      birthDate: "",
      village: "",
      district: "",
      studentClass: "",
      image: null,
    },
  ]);

  const handleInputChange = (e, formIndex) => {
    const { name, value } = e.target;
    setFormArray((prevFormArray) => {
      const updatedFormArray = [...prevFormArray];
      updatedFormArray[formIndex] = {
        ...updatedFormArray[formIndex],
        [name]: value,
      };
      return updatedFormArray;
    });
  };

  const handleFileChange = (e, formIndex) => {
    const imageFile = e.target.files[0];
    setFormArray((prevFormArray) => {
      const updatedFormArray = [...prevFormArray];
      updatedFormArray[formIndex] = {
        ...updatedFormArray[formIndex],
        image: imageFile,
      };
      return updatedFormArray;
    });
  };

  const handleAddForm = () => {
    setFormArray((prevFormArray) => [
      ...prevFormArray,
      {
        name: "",
        fatherName: "",
        motherName: "",
        birthDate: "",
        village: "",
        district: "",
        studentClass: "",
        image: null,
      },
    ]);
  };

  const handleSubmitAll = (e) => {
    e.preventDefault();
    console.log("All form data submitted:", formArray);
  };

  return (
    <div className="container mx-auto">
      <h3 className="text-center font-semibold text-2xl my-4">Add Student</h3>
      <div className="max-w-4xl mx-auto gap-y-4">
        {formArray.map((formData, index) => (
          <form
            key={index}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmitAll}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={`name-${index}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id={`name-${index}`}
                  name={`name-${index}`}
                  value={formData.name}
                  onChange={(e) => handleInputChange(e, index)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={`fatherName-${index}`}
                >
                  Father Name
                </label>
                <input
                  type="text"
                  id={`fatherName-${index}`}
                  name={`fatherName-${index}`}
                  value={formData.fatherName}
                  onChange={(e) => handleInputChange(e, index)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={`motherName-${index}`}
                >
                  Mother Name
                </label>
                <input
                  type="text"
                  id={`motherName-${index}`}
                  name={`motherName-${index}`}
                  value={formData.motherName}
                  onChange={(e) => handleInputChange(e, index)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={`birthDate-${index}`}
                >
                  Birth Date
                </label>
                <input
                  type="text"
                  id={`birthDate-${index}`}
                  name={`birthDate-${index}`}
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange(e, index)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={`studentClass-${index}`}
                >
                  Class
                </label>
                <input
                  type="text"
                  id={`studentClass-${index}`}
                  name={`studentClass-${index}`}
                  value={formData.studentClass}
                  onChange={(e) => handleInputChange(e, index)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={`image-${index}`}
                >
                  Image
                </label>
                <input
                  type="file"
                  id={`image-${index}`}
                  name={`image-${index}`}
                  onChange={(e) => handleFileChange(e, index)}
                  className="w-full"
                />
              </div>
            </div>
          </form>
        ))}
        <div className="flex justify-between">
          <button className="btn btn-primary" onClick={handleAddForm}>
            Add Another Form
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmitAll}
          >
            Submit All Forms
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
