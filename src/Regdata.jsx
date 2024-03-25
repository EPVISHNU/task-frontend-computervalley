import React, { useEffect, useState } from 'react'
import { AddFormAPI } from './services/allAPIs';
import {useNavigate} from 'react-router-dom'






function Regdata() {


  const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const [formDetails, setFormDetails] = useState({
      name:"",username:"",email:"",gender:"",DOB:"",password:"",phone:"",address:"",place:"",file:""
    });

    const [preview, setPreview] = useState("");

    useEffect(() => {
        if (formDetails.file) {
            setPreview(URL.createObjectURL(formDetails.file));
        }
    }, [formDetails.file]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormDetails({ ...formDetails, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormDetails({ ...formDetails, file: e.target.files[0] });
    };

    const addForms = async () => {
        const { name,username,email,gender,password,DOB,phone,address,place,file } = formDetails;

        if (!name || !username || !email || !gender || !password || !DOB || !phone || !address || !place || !file) {
            alert('Please fill out all fields');
            return;
        }

        const reqBody = new FormData();
        reqBody.append("name", name);
        reqBody.append("username", username);
        reqBody.append("email", email);

        reqBody.append("gender",gender)




        reqBody.append("password", password);
        reqBody.append("DOB", DOB);

        reqBody.append("phone", phone);
        reqBody.append("address", address);
        reqBody.append("place", place);
      
        reqBody.append("file", file);

        const reqHeader = {
            "Content-Type": 'multipart/form-data',
            "Authorization": `Bearer ${token}`
        };

        try {
            const result = await AddFormAPI(reqBody, reqHeader);
            console.log(result);
            if (result.status === 200) {
                console.log(result.data);
                alert('Userdata created successfully')
            } else {
                console.log(result.response.data);
            }
        } catch (error) {
            console.error("Error adding form:", error);
        }
    };


    const navigate= useNavigate()
const logoutForm=()=>{
  sessionStorage.removeItem("token")
        sessionStorage.removeItem("existinguser")
        navigate('/')
}

const clearForm = ()=>{
 setFormDetails({
  name:"",username:"",email:"",gender:"",DOB:"",password:"",phone:"",address:"",place:"",file:""

 })
}

  return (
    <div>
        
<div className="nav shadow">
             <h1 className='m-4'>Welcome User</h1>

             <div className='res'>
             <button onClick={clearForm} className='btn me-3 bg-primary text-light '>Reset</button>

<button onClick={logoutForm} className='btn bg-danger text-light'>Logout</button>
             </div>
       </div>

           <div className="row">
            <div className="col-2"></div>
            <div className="col-8 dar">
                 <div style={{width:'60%'}} className='shadow mt-5 mb-5'>

                  <h1 className='text-center mt-5'>User details</h1>

                 <label className='ms-5 mt-4 text-black'><b>Name</b></label>
                 <input name='name' style={{width:'83%'}} type="text"  className='inp form-control me-5 mt-2 ms-5 border-3' placeholder='' value={formDetails.name} onChange={handleInputChange} />

                 <label className='ms-5 mt-4 text-black'><b>Username</b></label>

                 <input name='username' style={{width:'83%'}} type="text"  className='inp form-control me-5 mt-2 ms-5 border-3' placeholder='' value={formDetails.username} onChange={handleInputChange} />

                 <label className='ms-5 mt-4 text-black'><b>e-mail</b></label>

                 <input name='email' style={{width:'83%'}} type="text"  className='inp form-control me-5 mt-2 ms-5 border-3' placeholder='' value={formDetails.email} onChange={handleInputChange} />

                <div className='d-flex cla'> 
                <div className="form-group  mt-4 ">
              <label className='text-black'>Gender:</label>
              <div class="form-check form-check-inline" >
              <input
    className="form-check-input"
    type="radio"
    name="gender"
    id="inlineRadio1"
    value="male" 
    checked={formDetails.gender === "male"} 
    onChange={handleInputChange}
/>
<label style={{marginLeft:'-32%'}} className="form-check-label  text-black" htmlFor="inlineRadio1"><b>Male</b></label>

<input
    className="form-check-input ms-5"
    type="radio"
    name="gender"
    id="inlineRadio2"
    value="female" 
    checked={formDetails.gender === "female"} 
    onChange={handleInputChange}
/>
<label className="form-check-label ms-5 text-black" htmlFor="inlineRadio2"><b>Female</b></label>

</div>
              
              
            </div>

            <label className=' mt-4  text-black'><b>DOB</b></label>

            <input name='DOB' style={{width:'30%'}} type="date" className='form-control ms-1 mt-3 me-5' value={formDetails.DOB} onChange={handleInputChange} />

                </div>
 
                <label className='ms-5 mt-4 text-black'><b>Password</b></label>

                 <input name='password' style={{width:'83%'}} type="password"  className='inp form-control me-5 mt-2 ms-5 border-3' placeholder='' value={formDetails.password} onChange={handleInputChange} />

                 <label className='ms-5 mt-4 text-black'><b>Phone</b></label>

                 <input name='phone' style={{width:'83%'}} type="text"  className='inp form-control me-5 mt-2 ms-5 border-3' placeholder='' value={formDetails.phone} onChange={handleInputChange} />

                 <label className='ms-5 mt-4 text-black'><b>Address</b></label>
                 <textarea  style={{width:'83%'}} className='form-control ms-5' name="address" id="" cols="30" rows="5" value={formDetails.address} onChange={handleInputChange}></textarea>

                 <div className="form-group ms-5 mt-4">
              <label className='text-black'>Place:</label>
              <select name='place' value={formDetails.place} onChange={handleInputChange}>
                <option value="">Select a place</option>
                <option value="Place1">India</option>
                <option value="Place2">Singapore</option>
                <option value="Place3">U.S.A</option>
              </select>
            </div>

            <div className="form-group ms-5 mt-4">
              <label className='text-black'>Upload Files:</label>
              <input name='file' type="file" required onChange={handleFileChange}  />
            </div>

                  
                 <div className="form-group d-flex">
              <label className='d-flex ms-5 text-black'>
                <input
                  type="checkbox"
                
                />
                <p className='m-3'><b>I agree to the terms and conditions</b></p>
              </label>
            </div>


           <div className='text-center m-4'>
           <button type='button' onClick={addForms} className='btn bg-success text-light '>Submit</button>
           </div>
                 </div>
            </div>
            <div className="col-2"></div>
           </div>

        
    </div>
  )
}

export default Regdata