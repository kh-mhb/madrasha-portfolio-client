import './Gallery1.css'
import { useState } from 'react'
import useUserdata from '../../../hooks/auth/useUserdata'
import useImageUpload from '../../../hooks/additional/useImageUpload'
import useUploadGelleryImg from '../../../hooks/additional/useUploadGelleryImg'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import getAllImageFromDb from '../../../hooks/additional/getAllImageFromDb'
import useDeleteImageFromGallery from '../../../hooks/additional/useDeleteImageFromGallery'

const Gallery = () => {
  const { u_email, u_role } = useUserdata()
  const [ images , getAllImagesFromDb] = getAllImageFromDb()
  const [galleryData, setGalleryData] = useState({ img_link: '', title: '' })
  const [ resp , insertImage ] = useUploadGelleryImg()
  const [ deleteResponse , error , isLoading , deleteImage ] = useDeleteImageFromGallery()
  const [ imageUrl , imageDelUrl , uploadImage ] = useImageUpload()
  
  useEffect(()=>{
    getAllImagesFromDb()
  },[deleteResponse])

  useEffect(()=>{
      if(resp && resp?.acknowledged){
        toast.success(`Added successfully!`, {
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
    }else if(resp && !resp?.acknowledged){
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
        })
      }
  },[resp])
  
  
  useEffect(()=>{
      if(deleteResponse && deleteResponse?.deletedCount){
        toast.success(`Deleted!`, {
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
        })
      }
  },[resp])
  

  const handleChange = async (e) => {
    const { name, value, files } = e.target;
  
    if (name === 'img_link' && files && files.length > 0) {
      const userConfirmed = window.confirm('Are you sure you want to proceed?');

      if (userConfirmed) {
        try {
          const imageData = await uploadImage(files[0]);
          setGalleryData((prevData) => ({
            ...prevData,
            [name]: imageData.display_url,
          }))
        } catch (error) {
          console.error('Error uploading image:', error.message)
        }
      }
    } else {
      setGalleryData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    await insertImage(galleryData)
    setGalleryData({ img_link: '', title: '' })
  }

  const handleDelete = async(e,id) => {
    e.preventDefault()
    await deleteImage(id)
    console.log(id)
    setGalleryData({ img_link: '', title: '' })
  }
  // lg:text-6xl 
  return (
    <div className="container">
        {(u_email &&(u_role==='admin'||u_role==='editor'))&&
        <form className='gallery_form' onSubmit={handleSubmit}>
          <h1 className='text-gray-50 font-bold text-3xl lg:text-6xl mb-8'>Upload Image For Gellery</h1>
              
              <input
                type="file"
                name="img_link"
                className='gallery_input'
                onChange={handleChange}
              />
              <input
                type="text"
                name="title"
                className='gallery_input'
                placeholder='Image title'
                onChange={handleChange}
              />
              <button className='btn btn-sm bg-gray-100 border-none text-white-900' type="submit">Submit</button>
          </form>}
        <ul className="image-gallery">
          
          {images.map((image, index) => (
                <li key={index}>
                  <img src={image?.img_link} alt="" />
                  {(u_email &&(u_role==='admin'||u_role==='editor'))&&<button onClick={(e)=>handleDelete(e,image?._id)} className="btn btn-xs bg-red-500 text-red-50">Delete</button>}
                  <div className="overlay"><span>{image?.title}</span></div>
              </li>
          ))}
        </ul>
    </div>
  )
}

export default Gallery;