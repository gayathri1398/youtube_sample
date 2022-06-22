import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';

// components
import NavBar from '../components/navbar';
import Card from '../components/card';


import { getVideos } from '../Redux/Reducer/Data/data.action';


const SinglePage = () => {
  const dispatch = useDispatch();
  const[datas,setDatas] = useState([]);
  const[value,setValue] =useState();
 
  
   const handleChange=(e)=>{
    // setValue(e.target.name=e.target.value);
    setValue(e);
    if(value!=""){
      console.log(value);
      // return value
      let name = datas.filter((data)=>data.snippet.title.toLowerCase().includes(value.toLowerCase()));
      if(!name){
      return false
     }
     setDatas(name)
    }
    
  
 }
 console.log(value);
  
 const gettingSpecificVideo =()=>{
   if(value!=""){
    
   }

}


useEffect(()=>{
 
  dispatch(getVideos()).then(data=> setDatas(data.payload.items) )
  
  
},[])
  
  return (
  <>
        <NavBar
         handleChange={handleChange}
          />
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