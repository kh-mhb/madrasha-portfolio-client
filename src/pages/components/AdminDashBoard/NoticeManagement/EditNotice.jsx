import React, { useEffect, useState } from 'react'
import Loader from '../../shared/Loader'
import useUpdateNotice from '../../../../hooks/notice/useUpdateNotice'
import toast from 'react-hot-toast'
import useImageUpload from '../../../../hooks/additional/useImageUpload'
import { useNavigate, useParams } from 'react-router-dom'

const EditNotice = () => {
    let content
    const {id} = useParams()
    const [updateNotice , message , response , error , isLoading] = useUpdateNotice()
    const [notice , setNotice] = useState({title: "",noticeBody: "",image:""})
    const [ imageUrl , imageDelUrl , uploadImage ] = useImageUpload()
    const navigate = useNavigate()


    useEffect(() => {
        if ((response && response?.acknowledged) && message) {
          toast.success(`${message}`, {
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
        }else if((response && !response?.acknowledged) || message){
          toast.error(`Failed. ${message}`, {
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

      useEffect(()=>{
        content = <Loader />
      },[])
    
    const handleFieldChange = async(e) => {
        const { name , value , files} = e.target
        if (name === 'image' && files && files.length > 0) {
            const userConfirmed = window.confirm('Are you sure you want to proceed?')
    
            if (userConfirmed) {
              try {
                  const imageData = await uploadImage(files[0]);
                  setNotice((prevData) => ({
                    ...prevData,
                    [name]: imageData.display_url,
                  }))
                } catch (error) {
                  console.error('Error uploading image:', error.message)
                }
              }
            }else {
                setNotice((prevData) => ({
                  ...prevData,
                  [name]: value,
                }))
            }
    }


    const handleSubmit = async(e) =>{
        e.preventDefault()
        await updateNotice(id,notice)
        setNotice({title: "",noticeBody: "",image:""})
    }


    content = (
        <div className=" p-3 bg-slate-300 my-7 w-11/12 lg:w-1/2  mx-auto">
            <div className="flex justify-between items-center mt-2 mb-2">
                <p className="my-1 text-blue-800 font-bold">Add member to the editorials body!</p>
                <button onClick={()=>navigate('/adminLayout/checknotice')}  className="btn btn-sm bg-blue-600 text-white rounded">Check notices</button>
            </div> 
            {/* <p className="my-1 text-green-700" >{emptyFieldError}</p> */}
            <form onSubmit={handleSubmit} className="bg-slate-200 p-6 rounded shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Title
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="title"
                        value={notice.title}
                        onChange={handleFieldChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">
                    Full Notice
                    </label>
                    <textarea
                        type="text"
                        id="number"
                        name="noticeBody"
                        value={notice.noticeBody}
                        onChange={handleFieldChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">
                    Image
                    </label>
                    <input
                        type="file"
                        id="number"
                        name="image"
                        disabled={notice.image !== ''}
                        onChange={handleFieldChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-sm bg-blue-600 text-white px-4 rounded-md hover:bg-green-600 focus:outline-none"
                >
                    Submit
                </button>
            </form>
        </div>
    )
 
    
    return content
}

export default EditNotice