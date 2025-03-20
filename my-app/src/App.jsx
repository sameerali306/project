import React from 'react'
import './Scss/index.scss';
// import ScrollToTop from './components/ScrollToTop';
// import Card from './componentsCard';
import Client from './components/Client';
// import Footer from './components/Footer';
import Free from './components/Free';
import Home from './components/Home';
// import Like from './components/Like';
import Navbar from "./components/Navbar";
// import Release from "./components/Release";
// import SignUp from "./components/Signup";
// import SuperRare from "./components/SuperRare";
// import"./scss/style.scss"

function App() {
  return (
    <div className='app-container'>
      {/* <ScrollToTop/> */}
     {/* <Card/> */}
     
     <Navbar/>
     {/* <Footer/> */}
    
     <Home/>
      <Free/> 
      <Client/> 
     {/* <Like/> */}
    
     {/* <Release/> */}
     {/* <SignUp/> */}
     {/* <SuperRare/> */}
    </div>
  )
}

export default App


  
