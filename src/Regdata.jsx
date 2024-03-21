import React from 'react'

function Regdata() {
  return (
    <div>
        
<div className="nav shadow">
             <h1 className='m-4'>Welcome User</h1>

             <div className='res'>
             <button className='btn me-3 bg-primary text-light '>Reset</button>

<button className='btn bg-danger text-light'>Logout</button>
             </div>
       </div>

           <div className="row">
            <div className="col-2"></div>
            <div className="col-8 dar">
                 <div style={{width:'60%'}} className='shadow mt-5 mb-5'>

                  <h1 className='text-center mt-5'>User details</h1>

                 <label className='ms-5 mt-4 text-black'><b>Name</b></label>
                 <input style={{width:'83%'}} type="text"  className='inp form-control me-5 mt-2 ms-5 border-3' placeholder='' />

                 <label className='ms-5 mt-4 text-black'><b>Username</b></label>

                 <input style={{width:'83%'}} type="text"  className='inp form-control me-5 mt-2 ms-5 border-3' placeholder='' />

                 <label className='ms-5 mt-4 text-black'><b>e-mail</b></label>

                 <input style={{width:'83%'}} type="text"  className='inp form-control me-5 mt-2 ms-5 border-3' placeholder='' />

                <div className='d-flex cla'> 
                <div className="form-group ms-2 mt-4 me-5">
              <label className='text-black'>Gender:</label>
              <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
  <label class="form-check-label ms-1 text-black" for="inlineRadio1"><b>Male</b></label>
</div>
              
              
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  <label class="form-check-label ms-1 text-black" for="inlineRadio2"><b>Female</b></label>
</div>
              
              
            </div>

            <label className='ms- mt-4 text-black'><b>DOB</b></label>

            <input style={{width:'20%'}} type="date" className='form-control ms-4 mt-3' />

                </div>
 
                <label className='ms-5 mt-4 text-black'><b>Password</b></label>

                 <input style={{width:'83%'}} type="password"  className='inp form-control me-5 mt-2 ms-5 border-3' placeholder='' />

                 <label className='ms-5 mt-4 text-black'><b>Phone</b></label>

                 <input style={{width:'83%'}} type="text"  className='inp form-control me-5 mt-2 ms-5 border-3' placeholder='' />

                 <label className='ms-5 mt-4 text-black'><b>Address</b></label>
                 <textarea style={{width:'83%'}} className='form-control ms-5' name="" id="" cols="30" rows="5"></textarea>

                 <div className="form-group ms-5 mt-4">
              <label className='text-black'>Place:</label>
              <select>
                <option value="">Select a place</option>
                <option value="Place1">Place1</option>
                <option value="Place2">Place2</option>
                <option value="Place3">Place3</option>
              </select>
            </div>

            <div className="form-group ms-5 mt-4">
              <label className='text-black'>Upload Files:</label>
              <input type="file"  />
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
           <button className='btn bg-success text-light '>Submit</button>
           </div>
                 </div>
            </div>
            <div className="col-2"></div>
           </div>

        
    </div>
  )
}

export default Regdata