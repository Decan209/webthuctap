import React from 'react'
import './Rate.css'
import ReactStars from 'react-stars'



function Rate() {
  return (
    <div className='rate'>
        {/* <div class="starShape"><i class="fa-solid fa-star"></i></div>
        <div class="starShape"><i class="fa-solid fa-star"></i></div>
        <div class="starShape"><i class="fa-solid fa-star"></i></div>
        <div class="starShape"><i class="fa-solid fa-star"></i></div>
        <div class="starShape"><i class="fa-solid fa-star"></i></div> */}
        <ReactStars size={38}/>
        <span className='rate-title'>3,500+ Reviews</span>
    </div>
  )
}


export default Rate