import { useState,useEffect } from 'react'
import React from 'react'
import './Signup.css'
import  { toast } from 'react-hot-toast';


function Signup({btnclick,setBtnclick}) {
	const [signdata, setSigndata] = useState({});
	// const [fromobj, setFromobj] = useState({});
	const [val, setVal] = useState(parseInt(localStorage.getItem("val")) || 0);
	// const [loginError, setLoginError] = useState(false);
	// const [showPassword, setShowPassword] = useState(false);
  
	const getFname = (event) => {
	  setSigndata({ ...signdata, Fname: event.target.value });
	};
  
	const getLname = (event) => {
	  setSigndata({ ...signdata, Lname: event.target.value });
	};
  
	const getUname = (event) => {
	  setSigndata({ ...signdata, Uname: event.target.value });
	};
  
	const getPassword = (event) => {
	  setSigndata({ ...signdata, pass: event.target.value });
	};
  
	const getCPassword = (event) => {
	  setSigndata({ ...signdata, Cpass: event.target.value });
	};
  
	const sub = (event) => {
	  event.preventDefault();
	  let i = val + 1;
	  try {
		if (signdata["Fname"] && signdata["Lname"] && signdata["Uname"]) {
		  if (signdata["pass"] === signdata["Cpass"]) {
			localStorage.setItem(`Fname${i}`, signdata["Fname"]);
			localStorage.setItem(`Uname${i}`, signdata["Uname"]);
			localStorage.setItem(`pass${i}`, signdata["pass"]);
			localStorage.setItem("val", i);
			setVal(i);
			document.getElementById("form1").reset();
          // Clear signdata state
          setSigndata({});
		  }
		}
	  } catch (ele) {
		console.log(ele);
	  }
   
		
      setBtnclick(0);
      toast.success("You are Successfully SignUp");
      
	};
	useEffect(() => {
	
	}, )
	
  
  return (
	<div className="main">
  <form id="form1" action="">
    <div className="logo">SIGN UP</div>
    <div className="container">
      <div className="name">
        <input
          className="name1"
          type="text"
          onChange={getFname}
          required
          placeholder="FirstName"
        />
        <input
          className="name1"
          type="text"
          onChange={getLname}
          required
          placeholder="LastName"
        />
      </div>
      <div className="username">
        <div className="userlogo">
          <i className="fa-solid fa-user" />
        </div>
        <input
		className='name2'
          type="email"
          required
          onChange={getUname}
          placeholder="Username"
        />
      </div>
      <div className="password username">
        <div className="userlogo">
          <i className="fa-solid fa-key" />
        </div>
        <input
		className='name2'
          type="password"
          required
          autoComplete=""
          onChange={getPassword}
          placeholder="Password"
        />
      </div>
      <div className="password username">
        <div className="userlogo">
          <i className="fa-solid fa-key" />
        </div>
        <input
		className='name2'
          type="password"
          required
          autoComplete
          onChange={getCPassword}
          placeholder="Confrom Password"
        />
      </div>
      <div className="Submitt">
        <button onClick={sub} >Signup</button>
        {/* <input onclick="sub(event)" type="reset" type="submit" value="SignUp"> */}
      </div>
      <div className="google">Login with Google</div>
      <div className="google1">
        {/* <a href="./index.html">login</a> */}
      </div>
    </div>
  </form>
</div>

  )
}

export default Signup
