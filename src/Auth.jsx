import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from './services/allAPIs';


function Auth({register}) {

   const isRegisterForm=register?true:false
   const location=useNavigate()

   const [userData,setUserData]=useState({
    name:"",
    username:"",
    gender:"",
    email:"",
    password:""
   })
   console.log(userData);

   const registerData=async()=>{
    const {name,username,gender,email,password}=userData
    if(!name||!username||!gender||!email||!password){
        alert('Please fill the form')
    }else{
        const result=await registerAPI(userData)
        console.log(result);
        if(result.status==200){
            alert(result.data)
            location('/')
        }
        else{
            alert(result.response.data)
        }
    }
}
const loginData=async()=>{
    const {email,password}=userData

    if(!email||!password){
        alert('Please fill the form')
    }else{
        const result=await loginAPI(userData)
        console.log(result);
        if(result.status==200){
            alert(`Welcome ${userData.name}`)
            location('/home')
        }
        else{
            alert('invalid')
        }
}   
}

  return (

   <div>
    <div className="row ">
        <div className="col-4"></div>
        <div  className="col-xs-12 col-sm-6 col-md-4 logscr mt-5">
           <div style={{width:'90%'}} className=' shadow rounded mt-5 p-3 border-radius-5'>
           <h1 className='text-center mt-5'>
                {
                    isRegisterForm?'Register':"Login"
                }
            </h1>


            {
                isRegisterForm?
                <input style={{width:'83%'}} type="text" value={userData.name} onChange={e=>setUserData({...userData,name:e.target.value})} className='inp form-control me-5 mt-4 ms-5 border-3' placeholder='Name' />:null
            }

            {
                isRegisterForm?                
                <input style={{width:'83%'}}  type="text" value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})}  className=' inp form-control border-3 ms-5 me-5 mt-5' placeholder='username' />:null

            }


{
    isRegisterForm && (
        <div>
            <label className='text-black'>Gender:</label>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="inlineRadio1"
                    value="Male"
                    checked={userData.gender === "Male"}
                    onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                />
                <label className="form-check-label ms-1 text-black" htmlFor="inlineRadio1"><b>Male</b></label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="inlineRadio2"
                    value="Female"
                    checked={userData.gender === "Female"}
                    onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                />
                <label className="form-check-label ms-1 text-black" htmlFor="inlineRadio2"><b>Female</b></label>
            </div>
        </div>
    )
}



                <input type="text" value={userData.email} style={{width:'83%'}}  onChange={e=>setUserData({...userData,email:e.target.value})} className='inp form-control border-3 ms-5 me-5 mt-4' placeholder='email' /><br />


                <input style={{width:'83%'}}  type="password"  value={userData.password}  onChange={e=>setUserData({...userData,password:e.target.value})}  className='form-control border-3 mt-4 ms-5 me-5' placeholder='password' /><br />

              {
                isRegisterForm?
                <div className='text-center'>
                    <button className='btn btn-success mb-5 mt-3' onClick={registerData}  >Register</button>

                </div>:
                <div className='text-center'>
                <button className='btn btn-success mb-4 mt-3' onClick={loginData} >Login</button>
                <Link to={'/register'}  className='text-center mt-3 mb-4 text-info' style={{textDecoration:"none"}}>
                <b><p>Register here...</p></b>
                </Link>
            </div>
              }  
           </div>
        </div>
        <div className="col-4"></div>
    </div>
   </div>
  )
}

export default Auth