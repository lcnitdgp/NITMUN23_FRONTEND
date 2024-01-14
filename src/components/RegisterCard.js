import "./RegisterCard.css";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";  
import axios from "axios";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function RegisterPage() {

  const [institute, setInstitute] = useState("");
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
  const [experience, setExperience] = useState("");
  const [hall, setHall] = useState("");

  const postData = async (e) => {
    e.preventDefault();
    console.log("yes")
    await axios
      .post("http://localhost:5000/api/register", {
        // headers: {
        //   'Content-Type': 'application/json'
        // }

        name: name,
        email: email,
        phoneNumber: phoneNumber,
        institute: institute,
        committee1: committee1,
        preference1: preference1,
        committee2: committee2,
        preference2: preference2,
        committee3: committee3,
        preference3: preference3,
        experience: experience,
        year: year,
        roll: roll,
        hall:hall
      })
      .then((res) => {
        console.log(res);
        console.log("submit");
        toast.success("Submitted.");
        // window.location("/");
        //window.location.replace = "/";
      })

      .catch((err) => {
        console.log("hello");
        console.log(err);
        toast.error("Please enter correct credentials");
      });
  };


  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      phone: "",
      institution: "NIT DURGAPUR",
      committee1: "",
      preference1: "",
      committee2: "",
      preference2: "",
      committee3: "",
      preference3: "",
      experience: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .max(15, "Must atleast be of 15 Characters")
        .required("required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().matches(phoneRegExp, "Phone Number not valid"),
      experience: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
                  type="text"
                  name="name"
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
                  {formik.touched.Name && formik.errors.Name ? (
                      <div>{formik.errors.Name}</div>
                    ) : null}
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">EMAIL ID</p>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
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
                 {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">PHONE NUMBER</p>
              </div>
              <div className="form-group">
                <input
                  name="phone number"
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
                {formik.touched.phone && formik.errors.phone ? (
                  <div>{formik.errors.phone}</div>
                ) : null}
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">INSTITUTION</p>
              </div>
              <div className="form-group">
                <select
                  name="institute"
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
             
              <div
                className="form-group"
                style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                 <div className="para-container">
                <p className="mb-4 pb-3 reg-p">ROLL NUMBER</p>
              </div>
                <input
                  className="form-style"
                  placeholder="Roll Number"
                  name="roll number"
                  id="logemail"
                  type="text"
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
             
              <div
                className="form-group"
                style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                 <div className="para-container">
                <p className="mb-4 pb-3 reg-p">YEAR</p>
              </div>
                <select
                  name="year"
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
              <div  className="form-group"
                style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">HALL</p>
              </div>
                <select
                  name="hall"
                  className="form-style-2"
                  id="logemail"
                  placeholder="HALL"
                  value={hall}
                  onChange={(e) => {
                    setHall(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="HALL 1"> HALL 1</option>
                  <option value="HALL 1">HALL 1</option>
                  <option value="HALL 1"> HALL 1</option>
                  <option value="HALL 1"> HALL 1</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div
                className="form-group"
                style={
                  institute == "OTHER INSTITUTION"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                 <div className="para-container">
                <p className="mb-4 pb-3 reg-p">Institute name</p>
              </div>
                <input
                  className="form-style"
                  placeholder="Institute name"
                  name="logemail"
                  id="logemail"
                  type="text"
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
                <p className="mb-4 pb-3 reg-p1">Preference 1:</p>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">Commitee 1</p>
              </div>
              <div className="form-group">
                <select
                  name="preference1"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={committee1}
                  onChange={(e) => {
                    setComittee1(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                   <option value="select commitee"> select commitee..</option>
                  <option value="UNGA-DISEC">UNGA-DISEC</option>
                  <option value="UNGA-SPECPOL">UNGA-SPECPOL</option>
                  <option value="AIPPM">AIPPM</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">Country 1</p>
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
                   {committee1 == "UNGA-DISEC" ? (
                    <>
                      <option value="Select">Select Portfolio</option>
                      <option value="Islamic Emirate of Afghanistan">
                        Islamic Emirate of Afghanistan
                      </option>
                      <option value="Republic of Albania">
                        Republic of Albania
                      </option>
                      <option value="People's Democratic Republic of Algeria">
                        People's Democratic Republic of Algeria
                      </option>
                      <option value="Republic of Angola">
                        Republic of Angola
                      </option>
                      <option value="Argentine Republic">
                        Argentine Republic
                      </option>
                      <option value="Republic of Armenia">
                        Republic of Armenia
                      </option>
                      <option value="Commonwealth of Australia">
                        Commonwealth of Australia
                      </option>
                      <option value="Republic of Austria">
                        Republic of Austria
                      </option>
                      <option value="Republic of Azerbaijan">
                        Republic of Azerbaijan
                      </option>
                      <option value="Kingdom of Bahrain">
                        Kingdom of Bahrain
                      </option>
                      <option value="People's Republic of Bangladesh">
                        People's Republic of Bangladesh
                      </option>
                      <option value="Barbados">Barbados</option>
                      <option value="Republic of Belarus">
                        Republic of Belarus
                      </option>
                      <option value="Kingdom of Bhutan">
                        Kingdom of Bhutan
                      </option>
                      <option value="Federative Republic of Brazil">
                        Federative Republic of Brazil
                      </option>
                      <option value="Republic of Bulgaria">
                        Republic of Bulgaria
                      </option>
                      <option value="Republic of Burundi">
                        Republic of Burundi
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="Republic of Chad">Republic of Chad</option>
                      <option value="Republic of Chile">
                        Republic of Chile
                      </option>
                      <option value="People's Republic of China (PRC)">
                        People's Republic of China (PRC)
                      </option>
                      <option value="Republic of Colombia">
                        Republic of Colombia
                      </option>
                      <option value="Republic of Côte d'Ivoire">
                        Republic of Côte d'Ivoire
                      </option>
                      <option value="Republic of Cuba">Republic of Cuba</option>
                      <option value="Republic of Cyprus">
                        Republic of Cyprus
                      </option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Democratic People's Republic of Korea (DPRK)">
                        Democratic People's Republic of Korea (DPRK)
                      </option>
                      <option value="Democratic Republic of the Congo">
                        Democratic Republic of the Congo
                      </option>
                      <option value="Republic of Djibouti">
                        Republic of Djibouti
                      </option>
                      <option value="Arab Republic of Egypt">
                        Arab Republic of Egypt
                      </option>
                      <option value="Republic of El Salvador">
                        Republic of El Salvador
                      </option>
                      <option value="State of Eritrea">State of Eritrea</option>
                      <option value="Kingdom of Eswatini">
                        Kingdom of Eswatini
                      </option>
                      <option value="Federal Democratic Republic of Ethiopia">
                        Federal Democratic Republic of Ethiopia
                      </option>
                      <option value="Republic of Fiji">Republic of Fiji</option>
                      <option value="French Republic">French Republic</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Federal Republic of Germany">
                        Federal Republic of Germany
                      </option>
                      <option value="Hellenic Republic(Greece)">
                        Hellenic Republic(Greece)
                      </option>
                      <option value="Republic of Haiti">
                        Republic of Haiti
                      </option>
                      <option value="Hungary">Hungary</option>
                      <option value="Republic of India">
                        Republic of India
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Islamic Republic of Iran">
                        Islamic Republic of Iran
                      </option>
                      <option value="Republic of Iraq">Republic of Iraq</option>
                      <option value="Republic of Ireland">
                        Republic of Ireland
                      </option>
                      <option value="State of Israel">State of Israel</option>
                      <option value="Italian Republic">Italian Republic</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Hashemite Kingdom of Jordan">
                        Hashemite Kingdom of Jordan
                      </option>
                      <option value="Republic of Kazakhstan">
                        Republic of Kazakhstan
                      </option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Kyrgyz Republic">Kyrgyz Republic</option>
                      <option value="Republic of Latvia">
                        Republic of Latvia
                      </option>
                      <option value="Republic of Lebanon">
                        Republic of Lebanon
                      </option>
                      <option value="State of Libya">State of Libya</option>
                      <option value="Republic of Madagascar">
                        Republic of Madagascar
                      </option>
                      <option value="Republic of Mauritius">
                        Republic of Mauritius
                      </option>
                      <option value="United Mexican States(Mexico)">
                        United Mexican States(Mexico)
                      </option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Kingdom of Morocco">
                        Kingdom of Morocco
                      </option>
                      <option value="Kingdom of the Netherlands">
                        Kingdom of the Netherlands
                      </option>
                      <option value="Realm of New Zealand">
                        Realm of New Zealand
                      </option>
                      <option value="Federal Republic of Nigeria">
                        Federal Republic of Nigeria
                      </option>
                      <option value="Kingdom of Norway">
                        Kingdom of Norway
                      </option>
                      <option value="Sultanate of Oman">
                        Sultanate of Oman
                      </option>
                      <option value="Islamic Republic of Pakistan">
                        Islamic Republic of Pakistan
                      </option>
                      <option value="Republic of Panama">
                        Republic of Panama
                      </option>
                      <option value="Republic of Peru">Republic of Peru</option>
                      <option value="Republic of the Philippines">
                        Republic of the Philippines
                      </option>
                      <option value="Republic of Poland">
                        Republic of Poland
                      </option>
                      <option value="Portuguese Republic">
                        Portuguese Republic
                      </option>
                      <option value="State of Qatar">State of Qatar</option>
                      <option value="Republic of Korea(ROK)">
                        Republic of Korea(ROK)
                      </option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Independent State of Samoa">
                        Independent State of Samoa
                      </option>
                      <option value="Kingdom of Saudi Arabia (KSA)">
                        Kingdom of Saudi Arabia (KSA)
                      </option>
                      <option value="Republic of Senegal">
                        Republic of Senegal
                      </option>
                      <option value="Republic of Seychelles">
                        Republic of Seychelles
                      </option>
                      <option value="Republic of Singapore">
                        Republic of Singapore
                      </option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Federal Republic of Somalia">
                        Federal Republic of Somalia
                      </option>
                      <option value="Republic of South Africa (RSA)">
                        Republic of South Africa (RSA)
                      </option>
                      <option value="Kingdom of Spain">Kingdom of Spain</option>
                      <option value="Republic of the Sudan">
                        Republic of the Sudan
                      </option>
                      <option value="Swiss Confederation">
                        Swiss Confederation
                      </option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Republic of China (ROC)">
                        Republic of China (ROC)
                      </option>
                      <option value="Kingdom of Thailand">
                        Kingdom of Thailand
                      </option>
                      <option value="Republic of Türkiye">
                        Republic of Türkiye
                      </option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom of Great Britain and Northern Ireland">
                        United Kingdom of Great Britain and Northern Ireland
                      </option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="Bolivarian Republic of Venezuela">
                        Bolivarian Republic of Venezuela
                      </option>
                      <option value="Socialist Republic of Vietnam">
                        Socialist Republic of Vietnam
                      </option>
                      <option value="Republic of Yemen">
                        Republic of Yemen
                      </option>
                    </>
                  ) : (committee1 == "UNGA-SPECPOL") ? (
                    <>
                      <option value="Select">Select Portfolio</option>

                      <option value="State of Israel">State of Israel</option>
                      <option value="State of Palestine">
                        State of Palestine
                      </option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="French Republic">French Republic</option>
                      <option value="Federal Republic of Germany">
                        Federal Republic of Germany
                      </option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Republic of Lebanon">
                        Republic of Lebanon
                      </option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Hashemite Kingdom of Jordan">
                        Hashemite Kingdom of Jordan
                      </option>
                      <option value="Arab Republic of Egypt">
                        Arab Republic of Egypt
                      </option>
                      <option value="Kingdom of Saudi Arabia">
                        Kingdom of Saudi Arabia
                      </option>
                      <option value="Republic of Iraq">Republic of Iraq</option>
                      <option value="Islamic Republic of Iran">
                        Islamic Republic of Iran
                      </option>
                      <option value="Republic of India">
                        Republic of India
                      </option>
                      <option value="People’s Republic of China">
                        People’s Republic of China
                      </option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Plurinational State of Bolivia">
                        Plurinational State of Bolivia
                      </option>
                      <option value="Republic of Chile">
                        Republic of Chile
                      </option>
                      <option value="Republic of Ecuador">
                        Republic of Ecuador
                      </option>
                      <option value="Federal Democratic Republic of Ethiopia">
                        Federal Democratic Republic of Ethiopia
                      </option>
                      <option value="Republic of Tunisia">
                        Republic of Tunisia
                      </option>
                      <option value="United Republic of Tanzania">
                        United Republic of Tanzania
                      </option>
                      <option value="Bolivarian Republic of Venezuela">
                        Bolivarian Republic of Venezuela
                      </option>
                      <option value="Republic of Cuba">Republic of Cuba</option>
                      <option value="Republic of the Congo">
                        Republic of the Congo
                      </option>
                      <option value="Independent State of Papua New Guinea">
                        Independent State of Papua New Guinea
                      </option>
                      <option value="Republic of Fiji">Republic of Fiji</option>
                      <option value="Commonwealth of Dominica">
                        Commonwealth of Dominica
                      </option>
                      <option value="Islamic Emirate of Afghanistan">
                        Islamic Emirate of Afghanistan
                      </option>
                      <option value="Commonwealth of Australia">
                        Commonwealth of Australia
                      </option>
                      <option value="Federative Republic of Brazil">
                        Federative Republic of Brazil
                      </option>
                      <option value="Democratic People's Republic of Korea">
                        Democratic People's Republic of Korea
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="Kingdom of Belgium">
                        Kingdom of Belgium
                      </option>
                      <option value="Republic of Italy">
                        Republic of Italy
                      </option>
                      <option value="United Mexican States">
                        United Mexican States
                      </option>
                      <option value="Republic of Belarus">
                        Republic of Belarus
                      </option>
                      <option value="People's Republic of Bangladesh">
                        People's Republic of Bangladesh
                      </option>
                      <option value="Islamic Republic of Pakistan">
                        Islamic Republic of Pakistan
                      </option>
                      <option value="Realm of New Zealand">
                        Realm of New Zealand
                      </option>
                      <option value="Japan">Japan</option>
                      <option value="Republic of Singapore">
                        Republic of Singapore
                      </option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="Republic of Austria">
                        Republic of Austria
                      </option>
                      <option value="Kingdom of Bhutan">
                        Kingdom of Bhutan
                      </option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Republic of Mauritius">
                        Republic of Mauritius
                      </option>
                      <option value="State of Qatar">State of Qatar</option>
                      <option value="Kingdom of Thailand">
                        Kingdom of Thailand
                      </option>
                      <option value="Republic of the Philippines">
                        Republic of the Philippines
                      </option>
                      <option value="Kingdom of Norway">
                        Kingdom of Norway
                      </option>
                      <option value="Kingdom of Spain">Kingdom of Spain</option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Argentine Republic">
                        Argentine Republic
                      </option>
                      <option value="Republic of Bulgaria">
                        Republic of Bulgaria
                      </option>
                      <option value="Swiss Confederation">
                        Swiss Confederation
                      </option>
                      <option value="United Kingdom of Great Britain and Northern Ireland">
                        United Kingdom of Great Britain and Northern Ireland
                      </option>
                      <option value="Republic of Poland">
                        Republic of Poland
                      </option>
                    </>
                  ) : ( committee1 == "AIPPM") ? (
                    <>
                      <option value="Select">Select Portfolio</option>
                      <option value="Narendra Modi">Narendra Modi</option>
                      <option value="Arun Jaitley">Arun Jaitley</option>
                      <option value="B S Yeddurappa">B S Yeddurappa</option>
                      <option value="Anurag Thakur">Anurag Thakur</option>
                      <option value="LK Advani">LK Advani</option>
                      <option value="Hemanth Biswas Sharma">
                        Hemanth Biswas Sharma
                      </option>
                      <option value="Amit Shah">Amit Shah</option>
                      <option value="Devendra Fadnavis">
                        Devendra Fadnavis
                      </option>
                      <option value="Smruti Irani">Smruti Irani</option>
                      <option value="Narotam Mishra">Narotam Mishra</option>
                      <option value="Jyotiraditya Scindhi">
                        Jyotiraditya Scindhi
                      </option>
                      <option value="Sibraj Singh">Sibraj Singh</option>
                      <option value="Kapil Mishra">Kapil Mishra</option>
                      <option value="Dharmendra Pradhan">
                        Dharmendra Pradhan
                      </option>
                      <option value="Jp Nadda">Jp Nadda</option>
                      <option value="Yogi Adityanath">Yogi Adityanath</option>
                      <option value="Ravi Shankar Prasad">
                        Ravi Shankar Prasad
                      </option>
                      <option value="Kiran Rijuju">Kiran Rijuju</option>
                      <option value="Gaurav Bhatia">Gaurav Bhatia</option>
                      <option value="Giriraj Singh">Giriraj Singh</option>
                      <option value="Nalin Kohli">Nalin Kohli</option>
                      <option value="Harsh Vardhan">Harsh Vardhan</option>
                      <option value="Murli Manohar Joshi">
                        Murli Manohar Joshi
                      </option>
                      <option value="Rajnath Singh">Rajnath Singh</option>
                      <option value="Rajyavardhan Singh Rathore">
                        Rajyavardhan Singh Rathore
                      </option>
                      <option value="Shivraj Singh Chouhan">
                        Shivraj Singh Chouhan
                      </option>
                      <option value="Subramanian Swamy">
                        Subramanian Swamy
                      </option>
                      <option value="Yashwant Sinha">Yashwant Sinha</option>
                      <option value="Piyush Goyal">Piyush Goyal</option>
                      <option value="Rajnath Singh">Rajnath Singh</option>
                      <option value="V K Singh">V K Singh</option>
                      <option value="Vijay Goyal">Vijay Goyal</option>
                      <option value="Bhupender Yadav">Bhupender Yadav</option>
                      <option value="Rameswar Teli">Rameswar Teli</option>
                      <option value="Santosh Gangwar">Santosh Gangwar</option>
                      <option value="Rahul Gandhi">Rahul Gandhi</option>
                      <option value="A K Antony">A K Antony</option>
                      <option value="Priyanka Gandhi">Priyanka Gandhi</option>
                      <option value="Ashok Gehlot">Ashok Gehlot</option>
                      <option value="Sachin Pilot">Sachin Pilot</option>
                      <option value="Digvijay Singh">Digvijay Singh</option>
                      <option value="Abhishek Manusinghvi">
                        Abhishek Manusinghvi
                      </option>
                      <option value="Sonia Gandhi">Sonia Gandhi</option>
                      <option value="Bhupendra Singh Baghela">
                        
                        Bhupendra Singh Baghela
                      </option>
                      <option value="Kamal Nath">Kamal Nath</option>
                      <option value="Salman Khurshid">Salman Khurshid</option>
                      <option value="Supriya Srinet">Supriya Srinet</option>
                      <option value="Hardik Patel">Hardik Patel</option>
                      <option value="Sashi Tharoor">Sashi Tharoor</option>
                      <option value="Ahmad Patel">Ahmad Patel</option>
                      <option value="Anand Sharma">Anand Sharma</option>
                      <option value="Kamak Nath">Kamak Nath</option>
                      <option value="Kapil Sibal">Kapil Sibal</option>
                      <option value="P Chidambaram">P Chidambaram</option>
                      <option value="Sanjay Raut">Sanjay Raut</option>
                      <option value="Uddhav Thackeray">Uddhav Thackeray</option>
                      <option value="Aditya Thackeray">Aditya Thackeray</option>
                      <option value="Mamta Bannerjee">Mamta Bannerjee</option>
                      <option value="Abhishek Banerjee">
                        Abhishek Banerjee
                      </option>
                      <option value="Derek O'Brian">Derek O'Brian</option>
                      <option value="SHARAD  PAWAR">SHARAD PAWAR</option>
                      <option value="Nitish Kumar">Nitish Kumar</option>
                      <option value="Akhilesh Yadav">Akhilesh Yadav</option>
                      <option value="Mulayam Singh Yadav">
                        Mulayam Singh Yadav
                      </option>
                      <option value="Tejasvi Yadav">Tejasvi Yadav</option>
                      <option value="Arvind Kejriwal">Arvind Kejriwal</option>
                      <option value="Raghav Chadha">Raghav Chadha</option>
                      <option value="Manish Sishodia">Manish Sishodia</option>
                      <option value="MK Stalin">MK Stalin</option>
                      <option value="Asaduddin Owaisi">Asaduddin Owaisi</option>
                      <option value="E K Palaniswami">E K Palaniswami</option>
                      <option value="O Panneerselvam">O Panneerselvam</option>
                      <option value="H D Beve Gowda">H D Beve Gowda</option>
                      <option value="HD Kumaraswamy">HD Kumaraswamy</option>
                      <option value="N Chandrsbabu Naidu">
                        N Chandrsbabu Naidu
                      </option>
                      <option value="Pinarayi Vijayan">Pinarayi Vijayan</option>
                      <option value="Sitaram Yechury">Sitaram Yechury</option>
                      <option value="Raj Thackeray">Raj Thackeray</option>
                      <option value="Ram Vilas Paswan">Ram Vilas Paswan</option>
                      <option value="Chirag Paswan">Chirag Paswan</option>
                      <option value="Mayawati">Mayawati</option>
                      <option value="Nodeep Kaur">Nodeep Kaur</option>
                      <option value="Aruna Roy">Aruna Roy</option>
                      <option value="Anannya Bhattacharjee">
                        Anannya Bhattacharjee
                      </option>
                      <option value="Shanta Sinha">Shanta Sinha</option>
                      <option value="Sunitha Krishnan">Sunitha Krishnan</option>
                      <option value="Nalini Jameela">Nalini Jameela</option>
                      <option value="Ruchira Gupta">Ruchira Gupta</option>
                      <option value="Ashok Row Kavi">Ashok Row Kavi</option>
                      <option value="Gopi Shankar Madurai">
                        Gopi Shankar Madurai
                      </option>
                    </>
                  ) : (
                    <option value="select...">Select..</option>
                  )}
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p1">Preference 2:</p>
              </div>

              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">Commitee 2</p>
              </div>

              <div className="form-group">
                <select
                  name="preference2"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={committee2}
                  onChange={(e) => {
                    setComittee2(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                   <option value="select commitee"> select commitee..</option>
                  <option value="UNGA-DISEC">UNGA-DISEC</option>
                  <option value="UNGA-SPECPOL">UNGA-SPECPOL</option>
                  <option value="AIPPM">AIPPM</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">Country 2</p>
              </div>
              <div className="form-group">
                <select
                  name="country2"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={preference2}
                  onChange={(e) => {
                    setPreferences2(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                   {committee2 == "UNGA-DISEC" ? (
                    <>
                      <option value="Select">Select Portfolio</option>
                      <option value="Islamic Emirate of Afghanistan">
                        Islamic Emirate of Afghanistan
                      </option>
                      <option value="Republic of Albania">
                        Republic of Albania
                      </option>
                      <option value="People's Democratic Republic of Algeria">
                        People's Democratic Republic of Algeria
                      </option>
                      <option value="Republic of Angola">
                        Republic of Angola
                      </option>
                      <option value="Argentine Republic">
                        Argentine Republic
                      </option>
                      <option value="Republic of Armenia">
                        Republic of Armenia
                      </option>
                      <option value="Commonwealth of Australia">
                        Commonwealth of Australia
                      </option>
                      <option value="Republic of Austria">
                        Republic of Austria
                      </option>
                      <option value="Republic of Azerbaijan">
                        Republic of Azerbaijan
                      </option>
                      <option value="Kingdom of Bahrain">
                        Kingdom of Bahrain
                      </option>
                      <option value="People's Republic of Bangladesh">
                        People's Republic of Bangladesh
                      </option>
                      <option value="Barbados">Barbados</option>
                      <option value="Republic of Belarus">
                        Republic of Belarus
                      </option>
                      <option value="Kingdom of Bhutan">
                        Kingdom of Bhutan
                      </option>
                      <option value="Federative Republic of Brazil">
                        Federative Republic of Brazil
                      </option>
                      <option value="Republic of Bulgaria">
                        Republic of Bulgaria
                      </option>
                      <option value="Republic of Burundi">
                        Republic of Burundi
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="Republic of Chad">Republic of Chad</option>
                      <option value="Republic of Chile">
                        Republic of Chile
                      </option>
                      <option value="People's Republic of China (PRC)">
                        People's Republic of China (PRC)
                      </option>
                      <option value="Republic of Colombia">
                        Republic of Colombia
                      </option>
                      <option value="Republic of Côte d'Ivoire">
                        Republic of Côte d'Ivoire
                      </option>
                      <option value="Republic of Cuba">Republic of Cuba</option>
                      <option value="Republic of Cyprus">
                        Republic of Cyprus
                      </option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Democratic People's Republic of Korea (DPRK)">
                        Democratic People's Republic of Korea (DPRK)
                      </option>
                      <option value="Democratic Republic of the Congo">
                        Democratic Republic of the Congo
                      </option>
                      <option value="Republic of Djibouti">
                        Republic of Djibouti
                      </option>
                      <option value="Arab Republic of Egypt">
                        Arab Republic of Egypt
                      </option>
                      <option value="Republic of El Salvador">
                        Republic of El Salvador
                      </option>
                      <option value="State of Eritrea">State of Eritrea</option>
                      <option value="Kingdom of Eswatini">
                        Kingdom of Eswatini
                      </option>
                      <option value="Federal Democratic Republic of Ethiopia">
                        Federal Democratic Republic of Ethiopia
                      </option>
                      <option value="Republic of Fiji">Republic of Fiji</option>
                      <option value="French Republic">French Republic</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Federal Republic of Germany">
                        Federal Republic of Germany
                      </option>
                      <option value="Hellenic Republic(Greece)">
                        Hellenic Republic(Greece)
                      </option>
                      <option value="Republic of Haiti">
                        Republic of Haiti
                      </option>
                      <option value="Hungary">Hungary</option>
                      <option value="Republic of India">
                        Republic of India
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Islamic Republic of Iran">
                        Islamic Republic of Iran
                      </option>
                      <option value="Republic of Iraq">Republic of Iraq</option>
                      <option value="Republic of Ireland">
                        Republic of Ireland
                      </option>
                      <option value="State of Israel">State of Israel</option>
                      <option value="Italian Republic">Italian Republic</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Hashemite Kingdom of Jordan">
                        Hashemite Kingdom of Jordan
                      </option>
                      <option value="Republic of Kazakhstan">
                        Republic of Kazakhstan
                      </option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Kyrgyz Republic">Kyrgyz Republic</option>
                      <option value="Republic of Latvia">
                        Republic of Latvia
                      </option>
                      <option value="Republic of Lebanon">
                        Republic of Lebanon
                      </option>
                      <option value="State of Libya">State of Libya</option>
                      <option value="Republic of Madagascar">
                        Republic of Madagascar
                      </option>
                      <option value="Republic of Mauritius">
                        Republic of Mauritius
                      </option>
                      <option value="United Mexican States(Mexico)">
                        United Mexican States(Mexico)
                      </option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Kingdom of Morocco">
                        Kingdom of Morocco
                      </option>
                      <option value="Kingdom of the Netherlands">
                        Kingdom of the Netherlands
                      </option>
                      <option value="Realm of New Zealand">
                        Realm of New Zealand
                      </option>
                      <option value="Federal Republic of Nigeria">
                        Federal Republic of Nigeria
                      </option>
                      <option value="Kingdom of Norway">
                        Kingdom of Norway
                      </option>
                      <option value="Sultanate of Oman">
                        Sultanate of Oman
                      </option>
                      <option value="Islamic Republic of Pakistan">
                        Islamic Republic of Pakistan
                      </option>
                      <option value="Republic of Panama">
                        Republic of Panama
                      </option>
                      <option value="Republic of Peru">Republic of Peru</option>
                      <option value="Republic of the Philippines">
                        Republic of the Philippines
                      </option>
                      <option value="Republic of Poland">
                        Republic of Poland
                      </option>
                      <option value="Portuguese Republic">
                        Portuguese Republic
                      </option>
                      <option value="State of Qatar">State of Qatar</option>
                      <option value="Republic of Korea(ROK)">
                        Republic of Korea(ROK)
                      </option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Independent State of Samoa">
                        Independent State of Samoa
                      </option>
                      <option value="Kingdom of Saudi Arabia (KSA)">
                        Kingdom of Saudi Arabia (KSA)
                      </option>
                      <option value="Republic of Senegal">
                        Republic of Senegal
                      </option>
                      <option value="Republic of Seychelles">
                        Republic of Seychelles
                      </option>
                      <option value="Republic of Singapore">
                        Republic of Singapore
                      </option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Federal Republic of Somalia">
                        Federal Republic of Somalia
                      </option>
                      <option value="Republic of South Africa (RSA)">
                        Republic of South Africa (RSA)
                      </option>
                      <option value="Kingdom of Spain">Kingdom of Spain</option>
                      <option value="Republic of the Sudan">
                        Republic of the Sudan
                      </option>
                      <option value="Swiss Confederation">
                        Swiss Confederation
                      </option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Republic of China (ROC)">
                        Republic of China (ROC)
                      </option>
                      <option value="Kingdom of Thailand">
                        Kingdom of Thailand
                      </option>
                      <option value="Republic of Türkiye">
                        Republic of Türkiye
                      </option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom of Great Britain and Northern Ireland">
                        United Kingdom of Great Britain and Northern Ireland
                      </option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="Bolivarian Republic of Venezuela">
                        Bolivarian Republic of Venezuela
                      </option>
                      <option value="Socialist Republic of Vietnam">
                        Socialist Republic of Vietnam
                      </option>
                      <option value="Republic of Yemen">
                        Republic of Yemen
                      </option>
                    </>
                  ) : (committee2 == "UNGA-SPECPOL") ? (
                    <>
                      <option value="Select">Select Portfolio</option>

                      <option value="State of Israel">State of Israel</option>
                      <option value="State of Palestine">
                        State of Palestine
                      </option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="French Republic">French Republic</option>
                      <option value="Federal Republic of Germany">
                        Federal Republic of Germany
                      </option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Republic of Lebanon">
                        Republic of Lebanon
                      </option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Hashemite Kingdom of Jordan">
                        Hashemite Kingdom of Jordan
                      </option>
                      <option value="Arab Republic of Egypt">
                        Arab Republic of Egypt
                      </option>
                      <option value="Kingdom of Saudi Arabia">
                        Kingdom of Saudi Arabia
                      </option>
                      <option value="Republic of Iraq">Republic of Iraq</option>
                      <option value="Islamic Republic of Iran">
                        Islamic Republic of Iran
                      </option>
                      <option value="Republic of India">
                        Republic of India
                      </option>
                      <option value="People’s Republic of China">
                        People’s Republic of China
                      </option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Plurinational State of Bolivia">
                        Plurinational State of Bolivia
                      </option>
                      <option value="Republic of Chile">
                        Republic of Chile
                      </option>
                      <option value="Republic of Ecuador">
                        Republic of Ecuador
                      </option>
                      <option value="Federal Democratic Republic of Ethiopia">
                        Federal Democratic Republic of Ethiopia
                      </option>
                      <option value="Republic of Tunisia">
                        Republic of Tunisia
                      </option>
                      <option value="United Republic of Tanzania">
                        United Republic of Tanzania
                      </option>
                      <option value="Bolivarian Republic of Venezuela">
                        Bolivarian Republic of Venezuela
                      </option>
                      <option value="Republic of Cuba">Republic of Cuba</option>
                      <option value="Republic of the Congo">
                        Republic of the Congo
                      </option>
                      <option value="Independent State of Papua New Guinea">
                        Independent State of Papua New Guinea
                      </option>
                      <option value="Republic of Fiji">Republic of Fiji</option>
                      <option value="Commonwealth of Dominica">
                        Commonwealth of Dominica
                      </option>
                      <option value="Islamic Emirate of Afghanistan">
                        Islamic Emirate of Afghanistan
                      </option>
                      <option value="Commonwealth of Australia">
                        Commonwealth of Australia
                      </option>
                      <option value="Federative Republic of Brazil">
                        Federative Republic of Brazil
                      </option>
                      <option value="Democratic People's Republic of Korea">
                        Democratic People's Republic of Korea
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="Kingdom of Belgium">
                        Kingdom of Belgium
                      </option>
                      <option value="Republic of Italy">
                        Republic of Italy
                      </option>
                      <option value="United Mexican States">
                        United Mexican States
                      </option>
                      <option value="Republic of Belarus">
                        Republic of Belarus
                      </option>
                      <option value="People's Republic of Bangladesh">
                        People's Republic of Bangladesh
                      </option>
                      <option value="Islamic Republic of Pakistan">
                        Islamic Republic of Pakistan
                      </option>
                      <option value="Realm of New Zealand">
                        Realm of New Zealand
                      </option>
                      <option value="Japan">Japan</option>
                      <option value="Republic of Singapore">
                        Republic of Singapore
                      </option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="Republic of Austria">
                        Republic of Austria
                      </option>
                      <option value="Kingdom of Bhutan">
                        Kingdom of Bhutan
                      </option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Republic of Mauritius">
                        Republic of Mauritius
                      </option>
                      <option value="State of Qatar">State of Qatar</option>
                      <option value="Kingdom of Thailand">
                        Kingdom of Thailand
                      </option>
                      <option value="Republic of the Philippines">
                        Republic of the Philippines
                      </option>
                      <option value="Kingdom of Norway">
                        Kingdom of Norway
                      </option>
                      <option value="Kingdom of Spain">Kingdom of Spain</option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Argentine Republic">
                        Argentine Republic
                      </option>
                      <option value="Republic of Bulgaria">
                        Republic of Bulgaria
                      </option>
                      <option value="Swiss Confederation">
                        Swiss Confederation
                      </option>
                      <option value="United Kingdom of Great Britain and Northern Ireland">
                        United Kingdom of Great Britain and Northern Ireland
                      </option>
                      <option value="Republic of Poland">
                        Republic of Poland
                      </option>
                    </>
                  ) : ( committee2 == "AIPPM") ? (
                    <>
                      <option value="Select">Select Portfolio</option>
                      <option value="Narendra Modi">Narendra Modi</option>
                      <option value="Arun Jaitley">Arun Jaitley</option>
                      <option value="B S Yeddurappa">B S Yeddurappa</option>
                      <option value="Anurag Thakur">Anurag Thakur</option>
                      <option value="LK Advani">LK Advani</option>
                      <option value="Hemanth Biswas Sharma">
                        Hemanth Biswas Sharma
                      </option>
                      <option value="Amit Shah">Amit Shah</option>
                      <option value="Devendra Fadnavis">
                        Devendra Fadnavis
                      </option>
                      <option value="Smruti Irani">Smruti Irani</option>
                      <option value="Narotam Mishra">Narotam Mishra</option>
                      <option value="Jyotiraditya Scindhi">
                        Jyotiraditya Scindhi
                      </option>
                      <option value="Sibraj Singh">Sibraj Singh</option>
                      <option value="Kapil Mishra">Kapil Mishra</option>
                      <option value="Dharmendra Pradhan">
                        Dharmendra Pradhan
                      </option>
                      <option value="Jp Nadda">Jp Nadda</option>
                      <option value="Yogi Adityanath">Yogi Adityanath</option>
                      <option value="Ravi Shankar Prasad">
                        Ravi Shankar Prasad
                      </option>
                      <option value="Kiran Rijuju">Kiran Rijuju</option>
                      <option value="Gaurav Bhatia">Gaurav Bhatia</option>
                      <option value="Giriraj Singh">Giriraj Singh</option>
                      <option value="Nalin Kohli">Nalin Kohli</option>
                      <option value="Harsh Vardhan">Harsh Vardhan</option>
                      <option value="Murli Manohar Joshi">
                        Murli Manohar Joshi
                      </option>
                      <option value="Rajnath Singh">Rajnath Singh</option>
                      <option value="Rajyavardhan Singh Rathore">
                        Rajyavardhan Singh Rathore
                      </option>
                      <option value="Shivraj Singh Chouhan">
                        Shivraj Singh Chouhan
                      </option>
                      <option value="Subramanian Swamy">
                        Subramanian Swamy
                      </option>
                      <option value="Yashwant Sinha">Yashwant Sinha</option>
                      <option value="Piyush Goyal">Piyush Goyal</option>
                      <option value="Rajnath Singh">Rajnath Singh</option>
                      <option value="V K Singh">V K Singh</option>
                      <option value="Vijay Goyal">Vijay Goyal</option>
                      <option value="Bhupender Yadav">Bhupender Yadav</option>
                      <option value="Rameswar Teli">Rameswar Teli</option>
                      <option value="Santosh Gangwar">Santosh Gangwar</option>
                      <option value="Rahul Gandhi">Rahul Gandhi</option>
                      <option value="A K Antony">A K Antony</option>
                      <option value="Priyanka Gandhi">Priyanka Gandhi</option>
                      <option value="Ashok Gehlot">Ashok Gehlot</option>
                      <option value="Sachin Pilot">Sachin Pilot</option>
                      <option value="Digvijay Singh">Digvijay Singh</option>
                      <option value="Abhishek Manusinghvi">
                        Abhishek Manusinghvi
                      </option>
                      <option value="Sonia Gandhi">Sonia Gandhi</option>
                      <option value="Bhupendra Singh Baghela">
                        
                        Bhupendra Singh Baghela
                      </option>
                      <option value="Kamal Nath">Kamal Nath</option>
                      <option value="Salman Khurshid">Salman Khurshid</option>
                      <option value="Supriya Srinet">Supriya Srinet</option>
                      <option value="Hardik Patel">Hardik Patel</option>
                      <option value="Sashi Tharoor">Sashi Tharoor</option>
                      <option value="Ahmad Patel">Ahmad Patel</option>
                      <option value="Anand Sharma">Anand Sharma</option>
                      <option value="Kamak Nath">Kamak Nath</option>
                      <option value="Kapil Sibal">Kapil Sibal</option>
                      <option value="P Chidambaram">P Chidambaram</option>
                      <option value="Sanjay Raut">Sanjay Raut</option>
                      <option value="Uddhav Thackeray">Uddhav Thackeray</option>
                      <option value="Aditya Thackeray">Aditya Thackeray</option>
                      <option value="Mamta Bannerjee">Mamta Bannerjee</option>
                      <option value="Abhishek Banerjee">
                        Abhishek Banerjee
                      </option>
                      <option value="Derek O'Brian">Derek O'Brian</option>
                      <option value="SHARAD  PAWAR">SHARAD PAWAR</option>
                      <option value="Nitish Kumar">Nitish Kumar</option>
                      <option value="Akhilesh Yadav">Akhilesh Yadav</option>
                      <option value="Mulayam Singh Yadav">
                        Mulayam Singh Yadav
                      </option>
                      <option value="Tejasvi Yadav">Tejasvi Yadav</option>
                      <option value="Arvind Kejriwal">Arvind Kejriwal</option>
                      <option value="Raghav Chadha">Raghav Chadha</option>
                      <option value="Manish Sishodia">Manish Sishodia</option>
                      <option value="MK Stalin">MK Stalin</option>
                      <option value="Asaduddin Owaisi">Asaduddin Owaisi</option>
                      <option value="E K Palaniswami">E K Palaniswami</option>
                      <option value="O Panneerselvam">O Panneerselvam</option>
                      <option value="H D Beve Gowda">H D Beve Gowda</option>
                      <option value="HD Kumaraswamy">HD Kumaraswamy</option>
                      <option value="N Chandrsbabu Naidu">
                        N Chandrsbabu Naidu
                      </option>
                      <option value="Pinarayi Vijayan">Pinarayi Vijayan</option>
                      <option value="Sitaram Yechury">Sitaram Yechury</option>
                      <option value="Raj Thackeray">Raj Thackeray</option>
                      <option value="Ram Vilas Paswan">Ram Vilas Paswan</option>
                      <option value="Chirag Paswan">Chirag Paswan</option>
                      <option value="Mayawati">Mayawati</option>
                      <option value="Nodeep Kaur">Nodeep Kaur</option>
                      <option value="Aruna Roy">Aruna Roy</option>
                      <option value="Anannya Bhattacharjee">
                        Anannya Bhattacharjee
                      </option>
                      <option value="Shanta Sinha">Shanta Sinha</option>
                      <option value="Sunitha Krishnan">Sunitha Krishnan</option>
                      <option value="Nalini Jameela">Nalini Jameela</option>
                      <option value="Ruchira Gupta">Ruchira Gupta</option>
                      <option value="Ashok Row Kavi">Ashok Row Kavi</option>
                      <option value="Gopi Shankar Madurai">
                        Gopi Shankar Madurai
                      </option>
                    </>
                  ) : (
                    <option value="select...">Select..</option>
                  )}
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>

              <div className="para-container">
                <p className="mb-4 pb-3 reg-p1">Preference 3:</p>
              </div>

              <div className="para-container">
                <p className="mb-4 pb-3 reg-p"> Commitee 3</p>
              </div>

              <div className="form-group">
                <select
                  name="commitee3"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={committee3}
                  onChange={(e) => {
                    setComittee3(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                   <option value="select commitee"> select commitee..</option>
                  <option value="UNGA-DISEC">UNGA-DISEC</option>
                  <option value="UNGA-SPECPOL">UNGA-SPECPOL</option>
                  <option value="AIPPM">AIPPM</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">Country 3</p>
              </div>
              <div className="form-group">
                <select
                  name="preference3"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={preference3}
                  onChange={(e) => {
                    setPreferences3(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                   {committee3 == "UNGA-DISEC" ? (
                    <>
                      <option value="Select">Select Portfolio</option>
                      <option value="Islamic Emirate of Afghanistan">
                        Islamic Emirate of Afghanistan
                      </option>
                      <option value="Republic of Albania">
                        Republic of Albania
                      </option>
                      <option value="People's Democratic Republic of Algeria">
                        People's Democratic Republic of Algeria
                      </option>
                      <option value="Republic of Angola">
                        Republic of Angola
                      </option>
                      <option value="Argentine Republic">
                        Argentine Republic
                      </option>
                      <option value="Republic of Armenia">
                        Republic of Armenia
                      </option>
                      <option value="Commonwealth of Australia">
                        Commonwealth of Australia
                      </option>
                      <option value="Republic of Austria">
                        Republic of Austria
                      </option>
                      <option value="Republic of Azerbaijan">
                        Republic of Azerbaijan
                      </option>
                      <option value="Kingdom of Bahrain">
                        Kingdom of Bahrain
                      </option>
                      <option value="People's Republic of Bangladesh">
                        People's Republic of Bangladesh
                      </option>
                      <option value="Barbados">Barbados</option>
                      <option value="Republic of Belarus">
                        Republic of Belarus
                      </option>
                      <option value="Kingdom of Bhutan">
                        Kingdom of Bhutan
                      </option>
                      <option value="Federative Republic of Brazil">
                        Federative Republic of Brazil
                      </option>
                      <option value="Republic of Bulgaria">
                        Republic of Bulgaria
                      </option>
                      <option value="Republic of Burundi">
                        Republic of Burundi
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="Republic of Chad">Republic of Chad</option>
                      <option value="Republic of Chile">
                        Republic of Chile
                      </option>
                      <option value="People's Republic of China (PRC)">
                        People's Republic of China (PRC)
                      </option>
                      <option value="Republic of Colombia">
                        Republic of Colombia
                      </option>
                      <option value="Republic of Côte d'Ivoire">
                        Republic of Côte d'Ivoire
                      </option>
                      <option value="Republic of Cuba">Republic of Cuba</option>
                      <option value="Republic of Cyprus">
                        Republic of Cyprus
                      </option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Democratic People's Republic of Korea (DPRK)">
                        Democratic People's Republic of Korea (DPRK)
                      </option>
                      <option value="Democratic Republic of the Congo">
                        Democratic Republic of the Congo
                      </option>
                      <option value="Republic of Djibouti">
                        Republic of Djibouti
                      </option>
                      <option value="Arab Republic of Egypt">
                        Arab Republic of Egypt
                      </option>
                      <option value="Republic of El Salvador">
                        Republic of El Salvador
                      </option>
                      <option value="State of Eritrea">State of Eritrea</option>
                      <option value="Kingdom of Eswatini">
                        Kingdom of Eswatini
                      </option>
                      <option value="Federal Democratic Republic of Ethiopia">
                        Federal Democratic Republic of Ethiopia
                      </option>
                      <option value="Republic of Fiji">Republic of Fiji</option>
                      <option value="French Republic">French Republic</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Federal Republic of Germany">
                        Federal Republic of Germany
                      </option>
                      <option value="Hellenic Republic(Greece)">
                        Hellenic Republic(Greece)
                      </option>
                      <option value="Republic of Haiti">
                        Republic of Haiti
                      </option>
                      <option value="Hungary">Hungary</option>
                      <option value="Republic of India">
                        Republic of India
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Islamic Republic of Iran">
                        Islamic Republic of Iran
                      </option>
                      <option value="Republic of Iraq">Republic of Iraq</option>
                      <option value="Republic of Ireland">
                        Republic of Ireland
                      </option>
                      <option value="State of Israel">State of Israel</option>
                      <option value="Italian Republic">Italian Republic</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Hashemite Kingdom of Jordan">
                        Hashemite Kingdom of Jordan
                      </option>
                      <option value="Republic of Kazakhstan">
                        Republic of Kazakhstan
                      </option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Kyrgyz Republic">Kyrgyz Republic</option>
                      <option value="Republic of Latvia">
                        Republic of Latvia
                      </option>
                      <option value="Republic of Lebanon">
                        Republic of Lebanon
                      </option>
                      <option value="State of Libya">State of Libya</option>
                      <option value="Republic of Madagascar">
                        Republic of Madagascar
                      </option>
                      <option value="Republic of Mauritius">
                        Republic of Mauritius
                      </option>
                      <option value="United Mexican States(Mexico)">
                        United Mexican States(Mexico)
                      </option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Kingdom of Morocco">
                        Kingdom of Morocco
                      </option>
                      <option value="Kingdom of the Netherlands">
                        Kingdom of the Netherlands
                      </option>
                      <option value="Realm of New Zealand">
                        Realm of New Zealand
                      </option>
                      <option value="Federal Republic of Nigeria">
                        Federal Republic of Nigeria
                      </option>
                      <option value="Kingdom of Norway">
                        Kingdom of Norway
                      </option>
                      <option value="Sultanate of Oman">
                        Sultanate of Oman
                      </option>
                      <option value="Islamic Republic of Pakistan">
                        Islamic Republic of Pakistan
                      </option>
                      <option value="Republic of Panama">
                        Republic of Panama
                      </option>
                      <option value="Republic of Peru">Republic of Peru</option>
                      <option value="Republic of the Philippines">
                        Republic of the Philippines
                      </option>
                      <option value="Republic of Poland">
                        Republic of Poland
                      </option>
                      <option value="Portuguese Republic">
                        Portuguese Republic
                      </option>
                      <option value="State of Qatar">State of Qatar</option>
                      <option value="Republic of Korea(ROK)">
                        Republic of Korea(ROK)
                      </option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Independent State of Samoa">
                        Independent State of Samoa
                      </option>
                      <option value="Kingdom of Saudi Arabia (KSA)">
                        Kingdom of Saudi Arabia (KSA)
                      </option>
                      <option value="Republic of Senegal">
                        Republic of Senegal
                      </option>
                      <option value="Republic of Seychelles">
                        Republic of Seychelles
                      </option>
                      <option value="Republic of Singapore">
                        Republic of Singapore
                      </option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Federal Republic of Somalia">
                        Federal Republic of Somalia
                      </option>
                      <option value="Republic of South Africa (RSA)">
                        Republic of South Africa (RSA)
                      </option>
                      <option value="Kingdom of Spain">Kingdom of Spain</option>
                      <option value="Republic of the Sudan">
                        Republic of the Sudan
                      </option>
                      <option value="Swiss Confederation">
                        Swiss Confederation
                      </option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Republic of China (ROC)">
                        Republic of China (ROC)
                      </option>
                      <option value="Kingdom of Thailand">
                        Kingdom of Thailand
                      </option>
                      <option value="Republic of Türkiye">
                        Republic of Türkiye
                      </option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom of Great Britain and Northern Ireland">
                        United Kingdom of Great Britain and Northern Ireland
                      </option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="Bolivarian Republic of Venezuela">
                        Bolivarian Republic of Venezuela
                      </option>
                      <option value="Socialist Republic of Vietnam">
                        Socialist Republic of Vietnam
                      </option>
                      <option value="Republic of Yemen">
                        Republic of Yemen
                      </option>
                    </>
                  ) : (committee3 == "UNGA-SPECPOL") ? (
                    <>
                      <option value="Select">Select Portfolio</option>

                      <option value="State of Israel">State of Israel</option>
                      <option value="State of Palestine">
                        State of Palestine
                      </option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="French Republic">French Republic</option>
                      <option value="Federal Republic of Germany">
                        Federal Republic of Germany
                      </option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Republic of Lebanon">
                        Republic of Lebanon
                      </option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Hashemite Kingdom of Jordan">
                        Hashemite Kingdom of Jordan
                      </option>
                      <option value="Arab Republic of Egypt">
                        Arab Republic of Egypt
                      </option>
                      <option value="Kingdom of Saudi Arabia">
                        Kingdom of Saudi Arabia
                      </option>
                      <option value="Republic of Iraq">Republic of Iraq</option>
                      <option value="Islamic Republic of Iran">
                        Islamic Republic of Iran
                      </option>
                      <option value="Republic of India">
                        Republic of India
                      </option>
                      <option value="People’s Republic of China">
                        People’s Republic of China
                      </option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Plurinational State of Bolivia">
                        Plurinational State of Bolivia
                      </option>
                      <option value="Republic of Chile">
                        Republic of Chile
                      </option>
                      <option value="Republic of Ecuador">
                        Republic of Ecuador
                      </option>
                      <option value="Federal Democratic Republic of Ethiopia">
                        Federal Democratic Republic of Ethiopia
                      </option>
                      <option value="Republic of Tunisia">
                        Republic of Tunisia
                      </option>
                      <option value="United Republic of Tanzania">
                        United Republic of Tanzania
                      </option>
                      <option value="Bolivarian Republic of Venezuela">
                        Bolivarian Republic of Venezuela
                      </option>
                      <option value="Republic of Cuba">Republic of Cuba</option>
                      <option value="Republic of the Congo">
                        Republic of the Congo
                      </option>
                      <option value="Independent State of Papua New Guinea">
                        Independent State of Papua New Guinea
                      </option>
                      <option value="Republic of Fiji">Republic of Fiji</option>
                      <option value="Commonwealth of Dominica">
                        Commonwealth of Dominica
                      </option>
                      <option value="Islamic Emirate of Afghanistan">
                        Islamic Emirate of Afghanistan
                      </option>
                      <option value="Commonwealth of Australia">
                        Commonwealth of Australia
                      </option>
                      <option value="Federative Republic of Brazil">
                        Federative Republic of Brazil
                      </option>
                      <option value="Democratic People's Republic of Korea">
                        Democratic People's Republic of Korea
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="Kingdom of Belgium">
                        Kingdom of Belgium
                      </option>
                      <option value="Republic of Italy">
                        Republic of Italy
                      </option>
                      <option value="United Mexican States">
                        United Mexican States
                      </option>
                      <option value="Republic of Belarus">
                        Republic of Belarus
                      </option>
                      <option value="People's Republic of Bangladesh">
                        People's Republic of Bangladesh
                      </option>
                      <option value="Islamic Republic of Pakistan">
                        Islamic Republic of Pakistan
                      </option>
                      <option value="Realm of New Zealand">
                        Realm of New Zealand
                      </option>
                      <option value="Japan">Japan</option>
                      <option value="Republic of Singapore">
                        Republic of Singapore
                      </option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="Republic of Austria">
                        Republic of Austria
                      </option>
                      <option value="Kingdom of Bhutan">
                        Kingdom of Bhutan
                      </option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Republic of Mauritius">
                        Republic of Mauritius
                      </option>
                      <option value="State of Qatar">State of Qatar</option>
                      <option value="Kingdom of Thailand">
                        Kingdom of Thailand
                      </option>
                      <option value="Republic of the Philippines">
                        Republic of the Philippines
                      </option>
                      <option value="Kingdom of Norway">
                        Kingdom of Norway
                      </option>
                      <option value="Kingdom of Spain">Kingdom of Spain</option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Argentine Republic">
                        Argentine Republic
                      </option>
                      <option value="Republic of Bulgaria">
                        Republic of Bulgaria
                      </option>
                      <option value="Swiss Confederation">
                        Swiss Confederation
                      </option>
                      <option value="United Kingdom of Great Britain and Northern Ireland">
                        United Kingdom of Great Britain and Northern Ireland
                      </option>
                      <option value="Republic of Poland">
                        Republic of Poland
                      </option>
                    </>
                  ) : ( committee3 == "AIPPM") ? (
                    <>
                      <option value="Select">Select Portfolio</option>
                      <option value="Narendra Modi">Narendra Modi</option>
                      <option value="Arun Jaitley">Arun Jaitley</option>
                      <option value="B S Yeddurappa">B S Yeddurappa</option>
                      <option value="Anurag Thakur">Anurag Thakur</option>
                      <option value="LK Advani">LK Advani</option>
                      <option value="Hemanth Biswas Sharma">
                        Hemanth Biswas Sharma
                      </option>
                      <option value="Amit Shah">Amit Shah</option>
                      <option value="Devendra Fadnavis">
                        Devendra Fadnavis
                      </option>
                      <option value="Smruti Irani">Smruti Irani</option>
                      <option value="Narotam Mishra">Narotam Mishra</option>
                      <option value="Jyotiraditya Scindhi">
                        Jyotiraditya Scindhi
                      </option>
                      <option value="Sibraj Singh">Sibraj Singh</option>
                      <option value="Kapil Mishra">Kapil Mishra</option>
                      <option value="Dharmendra Pradhan">
                        Dharmendra Pradhan
                      </option>
                      <option value="Jp Nadda">Jp Nadda</option>
                      <option value="Yogi Adityanath">Yogi Adityanath</option>
                      <option value="Ravi Shankar Prasad">
                        Ravi Shankar Prasad
                      </option>
                      <option value="Kiran Rijuju">Kiran Rijuju</option>
                      <option value="Gaurav Bhatia">Gaurav Bhatia</option>
                      <option value="Giriraj Singh">Giriraj Singh</option>
                      <option value="Nalin Kohli">Nalin Kohli</option>
                      <option value="Harsh Vardhan">Harsh Vardhan</option>
                      <option value="Murli Manohar Joshi">
                        Murli Manohar Joshi
                      </option>
                      <option value="Rajnath Singh">Rajnath Singh</option>
                      <option value="Rajyavardhan Singh Rathore">
                        Rajyavardhan Singh Rathore
                      </option>
                      <option value="Shivraj Singh Chouhan">
                        Shivraj Singh Chouhan
                      </option>
                      <option value="Subramanian Swamy">
                        Subramanian Swamy
                      </option>
                      <option value="Yashwant Sinha">Yashwant Sinha</option>
                      <option value="Piyush Goyal">Piyush Goyal</option>
                      <option value="Rajnath Singh">Rajnath Singh</option>
                      <option value="V K Singh">V K Singh</option>
                      <option value="Vijay Goyal">Vijay Goyal</option>
                      <option value="Bhupender Yadav">Bhupender Yadav</option>
                      <option value="Rameswar Teli">Rameswar Teli</option>
                      <option value="Santosh Gangwar">Santosh Gangwar</option>
                      <option value="Rahul Gandhi">Rahul Gandhi</option>
                      <option value="A K Antony">A K Antony</option>
                      <option value="Priyanka Gandhi">Priyanka Gandhi</option>
                      <option value="Ashok Gehlot">Ashok Gehlot</option>
                      <option value="Sachin Pilot">Sachin Pilot</option>
                      <option value="Digvijay Singh">Digvijay Singh</option>
                      <option value="Abhishek Manusinghvi">
                        Abhishek Manusinghvi
                      </option>
                      <option value="Sonia Gandhi">Sonia Gandhi</option>
                      <option value="Bhupendra Singh Baghela">
                        
                        Bhupendra Singh Baghela
                      </option>
                      <option value="Kamal Nath">Kamal Nath</option>
                      <option value="Salman Khurshid">Salman Khurshid</option>
                      <option value="Supriya Srinet">Supriya Srinet</option>
                      <option value="Hardik Patel">Hardik Patel</option>
                      <option value="Sashi Tharoor">Sashi Tharoor</option>
                      <option value="Ahmad Patel">Ahmad Patel</option>
                      <option value="Anand Sharma">Anand Sharma</option>
                      <option value="Kamak Nath">Kamak Nath</option>
                      <option value="Kapil Sibal">Kapil Sibal</option>
                      <option value="P Chidambaram">P Chidambaram</option>
                      <option value="Sanjay Raut">Sanjay Raut</option>
                      <option value="Uddhav Thackeray">Uddhav Thackeray</option>
                      <option value="Aditya Thackeray">Aditya Thackeray</option>
                      <option value="Mamta Bannerjee">Mamta Bannerjee</option>
                      <option value="Abhishek Banerjee">
                        Abhishek Banerjee
                      </option>
                      <option value="Derek O'Brian">Derek O'Brian</option>
                      <option value="SHARAD  PAWAR">SHARAD PAWAR</option>
                      <option value="Nitish Kumar">Nitish Kumar</option>
                      <option value="Akhilesh Yadav">Akhilesh Yadav</option>
                      <option value="Mulayam Singh Yadav">
                        Mulayam Singh Yadav
                      </option>
                      <option value="Tejasvi Yadav">Tejasvi Yadav</option>
                      <option value="Arvind Kejriwal">Arvind Kejriwal</option>
                      <option value="Raghav Chadha">Raghav Chadha</option>
                      <option value="Manish Sishodia">Manish Sishodia</option>
                      <option value="MK Stalin">MK Stalin</option>
                      <option value="Asaduddin Owaisi">Asaduddin Owaisi</option>
                      <option value="E K Palaniswami">E K Palaniswami</option>
                      <option value="O Panneerselvam">O Panneerselvam</option>
                      <option value="H D Beve Gowda">H D Beve Gowda</option>
                      <option value="HD Kumaraswamy">HD Kumaraswamy</option>
                      <option value="N Chandrsbabu Naidu">
                        N Chandrsbabu Naidu
                      </option>
                      <option value="Pinarayi Vijayan">Pinarayi Vijayan</option>
                      <option value="Sitaram Yechury">Sitaram Yechury</option>
                      <option value="Raj Thackeray">Raj Thackeray</option>
                      <option value="Ram Vilas Paswan">Ram Vilas Paswan</option>
                      <option value="Chirag Paswan">Chirag Paswan</option>
                      <option value="Mayawati">Mayawati</option>
                      <option value="Nodeep Kaur">Nodeep Kaur</option>
                      <option value="Aruna Roy">Aruna Roy</option>
                      <option value="Anannya Bhattacharjee">
                        Anannya Bhattacharjee
                      </option>
                      <option value="Shanta Sinha">Shanta Sinha</option>
                      <option value="Sunitha Krishnan">Sunitha Krishnan</option>
                      <option value="Nalini Jameela">Nalini Jameela</option>
                      <option value="Ruchira Gupta">Ruchira Gupta</option>
                      <option value="Ashok Row Kavi">Ashok Row Kavi</option>
                      <option value="Gopi Shankar Madurai">
                        Gopi Shankar Madurai
                      </option>
                    </>
                  ) : (
                    <option value="select...">Select..</option>
                  )}
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="from-group">
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">Experience</p>
              </div>
                <input
                  className="form-style"
                  placeholder="Experience"
                  name="Experience"
                  id="logemail"
                  type="email"
                  data-type="text"
                  autoComplete="off"
                  value={experience}
                  onChange={(e) => {
                    setExperience(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="btn-container">
                <button   className="btn mt-4"  onClick={postData}>
                  submit
                </button>
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
                  type="text"
                  name="name"
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
                  {formik.touched.Name && formik.errors.Name ? (
                      <div>{formik.errors.Name}</div>
                    ) : null}
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">EMAIL ID</p>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
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
                 {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">PHONE NUMBER</p>
              </div>
              <div className="form-group">
                <input
                  name="phone number"
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
                {formik.touched.phone && formik.errors.phone ? (
                  <div>{formik.errors.phone}</div>
                ) : null}
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">INSTITUTION</p>
              </div>
              <div className="form-group">
                <select
                  name="institution"
                  className="form-style-2"
                  id="logemail"
                  type="text"
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
             
              <div
                className="form-group"
                style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                 <div className="para-container">
                <p className="mb-4 pb-3 reg-p">ROLL NUMBER</p>
              </div>
                <input
                  className="form-style"
                  placeholder="Roll Number"
                  name="roll number"
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
             
              <div
                className="form-group"
                style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                 <div className="para-container">
                <p className="mb-4 pb-3 reg-p">YEAR</p>
              </div>
                <select
                  name="year"
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
              <div  className="form-group"
                style={
                  institute == "NIT Durgapur"
                    ? { display: "block" }
                    : { display: "none" }
                }>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">HALL</p>
              </div>
                <select
                  name="hall"
                  className="form-style-2"
                  id="logemail"
                  placeholder="HALL"
                  value={hall}
                  onChange={(e) => {
                    setHall(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="HALL 1"> HALL 1</option>
                  <option value="HALL 1">HALL 1</option>
                  <option value="HALL 1"> HALL 1</option>
                  <option value="HALL 1"> HALL 1</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div
                className="form-group"
                style={
                  institute == "OTHER INSTITUTION"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                 <div className="para-container">
                <p className="mb-4 pb-3 reg-p">Institute name</p>
              </div>
                <input
                  className="form-style"
                  placeholder="Roll Number"
                  name="institution name"
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
                <p className="mb-4 pb-3 reg-p1">Preference 1:</p>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">Commitee 1</p>
              </div>
              <div className="form-group">
                <select
                  name="commitee1"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={committee1}
                  onChange={(e) => {
                    setComittee1(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option defaultValue="Select">Select Committee</option>
                  <option value="UNGA-DISEC-IP">UNGA-DISEC-IP</option>
                  <option value="UNGA-SPECPOL-IP">UNGA-SPECPOL-IP</option>
                  <option value="AIPPM-IP">AIPPM-IP</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">Press 1</p>
              </div>
              <div className="form-group">
                <select
                  name="press1"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={preference1}
                  onChange={(e) => {
                    setPreferences1(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  {committee1 == "AIPPM-IP" ? (
                    <>
                      <option value="Select">Select Press</option>
                      <option value="Hindustan Times">Hindustan Times</option>
                      <option value="Times Of India">Times Of India</option>
                      <option value="The Hindu">The Hindu</option>
                    </>
                  ) : (
                    <>
                      <option value="Select">Select Press</option>
                      <option value="United Press International">United Press International</option>
                      <option value="Associated Press">Associated Press</option>
                      <option value="Reuters">Reuters</option>
                    </>
                  )}
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p1">Preference 2:</p>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">Commitee 2</p>
              </div>
              <div className="form-group">
                <select
                  name="commitee2"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={committee2}
                  onChange={(e) => {
                    setComittee2(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                   <option defaultValue="Select">Select Committee</option>
                  <option value="UNGA-DISEC-IP">UNGA-DISEC-IP</option>
                  <option value="UNGA-SPECPOL-IP">UNGA-SPECPOL-IP</option>
                  <option value="AIPPM-IP">AIPPM-IP</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">Press 2</p>
              </div>
              <div className="form-group">
                <select
                  name="press2"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={preference2}
                  onChange={(e) => {
                    setPreferences2(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                   {committee2 == "AIPPM-IP" ? (
                    <>
                      <option value="Select">Select Press</option>
                      <option value="Hindustan Times">Hindustan Times</option>
                      <option value="Times Of India">Times Of India</option>
                      <option value="The Hindu">The Hindu</option>
                    </>
                  ) : (
                    <>
                      <option value="Select">Select Press</option>
                      <option value="United Press International">United Press International</option>
                      <option value="Associated Press">Associated Press</option>
                      <option value="Reuters">Reuters</option>
                    </>
                  )}
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>

              <div className="para-container">
                <p className="mb-4 pb-3 reg-p1">Preference 3:</p>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">Commitee 3</p>
              </div>
              <div className="form-group">
                <select
                  name="commitee3"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={committee3}
                  onChange={(e) => {
                    setComittee3(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                   <option defaultValue="Select">Select Committee</option>
                  <option value="UNGA-DISEC-IP">UNGA-DISEC-IP</option>
                  <option value="UNGA-SPECPOL-IP">UNGA-SPECPOL-IP</option>
                  <option value="AIPPM-IP">AIPPM-IP</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">Press 3</p>
              </div>
              <div className="form-group">
                <select
                  name="press3"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Commitee"
                  value={preference3}
                  onChange={(e) => {
                    setPreferences3(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                   {committee3== "AIPPM-IP" ? (
                    <>
                      <option value="Select">Select Press</option>
                      <option value="Hindustan Times">Hindustan Times</option>
                      <option value="Times Of India">Times Of India</option>
                      <option value="The Hindu">The Hindu</option>
                    </>
                  ) : (
                    <>
                      <option value="Select">Select Press</option>
                      <option value="United Press International">United Press International</option>
                      <option value="Associated Press">Associated Press</option>
                      <option value="Reuters">Reuters</option>
                    </>
                  )}
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="from-group">
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">Experience</p>
              </div>
                <input
                  className="form-style"
                  placeholder="Experience"
                  name="Experience"
                  id="logemail"
                  type="email"
                  data-type="text"
                  autoComplete="off"
                  value={experience}
                  onChange={(e) => {
                    setExperience(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="btn-container">
                <button   className="btn mt-4"  onClick={postData}>
                  submit
                </button>
              </div>
               
            </div>
          </div>
        </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </>
  );
}

export default RegisterPage;
