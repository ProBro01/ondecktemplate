import React from 'react'
import spense from "../Assets/Spense_Icon.svg"
import fiber from "../Assets/Fiber_Icon.svg"
import gradie from "../Assets/Gradie_Icon.svg"
import closebutton from "../Assets/Close.svg"
import "../stylesheets/card.css"

export const Card = (props) => {
  return (
    <div className="card__cont">
        <div className='card__cross'>
            <img onClick={(event) => {
                props.closefunc(false)
            }} src={closebutton} className="card__close-button"/>
        </div>
        <div className='card__element'>
            <img src={spense}/>
            <div>
            <p className='card__element-head'>Spense</p>
            <p className='card__element-data'>Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts.</p>
            </div>
        </div>
        <div className='card__element'>
            <img src={fiber}/>
            <div>
            <p className='card__element-head'>Fiber Landing page</p>
            <p className='card__element-data'>An online portfolio generator. Great to practice flex/grid layout, and aboulute positioning.</p>
            </div>
        </div>
        <div className='card__element'>
            <img src={gradie}/>
            <div>
            <p className='card__element-head'>Gradie Signup page</p>
            <p className='card__element-data'>Gradie is a simple sign up page, greate to practice centering layouts.</p>
            </div>
        </div>
    </div>
  )
}
