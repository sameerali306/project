import React from 'react'

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <div className="content">
          <p className='sub-title'>Launching Soon</p>
          <h1 className="title">An NFT like no other</h1>
          <p className="description">Don't miss out on the release of our new NFT.Sign up to recieve update when we go live </p>
          <button>Sign Up</button>

        </div>
        <div className="image-container">
          <div className="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgfvg80fE4D3iP_8iz8RqYX8YA-UEqQHW8Q&s" alt="" />
          </div>
          <div className="ellipse-container">
            <div className='ellipse pink'></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
