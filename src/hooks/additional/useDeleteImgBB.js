import { useState } from "react";


// this hook has no use
// this hook has no use
// this hook has no use
// this hook has no use
// this hook has no use ; may be image bb website doesnt allow this


const useDeleteImgBB = () => {
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteImage = async (deleteUrl) => {
        try {
            setIsDeleting(true);
            console.log(deleteUrl,'from hook')
            const response = await fetch(deleteUrl, {
                method: 'DELETE',
            });

            const result = await response.json();
            console.log(result)
            if (result.success) {
                console.log('Image deleted successfully');
            }else{
                throw new Error(result.error.message);
            }
        }catch (error) {
            console.error('Error deleting image:', error.message);
        } finally {
            setIsDeleting(false);
        }
    }

  return [ isDeleting, deleteImage ]
}

export default useDeleteImgBB