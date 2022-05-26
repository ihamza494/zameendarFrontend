
// import "./register.css";

// import React, { useState } from "react";
// import {BsPersonFill, BsFillEnvelopeFill, BsLockFill} from "react-icons/bs";
// import {Form} from 'react-bootstrap';
// import { FaPhoneAlt, FaCheck } from "react-icons/fa";
// import "react-dropdown/style.css";
// import axios from 'axios';
// import {useHistory} from 'react-router-dom';

// import logo from '../Images/logo.jpeg';
// import Layout from "antd/lib/layout/layout";
// import Navbar from "./navbar";

// const Register = () => {
//     const history = useHistory();
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [contact, setContact] = useState('')  
//     const [password, setPassword] = useState('')
//     const [usertype, setUsertype] = useState('')
//     function handleSubmit(event){
//         history.push('/dashboard')
//         /*event.preventDefault();
//            if(name.trim() !== '' && email.trim() !== '' && contact.trim() !== '' 
//            && password.trim() !== '' && usertype.trim() !== '')
//            {
//                axios.post('http://localhost:4000/api/users', {
//                    name: name,
//                    email: email,
//                    contact: contact,
//                    password: password,
//                    userType: usertype
//                })
//                .then(function (response) {
//                    console.log(response);
//                    localStorage.setItem('code', response.data.code);
//                    localStorage.setItem('email',response.data.email);
//                    history.push('/loginpage')
//                })
//                .catch(function (error) {console.log(error)});              
//            }
//            else
//            {
//                alert('Please fill form completely')
//            }
//            */
//        }

//     return (
//         <Layout>
//         <Navbar/>
//         <div className={"loginMainContainer"}>
//           <div className={"loginFormContainer"}>
           
//           <div className={"loginForm"}>
//               <h1 style={{ color: "darkred" }}>Signup</h1>
              
//               <div className={"inputContainer"}>
//                   <BsPersonFill
//                     style={{ height: 20, width: 20, color: "darkred" }}
//                   />
//                   <input
//                     className={"input"}
//                     type={"text"}
//                     placeholder={"Name"}
//                     name={"name"}
//                     value={name}
//                     onChange={e => {setName(e.target.value)}}
//                   />
//               </div>
//               <div className={"inputContainer"}>
//                   <BsFillEnvelopeFill
//                     style={{ height: 20, width: 20, color: "darkred" }}
//                   />
//                   <input
//                     className={"input"}
//                     type={"text"}
//                     placeholder={"E-mail"}
//                     name={"email"}
//                     value={email}
//                     onChange={e => {setEmail(e.target.value)}}
//                   />
//               </div>
//               <div className={"inputContainer"}>
//                   <FaPhoneAlt style={{ height: 20, width: 20, color: "darkred" }} />
//                   <input
//                     className={"input"}
//                     type={"text"}
//                     placeholder={"Contact"}
//                     name={"contact"}
//                     value={contact}
//                     onChange={e => {setContact(e.target.value)}}
//                   />
//               </div>
//               <div className={"inputContainer"}>
//                   <BsLockFill style={{ height: 20, width: 20, color: "darkred" }} />
//                   <input
//                     className={"input"}
//                     type={"password"}
//                     placeholder={"Password"}
//                     name={"password"}
//                     value={password}
//                     onChange={e => {setPassword(e.target.value)}}
//                   />
//               </div>
//               <div className={"inputContainer"}>
//                   <FaCheck style={{ height: 20, width: 20, color: "darkred" }} />
//                   <input
//                     className={"input"}
//                     type={"password"}
//                     placeholder={"Confirm Password"}
//                     name={"c_password"}
//                     value={password}
//                     onChange={e => {setPassword(e.target.value)}}
//                   />
//               </div>
//               <div className={"signupDropdownBox"}>
//                   <BsPersonFill
//                     style={{ height: 20, width: 20, color: "darkred" }}
//                   />
//                     {/**React Bootstrap Dropdoen */}
//                 <Form.Group className="dropdown-Layout"
//                       value={usertype}
//                       onChange={e =>setUsertype(e.target.value)}>
//                           <Form.Control as="select" defaultValue="--Select--"
//                            className="dropdown-Layout" placeholder={"Select User Type"}>
//                           <option className="placeholder-color">--Select User Type--</option>
//                           <option>User</option>
//                           <option>Blood Bank</option>
//                           </Form.Control>
//                   </Form.Group>
//               </div>
//                   <button className={"loginButton"} onClick={handleSubmit}>Signup</button>
//             </div>
          
//             <div className={"loginImage"}>
//               {/*<img className={"logoImage"} src= {logo} alt = "logo.png"/>*/}
//               <p className={"head1"}style={{fontSize:"20px", fontWeight: "bold", color: "#fff" }}>
//                 Every Drop Matters
//               </p>
//             </div>
//           </div> 
//         </div>
//         </Layout>
//       );

//     /* return(
//           <div className="register">
//             <h1>Register</h1>
//             <input type="text"  placeholder="Enter your Name" ></input>
//             <input type="text"  placeholder="Enter your Email Address" ></input>
//             <input type="password"  placeholder="Enter your password" ></input>
//             <input type="password"  placeholder="Confirm your password" ></input>
//             <div className="button">Register</div>

//             <div>or</div>
//             <div className="button">Login</div>
//          </div>
//         );*/
    

//     /*const [user, setUser] = useState({
//         name: "",
//         email: "",
//         password: "",
//         reEnterPassword: ""
//     })

//     const handleChange = e =>{
//         const {name, value} = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     return(
//         <div className="register">
//             <h1>Register</h1>
//             <input type="text"  name="name" value={user.name} placeholder="Enter your Name" onChange={handleChange}></input>
//             <input type="text" name="email" value={user.email} placeholder="Enter your Email Address" onChange={handleChange}></input>
//             <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
//             <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm your password" onChange={handleChange}></input>
//             <div className="button">Register</div>

//             <div>or</div>
//             <div className="button">Login</div>
//         </div>
//     )*/
// }

// export default Register;

