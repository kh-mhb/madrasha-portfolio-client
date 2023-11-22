import { useState } from "react"


const useAddPhoto = () => {
    const [imageUrl,setImageUrl] = useState()
    const apiKey = '4957c3c668ded462db1fb1002c4535e6'
    const uploadImage = async(image) =>{
        try{
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`,{
                method: 'POST',
                body: image,
            })

            if (response.ok) {
                const data = await response.json();
                setImageUrl(data.data.url)
            }else{
                console.error('Failed to upload image:', response.statusText)
            }

        }catch(err){
            console.log(err)
        }
    }
  
    return [ uploadImage , imageUrl ]
}

export default useAddPhoto