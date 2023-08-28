import React from 'react';
// import 'font-awesome/css/font-awesome.min.css';
// import 'w3-css/w3.css';
// import Stylesheet from 'App.css' 
import profileImage from  './images/avatarpic.jpg';
import nahinBtaoooooooonga from './images/mypic.jpg';
import addHeading from './images/project3.png';
import collection from './images/collection.png';
import img1 from './images/project1.jpeg';
import img2 from './images/project2.jpeg';
// import img3 from './images/WhatsApp Image 2023-08-01 at 2.49.46 AM.jpeg';
import './App.css';
import './index.css'

function App() {
  return (
    <> 

    <div>
      
    <link rel="preconnect" href="https://fonts.googleapis.com"/>

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

<link href="https://fonts.googleapis.com/css2?family=Montserrat" rel="stylesheet"/>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>

      
      </div>
          <div className="w3-black">
            {/* Icon Bar (Sidebar - hidden on small screens) */}
            <nav
              style={{ width: '100px', backgroundColor: 'black' }}
              className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center"
            >
              {/* Avatar image in top left corner */}
              <img
                style={{ borderRadius: '100%', width: '65px', height: '65px' }}
                src={profileImage}
                alt="Avatar"
              />
              <br />
              <br />
              <a href="#" className="w3-bar-item w3-button w3-padding-large w3-black">
                <i className="fa fa-home w3-xxlarge" />
                <p>HOME</p>
              </a>
              <a
                href="#aboutme"
                className="w3-bar-item w3-button w3-padding-large w3-black"
              >
                <i className="fa fa-user w3-xxlarge" />
                <p>ABOUT</p>
              </a>
              <a
                href="#projects"
                className="w3-bar-item w3-button w3-padding-large w3-black"
              >
                <i className="fa fa-eye w3-xxlarge" />
                <p>PHOTOS</p>
              </a>
              <a
                href="#contact"
                className="w3-bar-item w3-button w3-padding-large w3-black"
              >
                <i className="fa fa-envelope w3-xxlarge" />
                <p>CONTACT</p>
              </a>
            </nav>
      
            {/* Navbar on small screens (Hidden on medium and large screens) */}
            <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
              <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                <a href="#" className="w3-bar-item w3-button" style={{ width: '25% !important' }}>
                  HOME
                </a>
                <a href="#aboutme" className="w3-bar-item w3-button" style={{ width: '25% !important' }}>
                  ABOUT
                </a>
                <a href="#projects" className="w3-bar-item w3-button" style={{ width: '25% !important' }}>
                  PHOTOS
                </a>
                <a href="#contact" className="w3-bar-item w3-button" style={{ width: '25% !important' }}>
                  CONTACT
                </a>
              </div>
            </div>
      
            {/* page content */}
      
            {/* top header */}
            <div id="header">
              <h1 id="myname">I'm Yasal Khan. </h1> <p id="smalld">Graphic & Web Designer</p>{' '}
              <img src={nahinBtaoooooooonga} id="photo" alt="" srcSet="" />
            </div>
      
            {/* aboutme */}
            <div id="aboutme">
              <br />
              <h2 className="mera-nam">My Name</h2>
              <hr style={{ width: '200px' }} className="w3-opacity" />
      
              <p id="mearraaaanamammmmmmmm">
                Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
      
              <h2 className="myskillshead">My Skills</h2>
      
              {/* skills */}
              {/* graphic design*/}
              <p className="skillkimaaka">Graphic Design</p>
              {/* empty */}
              <div className="skillnhinata">
                {/* fill */}
                <div className="skillata"></div>
              </div>
      
              {/* Web design*/}
              <p className="skillkimaaka">Web Design</p>
              {/* empty */}
              <div className="skillnhinata">
                {/* fill */}
                <div className="skillata" style={{ width: '20%' }}></div>
              </div>
      
              {/* document technician */}
              <p className="skillkimaaka">Document Technician</p>
              {/* empty */}
              <div className="skillnhinata">
                {/* fill */}
                <div className="skillata" style={{ width: '60%' }}></div>
              </div>
      
              <div style={{ color: 'black' }} className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
                <div className="w3-quarter w3-section">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <h2 style={{ right: '10px', fontFamily: 'Montserrat, sans-serif !important' }}>
                      0
                    </h2>
                    <br />
                    <p>Partners</p>
                  </div>
                </div>
                <div className="w3-quarter w3-section">
                  <h2 style={{ right: '10px', fontFamily: 'Montserrat, sans-serif !important' }}>
                    150+
                  </h2>
                  <br />
      
                  <span>Projects Done</span>
                </div>
                <div className="w3-quarter w3-section">
                  <h2 style={{ right: '10px', fontFamily: 'Montserrat, sans-serif !important' }}>
                    1000+
                  </h2>
                  <br />
                  <p>Clients Handled</p>
                </div>
                <div className="w3-quarter w3-section">
                  <h2 style={{ right: '10px', color: 'black', fontFamily: 'Montserrat, sans-serif !important' }}>
                    0
                  </h2>
                  <br />
                  <p>Meetings</p>
                </div>
              </div>
              <button
                id="buttonnacho"
                style={{ borderRadius: '25px' }}
                className="w3-button w3-light-grey w3-padding-large w3-section"
              >
                <i className="fa fa-download"></i> Download Resume
              </button>
      
              {/* Grid for pricing tables */}
              <h2 className="myskillshead">My Price</h2>
              <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
                <div id="wholepricingdaba">
                  <div className="w3-half w3-margin-bottom">
                    <ul className="price-daba w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
                      <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
                      <li className="w3-padding-16">Web Design</li>
                      <li className="w3-padding-16">Graphic Design</li>
                      <li className="w3-padding-16">5GB Storage</li>
                      <li className="w3-padding-16">Mail Support</li>
                      <li className="w3-padding-16">
                        <h2>$ 10</h2>
                        <span className="w3-opacity">per month</span>
                      </li>
                      <li className="w3-light-grey w3-padding-24">
                        <button className="w3-button w3-white w3-padding-large w3-hover-black">
                          Sign Up
                        </button>
                      </li>
                    </ul>
                  </div>
      
                  <div className="w3-half">
                    <ul
                      style={{ top: '-10px' }}
                      className="price-daba w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off"
                    >
                      <li className="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
                      <li className="w3-padding-16">Web Design</li>
                      <li className="w3-padding-16">Graphic Design</li>
                      <li className="w3-padding-16">50GB Storage</li>
                      <li className="w3-padding-16">Endless Support</li>
                      <li className="w3-padding-16">
                        <h2>$ 25</h2>
                        <span className="w3-opacity">per month</span>
                      </li>
                      <li className="w3-light-grey w3-padding-24">
                        <button className="w3-button w3-white w3-padding-large w3-hover-black">
                          Sign Up
                        </button>
                      </li>
                    </ul>
                  </div>
                  {/* End Grid/Pricing tables */}
                </div>
              </div>
            </div>
      
            {/* projects */}
            <div id="projects">
              <h2 className="mera-nam">My Projects</h2>
              <hr style={{ width: '200px', left: '110px', position: 'relative' }} className="w3-opacity" />
      
              <img
                style={{ width: '200px', height: '200px' }}
                className="saryimgcontrol"
                src={addHeading}
                id=""
                alt=""
                srcSet=""
              />
      
              <img
                style={{ width: '200px', height: '200px' }}
                className="saryimgcontrol"
                src={collection}
                alt=""
              />
      
              <img style={{ width: '200px', height: '200px' }} className="saryimgcontrol" src={img1} alt="" />
      
              <img style={{ width: '200px', height: '200px' }} className="saryimgcontrol" src={img2} alt="" />
      
              {/* <img
                style={{ width: '200px', position: 'relative', top: '4px', height: '200px', position: 'relative' }}
                className="saryimgcontrol"
                src={img3}
                alt=""
              /> */}
            </div>
      
            {/* contact */}
            <div id="contact">
              <h2 className="mera-nam">Contact Me</h2>
              <hr style={{ width: '200px', left: '100px', position: 'relative' }} className="w3-opacity" />
      
              <div style={{ display: 'block' }} className="w3-section">
                <p>
                  <i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right" />
                  Chicago, US
                </p>
                <p>
                  <i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right" />
                  Phone: +00 151515
                </p>
                <p>
                  <i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right" /> Email:
                  mail@mail.com
                </p>
              </div>
      
              <p style={{ display: 'block' }} className="w3-section">
                Lets get in touch send me a message
              </p>
      
              <br />
              <form action="/action_page.php" target="_blank">
                <p>
                  <input
                    className="messagekimaaka w3-input w3-padding-16"
                    type="text"
                    placeholder="Name"
                    required
                    name="Name"
                  />
                </p>
                <p>
                  <input
                    className="messagekimaaka w3-input w3-padding-16"
                    type="text"
                    placeholder="Email"
                    required
                    name="Email"
                  />
                </p>
                <p>
                  <input
                    className="messagekimaaka w3-input w3-padding-16"
                    type="text"
                    placeholder="Subject"
                    required
                    name="Subject"
                  />
                </p>
                <p>
                  <input
                    className="messagekimaaka w3-input w3-padding-16"
                    type="text"
                    placeholder="Message"
                    required
                    name="Message"
                  />
                </p>
                <p>
                  <button
                    id="buttonkiaysikitysi"
                    className="w3-button w3-light-grey w3-padding-large"
                    type="submit"
                  >
                    <i className="fa fa-paper-plane" /> SEND MESSAGE
                  </button>
                </p>
                <footer
              style={{ position: 'relative', left: '110px' }}
              className="w3-content w3-padding-64 w3-text-grey w3-xlarge" id='footerboxing'
            >
              <i style={{ position: 'relative', left: '5px' }} className="fa fa-facebook-official w3-hover-opacity" />
              
              <i style={{ position: 'relative', left: '15px' }} className="fa fa-instagram w3-hover-opacity" />
              
              <i style={{ position: 'relative', left: '25px' }} className="fa fa-snapchat w3-hover-opacity" />
              
              <i style={{ position: 'relative', left: '35px' }} className="fa fa-pinterest-p w3-hover-opacity" />
             
              <i style={{ position: 'relative', left: '45px' }} className="fa fa-twitter w3-hover-opacity" />
             
              <i style={{ position: 'relative', left: '55px', display: 'inline' }} className="fa fa-linkedin w3-hover-opacity" />
              <br/><br/>
              <b><h2 style={{ position: 'relative', left: '100px' }} className="w3-medium">
                Powered by  <a href="https://www.instagram.com/canvas_wizardofficial/" target="_blank" className="w3-hover-text-green">Godzilla</a>
              </h2></b>
              {/* End footer */}
            </footer>
              </form>
            </div>
      
          
          </div>
       
     
      
    
      
    
    </>
  );
}

export default App;
