import './Gallery1.css'
import img1 from '../../../assets/pillar/img1.jpeg';
import img2 from '../../../assets/pillar/img2.jpeg';
import img3 from '../../../assets/pillar/img3.jpeg';
import { useState } from 'react';
import useUserdata from '../../../hooks/auth/useUserdata';
import useImageUpload from '../../../hooks/additional/useImageUpload';
import useUploadGelleryImg from '../../../hooks/auth/useUploadGelleryImg';

const Gallery = () => {
  const { u_email, u_role } = useUserdata()
  const [galleryData, setGalleryData] = useState({ img_link: '', title: '' })
  const  [ resp , insertAdmin ] = useUploadGelleryImg()
  const [ uploadImage ] = useImageUpload()
  const images = [
    {image:img1, title:'bro code'},
    {image:img2, title:'bro code'},
    {image:img3, title:'bro code'},
    {image:img3, title:'bro code'},
    {image:img3, title:'bro code'},
    {image:img3, title:'bro code'},
    {image:img3, title:'bro code'},
  ]
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
          }));
        } catch (error) {
          console.error('Error uploading image:', error.message);
        }
      }
    } else {
      setGalleryData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await insertAdmin(galleryData)
    setGalleryData({ img_link: '', title: '' });
  };

  return (
    <div className="container">
        {(u_email &&(u_role==='admin'||u_role==='editor'))&&<form onSubmit={handleSubmit}>
          <h1 className='text-gray-50 font-bold'>Upload Image For Gellery</h1>
              <input
                type="file"
                id="imgLinkInput"
                name="img_link"
                placeholder='Upload image for gellery'
                value={galleryData.img_link}
                onChange={handleChange}
              />
              <input
                type="text"
                id="titleInput"
                name="title"
                placeholder='Image title'
                value={galleryData.title}
                onChange={handleChange}
              />
              <button className='btn btn-sm bg-gray-100 border-none text-white-900' type="submit">Submit</button>
          </form>}
        <ul className="image-gallery">
          
          {images.map((image, index) => (
                <li key={index}>
                  <img src={image.image} alt="" />
                  <div className="overlay"><span>{image.title}</span></div>
              </li>
          ))}
        </ul>
    </div>
  )
}

export default Gallery;