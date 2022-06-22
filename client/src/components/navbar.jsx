
import React,{useState,useEffect} from 'react';
// import env from "react-dotenv";
import { useDispatch } from 'react-redux';
import {BsSearch} from 'react-icons/bs'

import { getSpecificVideo } from '../Redux/Reducer/Data/data.action';
// import { getVideos } from '../Redux/Reducer/Data/data.action';


const NavBar = ({gettingSpecificVideo,handleChange}) => {
    const[datas,setDatas] = useState([]);
    const[settingData,setSettingData]= useState(false)
    const dispatch = useDispatch();


    const key = "AIzaSyAF-ByPKNvBqma0OD-IB-viyqvF9SGU_BM";
    const username= "nokia";
    // console.log(username)

  
   


useEffect(()=>{
  if(settingData){
    dispatch(getSpecificVideo(username,key)).then(data=> setDatas(data.payload.items));
  }
    
  
},[])
 


    return (
        <div className='container mx-auto px-4 py-4'>
          <div className='flex justify-between'>
              <div className='w-10 md:w-14 flex gap-1 items-center'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanUauhyeOaYUFxz9R80JFEihhhzA6qaPHQQ&usqp=CAU" 
                  alt="Logo"
                  className='w-full' />
               <p className='font-bold text-sm md:text-lg'>YOUTUBE</p>
              </div>
              <div className='border-2 rounded-sm p-1 lg:w-3/5 flex gap-2 items-center'>
                 <input type="search"
                  name="" 
                  id=""
                  placeholder='Search'
                  className="w-full focus:outline-none"
                  onChange={(e)=>handleChange(e.target.value)}
                  />
                <BsSearch />
              </div>
          </div>
        </div>
    )
}

export default NavBar
