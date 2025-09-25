import React from 'react'
import './collection.css'

const Collection = () => {
  return (
    <div className='collection-container'>
      <div className="collection-card">
        <img src="./images/homepage/collection-1.jpeg" alt=""/>
        <div className='collection-text'>
          <h3>The New Remix Collection</h3>
        <p>Sustainably crafted with superior comfort and effortless style</p>
        </div>
        <div className="button-group" style={{bottom:'240px'}}>
           <button>Learn More</button>
        </div>
      </div>

       <div className="collection-card">
        <img src="./images/homepage/collection-2.jpeg" alt="" />
        <div className='collection-text'>
          <h3>Tree Collection</h3>
        <p>Comfort, breathability, and style for miles(and miles and miles).</p>
        </div>
        <div className="button-group">
          <button>Shop Men</button>
          <button>Shop Women</button>
        </div>
      </div>

       <div className="collection-card">
        <img src="./images/homepage/collection-3.png" alt="" />
        <div className='collection-text'>
          <h3>Brezzy BestSellers</h3>
        <p>Light and airy staples for anytime, anywhere</p>
        </div>
        <div className="button-group">
          <button>Shop Men</button>
          <button>Shop Women</button>
        </div>
      </div>
      
    </div>
  )
}

export default Collection