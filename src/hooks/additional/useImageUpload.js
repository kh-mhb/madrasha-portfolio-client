import { useState } from "react";

const useImageUpload = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [imageDelUrl, setImageDelUrl] = useState(null);

    const uploadImage = async (imageFile) => {
      try {
        const apiUrl = 'https://api.imgbb.com/1/upload?key=29da777125e8d898d02c70a855e926d3'
        const formData = new FormData()
        formData.append('image', imageFile)

        const response = await fetch(apiUrl, {
            method: 'POST',
            body: formData,
        });

        const result = await response.json()
        if (result.success) {
          setImageUrl(result.data.display_url)
          setImageDelUrl(result.data.delete_url)
          return result.data;
        } else {
          throw new Error(result.error.message);
        }
      } catch (error) {
        console.error('Error uploading image:', error.message);
        throw error;
      }
    };
  
    return [ imageUrl , imageDelUrl , uploadImage ]
}

export default useImageUpload