import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'






function Home() {
  return (
    <div>
    
       <Link to={'regdata'}>
       <div className="row">
        <div className="col"></div>
        <div className="col d-flex justify-content-center">

             <div className='card shadow p-3 bg-dark text-light' style={{marginTop:'50%', width:'70%'}}>
              <h1 className='text-center'>Hi User</h1>

              <h3 className='text-center mt-3'>Name:...</h3>
              <h3 className='text-center mt-3'>Gender:...</h3>
              <h3 className='text-center mt-3'>e-mail Id:...</h3>

              <p className='text-center mt-3 text-secondary'>click me to add more info</p>
             </div>

        </div>
        <div className="col"></div>
       </div>
       </Link>

    </div>
  )
}

export default Home