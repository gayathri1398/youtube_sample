import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';

// components
import NavBar from '../components/navbar';
import Card from '../components/card';


import { getVideos } from '../Redux/Reducer/Data/data.action';


const SinglePage = () => {
  const dispatch = useDispatch();
  const[datas,setDatas] = useState([]);

useEffect(()=>{
   dispatch(getVideos()).then(data=> setDatas(data.payload.items)
  )
},[])
  
  return (
  <>
        <NavBar/>
        <div className='lg:pt-16 px-10 grid md:grid-cols-3 lg:grid-cols-4 gap-10'>
          {
            datas.map((data)=>(
              <Card {...data}
               key={datas.channelId} />
              )
            )
          }
            
            
        </div>
       
  </>
    )
}

export default SinglePage