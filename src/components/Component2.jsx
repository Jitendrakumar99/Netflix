import React from 'react'
import vo from '../assets/video.mp4'

function Component2() {
  return (
	<div className='container2'>
		<div className="concenter">
	  <div className="first2">
		<div className="unlim">Enjoy on your TV</div>
		<div className="watch1">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
      </div>
	  </div>
	  <div className="second2">
		<img src="tv.png" alt="" />
		<video autoPlay loop muted src={vo}></video>
	  </div>
	  </div>
	</div>
  )
}

export default Component2


