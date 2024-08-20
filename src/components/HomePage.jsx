import { useState} from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'
import Component5 from './Component5'
import Component6 from './Component6'
import Fotter from './Fotter'
import Strip from './Strip'
function HomePage({btnclick,setBtnclick,data}) {


//   const True=(da)=>
//   {
// setButtonVisible(da);
//   }
  return (
	<>
 <Component1 btnclick={btnclick} setBtnclick={setBtnclick} />
     <Strip/>
    <Component2/>
    <Strip/>
    <Component3/>
    <Strip/>
    <Component4/>
    <Strip/>
    <Component5/>
    <Strip/>
    <Component6 data={data} />
    <Strip/>
    <Fotter/>
	</>
  )
}

export default HomePage
