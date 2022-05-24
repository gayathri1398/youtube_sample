import React from 'react'

// components
import NavBar from '../components/navbar';
import Card from '../components/card';

const SinglePage = () => {
  return (
  <>
        <NavBar/>
        <div className='lg:pt-16 px-10 grid md:grid-cols-3 lg:grid-cols-4 gap-10'>
             <Card />
             <Card />
             <Card />
             <Card />
             <Card />
             <Card />
             <Card />
             <Card />
        </div>
       
  </>
    )
}

export default SinglePage