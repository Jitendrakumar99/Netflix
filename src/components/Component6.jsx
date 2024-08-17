import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineTranslate } from "react-icons/hi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
function Component6({ data}) {
  const [card,cardSet]=useState(null);
  const tSet=(id)=>
    {
        if(card==id) 
        {
          cardSet(null);
        }
        else{
          cardSet(id)
        }
    }
  return (
    <div className="container6">
      <div className="main6">
        <div className="unlim">Frequently Asked Questions</div>
        {data.map((item) => {
			
			
          return (
            // eslint-disable-next-line react/jsx-key
            <div  className="ma">
       {/* {console.log(key)} */}
              
              <div key={item} onClick={()=>tSet(item.id)}  className="card">
              
                <div className="item">
                  {item.Question}
                </div>
                <div className={item.id==card?"cross":""}>
                 <FaPlus />
                </div>
              </div>
             {item.id==card&& <div className="answer">{item.Answer}</div>}
            </div>
          );
        })}
        <div className="ready">Ready to watch? Enter your email to create or restart your membership.</div>
        <div className="btn12">
				<input className='email' type="email" placeholder='Email Address' />

				<div className="GetS">
					<div className="Get">Get Started</div>
					<div className="Get"><MdOutlineArrowForwardIos />
					</div>
				</div>
			  </div>
      </div>
    </div>
  );
}

export default Component6;
