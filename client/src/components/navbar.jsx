import React from 'react';
import { useDispatch } from 'react-redux';

import { getSpecificVideo } from '../Redux/Reducer/Data/data.action';



const NavBar = () => {
    const dispatch = useDispatch();

    dispatch(getSpecificVideo()).then(data=>console.log(data))
    return (
        <div className='container mx-auto px-4 py-4'>
          <div className='flex justify-between'>
              <div className='w-10 md:w-14 flex gap-1 items-center'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanUauhyeOaYUFxz9R80JFEihhhzA6qaPHQQ&usqp=CAU" 
                  alt="Logo"
                  className='w-full' />
               <p className='font-bold text-sm md:text-lg'>YOUTUBE</p>
              </div>
              <div className='border-2 rounded-sm p-1 lg:w-3/5 flex gap-2'>
                 <input type="search" name="" id="" placeholder='Search' className="w-full focus:outline-none"/>
              </div>
          </div>
        </div>
    )
}

export default NavBar
