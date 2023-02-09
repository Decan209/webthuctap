import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './ContentTitle.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Rate from '../Rate/Rate';



function ContentTitle() {
  return (
    <div className='content-title'>
        <h2 className='h2-title'  data-aos="fade-up">
            Don’t see your industry? Don’t worry, we work with any type of
            <span className='typeWriter'>
            <Typewriter
            words={[' business', ' vertical', ' industry', ' venture', ' profession',' vocation']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
            />
            </span>
            .
        </h2>
        <div className='Btn-title'  data-aos="fade-up">
            <button className='BtnPlans'>Plans & Pricing</button>
            <span className='span'>Plus, explore free account tools. No credit card required.</span>
        </div>
        <div className='rate'>
            <Rate/>
            <div>Ratting</div>
        </div>
        <ul className='ratinglogo'>
            <li>
                <img src='https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/ca3ca44f4c0b4606a30e7d590b0bb143/20/5feFb8zhrk/capterra.png?dpr=2' alt=''/>
            </li>
            <li>
                <img src='https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/aa29c4572aea40d3a2d2c912a1f2a79b/20/5feFb8zhrk/getapp.png?dpr=2' alt=''/>
            </li>
            <li>
                <img src='https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/d49130eae7ce48128f4e523a70f78959/20/5feFb8zhrk/software-advice.png?dpr=2' alt=''/>
            </li>
            <li>
                <img src='https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/e2c95d4fd45f466e853ec9da5ebb4bd5/20/5feFb8zhrk/top-rated-local.png?dpr=2' alt=''/>
            </li>
        </ul>
    </div>
  )
}

export default ContentTitle