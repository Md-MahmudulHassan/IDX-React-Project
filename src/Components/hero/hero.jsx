import React from 'react'
import './hero.css'

export const hero = () => {
  return (
    <div className="hero">
    <div className="hero-text">
        <p>New Apple Products</p>
        <h1>new 
            {/* <img id='hand' src={hand}/> */}
        </h1>
        <h1>collections</h1>
        <h1>for everyone</h1>
        <button id='latest-btn'> Latest Collection 
            {/* <img src={aro}/> */}
        </button>
        <br/>
        
    </div>

    <div className="hero-img">
        <img src="https://www.pngarts.com/files/1/Mac-Transparent-Background-PNG.png"/>
    </div>
</div>
  )
}
