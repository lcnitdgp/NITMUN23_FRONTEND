import React from 'react';
import './RegisterStyle.css'
import { useState } from 'react';



function RegisterPage () {

  const [institute, setInstitute] = useState("NIT Durgapur");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [roll, setRoll] = useState("");
  const [year, setYear] = useState("");
  const [committee1, setComittee1] = useState("");
  const [preference1, setPreferences1] = useState("");
  const [committee2, setComittee2] = useState("");
  const [preference2, setPreferences2] = useState("");
  const [committee3, setComittee3] = useState("");
  const [preference3, setPreferences3] = useState("");

    return(
        <>
        <div className='register-body'>
        	<div className="section">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<div className='toggle-container-btn'>
						<h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
						</div>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label htmlFor="reg-log"></label>
						 
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
								<h4 class="mb-4 pb-3">Log In</h4>
									<div className="center-wrap">
									
										<div className="section text-center">
										
											<div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Name" id="logemail" autocomplete="off" value={name}
                  onChange={(e) => {
                    setName(e.target.value);
					console.log(e.target.value);
                  }} />
												<i className="input-icon uil uil-at"></i>
											</div>	
                      <div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off"  onChange={(e) => {
                    setEmail(e.target.value);
					console.log(e.target.value);
                  }}
                  value={email}/>
												<i className="input-icon uil uil-at"></i>
											</div>	
                      <div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Phone" id="logemail" autocomplete="off" value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
					console.log(e.target.value);
                  }}/>
												<i className="input-icon uil uil-at"></i>
											</div>	
                      <div className="form-group">
  <select name="logemail" className="form-style" id="logemail"  onChange={(e) => {
                    setInstitute(e.target.value);
					console.log(e.target.value);
                  }} value = {institute}>
    <option value="NIT Durgapur">NIT Durgapur</option>
    <option value="OTHER INSTITUTION">OTHER INSTITUTION</option>
  </select>
  <i className="input-icon uil uil-at"></i>
</div>   
<div
                className="form-group"
                style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <input
				className='form-style'
                  placeholder="Roll Number"
                  name="logemail"
                  id="logemail"
                  type="email"
                  data-type="text"
				  autoComplete='off'
				  value={roll}
                  onChange={(e) => {
                    setRoll(e.target.value);
					console.log(e.target.value);
                  }}
                />
				<i className="input-icon uil uil-at"></i>
              </div>
<div
                className="form-group"
                style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <select name="logemail" className="form-style" id="logemail" placeholder="YEAR" value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
					console.log(e.target.value);
                  }}>
    <option value="YEAR 1"> YEAR 1</option>
    <option value="YEAR 2"> YEAR 2</option>
	<option value="YEAR 3"> YEAR 3</option>
	<option value="YEAR 4"> YEAR 4</option>
  </select>
  <i className="input-icon uil uil-at"></i>
              </div>
			  
			  
			  <h6 class="mb-4 pb-3">Preference 1</h6>
			  <div
                className="form-group"
              >
                <select name="logemail" className="form-style" id="logemail" placeholder="Select Commitee" value={preference1}
                  onChange={(e) => {
                    setPreferences1(e.target.value);
					console.log(e.target.value);
                  }}>
    <option value="select commitee"> select commitee..</option>
    <option value="UNGA"> UNGA</option>
	<option value="UNSC"> UNSC</option>
	<option value="UNHCR"> UNHCR</option>
  </select>
  <i className="input-icon uil uil-at"></i>
              </div>
			  <div
                className="form-group"
              >
                <select name="logemail" className="form-style" id="logemail" placeholder="Select Commitee" value={committee1}
                  onChange={(e) => {
                    setComittee1(e.target.value);
					console.log(e.target.value);
                  }}>
    <option value="select country">select country</option>
  </select>
  <i className="input-icon uil uil-at"></i>
              </div>
			  <h6 class="mb-4 pb-3">Preference 2</h6>

			  <div
                className="form-group"
              >
                <select name="logemail" className="form-style" id="logemail" placeholder="Select Commitee" value={preference2}
                  onChange={(e) => {
                    setPreferences2(e.target.value);
					console.log(e.target.value);
                  }}>
    <option value="select commitee"> select commitee..</option>
    <option value="UNGA"> UNGA</option>
	<option value="UNSC"> UNSC</option>
	<option value="UNHCR"> UNHCR</option>
  </select>
  <i className="input-icon uil uil-at"></i>
              </div>
			  <div
                className="form-group"
              >
                <select name="logemail" className="form-style" id="logemail" placeholder="Select Commitee" value={committee2}
                  onChange={(e) => {
                    setComittee2(e.target.value);
					console.log(e.target.value);
                  }}>
    <option value="select country">select country</option>
  </select>
  <i className="input-icon uil uil-at"></i>
              </div>

			  <h6 class="mb-4 pb-3">Preference 3</h6>

			  <div
                className="form-group"
              >
                <select name="logemail" className="form-style" id="logemail" placeholder="Select Commitee" value={preference3}
                  onChange={(e) => {
                    setPreferences3(e.target.value);
					console.log(e.target.value);
                  }}>
    <option value="select commitee"> select commitee..</option>
    <option value="UNGA"> UNGA</option>
	<option value="UNSC"> UNSC</option>
	<option value="UNHCR"> UNHCR</option>
  </select>
  <i className="input-icon uil uil-at"></i>
              </div>
			  <div
                className="form-group"
              >
                <select name="logemail" className="form-style" id="logemail" placeholder="Select Commitee" value={committee3}
                  onChange={(e) => {
                    setComittee3(e.target.value);
					console.log(e.target.value);
                  }}>
    <option value="select country">select country</option>
  </select>
  <i className="input-icon uil uil-at"></i>
              </div>


											<a href="#" className="btn mt-4">submit</a>
                            				<p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div className="card-back">
								<h4 class="mb-4 pb-3">Sign Up</h4>
									<div className="center-wrap">
										<div className="section text-center">
											
										<div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Name" id="logemail" autocomplete="off" value={name}
                  onChange={(e) => {
                    setName(e.target.value);
					console.log(e.target.value);
                  }} />
												<i className="input-icon uil uil-at"></i>
											</div>	
                      <div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off"  onChange={(e) => {
                    setEmail(e.target.value);
					console.log(e.target.value);
                  }}
                  value={email}/>
												<i className="input-icon uil uil-at"></i>
											</div>	
                      <div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Phone" id="logemail" autocomplete="off" value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
					console.log(e.target.value);
                  }}/>
												<i className="input-icon uil uil-at"></i>
											</div>	
                      <div className="form-group">
  <select name="logemail" className="form-style" id="logemail"  onChange={(e) => {
                    setInstitute(e.target.value);
					console.log(e.target.value);
                  }} value = {institute}>
    <option value="NIT Durgapur">NIT Durgapur</option>
    <option value="OTHER INSTITUTION">OTHER INSTITUTION</option>
  </select>
  <i className="input-icon uil uil-at"></i>
</div>   
<div
                className="form-group"
                style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <input
				className='form-style'
                  placeholder="Roll Number"
                  name="logemail"
                  id="logemail"
                  type="email"
                  data-type="text"
				  autoComplete='off'
				  value={roll}
                  onChange={(e) => {
                    setRoll(e.target.value);
					console.log(e.target.value);
                  }}
                />
				<i className="input-icon uil uil-at"></i>
              </div>
<div
                className="form-group"
                style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <select name="logemail" className="form-style" id="logemail" placeholder="YEAR" value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
					console.log(e.target.value);
                  }}>
    <option value="YEAR 1"> YEAR 1</option>
    <option value="YEAR 2"> YEAR 2</option>
	<option value="YEAR 3"> YEAR 3</option>
	<option value="YEAR 4"> YEAR 4</option>
  </select>
  <i className="input-icon uil uil-at"></i>
              </div>
			  
			  
			  <h6 class="mb-4 pb-3">Preference 1</h6>
			  <div
                className="form-group"
              >
                <select name="logemail" className="form-style" id="logemail" placeholder="Select Commitee" value={preference1}
                  onChange={(e) => {
                    setPreferences1(e.target.value);
					console.log(e.target.value);
                  }}>
    <option value="select commitee"> select commitee..</option>
    <option value="UNGA"> UNGA</option>
	<option value="UNSC"> UNSC</option>
	<option value="UNHCR"> UNHCR</option>
  </select>
  <i className="input-icon uil uil-at"></i>
              </div>
			  <div
                className="form-group"
              >
                <select name="logemail" className="form-style" id="logemail" placeholder="Select Commitee" value={committee1}
                  onChange={(e) => {
                    setComittee1(e.target.value);
					console.log(e.target.value);
                  }}>
    <option value="select country">select country</option>
  </select>
  <i className="input-icon uil uil-at"></i>
              </div>
			  <h6 class="mb-4 pb-3">Preference 2</h6>

			  <div
                className="form-group"
              >
                <select name="logemail" className="form-style" id="logemail" placeholder="Select Commitee" value={preference2}
                  onChange={(e) => {
                    setPreferences2(e.target.value);
					console.log(e.target.value);
                  }}>
    <option value="select commitee"> select commitee..</option>
    <option value="UNGA"> UNGA</option>
	<option value="UNSC"> UNSC</option>
	<option value="UNHCR"> UNHCR</option>
  </select>
  <i className="input-icon uil uil-at"></i>
              </div>
			  <div
                className="form-group"
              >
                <select name="logemail" className="form-style" id="logemail" placeholder="Select Commitee" value={committee2}
                  onChange={(e) => {
                    setComittee2(e.target.value);
					console.log(e.target.value);
                  }}>
    <option value="select country">select country</option>
  </select>
  <i className="input-icon uil uil-at"></i>
              </div>

			  <h6 class="mb-4 pb-3">Preference 3</h6>

			  <div
                className="form-group"
              >
                <select name="logemail" className="form-style" id="logemail" placeholder="Select Commitee" value={preference3}
                  onChange={(e) => {
                    setPreferences3(e.target.value);
					console.log(e.target.value);
                  }}>
    <option value="select commitee"> select commitee..</option>
    <option value="UNGA"> UNGA</option>
	<option value="UNSC"> UNSC</option>
	<option value="UNHCR"> UNHCR</option>
  </select>
  <i className="input-icon uil uil-at"></i>
              </div>
			  <div
                className="form-group"
              >
                <select name="logemail" className="form-style" id="logemail" placeholder="Select Commitee" value={committee3}
                  onChange={(e) => {
                    setComittee3(e.target.value);
					console.log(e.target.value);
                  }}>
    <option value="select country">select country</option>
  </select>
  <i className="input-icon uil uil-at"></i>
              </div>
											<a href="#" className="btn mt-4">submit</a>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
  </div>
        </>
    )
}

export default RegisterPage;