import React from 'react'


function Card({ image, series, price, tag, time, title }) { // Add 'title' in the destructuring
    console.log({ image, series, price, tag, time, title });
    return (
      <div className='card'>
        <div className='card-image'>
          {image ? <img src={image} alt="super" /> : null} {/* Render image only if it's defined */}
        </div>
       
        <div className='card-content'>
          <div className='card-heading'>
            <span className='card-series'>{series}</span>
            <span className="card-top">Top bid</span>
          </div>
          <div className="card-detail">
            <h4 className="card-title">{title}</h4> {/* Use 'title' prop here */}
            <div className="card-price">
              <img src="" alt="superEth" />
              <h4>{price} ETH</h4>
            </div>
          </div>
          <div className="card-sub-details">
            <span>#{tag}</span>
            <span>{time} day left</span>
          </div>
        </div>
      </div>
    );
  }
export default Card
