import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { resetPassAPI } from './services/allAPIs'
import {useNavigate} from 'react-router-dom'




function Home() {

  const [newPassword,setNewPassword]=useState('')

 const existUser = JSON.parse(sessionStorage.getItem('existinguser'))

const passReset = async() => {
  try{
    await resetPassAPI(existUser.userId,newPassword)
    setNewPassword('')
    alert('Password changed successfully.')
  }
  catch(error){
    console.error('error is',error)
  }

}

const navigate= useNavigate()
const logoutForm=()=>{
  sessionStorage.removeItem("token")
        sessionStorage.removeItem("existinguser")
        navigate('/')
}


  return (
    <div>
    
           
<div  className="nav shadow ">
             <h1 className='m-4'>Welcome User</h1>

             <div className='res'>

<button onClick={logoutForm} className='btn bg-danger text-light'>Logout</button>
             </div>

             
       </div>
       
       <div className="row">
        <div className="col"></div>
        <div className="col d-flex justify-content-center">
        
             <div className='card shadow p-3 bg-dark text-light' style={{marginTop:'50%', width:'70%'}}>
             <Link className='text-light' style={{textDecoration:'none'}} to={'/regdata'}>
              <h1 className='text-center'>Hi {existUser.name}</h1>

              
              <h3 className='text-center mt-3'>Id:{existUser.email}</h3>

              <p className='text-center mt-3 text-secondary'>click me to add more info</p>
              </Link>
             </div>

        </div>
        <div className="col"></div>
       </div>

       <div className="row">
        <div className="col"></div>
        <div className="col d-flex justify-content-center">
          <div className='' style={{width:'70%',marginTop:'10%'}}>

                <input type="text" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}
                placeholder='Password' className='form-control' />
                <div className='text-center'>
                  <button onClick={passReset} className='btn mt-4 bg-info shadow text-light'>Reset</button>
                </div>

          </div>
        </div>
        <div className="col"></div>
       </div>
       

    </div>
  )
}

export default Home