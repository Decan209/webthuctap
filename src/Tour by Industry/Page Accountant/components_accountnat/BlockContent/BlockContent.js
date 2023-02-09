import React from 'react'
import './BlockContent.css'

function BlockContent() {
  return (
    <div className='BlockContent'>
        <div className='Bl-content-title'>
            <div className='Bl-big-title'>The marketing team to help you grow your accounting firm</div>
            <div className='Bl-content-text'>Not only do you get the tools you need to scale your accounting firm, but you also get the do-it-for-you marketing programs and a marketing team to help you grow — all from one platform. Let us focus on growing your accounting firm so you can focus on running it.</div>
            <button className='Bl-content-btn'>Plans & Pricing</button>
        </div>
        <img className='Bl-content-img' src='https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/f7909881e748487e9ad0da6929f16c90/20/4SoifmQp45JMgBnHndfLg/team-2021.png?dpr=2' alt='' />
    </div>
  )
}

export default BlockContent