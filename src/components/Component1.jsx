import { useState } from "react";
// import React {useState} from 'react'
import { HiOutlineTranslate } from "react-icons/hi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import  { toast } from 'react-hot-toast';

import { IoMdArrowDropdown } from "react-icons/io";



function Component1({btnclick,setBtnclick}) {
	const [change ,setChange]=useState("English");
	const [show ,setShow]=useState(0);
	
	const clickhandeler=()=>
	{
		if(btnclick==0)
		{
			setBtnclick(1)
		}
		else
		{
		setBtnclick(1)
		}
	}
	const j=localStorage.getItem("val")
	const [sign ,setSign]=useState("Sign Up");
	
	const pop=(event)=>{
        event.preventDefault();
		for(var i=0;i<j;i++)
		{
			var fnameget = localStorage.getItem(`Uname${j}`);
			if(fnameget==sn)
			{
               setSign(localStorage.getItem(`Fname${j}`));
			   toast.success("You are Successfully Login");
			   setButtonVisible(false);
			//    True(false)
	
			   setSn("")
			   break;
			}
			else{
				toast.error("Please Enter valid Detail Otherwise Sign Up");
				break;
			}
		}
		
	}

    const [sn,setSn]=useState();
	const getFname=(event)=>
	{
		// 
     setSn(event.target.value);
	//  console.log(sn);
	}
	const logOut=()=>
	{
		setButtonVisible(true);
		setSign("Sign up")
	}
	const [logout,setLogout]=useState(false);
	const [isButtonVisible, setButtonVisible] = useState(true);
  return (
	<div className='container1'>
	  <div className="mainimg"><img src="Netflix.jpg" alt="" /></div>	
	  <div className="mainimg1"></div>	
	  <div className="mainnav">
	  <div className="nav">
		<div className="net"><img src="logo.png" alt="" /></div>
		<div className="sign">
			<div onClick={()=>setShow({show})}  className="english">
				<HiOutlineTranslate />
			<select name="" id="">
			<div className="arrrow"><IoMdArrowDropdown /></div>
			<option className="option" value="">English</option>
			<option className="option" value="">Hindi</option>
			</select>
				{/* <div className="eng">{change}</div> */}
			
			{/* {show?<div onClick={fun} className="opt">
				<div  onClick={()=>setChange("English")} className="hin">English</div>
				<div onClick={()=>setChange("Hindi")} className="hin">Hindi</div>
				</div>:""} */}
				</div>
				{/* {console.log(isButtonVisible)} */}
			{isButtonVisible?<div onClick={clickhandeler} className="signin">{sign}</div>:
			<div onClick={()=>setLogout(logout?false:true)} className="signin">{sign}<IoMdArrowDropdown /> {logout&&<div onClick={logOut} className="log">logout</div>}</div>}
		</div>
	  </div>
	  </div>
	  <div className="Unlimited">
	          <div className="unlim unlim1">
			  Unlimited movies, TV shows and more</div>
			  <div className="watch">Watch anywhere. Cancel anytime.</div>
			  <div className="watch">Ready to watch? Enter your email to create or restart your membership.
			  </div>
			{isButtonVisible&&<div className="btn">
				<form action="">
				<input className='email' type="email" onChange={getFname} required placeholder='Email Address' />
				
				<div className="GetS">
					<button onClick={pop} className="Get">Get Started</button>
					<div className="Get"><MdOutlineArrowForwardIos />
					</div>
				</div>
				</form>
			  </div>
             }
	  </div>

	</div>
  )
}

export default Component1
