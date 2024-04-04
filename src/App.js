import img from './Assests/ad2.jpg';
import './App.css';
import { useState } from 'react';
import goa from './Assests/goa.jpg'
import reshikesh from './Assests/rishikesh.jpg'
import ladhak from './Assests/ladakh.jpg'
import mehalaya from './Assests/mehalaya.jpg'



function App() {

  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleLinkClick = () => {
    setCollapsed(true);
  };

  return (
    <>
      <div>
        <div className='navbar'>
          <div></div>

          <div className='nav-header'>Adventure</div>
          <nav className=" navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" onClick={handleToggle}>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={'collapse navbar-collapse' + (collapsed ? '' : ' show')} id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#home" onClick={handleLinkClick}>Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about" onClick={handleLinkClick}>About us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#places" onClick={handleLinkClick}>Places</a>
                  </li>

                </ul>
              </div>
            </div>
          </nav>

        </div>


        <div className='home' id='home'>
          <div className='home-content'>
            <div className='home-text'>
              <hr></hr>
              The world is filled with Adventure - all you have to do is find it
              <hr></hr>
            </div>

          </div>
        </div>

        <div className='about' id='about'>
          <div className='about-header'>About</div>
          <div className='row d-flex p-5 about-content'>
            <div className='col-lg-3 '>
              <img src={img} alt='img' className='about-img'></img>
            </div>
            <div className='col-lg-9'>
              Welcome to AdventureTrips! We are a team of passionate explorers dedicated to creating unforgettable experiences in the great outdoors. Our mission is to inspire adventure and empower travelers to discover the world's most breathtaking destinations.

              At AdventureTrips, we believe that adventure is not just about visiting new places, but about immersing yourself in the beauty of nature, embracing new challenges, and connecting with like-minded adventurers. Whether you're seeking adrenaline-pumping thrills or serene moments of tranquility, we have the perfect adventure for you.

              Our team consists of experienced guides and outdoor enthusiasts who are committed to ensuring your safety and enjoyment throughout your journey. From epic treks through rugged mountain ranges to exhilarating water sports in pristine lakes, we offer a wide range of meticulously planned trips designed to suit all skill levels and interests.

              But adventure is more than just exploration—it's about making meaningful connections and creating lifelong memories. That's why we strive to foster a sense of camaraderie and community among our travelers, encouraging shared experiences and mutual support along the way.

              Join us on an adventure of a lifetime and discover the wonders of the world with AdventureTrips. Let's embark on this journey together and make every moment count!

            </div>

          </div>

        </div>

        <div className='place ' id='places'>
          <div className='row'>

            <div className='item col-lg-3'>
              <img className='place-img' src={goa} />
              <div className="text-overlay">
                <h2 className="overlay-text">GOA</h2>
              </div>
            </div>
            <div className='item col-lg-3'>
              <img className='place-img' src={ladhak} />
              <div className="text-overlay">
                <h2 className="overlay-text">LADHAK</h2>
              </div>
            </div>
            <div className='item col-lg-3'>
              <img className='place-img' src={reshikesh} />
              <div className="text-overlay">
                <h2 className="overlay-text">RISHIKESH</h2>
              </div>
            </div>
            <div className="item col-lg-3">
              <img className="place-img" src={mehalaya} alt="Mehalaya" />
              <div className="text-overlay">
                <h2 className="overlay-text">MEHALAYA</h2>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>

  );
}

export default App;
