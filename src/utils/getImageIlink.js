import axios from "axios";

const getImageIlink =async (file) => {
    const image= file[0]
    const formData = new FormData()
    formData.append('image',image)
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${'397157a8d11c281c5a848fbc682ada24'}`
    const data = await axios.post(url,formData)
    return data.data.data.url
    
};

export default getImageIlink;