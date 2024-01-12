import "./RegisterCard.css";
import { useState } from "react";
import Footer from "./Footer";

function RegisterPage() {
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

  return (
    <>
      <div className="register-body">
      <div className='toggle-container-btn'>
						<h6 className="mb-0 pb-3"><span>DELEGATION</span><span>IP</span></h6>
						</div>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label htmlFor="reg-log"></label>
                          <div className="reg-card-wrapper">
        <div className="card-front">
          <h4 className="mb-4 pb-3 reg-p">DELEGATION</h4>
          <div className="center-wrap">
            <div className="reg-section text-center">
            <div className="para-container">
                <p className="mb-4 pb-3 reg-p">NAME</p>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="logemail"
                  className="form-style"
                  placeholder="Your Name"
                  id="logemail"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">EMAIL ID</p>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="logemail"
                  className="form-style"
                  placeholder="Your Email"
                  id="logemail"
                  autoComplete="off"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(e.target.value);
                  }}
                  value={email}
                />
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">PHONE NUMBER</p>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="logemail"
                  className="form-style"
                  placeholder="Your Phone"
                  id="logemail"
                  autoComplete="off"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">INSTITUTION</p>
              </div>
              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  onChange={(e) => {
                    setInstitute(e.target.value);
                    console.log(e.target.value);
                  }}
                  value={institute}
                >
                  <option value="NIT Durgapur">NIT Durgapur</option>
                  <option value="OTHER INSTITUTION">OTHER INSTITUTION</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">ROLL NUMBER</p>
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
                  className="form-style"
                  placeholder="Roll Number"
                  name="logemail"
                  id="logemail"
                  type="email"
                  data-type="text"
                  autoComplete="off"
                  value={roll}
                  onChange={(e) => {
                    setRoll(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">YEAR</p>
              </div>
              <div
                className="form-group"
                style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="YEAR"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="YEAR 1"> YEAR 1</option>
                  <option value="YEAR 2"> YEAR 2</option>
                  <option value="YEAR 3"> YEAR 3</option>
                  <option value="YEAR 4"> YEAR 4</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">Preference 1</p>
              </div>
              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={preference1}
                  onChange={(e) => {
                    setPreferences1(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="select commitee"> select commitee..</option>
                  <option value="UNGA"> UNGA</option>
                  <option value="UNSC"> UNSC</option>
                  <option value="UNHCR"> UNHCR</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={committee1}
                  onChange={(e) => {
                    setComittee1(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="select country">select country</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">Preference 2</p>
              </div>

              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={preference2}
                  onChange={(e) => {
                    setPreferences2(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="select commitee"> select commitee..</option>
                  <option value="UNGA"> UNGA</option>
                  <option value="UNSC"> UNSC</option>
                  <option value="UNHCR"> UNHCR</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={committee2}
                  onChange={(e) => {
                    setComittee2(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="select country">select country</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>

              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">Preference 3</p>
              </div>

              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={preference3}
                  onChange={(e) => {
                    setPreferences3(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="select commitee"> select commitee..</option>
                  <option value="UNGA"> UNGA</option>
                  <option value="UNSC"> UNSC</option>
                  <option value="UNHCR"> UNHCR</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={committee3}
                  onChange={(e) => {
                    setComittee3(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="select country">select country</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="btn-container">
                <a href="#" className="btn mt-4">
                  submit
                </a>
              </div>
               
            </div>
          </div>
        </div>
        <div className="card-back">
          <h4 className="mb-4 pb-3 reg-p">INTERNATIONAL PRESS</h4>
          <div className="center-wrap">
            <div className="reg-section text-center">
            <div className="para-container">
                <p className="mb-4 pb-3 reg-p">NAME</p>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="logemail"
                  className="form-style"
                  placeholder="Your Name"
                  id="logemail"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">EMAIL ID</p>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="logemail"
                  className="form-style"
                  placeholder="Your Email"
                  id="logemail"
                  autoComplete="off"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(e.target.value);
                  }}
                  value={email}
                />
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">PHONE NUMBER</p>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="logemail"
                  className="form-style"
                  placeholder="Your Phone"
                  id="logemail"
                  autoComplete="off"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">INSTITUTION</p>
              </div>
              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  onChange={(e) => {
                    setInstitute(e.target.value);
                    console.log(e.target.value);
                  }}
                  value={institute}
                >
                  <option value="NIT Durgapur">NIT Durgapur</option>
                  <option value="OTHER INSTITUTION">OTHER INSTITUTION</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">ROLL NUMBER</p>
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
                  className="form-style"
                  placeholder="Roll Number"
                  name="logemail"
                  id="logemail"
                  type="email"
                  data-type="text"
                  autoComplete="off"
                  value={roll}
                  onChange={(e) => {
                    setRoll(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">YEAR</p>
              </div>
              <div
                className="form-group"
                style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="YEAR"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="YEAR 1"> YEAR 1</option>
                  <option value="YEAR 2"> YEAR 2</option>
                  <option value="YEAR 3"> YEAR 3</option>
                  <option value="YEAR 4"> YEAR 4</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">Preference 1</p>
              </div>
              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={preference1}
                  onChange={(e) => {
                    setPreferences1(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="select commitee"> select commitee..</option>
                  <option value="UNGA"> UNGA</option>
                  <option value="UNSC"> UNSC</option>
                  <option value="UNHCR"> UNHCR</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={committee1}
                  onChange={(e) => {
                    setComittee1(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="select country">select country</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">Preference 2</p>
              </div>

              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={preference2}
                  onChange={(e) => {
                    setPreferences2(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="select commitee"> select commitee..</option>
                  <option value="UNGA"> UNGA</option>
                  <option value="UNSC"> UNSC</option>
                  <option value="UNHCR"> UNHCR</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={committee2}
                  onChange={(e) => {
                    setComittee2(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="select country">select country</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>

              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">Preference 3</p>
              </div>

              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={preference3}
                  onChange={(e) => {
                    setPreferences3(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="select commitee"> select commitee..</option>
                  <option value="UNGA"> UNGA</option>
                  <option value="UNSC"> UNSC</option>
                  <option value="UNHCR"> UNHCR</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={committee3}
                  onChange={(e) => {
                    setComittee3(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="select country">select country</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="btn-container">
                <a href="#" className="btn mt-4">
                  submit
                </a>
              </div>
               
            </div>
          </div>
        </div>
        </div>
      </div>
      

    </>
  );
}

export default RegisterPage;
