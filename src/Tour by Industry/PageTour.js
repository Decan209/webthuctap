import React from 'react'
import BlockText from './components/BlockText/BlockText'
import Item from './components/item/Item'
import './PageTour.css'
import Data from './data/Data'
import ContentTitle from './components/ContentTitle/ContentTitle'

function PageTour() {
  return (
    <div className='container'>
      <BlockText/>
      <Item Data={Data}/>
      <ContentTitle/>
    </div>
  )
}

export default PageTour