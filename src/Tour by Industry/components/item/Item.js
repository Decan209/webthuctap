import React from 'react'
import './Item.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Item(props) {
   const {Data} = props
  return (
    <Row xl={5} md={4} sm={4} xs={1} className=' container-row'>
    {
        Data.map(pItem =>(
            <Col key={pItem.id}  className="  item">
                <div className='item-img'>
                    <img className='img-item' src={pItem.iconUrl} alt=""/>
                </div>
                <p className='item-title'>{pItem.title}</p>
            </Col>
        ))
    }
    </Row>
  )
}

export default Item