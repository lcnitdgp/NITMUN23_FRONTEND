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
  const [instName, setInstName] = useState("");

  const postData = async (e) => {
    e.preventDefault();
     
    await axios
      .post("https://nitmun-xii-backend.onrender.com/api/register", {
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
        toast.success("Submitted.", {
          onClose: () => window.location.reload()
        });
        // window.location("/");
        //window.location.replace = "/";
      })

      .catch((err) => {
         
        console.log(err);
        toast.error("Please enter correct credentials")
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
                <p className="mb-4 pb-3 reg-p">NAME*</p>
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
                     
                  }}
                />
                  {formik.touched.Name && formik.errors.Name ? (
                      <div>{formik.errors.Name}</div>
                    ) : null}
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">EMAIL ID*</p>
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
                     
                  }}
                  value={email}
                />
                 {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">PHONE NUMBER*</p>
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
                     
                  }}
                  value={institute}
                >
                   <option value="Select option">Select option</option>
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
                     
                  }}
                >
                   <option value="Select option">Select option</option>
                  <option value="YEAR 1"> YEAR 1</option>
                  <option value="YEAR 2"> YEAR 2</option>
                  <option value="YEAR 3"> YEAR 3</option>
                  <option value="YEAR 4"> YEAR 4</option>
                  <option value="Other"> Other</option>
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
                     
                  }}
                >
                   <option value="Select option">Select option</option>
                   <option value="HALL 1"> HALL 1</option>
                   <option value="HALL 2"> HALL 2</option>
                   <option value="HALL 3"> HALL 3</option>
                   <option value=" HALL 4"> HALL 4</option>
                   <option value="HALL 5"> HALL 5</option>
                   <option value="HALL 6"> HALL 6</option>
                   <option value="HALL 7"> HALL 7</option>
                   <option value="HALL 8"> HALL 8</option>
                   <option value="HALL 9"> HALL 9</option>
                   <option value="HALL 10"> HALL 10</option>
                   <option value="HALL 11"> HALL 11</option>
                   <option value="HALL 12"> HALL 12</option>
                   <option value="HALL 13"> HALL 13</option>
                   <option value="HALL 14"> HALL 14</option>
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
                  value={instName}
                  onChange={(e) => {
                    setInstName(e.target.value);
                     
                  }}
                />
                <i className="input-icon uil uil-at"></i>
              </div>

              <div className="para-container">
                <p className="mb-4 pb-3 reg-p1">PREFERENCE 1: </p>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">COMMITTEE 1 *</p>
              </div>
              <div className="form-group">
                <select
                  name="preference1"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Committee"
                  value={committee1}
                  onChange={(e) => {
                    setComittee1(e.target.value);
                     
                  }}
                >
                   <option value="select commitee"> select commitee..</option>
                  <option value="UNSC">UNSC</option>
                  <option value="UNGA-SPECPOL">UNGA-SPECPOL</option>
                  <option value="AIPPM">AIPPM</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">  {committee1 == "AIPPM" ? "PERSONALITY 1*" : "COUNTRY 1*"}</p>
              </div>
              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Committee"
                  value={preference1}
                  onChange={(e) => {
                    setPreferences1(e.target.value);
                     
                  }}
                >
                   {committee1 == "UNSC" ? (
                    <>
                      <option value="Select">Select Portfolio</option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="Russia">
                        Russia
                      </option>
                      <option value="United Kingdom">
                        United Kingdom
                      </option>
                      <option value="France">
                        France
                      </option>
                      <option value="China">
                        China
                      </option>
                      <option value="Sudan">
                        Sudan
                      </option>
                      <option value="Egypt">
                        Egypt
                      </option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="Saudi Arabia">
                        Saudi Arabia
                      </option>
                      <option value="Ethiopia">
                        Ethiopia
                      </option>
                      <option value="Chad">
                        Chad
                      </option>
                      <option value="Libya">Libya</option>
                      <option value="Eritrea">
                        Eritrea
                      </option>
                      <option value="South Sudan">
                        South Sudan
                      </option>
                      <option value="South Sudan">
                        South Sudan
                      </option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Israel">
                        Israel
                      </option>
                      <option value="Germany">Germany</option>
                      <option value="Canada">Canada</option>
                      <option value="India">
                        India
                      </option>
                      <option value="Equador">
                        Equador
                      </option>
                      <option value="Albania">
                        Albania
                      </option>
                      <option value="Ghana">
                        Ghana
                      </option>
                      <option value="Central African Union">Central African Union</option>
                      <option value="Nigeria">
                        Nigeria
                      </option>
                      <option value="Yemen">Yemen</option>
                      <option value="Oman">
                        Oman
                      </option>
                      <option value="Qatar">
                        Qatar
                      </option>
                      <option value="Republic of Djibouti">
                        Republic of Djibouti
                      </option>
                      <option value="Uganda">
                        Uganda
                      </option>
                      <option value="Democratic Republic of Congo">
                        Democratic Republic of Congo
                      </option>
                      <option value="Iran">Iran</option>
                      <option value="Kingdom of Eswatini">
                        Kingdom of Eswatini
                      </option>
                      <option value="South Africa">
                        South Africa
                      </option>
                      <option value="Kenya">Kenya</option>
                      <option value="Somalia">Somalia</option>
                      <option value="Turkiye">Turkiye</option>
                      <option value="Italy">
                        Italy
                      </option>
                      <option value="Hellenic Republic(Greece)">
                        Hellenic Republic(Greece)
                      </option>
                      <option value="Spain">
                        Spain
                      </option>
                      <option value="Jordan">Jordan</option>
                      <option value="Seychelles">
                        Seychelles
                      </option>
                      <option value="Pakistan">
                        Pakistan
                      </option>
                      <option value="Brazil">
                        Brazil
                      </option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Australia">
                        Australia
                      </option>
                      <option value="Japan">Japan</option>
                    </>
                  ) : (committee1 == "UNGA-SPECPOL") ? (
                    <>
                      <option value="Select">Select Portfolio</option>

                      <option value="Islamic Emirate of Afghanistan
">Islamic Emiratre of Afghanistan</option>
                      <option value="People's Democratic Republic of Angola">
                      People’s Democratic Republic of Algeria
                      </option>
                      <option value="Republic of Argentina">
                      Republic of Argentina
                      </option>
                      <option value="Republic of Armenia
">Republic of Armenia
</option>
                      <option value="Commonwealth of Australia
">
                        Commonwealth of Australia

                      </option>
                      <option value="Republic of Austria
">Republic of Austria
</option>
                      <option value="Republic of Azerbaijan
">
                       Republic of Azerbaijan

                      </option>
                      <option value="Commonwealth of the Bahamas
">
                       Commonwealth of the Bahamas

                      </option>
                      <option value="Kingdom of Bahrain">
                      Kingdom of Bahrain
                      </option>
                      <option value="People’s Republic of Bangladesh">
                      People’s Republic of Bangladesh
                      </option>
                      <option value="Republic of Belarus
">
                       Republic of Belarus

                      </option>
                      <option value="Kingdom of Belgium">Kingdom of Belgium</option>
                      <option value="Belize
">
                      Belize

                      </option>
                      <option value="Kingdom of Bhutan">
                      Kingdom of Bhutan
                      </option>
                      <option value="Plurinational State of Bolivia">
                      Plurinational State of Bolivia
                      </option>
                      <option value="Federative Republic of Brazil
">
                      Federative Republic of Brazil

                      </option>
                      <option value="Republic of Bulgaria
">
                       Republic of Bulgaria

                      </option>
                      <option value="Kingdom of Cambodia">
                      Kingdom of Cambodia
                      </option>
                      <option value="Canada">
                      Canada
                      </option>
                      <option value="Central African Republic">
                      Central African Republic
                      </option>
                      <option value="Republic of Chile">
                      Republic of Chile
                      </option>
                      <option value="People’s Republic of China
">
                       People’s Republic of China

                      </option>
                      <option value="Republic of Croatia">
                      Republic of Croatia
                      </option>
                      <option value="Republic of Cuba
">
                      Republic of Cuba

                      </option>
                      <option value="
Czech Republic
">
Czech Republic
</option>
                      <option value="Democratic People’s Republic of Korea">
                      Democratic People’s Republic of Korea
                      </option>
                      <option value="Kingdom of Denmark
">
                      Kingdom of Denmark

                      </option>
                      <option value="Arab Republic of Egypt">Arab Republic of Egypt</option>
                      <option value="Republic of Estonia
">
                      Republic of Estonia

                      </option>
                      <option value="Republic of France
">
                      Republic of France

                      </option>
                      <option value="Federal Republic of Germany">
                      Federal Republic of Germany
                      </option>
                      <option value="Hellenic Republic of Greece">
                      Hellenic Republic of Greece
                      </option>
                      <option value="Republic of Guatemala">
                      Republic of Guatemala
                      </option>
                      <option value="Republic of Haitin">
                      Republic of Haiti
                      </option>
                      <option value="Republic of Honduras">Republic of Honduras</option>
                      <option value="Hungary">
                      Hungary
                      </option>
                      <option value="Republic of Iceland">
                      Republic of Iceland
                      </option>
                      <option value="Republic of India
">
                      Republic of India

                      </option>
                      <option value="Republic of Indonesia">
                      Republic of Indonesia
                      </option>
                      <option value="Islamic Republic of Iran">
                      Islamic Republic of Iran
                      </option>
                      <option value="Republic of Iraq
">
                      Republic of Iraq

                      </option>
                      <option value="Ireland
">
                     Ireland

                      </option>
                      <option value="Republic of Italy">Republic of Italy</option>
                      <option value="Japan
">
                       Japan

                      </option>
                      <option value="Hashemite Kingdom of Jordan">
                      Hashemite Kingdom of Jordan
                      </option>
                      <option value="Republic of Kenya
">
                       Republic of Kenya

                      </option>
                      <option value="Republic of Kiribati
">
                      Republic of Kiribati

                      </option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Lao People’s Democratic Republic">
                      Lao People’s Democratic Republic
                      </option>
                      <option value="Republic of Latvia">Republic of Latvia</option>
                      <option value="Republic of Lithuania">
                      Republic of Lithuania
                      </option>
                      <option value="Grand Duchy of Luxembourg">
                      Grand Duchy of Luxembourg
                      </option>
                      <option value="Republic of Malawi
">
                        Republic of Malawi

                      </option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Republic of Marshall Islands">Republic of Marshall Islands</option>
                      <option value="United Mexican States">
                      United Mexican States
                      </option>
                      <option value="Mongolia">
                      Mongolia
                      </option>
                      <option value="Montenegro">
                      Montenegro
                      </option>
                      <option value="Kingdom of Morocco">
                      Kingdom of Morocco
                      </option>
                      <option value="Republic of the Union of Myanmar">
                      Republic of the Union of Myanmar
                      </option>
                      <option value="Republic of Nauru">
                      Republic of Nauru
                      </option>
                      <option value="Kingdom of the Netherlands">
                      Kingdom of the Netherlands
                      </option>
                      <option value="New Zealand">
                      New Zealand
                      </option>
                      <option value="Republic of North Macedonia">
                      Republic of North Macedonia
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
                      <option value="Republic of Palau">
                      Republic of Palau
                      </option>
                      <option value="Republic of Paraguay">
                      Republic of Paraguay
                      </option>
                      <option value="Republic of the Phillippines">
                      Republic of the Phillippines
                      </option>
                      <option value="Republic of Poland">
                      Republic of Poland
                      </option>
                      <option value="Portuguese Republic
">
                      Portuguese Republic
                      </option>
                      <option value="State of Qatar">
                      State of Qatar
                      </option>
                      <option value="Republic of Korea">
                      Republic of Korea
                      </option>
                      <option value="Russian Federation">
                      Russian Federation
                      </option>
                      <option value="Kingdom of Saudi Arabia">
                      Kingdom of Saudi Arabia
                      </option>
                      <option value="Republic of Singapore">
                      Republic of Singapore
                      </option>
                      <option value="Republic of Slovenia
">
                      Republic of Slovenia
                      </option>
                      <option value="Republic of South Africa">
                      Republic of South Africa
                      </option>
                      <option value="Democratic Socialist Republic of Sri Lanka">
                      Democratic Socialist Republic of Sri Lanka
                      </option>
                      <option value="Kingdom of Thailand
">
                    Kingdom of Thailand

                      </option>
                      <option value="Tuvalu">
                      Tuvalu
                      </option>
                      <option value="Republic of Türkiye">
                      Republic of Türkiye
                      </option>
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
                      <option value="Socialist Republic of Viet Nam">
                      Socialist Republic of Viet Nam
                      </option>
                      <option value="State of Palestine (Observer State)">
                      State of Palestine (Observer State)
                      </option>
                      <option value="Vatican City (Observer State)">
                      Vatican City (Observer State)
                      </option>


                    </>
                  ) : ( committee1 == "AIPPM") ? (
                    <>
                      <option value="Select">Select Portfolio</option>
                      <option value="Zoramthanga (Party Leader; not in the Indian Parliament)">Zoramthanga (Party Leader; not in the Indian Parliament)</option>
                      <option value="N. Biren Singh (Chief Minister of Manipur)">N. Biren Singh (Chief Minister of Manipur)</option>
                      <option value="Dr. R.K. Ranjan(MP from Inner Manipur)">Dr. R.K. Ranjan(MP from Inner Manipur)</option>
                      <option value=" Tokheho Yepthomi (MP from Nagaland)">Tokheho Yepthomi (MP from Nagaland)</option>
                      <option value="Pratima Bhowmik (MP from Tripura West)">Pratima Bhowmik (MP from Tripura West)</option>
                      <option value="Rebati Tripura (MP from Tripura East)">
                      Rebati Tripura (MP from Tripura East)
                      </option>
                      <option value="Karam Shyam Singh (Not in the Indian Parliament)
">Karam Shyam Singh (Not in the Indian Parliament)
</option>
                      <option value="Thokchom Radheshyam Singh (Not in the Indian Parliament)">
                      Thokchom Radheshyam Singh (Not in the Indian Parliament)
                      </option>
                      <option value="Nishikant Sing Sapam (Not in the Indian Parliament)
">Nishikant Sing Sapam (Not in the Indian Parliament)
</option>
                      <option value="Khwairakpam Raghumani Singh (Not in the Indian Parliament)
">Khwairakpam Raghumani Singh (Not in the Indian Parliament)
</option>
                      <option value="S Brojen Singh (Not in the Indian Parliament)
">
                       S Brojen Singh (Not in the Indian Parliament)

                      </option>
                      <option value="T Robindro Singh (Not in the Indian Parliament)">T Robindro Singh (Not in the Indian Parliament)</option>
                      <option value="S Rajen Singh (Not in the Indian Parliament)">S Rajen Singh (Not in the Indian Parliament)</option>
                      <option value="S Kebi Devi (Not in the Indian Parliament)
">
                       S Kebi Devi (Not in the Indian Parliament)

                      </option>
                      <option value="Y Radheshyam (Not in the Indian Parliament)
">Y Radheshyam (Not in the Indian Parliament)
</option>
                      <option value="Narendra Modi
">Narendra Modi
</option>
                      <option value="Amit Shah
">
                       Amit Shah

                      </option>
                      <option value="Dr. Subrahmanyam Jaishankar
">Dr. Subrahmanyam Jaishankar
</option>
                      <option value="Smt. Smriti Zubin Irani
">Smt. Smriti Zubin Irani
</option>
                      <option value="Smt. Nirmala Sitharaman
">Smt. Nirmala Sitharaman
</option>
                      <option value="Shri Arjun Munda">Shri Arjun Munda</option>
                      <option value="Shri Anurag Singh Thakur">Shri Anurag Singh Thakur</option>
                      <option value="Rahul Gandhi (MP from Wayanad)">
                      Rahul Gandhi (MP from Wayanad)
                      </option>
                      <option value="Shashi Tharoor (MP from Thiruvananthapuram)">Shashi Tharoor (MP from Thiruvananthapuram)</option>
                      <option value="A K Antony (Not in the Indian Parliament)">
                      A K Antony (Not in the Indian Parliament)
                      </option>
                      <option value="Priyanka Gandhi (Not in the Indian Parliament)">
                      Priyanka Gandhi (Not in the Indian Parliament)
                      </option>
                      <option value="Ashok Gehlot (Chief Minister of Rajasthan)
">
                       Ashok Gehlot (Chief Minister of Rajasthan)

                      </option>
                      <option value="Bhupendra Singh Baghel (Chief Minister of Chhattisgarh)">Bhupendra Singh Baghel (Chief Minister of Chhattisgarh)</option>
                      <option value="Kamal Nath (Not in the Indian Parliament)
">Kamal Nath (Not in the Indian Parliament)
</option>
                      <option value="Salman Khurshid (MP from Rajya Sabha)
">Salman Khurshid (MP from Rajya Sabha)
</option>
                      <option value="Supriya Sule (MP from Baramati)">Supriya Sule (MP from Baramati)</option>
                      <option value="Hardik Patel (Not in the Indian Parliament)">Hardik Patel (Not in the Indian Parliament)</option>
                      <option value="Ahmed Patel (Former MP; Deceased)">Ahmed Patel (Former MP; Deceased)</option>
                      <option value="Anand Sharma (MP from Rajya Sabha)">Anand Sharma (MP from Rajya Sabha)</option>
                      <option value="Kamakhya Prasad Singh Deo (Not in the Indian Parliament)">Kamakhya Prasad Singh Deo (Not in the Indian Parliament)</option>
                      <option value="Kapil Sibal (MP from Rajya Sabha)">Kapil Sibal (MP from Rajya Sabha)</option>
                      <option value="P Chidambaram (MP from Rajya Sabha)">P Chidambaram (MP from Rajya Sabha)</option>
                      <option value="Ch. Ajang Khongsai (Not in the Indian Parliament)">Ch. Ajang Khongsai (Not in the Indian Parliament)</option>
                      <option value="Nitish Kumar (Chief Minister of Bihar)">Nitish Kumar (Chief Minister of Bihar)</option>
                      <option value="Mamata Banerjee (Chief Minister of West Bengal)">Mamata Banerjee (Chief Minister of West Bengal)</option>
                      <option value="Abhishek Banerjee (MP from Diamond Harbour)
">Abhishek Banerjee (MP from Diamond Harbour)
</option>
                      <option value="Derek O'Brien (MP from Rajya Sabha)">
                      Derek O'Brien (MP from Rajya Sabha)
                      </option>
                      <option value="Mahua Moitra (MP from Krishnanagar)">Mahua Moitra (MP from Krishnanagar)</option>
                      <option value="Arvind Kejriwal (Chief Minister of Delhi)">
                        
                      Arvind Kejriwal (Chief Minister of Delhi)
                      </option>
                      <option value="Raghav Chadha (Not in the Indian Parliament)">Raghav Chadha (Not in the Indian Parliament)</option>
                      <option value="Manish Sisodia (Not in the Indian Parliament)">Manish Sisodia (Not in the Indian Parliament)</option>
                      <option value="Akhilesh Yadav (Not in the Indian Parliament)">Akhilesh Yadav (Not in the Indian Parliament)</option>
                      <option value="Mulayam Singh Yadav (Not in the Indian Parliament)">Mulayam Singh Yadav (Not in the Indian Parliament)</option>
                      <option value="Tejasvi Yadav (Not in the Indian Parliament)">Tejasvi Yadav (Not in the Indian Parliament)</option>
                      <option value="H D Deve Gowda (Not in the Indian Parliament)">H D Deve Gowda (Not in the Indian Parliament)</option>
                      <option value="HD Kumaraswamy (Not in the Indian Parliament)">HD Kumaraswamy (Not in the Indian Parliament)</option>
                      <option value="Pinarayi Vijayan (Chief Minister of Kerala)">Pinarayi Vijayan (Chief Minister of Kerala)</option>
                      <option value="Sitaram Yechury (MP from Rajya Sabha)
">Sitaram Yechury (MP from Rajya Sabha)
</option>
                      <option value="Kuldiep Singh (Affiliation not specified; Not in the Indian Parliament)
">Kuldiep Singh (Affiliation not specified; Not in the Indian Parliament)
</option>
                      <option value="All Tribal Students' Union Manipur (ATSUM)
">All Tribal Students' Union Manipur (ATSUM)
</option>
                      <option value="Dr. Bharati Pravin Pawar(Ministry of Tribal Affairs)">Dr. Bharati Pravin Pawar(Ministry of Tribal Affairs)</option>
                      <option value="Dr. L. Murugan(Ministry of Information and Broadcasting)">Dr. L. Murugan(Ministry of Information and Broadcasting)</option>
                      <option value="Shri Devusinh Chauhan(Ministry of Communications)
">Shri Devusinh Chauhan(Ministry of Communications)
</option>
<option value="Shri B.L.Verma(Ministry of Development of North Eastern Region">
                       Shri B.L.Verma(Ministry of Development of North Eastern Region
                      </option>
                      <option value="Shri Raj Nath Singh(Ministry of Defence)

">
                       Shri Raj Nath Singh(Ministry of Defence)


                      </option>

                    </>
                  ) : (
                    <option value="select...">Select..</option>
                  )}
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
                 
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p1">PREFERENCE 2: </p>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">COMMITTEE 2*</p>
              </div>
              <div className="form-group">
                <select
                  name="preference1"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Committee"
                  value={committee2}
                  onChange={(e) => {
                    setComittee2(e.target.value);
                     
                  }}
                >
                   <option value="select commitee"> select commitee..</option>
                  <option value="UNSC">UNSC</option>
                  <option value="UNGA-SPECPOL">UNGA-SPECPOL</option>
                  <option value="AIPPM">AIPPM</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">  {committee2 == "AIPPM" ? "PERSONALITY 2*" : "COUNTRY 2*"}</p>
              </div>
              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Committee"
                  value={preference2}
                  onChange={(e) => {
                    setPreferences2(e.target.value);
                     
                  }}
                >
                   {committee2 == "UNSC" ? (
                    <>
                      <option value="Select">Select Portfolio</option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="Russia">
                        Russia
                      </option>
                      <option value="United Kingdom">
                        United Kingdom
                      </option>
                      <option value="France">
                        France
                      </option>
                      <option value="China">
                        China
                      </option>
                      <option value="Sudan">
                        Sudan
                      </option>
                      <option value="Egypt">
                        Egypt
                      </option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="Saudi Arabia">
                        Saudi Arabia
                      </option>
                      <option value="Ethiopia">
                        Ethiopia
                      </option>
                      <option value="Chad">
                        Chad
                      </option>
                      <option value="Libya">Libya</option>
                      <option value="Eritrea">
                        Eritrea
                      </option>
                      <option value="South Sudan">
                        South Sudan
                      </option>
                      <option value="South Sudan">
                        South Sudan
                      </option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Israel">
                        Israel
                      </option>
                      <option value="Germany">Germany</option>
                      <option value="Canada">Canada</option>
                      <option value="India">
                        India
                      </option>
                      <option value="Equador">
                        Equador
                      </option>
                      <option value="Albania">
                        Albania
                      </option>
                      <option value="Ghana">
                        Ghana
                      </option>
                      <option value="Central African Union">Central African Union</option>
                      <option value="Nigeria">
                        Nigeria
                      </option>
                      <option value="Yemen">Yemen</option>
                      <option value="Oman">
                        Oman
                      </option>
                      <option value="Qatar">
                        Qatar
                      </option>
                      <option value="Republic of Djibouti">
                        Republic of Djibouti
                      </option>
                      <option value="Uganda">
                        Uganda
                      </option>
                      <option value="Democratic Republic of Congo">
                        Democratic Republic of Congo
                      </option>
                      <option value="Iran">Iran</option>
                      <option value="Kingdom of Eswatini">
                        Kingdom of Eswatini
                      </option>
                      <option value="South Africa">
                        South Africa
                      </option>
                      <option value="Kenya">Kenya</option>
                      <option value="Somalia">Somalia</option>
                      <option value="Turkiye">Turkiye</option>
                      <option value="Italy">
                        Italy
                      </option>
                      <option value="Hellenic Republic(Greece)">
                        Hellenic Republic(Greece)
                      </option>
                      <option value="Spain">
                        Spain
                      </option>
                      <option value="Jordan">Jordan</option>
                      <option value="Seychelles">
                        Seychelles
                      </option>
                      <option value="Pakistan">
                        Pakistan
                      </option>
                      <option value="Brazil">
                        Brazil
                      </option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Australia">
                        Australia
                      </option>
                      <option value="Japan">Japan</option>
                    </>
                  ) : (committee2 == "UNGA-SPECPOL") ? (
                    <>
                      <option value="Select">Select Portfolio</option>

                      <option value="Islamic Emirate of Afghanistan
">Islamic Emiratre of Afghanistan</option>
                      <option value="People's Democratic Republic of Angola">
                      People’s Democratic Republic of Algeria
                      </option>
                      <option value="Republic of Argentina">
                      Republic of Argentina
                      </option>
                      <option value="Republic of Armenia
">Republic of Armenia
</option>
                      <option value="Commonwealth of Australia
">
                        Commonwealth of Australia

                      </option>
                      <option value="Republic of Austria
">Republic of Austria
</option>
                      <option value="Republic of Azerbaijan
">
                       Republic of Azerbaijan

                      </option>
                      <option value="Commonwealth of the Bahamas
">
                       Commonwealth of the Bahamas

                      </option>
                      <option value="Kingdom of Bahrain">
                      Kingdom of Bahrain
                      </option>
                      <option value="People’s Republic of Bangladesh">
                      People’s Republic of Bangladesh
                      </option>
                      <option value="Republic of Belarus
">
                       Republic of Belarus

                      </option>
                      <option value="Kingdom of Belgium">Kingdom of Belgium</option>
                      <option value="Belize
">
                      Belize

                      </option>
                      <option value="Kingdom of Bhutan">
                      Kingdom of Bhutan
                      </option>
                      <option value="Plurinational State of Bolivia">
                      Plurinational State of Bolivia
                      </option>
                      <option value="Federative Republic of Brazil
">
                      Federative Republic of Brazil

                      </option>
                      <option value="Republic of Bulgaria
">
                       Republic of Bulgaria

                      </option>
                      <option value="Kingdom of Cambodia">
                      Kingdom of Cambodia
                      </option>
                      <option value="Canada">
                      Canada
                      </option>
                      <option value="Central African Republic">
                      Central African Republic
                      </option>
                      <option value="Republic of Chile">
                      Republic of Chile
                      </option>
                      <option value="People’s Republic of China
">
                       People’s Republic of China

                      </option>
                      <option value="Republic of Croatia">
                      Republic of Croatia
                      </option>
                      <option value="Republic of Cuba
">
                      Republic of Cuba

                      </option>
                      <option value="
Czech Republic
">
Czech Republic
</option>
                      <option value="Democratic People’s Republic of Korea">
                      Democratic People’s Republic of Korea
                      </option>
                      <option value="Kingdom of Denmark
">
                      Kingdom of Denmark

                      </option>
                      <option value="Arab Republic of Egypt">Arab Republic of Egypt</option>
                      <option value="Republic of Estonia
">
                      Republic of Estonia

                      </option>
                      <option value="Republic of France
">
                      Republic of France

                      </option>
                      <option value="Federal Republic of Germany">
                      Federal Republic of Germany
                      </option>
                      <option value="Hellenic Republic of Greece">
                      Hellenic Republic of Greece
                      </option>
                      <option value="Republic of Guatemala">
                      Republic of Guatemala
                      </option>
                      <option value="Republic of Haitin">
                      Republic of Haiti
                      </option>
                      <option value="Republic of Honduras">Republic of Honduras</option>
                      <option value="Hungary">
                      Hungary
                      </option>
                      <option value="Republic of Iceland">
                      Republic of Iceland
                      </option>
                      <option value="Republic of India
">
                      Republic of India

                      </option>
                      <option value="Republic of Indonesia">
                      Republic of Indonesia
                      </option>
                      <option value="Islamic Republic of Iran">
                      Islamic Republic of Iran
                      </option>
                      <option value="Republic of Iraq
">
                      Republic of Iraq

                      </option>
                      <option value="Ireland
">
                     Ireland

                      </option>
                      <option value="Republic of Italy">Republic of Italy</option>
                      <option value="Japan
">
                       Japan

                      </option>
                      <option value="Hashemite Kingdom of Jordan">
                      Hashemite Kingdom of Jordan
                      </option>
                      <option value="Republic of Kenya
">
                       Republic of Kenya

                      </option>
                      <option value="Republic of Kiribati
">
                      Republic of Kiribati

                      </option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Lao People’s Democratic Republic">
                      Lao People’s Democratic Republic
                      </option>
                      <option value="Republic of Latvia">Republic of Latvia</option>
                      <option value="Republic of Lithuania">
                      Republic of Lithuania
                      </option>
                      <option value="Grand Duchy of Luxembourg">
                      Grand Duchy of Luxembourg
                      </option>
                      <option value="Republic of Malawi
">
                        Republic of Malawi

                      </option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Republic of Marshall Islands">Republic of Marshall Islands</option>
                      <option value="United Mexican States">
                      United Mexican States
                      </option>
                      <option value="Mongolia">
                      Mongolia
                      </option>
                      <option value="Montenegro">
                      Montenegro
                      </option>
                      <option value="Kingdom of Morocco">
                      Kingdom of Morocco
                      </option>
                      <option value="Republic of the Union of Myanmar">
                      Republic of the Union of Myanmar
                      </option>
                      <option value="Republic of Nauru">
                      Republic of Nauru
                      </option>
                      <option value="Kingdom of the Netherlands">
                      Kingdom of the Netherlands
                      </option>
                      <option value="New Zealand">
                      New Zealand
                      </option>
                      <option value="Republic of North Macedonia">
                      Republic of North Macedonia
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
                      <option value="Republic of Palau">
                      Republic of Palau
                      </option>
                      <option value="Republic of Paraguay">
                      Republic of Paraguay
                      </option>
                      <option value="Republic of the Phillippines">
                      Republic of the Phillippines
                      </option>
                      <option value="Republic of Poland">
                      Republic of Poland
                      </option>
                      <option value="Portuguese Republic
">
                      Portuguese Republic
                      </option>
                      <option value="State of Qatar">
                      State of Qatar
                      </option>
                      <option value="Republic of Korea">
                      Republic of Korea
                      </option>
                      <option value="Russian Federation">
                      Russian Federation
                      </option>
                      <option value="Kingdom of Saudi Arabia">
                      Kingdom of Saudi Arabia
                      </option>
                      <option value="Republic of Singapore">
                      Republic of Singapore
                      </option>
                      <option value="Republic of Slovenia
">
                      Republic of Slovenia
                      </option>
                      <option value="Republic of South Africa">
                      Republic of South Africa
                      </option>
                      <option value="Democratic Socialist Republic of Sri Lanka">
                      Democratic Socialist Republic of Sri Lanka
                      </option>
                      <option value="Kingdom of Thailand
">
                    Kingdom of Thailand

                      </option>
                      <option value="Tuvalu">
                      Tuvalu
                      </option>
                      <option value="Republic of Türkiye">
                      Republic of Türkiye
                      </option>
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
                      <option value="Socialist Republic of Viet Nam">
                      Socialist Republic of Viet Nam
                      </option>
                      <option value="State of Palestine (Observer State)">
                      State of Palestine (Observer State)
                      </option>
                      <option value="Vatican City (Observer State)">
                      Vatican City (Observer State)
                      </option>


                    </>
                  ) : ( committee2 == "AIPPM") ? (
                    <>
                      <option value="Select">Select Portfolio</option>
                      <option value="Zoramthanga (Party Leader; not in the Indian Parliament)">Zoramthanga (Party Leader; not in the Indian Parliament)</option>
                      <option value="Dr. R.K. Ranjan(MP from Inner Manipur)">Dr. R.K. Ranjan(MP from Inner Manipur)</option>
                      <option value="N. Biren Singh (Chief Minister of Manipur)">N. Biren Singh (Chief Minister of Manipur)</option>
                      <option value="Tokheho Yepthomi (MP from Nagaland)">Tokheho Yepthomi (MP from Nagaland)</option>
                      <option value="Pratima Bhowmik (MP from Tripura West)">Pratima Bhowmik (MP from Tripura West)</option>
                      <option value="Rebati Tripura (MP from Tripura East)">
                      Rebati Tripura (MP from Tripura East)
                      </option>
                      <option value="Karam Shyam Singh (Not in the Indian Parliament)
">Karam Shyam Singh (Not in the Indian Parliament)
</option>
                      <option value="Thokchom Radheshyam Singh (Not in the Indian Parliament)">
                      Thokchom Radheshyam Singh (Not in the Indian Parliament)
                      </option>
                      <option value="Nishikant Sing Sapam (Not in the Indian Parliament)
">Nishikant Sing Sapam (Not in the Indian Parliament)
</option>
                      <option value="Khwairakpam Raghumani Singh (Not in the Indian Parliament)
">Khwairakpam Raghumani Singh (Not in the Indian Parliament)
</option>
                      <option value="S Brojen Singh (Not in the Indian Parliament)
">
                       S Brojen Singh (Not in the Indian Parliament)

                      </option>
                      <option value="T Robindro Singh (Not in the Indian Parliament)">T Robindro Singh (Not in the Indian Parliament)</option>
                      <option value="S Rajen Singh (Not in the Indian Parliament)">S Rajen Singh (Not in the Indian Parliament)</option>
                      <option value="S Kebi Devi (Not in the Indian Parliament)
">
                       S Kebi Devi (Not in the Indian Parliament)

                      </option>
                      <option value="Y Radheshyam (Not in the Indian Parliament)
">Y Radheshyam (Not in the Indian Parliament)
</option>
                      <option value="Narendra Modi
">Narendra Modi
</option>
                      <option value="Amit Shah
">
                       Amit Shah

                      </option>
                      <option value="Dr. Subrahmanyam Jaishankar
">Dr. Subrahmanyam Jaishankar
</option>
                      <option value="Smt. Smriti Zubin Irani
">Smt. Smriti Zubin Irani
</option>
                      <option value="Smt. Nirmala Sitharaman
">Smt. Nirmala Sitharaman
</option>
                      <option value="Shri Arjun Munda">Shri Arjun Munda</option>
                      <option value="Shri Anurag Singh Thakur">Shri Anurag Singh Thakur</option>
                      <option value="Rahul Gandhi (MP from Wayanad)">
                      Rahul Gandhi (MP from Wayanad)
                      </option>
                      <option value="Shashi Tharoor (MP from Thiruvananthapuram)">Shashi Tharoor (MP from Thiruvananthapuram)</option>
                      <option value="A K Antony (Not in the Indian Parliament)">
                      A K Antony (Not in the Indian Parliament)
                      </option>
                      <option value="Priyanka Gandhi (Not in the Indian Parliament)">
                      Priyanka Gandhi (Not in the Indian Parliament)
                      </option>
                      <option value="Ashok Gehlot (Chief Minister of Rajasthan)
">
                       Ashok Gehlot (Chief Minister of Rajasthan)

                      </option>
                      <option value="Bhupendra Singh Baghel (Chief Minister of Chhattisgarh)">Bhupendra Singh Baghel (Chief Minister of Chhattisgarh)</option>
                      <option value="Kamal Nath (Not in the Indian Parliament)
">Kamal Nath (Not in the Indian Parliament)
</option>
                      <option value="Salman Khurshid (MP from Rajya Sabha)
">Salman Khurshid (MP from Rajya Sabha)
</option>
                      <option value="Supriya Sule (MP from Baramati)">Supriya Sule (MP from Baramati)</option>
                      <option value="Hardik Patel (Not in the Indian Parliament)">Hardik Patel (Not in the Indian Parliament)</option>
                      <option value="Ahmed Patel (Former MP; Deceased)">Ahmed Patel (Former MP; Deceased)</option>
                      <option value="Anand Sharma (MP from Rajya Sabha)">Anand Sharma (MP from Rajya Sabha)</option>
                      <option value="Kamakhya Prasad Singh Deo (Not in the Indian Parliament)">Kamakhya Prasad Singh Deo (Not in the Indian Parliament)</option>
                      <option value="Kapil Sibal (MP from Rajya Sabha)">Kapil Sibal (MP from Rajya Sabha)</option>
                      <option value="P Chidambaram (MP from Rajya Sabha)">P Chidambaram (MP from Rajya Sabha)</option>
                      <option value="Ch. Ajang Khongsai (Not in the Indian Parliament)">Ch. Ajang Khongsai (Not in the Indian Parliament)</option>
                      <option value="Nitish Kumar (Chief Minister of Bihar)">Nitish Kumar (Chief Minister of Bihar)</option>
                      <option value="Mamata Banerjee (Chief Minister of West Bengal)">Mamata Banerjee (Chief Minister of West Bengal)</option>
                      <option value="Abhishek Banerjee (MP from Diamond Harbour)
">Abhishek Banerjee (MP from Diamond Harbour)
</option>
                      <option value="Derek O'Brien (MP from Rajya Sabha)">
                      Derek O'Brien (MP from Rajya Sabha)
                      </option>
                      <option value="Mahua Moitra (MP from Krishnanagar)">Mahua Moitra (MP from Krishnanagar)</option>
                      <option value="Arvind Kejriwal (Chief Minister of Delhi)">
                        
                      Arvind Kejriwal (Chief Minister of Delhi)
                      </option>
                      <option value="Raghav Chadha (Not in the Indian Parliament)">Raghav Chadha (Not in the Indian Parliament)</option>
                      <option value="Manish Sisodia (Not in the Indian Parliament)">Manish Sisodia (Not in the Indian Parliament)</option>
                      <option value="Akhilesh Yadav (Not in the Indian Parliament)">Akhilesh Yadav (Not in the Indian Parliament)</option>
                      <option value="Mulayam Singh Yadav (Not in the Indian Parliament)">Mulayam Singh Yadav (Not in the Indian Parliament)</option>
                      <option value="Tejasvi Yadav (Not in the Indian Parliament)">Tejasvi Yadav (Not in the Indian Parliament)</option>
                      <option value="H D Deve Gowda (Not in the Indian Parliament)">H D Deve Gowda (Not in the Indian Parliament)</option>
                      <option value="HD Kumaraswamy (Not in the Indian Parliament)">HD Kumaraswamy (Not in the Indian Parliament)</option>
                      <option value="Pinarayi Vijayan (Chief Minister of Kerala)">Pinarayi Vijayan (Chief Minister of Kerala)</option>
                      <option value="Sitaram Yechury (MP from Rajya Sabha)
">Sitaram Yechury (MP from Rajya Sabha)
</option>
                      <option value="Kuldiep Singh (Affiliation not specified; Not in the Indian Parliament)
">Kuldiep Singh (Affiliation not specified; Not in the Indian Parliament)
</option>
                      <option value="All Tribal Students' Union Manipur (ATSUM)
">All Tribal Students' Union Manipur (ATSUM)
</option>
                      <option value="Dr. Bharati Pravin Pawar(Ministry of Tribal Affairs)">Dr. Bharati Pravin Pawar(Ministry of Tribal Affairs)</option>
                      <option value="Dr. L. Murugan(Ministry of Information and Broadcasting)">Dr. L. Murugan(Ministry of Information and Broadcasting)</option>
                      <option value="Shri Devusinh Chauhan(Ministry of Communications)
">Shri Devusinh Chauhan(Ministry of Communications)
</option>
<option value="Shri B.L.Verma(Ministry of Development of North Eastern Region">
                       Shri B.L.Verma(Ministry of Development of North Eastern Region
                      </option>
                      <option value="Shri Raj Nath Singh(Ministry of Defence)

">
                       Shri Raj Nath Singh(Ministry of Defence)


                      </option>
                    </>
                  ) : (
                    <option value="select...">Select..</option>
                  )}
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
                  
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p1">PREFERENCE 3: </p>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">COMMITTEE 3*</p>
              </div>
              <div className="form-group">
                <select
                  name="preference1"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Committee"
                  value={committee3}
                  onChange={(e) => {
                    setComittee3(e.target.value);
                     
                  }}
                >
                   <option value="select commitee"> select commitee..</option>
                  <option value="UNSC">UNSC</option>
                  <option value="UNGA-SPECPOL">UNGA-SPECPOL</option>
                  <option value="AIPPM">AIPPM</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">  {committee3 == "AIPPM" ? "PERSONALITY 3*" : "COUNTRY 3*"}</p>
              </div>
              <div className="form-group">
                <select
                  name="logemail"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Committee"
                  value={preference3}
                  onChange={(e) => {
                    setPreferences3(e.target.value);
                     
                  }}
                >
                   {committee3 == "UNSC" ? (
                    <>
                      <option value="Select">Select Portfolio</option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="Russia">
                        Russia
                      </option>
                      <option value="United Kingdom">
                        United Kingdom
                      </option>
                      <option value="France">
                        France
                      </option>
                      <option value="China">
                        China
                      </option>
                      <option value="Sudan">
                        Sudan
                      </option>
                      <option value="Egypt">
                        Egypt
                      </option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="Saudi Arabia">
                        Saudi Arabia
                      </option>
                      <option value="Ethiopia">
                        Ethiopia
                      </option>
                      <option value="Chad">
                        Chad
                      </option>
                      <option value="Libya">Libya</option>
                      <option value="Eritrea">
                        Eritrea
                      </option>
                      <option value="South Sudan">
                        South Sudan
                      </option>
                      <option value="South Sudan">
                        South Sudan
                      </option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Israel">
                        Israel
                      </option>
                      <option value="Germany">Germany</option>
                      <option value="Canada">Canada</option>
                      <option value="India">
                        India
                      </option>
                      <option value="Equador">
                        Equador
                      </option>
                      <option value="Albania">
                        Albania
                      </option>
                      <option value="Ghana">
                        Ghana
                      </option>
                      <option value="Central African Union">Central African Union</option>
                      <option value="Nigeria">
                        Nigeria
                      </option>
                      <option value="Yemen">Yemen</option>
                      <option value="Oman">
                        Oman
                      </option>
                      <option value="Qatar">
                        Qatar
                      </option>
                      <option value="Republic of Djibouti">
                        Republic of Djibouti
                      </option>
                      <option value="Uganda">
                        Uganda
                      </option>
                      <option value="Democratic Republic of Congo">
                        Democratic Republic of Congo
                      </option>
                      <option value="Iran">Iran</option>
                      <option value="Kingdom of Eswatini">
                        Kingdom of Eswatini
                      </option>
                      <option value="South Africa">
                        South Africa
                      </option>
                      <option value="Kenya">Kenya</option>
                      <option value="Somalia">Somalia</option>
                      <option value="Turkiye">Turkiye</option>
                      <option value="Italy">
                        Italy
                      </option>
                      <option value="Hellenic Republic(Greece)">
                        Hellenic Republic(Greece)
                      </option>
                      <option value="Spain">
                        Spain
                      </option>
                      <option value="Jordan">Jordan</option>
                      <option value="Seychelles">
                        Seychelles
                      </option>
                      <option value="Pakistan">
                        Pakistan
                      </option>
                      <option value="Brazil">
                        Brazil
                      </option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Australia">
                        Australia
                      </option>
                      <option value="Japan">Japan</option>
                    </>
                  ) : (committee3 == "UNGA-SPECPOL") ? (
                    <>
                      <option value="Select">Select Portfolio</option>

                      <option value="Islamic Emirate of Afghanistan
">Islamic Emiratre of Afghanistan</option>
                      <option value="People's Democratic Republic of Angola">
                      People’s Democratic Republic of Algeria
                      </option>
                      <option value="Republic of Argentina">
                      Republic of Argentina
                      </option>
                      <option value="Republic of Armenia
">Republic of Armenia
</option>
                      <option value="Commonwealth of Australia
">
                        Commonwealth of Australia

                      </option>
                      <option value="Republic of Austria
">Republic of Austria
</option>
                      <option value="Republic of Azerbaijan
">
                       Republic of Azerbaijan

                      </option>
                      <option value="Commonwealth of the Bahamas
">
                       Commonwealth of the Bahamas

                      </option>
                      <option value="Kingdom of Bahrain">
                      Kingdom of Bahrain
                      </option>
                      <option value="People’s Republic of Bangladesh">
                      People’s Republic of Bangladesh
                      </option>
                      <option value="Republic of Belarus
">
                       Republic of Belarus

                      </option>
                      <option value="Kingdom of Belgium">Kingdom of Belgium</option>
                      <option value="Belize
">
                      Belize

                      </option>
                      <option value="Kingdom of Bhutan">
                      Kingdom of Bhutan
                      </option>
                      <option value="Plurinational State of Bolivia">
                      Plurinational State of Bolivia
                      </option>
                      <option value="Federative Republic of Brazil
">
                      Federative Republic of Brazil

                      </option>
                      <option value="Republic of Bulgaria
">
                       Republic of Bulgaria

                      </option>
                      <option value="Kingdom of Cambodia">
                      Kingdom of Cambodia
                      </option>
                      <option value="Canada">
                      Canada
                      </option>
                      <option value="Central African Republic">
                      Central African Republic
                      </option>
                      <option value="Republic of Chile">
                      Republic of Chile
                      </option>
                      <option value="People’s Republic of China
">
                       People’s Republic of China

                      </option>
                      <option value="Republic of Croatia">
                      Republic of Croatia
                      </option>
                      <option value="Republic of Cuba
">
                      Republic of Cuba

                      </option>
                      <option value="
Czech Republic
">
Czech Republic
</option>
                      <option value="Democratic People’s Republic of Korea">
                      Democratic People’s Republic of Korea
                      </option>
                      <option value="Kingdom of Denmark
">
                      Kingdom of Denmark

                      </option>
                      <option value="Arab Republic of Egypt">Arab Republic of Egypt</option>
                      <option value="Republic of Estonia
">
                      Republic of Estonia

                      </option>
                      <option value="Republic of France
">
                      Republic of France

                      </option>
                      <option value="Federal Republic of Germany">
                      Federal Republic of Germany
                      </option>
                      <option value="Hellenic Republic of Greece">
                      Hellenic Republic of Greece
                      </option>
                      <option value="Republic of Guatemala">
                      Republic of Guatemala
                      </option>
                      <option value="Republic of Haitin">
                      Republic of Haiti
                      </option>
                      <option value="Republic of Honduras">Republic of Honduras</option>
                      <option value="Hungary">
                      Hungary
                      </option>
                      <option value="Republic of Iceland">
                      Republic of Iceland
                      </option>
                      <option value="Republic of India
">
                      Republic of India

                      </option>
                      <option value="Republic of Indonesia">
                      Republic of Indonesia
                      </option>
                      <option value="Islamic Republic of Iran">
                      Islamic Republic of Iran
                      </option>
                      <option value="Republic of Iraq
">
                      Republic of Iraq

                      </option>
                      <option value="Ireland
">
                     Ireland

                      </option>
                      <option value="Republic of Italy">Republic of Italy</option>
                      <option value="Japan
">
                       Japan

                      </option>
                      <option value="Hashemite Kingdom of Jordan">
                      Hashemite Kingdom of Jordan
                      </option>
                      <option value="Republic of Kenya
">
                       Republic of Kenya

                      </option>
                      <option value="Republic of Kiribati
">
                      Republic of Kiribati

                      </option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Lao People’s Democratic Republic">
                      Lao People’s Democratic Republic
                      </option>
                      <option value="Republic of Latvia">Republic of Latvia</option>
                      <option value="Republic of Lithuania">
                      Republic of Lithuania
                      </option>
                      <option value="Grand Duchy of Luxembourg">
                      Grand Duchy of Luxembourg
                      </option>
                      <option value="Republic of Malawi
">
                        Republic of Malawi

                      </option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Republic of Marshall Islands">Republic of Marshall Islands</option>
                      <option value="United Mexican States">
                      United Mexican States
                      </option>
                      <option value="Mongolia">
                      Mongolia
                      </option>
                      <option value="Montenegro">
                      Montenegro
                      </option>
                      <option value="Kingdom of Morocco">
                      Kingdom of Morocco
                      </option>
                      <option value="Republic of the Union of Myanmar">
                      Republic of the Union of Myanmar
                      </option>
                      <option value="Republic of Nauru">
                      Republic of Nauru
                      </option>
                      <option value="Kingdom of the Netherlands">
                      Kingdom of the Netherlands
                      </option>
                      <option value="New Zealand">
                      New Zealand
                      </option>
                      <option value="Republic of North Macedonia">
                      Republic of North Macedonia
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
                      <option value="Republic of Palau">
                      Republic of Palau
                      </option>
                      <option value="Republic of Paraguay">
                      Republic of Paraguay
                      </option>
                      <option value="Republic of the Phillippines">
                      Republic of the Phillippines
                      </option>
                      <option value="Republic of Poland">
                      Republic of Poland
                      </option>
                      <option value="Portuguese Republic
">
                      Portuguese Republic
                      </option>
                      <option value="State of Qatar">
                      State of Qatar
                      </option>
                      <option value="Republic of Korea">
                      Republic of Korea
                      </option>
                      <option value="Russian Federation">
                      Russian Federation
                      </option>
                      <option value="Kingdom of Saudi Arabia">
                      Kingdom of Saudi Arabia
                      </option>
                      <option value="Republic of Singapore">
                      Republic of Singapore
                      </option>
                      <option value="Republic of Slovenia
">
                      Republic of Slovenia
                      </option>
                      <option value="Republic of South Africa">
                      Republic of South Africa
                      </option>
                      <option value="Democratic Socialist Republic of Sri Lanka">
                      Democratic Socialist Republic of Sri Lanka
                      </option>
                      <option value="Kingdom of Thailand
">
                    Kingdom of Thailand

                      </option>
                      <option value="Tuvalu">
                      Tuvalu
                      </option>
                      <option value="Republic of Türkiye">
                      Republic of Türkiye
                      </option>
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
                      <option value="Socialist Republic of Viet Nam">
                      Socialist Republic of Viet Nam
                      </option>
                      <option value="State of Palestine (Observer State)">
                      State of Palestine (Observer State)
                      </option>
                      <option value="Vatican City (Observer State)">
                      Vatican City (Observer State)
                      </option>


                    </>
                  ) : ( committee3 == "AIPPM") ? (
                    <>
                      <option value="Select">Select Portfolio</option>
                      <option value="Zoramthanga (Party Leader; not in the Indian Parliament)">Zoramthanga (Party Leader; not in the Indian Parliament)</option>
                      <option value="Dr. R.K. Ranjan(MP from Inner Manipur)">Dr. R.K. Ranjan(MP from Inner Manipur)</option>
                      <option value="N. Biren Singh (Chief Minister of Manipur)">N. Biren Singh (Chief Minister of Manipur)</option>
                      <option value="Tokheho Yepthomi (MP from Nagaland)">Tokheho Yepthomi (MP from Nagaland)</option>
                      <option value="Pratima Bhowmik (MP from Tripura West)">Pratima Bhowmik (MP from Tripura West)</option>
                      <option value="Rebati Tripura (MP from Tripura East)">
                      Rebati Tripura (MP from Tripura East)
                      </option>
                      <option value="Karam Shyam Singh (Not in the Indian Parliament)
">Karam Shyam Singh (Not in the Indian Parliament)
</option>
                      <option value="Thokchom Radheshyam Singh (Not in the Indian Parliament)">
                      Thokchom Radheshyam Singh (Not in the Indian Parliament)
                      </option>
                      <option value="Nishikant Sing Sapam (Not in the Indian Parliament)
">Nishikant Sing Sapam (Not in the Indian Parliament)
</option>
                      <option value="Khwairakpam Raghumani Singh (Not in the Indian Parliament)
">Khwairakpam Raghumani Singh (Not in the Indian Parliament)
</option>
                      <option value="S Brojen Singh (Not in the Indian Parliament)
">
                       S Brojen Singh (Not in the Indian Parliament)

                      </option>
                      <option value="T Robindro Singh (Not in the Indian Parliament)">T Robindro Singh (Not in the Indian Parliament)</option>
                      <option value="S Rajen Singh (Not in the Indian Parliament)">S Rajen Singh (Not in the Indian Parliament)</option>
                      <option value="S Kebi Devi (Not in the Indian Parliament)
">
                       S Kebi Devi (Not in the Indian Parliament)

                      </option>
                      <option value="Y Radheshyam (Not in the Indian Parliament)
">Y Radheshyam (Not in the Indian Parliament)
</option>
                      <option value="Narendra Modi
">Narendra Modi
</option>
                      <option value="Amit Shah
">
                       Amit Shah

                      </option>
                      <option value="Dr. Subrahmanyam Jaishankar
">Dr. Subrahmanyam Jaishankar
</option>
                      <option value="Smt. Smriti Zubin Irani
">Smt. Smriti Zubin Irani
</option>
                      <option value="Smt. Nirmala Sitharaman
">Smt. Nirmala Sitharaman
</option>
                      <option value="Shri Arjun Munda">Shri Arjun Munda</option>
                      <option value="Shri Anurag Singh Thakur">Shri Anurag Singh Thakur</option>
                      <option value="Rahul Gandhi (MP from Wayanad)">
                      Rahul Gandhi (MP from Wayanad)
                      </option>
                      <option value="Shashi Tharoor (MP from Thiruvananthapuram)">Shashi Tharoor (MP from Thiruvananthapuram)</option>
                      <option value="A K Antony (Not in the Indian Parliament)">
                      A K Antony (Not in the Indian Parliament)
                      </option>
                      <option value="Priyanka Gandhi (Not in the Indian Parliament)">
                      Priyanka Gandhi (Not in the Indian Parliament)
                      </option>
                      <option value="Ashok Gehlot (Chief Minister of Rajasthan)
">
                       Ashok Gehlot (Chief Minister of Rajasthan)

                      </option>
                      <option value="Bhupendra Singh Baghel (Chief Minister of Chhattisgarh)">Bhupendra Singh Baghel (Chief Minister of Chhattisgarh)</option>
                      <option value="Kamal Nath (Not in the Indian Parliament)
">Kamal Nath (Not in the Indian Parliament)
</option>
                      <option value="Salman Khurshid (MP from Rajya Sabha)
">Salman Khurshid (MP from Rajya Sabha)
</option>
                      <option value="Supriya Sule (MP from Baramati)">Supriya Sule (MP from Baramati)</option>
                      <option value="Hardik Patel (Not in the Indian Parliament)">Hardik Patel (Not in the Indian Parliament)</option>
                      <option value="Ahmed Patel (Former MP; Deceased)">Ahmed Patel (Former MP; Deceased)</option>
                      <option value="Anand Sharma (MP from Rajya Sabha)">Anand Sharma (MP from Rajya Sabha)</option>
                      <option value="Kamakhya Prasad Singh Deo (Not in the Indian Parliament)">Kamakhya Prasad Singh Deo (Not in the Indian Parliament)</option>
                      <option value="Kapil Sibal (MP from Rajya Sabha)">Kapil Sibal (MP from Rajya Sabha)</option>
                      <option value="P Chidambaram (MP from Rajya Sabha)">P Chidambaram (MP from Rajya Sabha)</option>
                      <option value="Ch. Ajang Khongsai (Not in the Indian Parliament)">Ch. Ajang Khongsai (Not in the Indian Parliament)</option>
                      <option value="Nitish Kumar (Chief Minister of Bihar)">Nitish Kumar (Chief Minister of Bihar)</option>
                      <option value="Mamata Banerjee (Chief Minister of West Bengal)">Mamata Banerjee (Chief Minister of West Bengal)</option>
                      <option value="Abhishek Banerjee (MP from Diamond Harbour)
">Abhishek Banerjee (MP from Diamond Harbour)
</option>
                      <option value="Derek O'Brien (MP from Rajya Sabha)">
                      Derek O'Brien (MP from Rajya Sabha)
                      </option>
                      <option value="Mahua Moitra (MP from Krishnanagar)">Mahua Moitra (MP from Krishnanagar)</option>
                      <option value="Arvind Kejriwal (Chief Minister of Delhi)">
                        
                      Arvind Kejriwal (Chief Minister of Delhi)
                      </option>
                      <option value="Raghav Chadha (Not in the Indian Parliament)">Raghav Chadha (Not in the Indian Parliament)</option>
                      <option value="Manish Sisodia (Not in the Indian Parliament)">Manish Sisodia (Not in the Indian Parliament)</option>
                      <option value="Akhilesh Yadav (Not in the Indian Parliament)">Akhilesh Yadav (Not in the Indian Parliament)</option>
                      <option value="Mulayam Singh Yadav (Not in the Indian Parliament)">Mulayam Singh Yadav (Not in the Indian Parliament)</option>
                      <option value="Tejasvi Yadav (Not in the Indian Parliament)">Tejasvi Yadav (Not in the Indian Parliament)</option>
                      <option value="H D Deve Gowda (Not in the Indian Parliament)">H D Deve Gowda (Not in the Indian Parliament)</option>
                      <option value="HD Kumaraswamy (Not in the Indian Parliament)">HD Kumaraswamy (Not in the Indian Parliament)</option>
                      <option value="Pinarayi Vijayan (Chief Minister of Kerala)">Pinarayi Vijayan (Chief Minister of Kerala)</option>
                      <option value="Sitaram Yechury (MP from Rajya Sabha)
">Sitaram Yechury (MP from Rajya Sabha)
</option>
                      <option value="Kuldiep Singh (Affiliation not specified; Not in the Indian Parliament)
">Kuldiep Singh (Affiliation not specified; Not in the Indian Parliament)
</option>
                      <option value="All Tribal Students' Union Manipur (ATSUM)
">All Tribal Students' Union Manipur (ATSUM)
</option>
                      <option value="Dr. Bharati Pravin Pawar(Ministry of Tribal Affairs)">Dr. Bharati Pravin Pawar(Ministry of Tribal Affairs)</option>
                      <option value="Dr. L. Murugan(Ministry of Information and Broadcasting)">Dr. L. Murugan(Ministry of Information and Broadcasting)</option>
                      <option value="Shri Devusinh Chauhan(Ministry of Communications)
">Shri Devusinh Chauhan(Ministry of Communications)
</option>
<option value="Shri B.L.Verma(Ministry of Development of North Eastern Region">
                       Shri B.L.Verma(Ministry of Development of North Eastern Region
                      </option>
                      <option value="Shri Raj Nath Singh(Ministry of Defence)

">
                       Shri Raj Nath Singh(Ministry of Defence)


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
                <p className="mb-4 pb-3 reg-p">EXPERIENCE *</p>
              </div>
                <input
                  className="form-style"
                  placeholder="Experience"
                  name="experience"
                  id="logemail"
                  type="email"
                  data-type="text"
                  autoComplete="off"
                  value={experience}
                  onChange={(e) => {
                    setExperience(e.target.value);
                     
                  }}
                />
                  {formik.touched.experience && formik.errors.experience? (
                  <div>{formik.errors.experience}</div>
                ) : null}
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
                <p className="mb-4 pb-3 reg-p">NAME*</p>
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
                     
                  }}
                />
                  {formik.touched.Name && formik.errors.Name ? (
                      <div>{formik.errors.Name}</div>
                    ) : null}
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">EMAIL ID*</p>
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
                     
                  }}
                  value={email}
                />
                 {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">PHONE NUMBER*</p>
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
                     
                  }}
                  value={institute}
                >
                   <option value="Select option">Select option</option>
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
                     
                  }}
                >
                   <option value="Select option">Select option</option>
                  <option value="YEAR 1"> YEAR 1</option>
                  <option value="YEAR 2"> YEAR 2</option>
                  <option value="YEAR 3"> YEAR 3</option>
                  <option value="YEAR 4"> YEAR 4</option>
                  <option value="Other"> Other</option>
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
                     
                  }}
                >
                   <option value="Select option">Select option</option>
                   <option value="HALL 1"> HALL 1</option>
                   <option value="HALL 2"> HALL 2</option>
                   <option value="HALL 3"> HALL 3</option>
                   <option value=" HALL 4"> HALL 4</option>
                   <option value="HALL 5"> HALL 5</option>
                   <option value="HALL 6"> HALL 6</option>
                   <option value="HALL 7"> HALL 7</option>
                   <option value="HALL 8"> HALL 8</option>
                   <option value="HALL 9"> HALL 9</option>
                   <option value="HALL 10"> HALL 10</option>
                   <option value="HALL 11"> HALL 11</option>
                   <option value="HALL 12"> HALL 12</option>
                   <option value="HALL 13"> HALL 13</option>
                   <option value="HALL 14"> HALL 14</option>
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
                <p className="mb-4 pb-3 reg-p">INSTITUTE NAME</p>
              </div>
                <input
                  className="form-style"
                  placeholder="Roll Number"
                  name="institution name"
                  id="logemail"
                  type="email"
                  data-type="text"
                  autoComplete="off"
                  value={instName}
                  onChange={(e) => {
                    setInstName(e.target.value);
                     
                  }}
                />
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p1">PREFERENCE 1:</p>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">COMMITTEE 1*</p>
              </div>
              <div className="form-group">
                <select
                  name="commitee1"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Committee"
                  value={committee1}
                  onChange={(e) => {
                    setComittee1(e.target.value);
                     
                  }}
                >
                  <option defaultValue="Select">Select Committee</option>
                  <option value="UNGA-SPECPOL-IP">UNGA-SPECPOL-IP</option>
                  <option value="UNSC-IP">UNSC-IP</option>
                  <option value="AIPPM-IP">AIPPM-IP</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">PRESS 1*</p>
              </div>
              <div className="form-group">
                <select
                  name="press1"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Committee"
                  value={preference1}
                  onChange={(e) => {
                    setPreferences1(e.target.value);
                     
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
                      <option value="Union Press International">Union Press International</option>
                      <option value="Associated Press">Associated Press</option>
                      <option value="Reuters">Reuters</option>
                    </>
                  )}
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p1">PREFERENCE 2: </p>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">COMMITTEE 2*</p>
              </div>
              <div className="form-group">
                <select
                  name="commitee2"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Committee"
                  value={committee2}
                  onChange={(e) => {
                    setComittee2(e.target.value);
                     
                  }}
                >
                   <option defaultValue="Select">Select Committee</option>
                  <option value="UNGA-SPECPOL-IP">UNGA-SPECPOL-IP</option>
                  <option value="UNSC-IP">UNSC-IP</option>
                  <option value="AIPPM-IP">AIPPM-IP</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">PRESS 2*</p>
              </div>
              <div className="form-group">
                <select
                  name="press2"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Committee"
                  value={preference2}
                  onChange={(e) => {
                    setPreferences2(e.target.value);
                     
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
                      <option value="Union Press International">Union Press International</option>
                      <option value="Associated Press">Associated Press</option>
                      <option value="Reuters">Reuters</option>
                    </>
                  )}
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>

              <div className="para-container">
                <p className="mb-4 pb-3 reg-p1">PREFERENCE 3:</p>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">COMMITTEE 3*</p>
              </div>
              <div className="form-group">
                <select
                  name="commitee3"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Committee"
                  value={committee3}
                  onChange={(e) => {
                    setComittee3(e.target.value);
                     
                  }}
                >
                   <option defaultValue="Select">Select Committee</option>
                  <option value="UNGA-SPECPOL-IP">UNGA-SPECPOL-IP</option>
                  <option value="UNSC-IP">UNSC-IP</option>
                  <option value="AIPPM-IP">AIPPM-IP</option>
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="para-container">
              <p className="mb-4 pb-3 reg-p">PRESS 3*</p>
              </div>
              <div className="form-group">
                <select
                  name="press3"
                  className="form-style-2"
                  id="logemail"
                  placeholder="Select Committee"
                  value={preference3}
                  onChange={(e) => {
                    setPreferences3(e.target.value);
                     
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
                      <option value="Union Press International">Union Press International</option>
                      <option value="Associated Press">Associated Press</option>
                      <option value="Reuters">Reuters</option>
                    </>
                  )}
                </select>
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="from-group">
              <div className="para-container">
                <p className="mb-4 pb-3 reg-p">EXPERIENCE *</p>
              </div>
                <input
                  className="form-style"
                  placeholder="Experience"
                  name="experience"
                  id="logemail"
                  type="email"
                  data-type="text"
                  autoComplete="off"
                  value={experience}
                  onChange={(e) => {
                    setExperience(e.target.value);
                     
                  }}
                />
                  {formik.touched.experience && formik.errors.experience? (
                  <div>{formik.errors.experience}</div>
                ) : null}
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
