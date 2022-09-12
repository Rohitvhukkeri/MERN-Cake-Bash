import React,{useState, useEffect} from 'react'
import  axios  from 'axios';

function CategoryApi(token) {
    const [category, setCategory] = useState([])

    const getCategory = async() => {
        const res = await axios.get(`/api/v1/category/getAll`,{
            headers: {Authorization: token}
        })
        setCategory(res.data.categories)
    }

    useEffect(() => {
        getCategory()
    },[token])

  return {
    categories: [category,setCategory]
  }
}

export default CategoryApi