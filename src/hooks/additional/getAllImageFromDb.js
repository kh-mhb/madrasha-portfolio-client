import { useEffect } from "react"
import { useState } from "react"


const getAllImageFromDb = () => {
    const [images,setImages] = useState([])
    const getAllImagesFromDb = async() =>{
        try{
            const response = await fetch('http://localhost:7071/auth/image/all')
            const res = await response.json()
            setImages(res)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getAllImagesFromDb()
    },[])

    return [ images , getAllImagesFromDb]
}

export default getAllImageFromDb