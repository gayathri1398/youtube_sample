import React from 'react';



// url:"https://ce4kvluf13.execute-api.ap-south-1.amazonaws.com/stage/video-list"


const Card = (props) => {
  
  return (
      <div className='border rounded-sm mt-8'>
            <div className=''>
                <img src={props.snippet.thumbnails.medium.url}
                alt="video" 
                className='w-full'/>
                 <h1 className='text-base py-2 px-1'>{props.snippet.title}</h1>
         <p className='text-xs px-1 pb-2 text-gray-500'>{props.snippet.description}</p>
            </div>  
         </div>
  )
}


export default Card;