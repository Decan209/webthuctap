import React from 'react'
import './BigTitle.css'
import ReactPlayer from 'react-player'
import {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import BlockContent from '../BlockContent/BlockContent';



function BigTitle() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className='Big-title'>
        <div className='contentTitle' >
            <div className='Title'>Improve the bottom line for your 
                <span className='Title-span'>  accounting firm</span>
            </div>
            <div className='blockTitle'>Increase your visibility, expand your client base, build a strong reputation, stay top of mind and more.</div>
            <div className='itemTitles'>
                <div className='contentPreview'>
                    <div className='itemTitle'>Be more visible</div>
                    <div className='itemContent'>Get found on search engines, Facebook, Instagram and more</div>
                </div>
                <div className='contentPreview'>
                    <div className='itemTitle'>Save time</div>
                    <div className='itemContent'>Automated text and email campaigns help you save time and keep you top of mind</div>
                </div>
                <div className='contentPreview'>
                    <div className='itemTitle'>Manage reviews</div>
                    <div className='itemContent'>Generate and manage reviews from one place</div>
                </div>
                <div className='contentPreview'>
                    <div className='itemTitle'>And so much more</div>
                    <div className='itemContent'>Everything you need to manage and grow your accounting firm from a singular platform</div>
                </div>
            </div>
        </div>
        <img className='content-img' src='https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/e7f68e3028dc4243be540298d22f3485/20/GCuCv726gZycFxatknDdac/accounting-hero.png?dpr=2' alt='' ></img>
    </div>
    <div className='play-button'>
        <button className='btnTitle'>Plans & Pricing</button>
        <button className='playWatch' onClick={handleShow}><i className="fa-regular fa-circle-play"></i><span className='play-span'> Watch Video</span></button>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <ReactPlayer 
                width="100%"
                height="400px"
                url="https://www.youtube.com/watch?v=5pxkiMRgoGQ"/>
        </Modal.Body>
    </Modal>
    <div className='Big-text'>Everything you need to manage and grow your accounting firm from one platform</div>
    <BlockContent/>
    </>
  )
}

export default BigTitle