import { useEffect, useState } from "react";
import useInsertStudent from "../../../hooks/student/useInsertStudent";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const AddStudent = () => {
  const navigate = useNavigate()
  const [insertStudent, insertStresponse, isLoading, error] = useInsertStudent()
  const [addedstdnt,setAddedstdnt] = useState(0)
  const [studentData,setStudentData] = useState([{
    name:'',
    father_name:'',
    mother_name:'',
    date_of_brth:'',
    village:'',
    district:'',
    stnd_class:'',
    img_link:'',
  },])


  console.log(insertStresponse)

  useEffect(() => {
      if (insertStresponse && insertStresponse?.acknowledged) {
          toast.success(`Total ${addedstdnt+1} student/students added!`, {
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
    }else if(insertStresponse && (!insertStresponse?.acknowledged || insertStresponse?.message==='Unauthorized')){
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
  }, [insertStresponse])



  const handleAddField = (e) => {
    e.preventDefault()
    setAddedstdnt(addedstdnt+1)
    setStudentData([...studentData, {
      name:'',
      father_name:'',
      mother_name:'',
      date_of_brth:'',
      village:'',
      district:'',
      stnd_class:'',
      img_link:'',
    }]);
  }

  const handleFieldChange = (index, key, newValue) => {
    const updatedFields = [...studentData]
    updatedFields[index][key] = newValue
    setStudentData(updatedFields)
  }



  const handleStudentDataSubmit = async(e) =>{
    e.preventDefault()
    
    await insertStudent(studentData)

    setStudentData([{
      name:'',
      father_name:'',
      mother_name:'',
      date_of_brth:'',
      village:'',
      district:'',
      stnd_class:'',
      img_link:'',
    },])
  }


  return (
    <div className="p-3 bg-slate-300 my-7 w-11/12 lg:w-3/4  mx-auto">
      <h3 className="text-center font-semibold text-2xl">Add Student</h3>
      <div className="w-full mx-auto">
        <form className="mt-3 bg-slate-100 d-flex  flex-wrap">
          
        {studentData.map((field, index) => (
        
          <div key={index}>
            <p className="my-3 text-orange-600">Student No:{index+1}</p>
              <input
                type="text"
                placeholder="Name"
                className="w-11/12 lg:w-1/3 mx-auto text-gray-700 text-sm font-bold  py-2 lg:mx-3 lg:pl-2  border-b-2"
                value={field.name}
                onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
              />
              <input
                type="text"
                placeholder="father's name"
                className="w-11/12 lg:w-1/3 mx-auto text-gray-700 text-sm font-bold  py-2 lg:mx-3 lg:pl-2 border-b-2 mt-2"
                value={field.father_name}
                onChange={(e) => handleFieldChange(index, 'father_name', e.target.value)}
              />
              <input
                type="text"
                placeholder="mother's name"
                className="w-11/12 lg:w-1/3 mx-auto text-gray-700 text-sm font-bold  py-2 lg:mx-3 lg:pl-2 border-b-2 mt-2"
                value={field.mother_name}
                onChange={(e) => handleFieldChange(index, 'mother_name', e.target.value)}
              />
              <input
                type="date"
                placeholder="date of birth"
                className="w-11/12 lg:w-1/3 mx-auto text-gray-700 text-sm font-bold  py-2 lg:mx-3 lg:pl-2 border-b-2 mt-2"
                value={field.date_of_brth}
                onChange={(e) => handleFieldChange(index, 'date_of_brth', e.target.value)}
              />
              <input
                type="text"
                placeholder="village"
                className="w-11/12 lg:w-1/3 mx-auto text-gray-700 text-sm font-bold  py-2 lg:mx-3 lg:pl-2 border-b-2 mt-2"
                value={field.village}
                onChange={(e) => handleFieldChange(index, 'village', e.target.value)}
              />
              <input
                type="text"
                placeholder="district"
                className="w-11/12 lg:w-1/3 mx-auto text-gray-700 text-sm font-bold  py-2 lg:mx-3 lg:pl-2 border-b-2 mt-2"
                value={field.district}
                onChange={(e) => handleFieldChange(index, 'district', e.target.value)}
              />
              <input
                type="text"
                placeholder="class"
                className="w-11/12 lg:w-1/3 mx-auto text-gray-700 text-sm font-bold  py-2 lg:mx-3 lg:pl-2 border-b-2 mt-2"
                value={field.stnd_class}
                onChange={(e) => handleFieldChange(index, 'stnd_class', e.target.value)}
              />
              <input
                type="file"
                placeholder="img_link"
                className="w-11/12 lg:w-1/3 mx-auto text-gray-700 text-sm font-bold  py-2 lg:mx-3 lg:pl-2 border-b-2 mt-2"
                onChange={(e) => handleFieldChange(index, 'img_link', e.target.value)}
              />
            </div>
        
        ))}


            <button onClick={handleAddField} className="btn btn-sm mx-3 my-4 bg-blue-300 text-white">Add field</button>
            <button onClick={handleStudentDataSubmit} className="btn btn-sm bg-blue-700 text-white">Submit</button>
        </form>
        <div className="flex justify-end mt-2">
          <button onClick={()=>navigate('/adminLayout/checkstudent')}  className="btn btn-sm bg-blue-600 text-white py-2 px-4 rounded">Check All</button>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;