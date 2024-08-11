import React,{ Suspense, lazy }  from 'react'
//import Productlist from '../Products/Productlist'
import Sidebar from '../Sidebar'
import './Productdisplay.css'
const Productlist = lazy(()=>import('../Products/Productlist'))

const Productdisplay = () => {
  return (
    <div className='display'>
     <Sidebar/>
     <Suspense fallback={<p>Loading</p>}>
     <Productlist/>
     </Suspense>
       
    </div>
  )
}

export default Productdisplay