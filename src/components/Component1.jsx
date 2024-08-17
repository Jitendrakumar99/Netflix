import { useState } from "react";
// import React {useState} from 'react'
import { HiOutlineTranslate } from "react-icons/hi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";


function Component1() {
	const [change ,setChange]=useState("English");
	const [show ,setShow]=useState(0);
	
	
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
			<div className="signin">Sign in</div>
		</div>
	  </div>
	  </div>
	  <div className="Unlimited">
	          <div className="unlim unlim1">
			  Unlimited movies, TV shows and more</div>
			  <div className="watch">Watch anywhere. Cancel anytime.</div>
			  <div className="watch">Ready to watch? Enter your email to create or restart your membership.
			  </div>
			  <div className="btn">
				<form action="">
				<input className='email' type="email" required placeholder='Email Address' />
				
				<div className="GetS">
					<button className="Get">Get Started</button>
					<div className="Get"><MdOutlineArrowForwardIos />
					</div>
				</div>
				</form>
			  </div>
	  </div>

	</div>
  )
}

export default Component1
