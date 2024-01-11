import React from 'react';
import './RegisterStyle.css'
import { useState } from 'react';



function RegisterPage () {

  const [institute, setInstitute] = useState("NIT Durgapur");

    return(
        <>
        <div className='register-body'>
        	<div className="section">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
                 
									<div className="center-wrap">
										<div className="section text-center">
										
											<div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Name" id="logemail" autocomplete="off"/>
												<i className="input-icon uil uil-at"></i>
											</div>	
                      <div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
												<i className="input-icon uil uil-at"></i>
											</div>	
                      <div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Phone" id="logemail" autocomplete="off"/>
												<i className="input-icon uil uil-at"></i>
											</div>	
                      <div className="form-group">
  <select name="logemail" className="form-style" id="logemail"  onChange={(e) => {
                    setInstitute(e.target.value);
                  }} value = {institute}>
    <option value="NIT Durgapur">NIT Durgapur</option>
    <option value="OTHER INSTITUTION">OTHER INSTITUTION</option>
  </select>
  <i className="input-icon uil uil-at"></i>
</div>   
                      <div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Roll Number" id="logemail" autocomplete="off"/>
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
                />
				<i className="input-icon uil uil-at"></i>
              </div>
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Year" id="logpass" autocomplete="off"/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="#" className="btn mt-4">submit</a>
                            				<p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div className="card-back">

									<div className="center-wrap">
										<div className="section text-center">
											
                    <div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Name" id="logemail" autocomplete="off"/>
												<i className="input-icon uil uil-at"></i>
											</div>	
                      <div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
												<i className="input-icon uil uil-at"></i>
											</div>	
                      <div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Phone" id="logemail" autocomplete="off"/>
												<i className="input-icon uil uil-at"></i>
											</div>	
                      <div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Institution" id="logemail" autocomplete="off"/>
												<i className="input-icon uil uil-at"></i>
											</div>	
                      <div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Roll Number" id="logemail" autocomplete="off"/>
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Year" id="logpass" autocomplete="off"/>
												<i className="input-icon uil uil-lock-alt"></i>
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