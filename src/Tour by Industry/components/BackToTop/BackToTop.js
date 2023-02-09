import React from 'react'
import { useEffect, useState } from 'react'
import './BackToTop.css'

function BackToTop() {

    const [BackToTop, setBackToTop] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                setBackToTop(true)
            }
            else{
                setBackToTop(false)
            }
        })
    },[])

    const scrollUp = () =>{
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    }
  return (
    <div className='App'>
        {BackToTop && (
            <button className='BackToTop' onClick={scrollUp}>^</button>
        )
        }

    </div>
  )
}

export default BackToTop