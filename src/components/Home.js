import React from "react";
import { Link } from "react-router-dom";
import NavBar from './NavBar'
import './styles/Home.css'

function Home() {
  return (
    <div className="homeContainer" >
      <NavBar />

      <div className="titelContainer" >
        <h1 className="title" >FREELANCE PARALEGAL SERVICES</h1>
        <p className="titleDescription" >Bilingual English/Spanish Paralegal & Translation Services, Blog Content Writer, Expert Affidavit Writer, Virtual Assistant Services Offered.</p>
      </div>

      <div className="servicesContainer" >
        <div className="servicesDetails" >
          <h2 className="Services" >Why Virtual Paralegal Services?</h2>
          <p className="serviceDescription" >We’ve built a legal services team you can trust. Our business model is designed to be flexible so we can provide you with access to a team of experienced legal support professionals when you need them most. Whether you need us to fill in the gap, assist with specialized needs, or you simply need more time to focus on the big picture, we’ve got you covered. We help expand your capabilities and control cost in the U.S. and abroad. We’re ready when you are.</p>
          <ul className="servicesList" >
            <li>Solo & Small Firms</li>
            <li>All Sized Projects</li>
            <li>Legal Support Across a Range of Practice Areas</li>
          </ul>
          <Link to="/contactus" >
            <button type="button" className="buttonService" href="/contactus" >Schedule a Call</button>
          </Link>
        </div>
        <img className="servicesImage" src="https://static.wixstatic.com/media/11062b_a8bc8e4262274bdf8cbd8df689bb3a8a~mv2.jpg/v1/fill/w_343,h_509,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Laptop.jpg" alt="imageCompañia" />
      </div>

      <div className="testimonyContainer" >
        <p className="testimonyTitle" >What our Client Say</p>
        <div className="testimony" >
          <div className="testimonyTamble" >
            <div>
              <input type="checkbox" className="read-more-state" id="post-1" />
              <p className="read-more-wrap">Working whit Shaeleigh has been an amazing experience! She is extremely detailed oriented and always<span className="read-more-target">delivers the assignments given to her on record timing. I would recommend her to anyone and will continue to use her servicer</span></p>
              <label htmlFor="post-1" className="read-more-trigger"></label>
            </div>
            <h1 className="nameTestimony" >Max Leifer Esq</h1>
            <p className="pTestimony" >Attorney al Law</p>
          </div>
          <div className="testimonyTamble" >
            <div>
              <input type="checkbox" className="read-more-state" id="post-2" />
              <p className="read-more-wrap">Ms. Severino was a pleasure to work with. She was very professional and returned the work product<span className="read-more-target">whithin the time that was mutually agreed upon. Her grasp of the Spanish language was very strong and it allowed her to traslate an important dosument in coherent manner. I was not just looking for a regular/google traslation, and Ms. Severino was able to deliver this to my satisfaction</span></p>
              <label htmlFor="post-2" className="read-more-trigger"></label>
            </div>
            <h1 className="nameTestimony" >Elizabeth Cordoba Esq</h1>
            <p className="pTestimony" >Attorney al Law</p>
          </div>
          <div className="testimonyTamble" >
            <div>
              <input type="checkbox" className="read-more-state" id="post-3" />
              <p className="read-more-wrap">My experience with Shaeleigh as a paralegal in my office:<br/>-She worked hard at the research assigned to her<span className="read-more-target"><br/>-She was punctual<br/>-She delivered as agreed <br/>-She didn´n mind been corrected <br/>-She was teachable <br/>-She was honest As a paralegal under an attorney´s supervivion, I highly recomend her!</span></p>
              <label htmlFor="post-3" className="read-more-trigger"></label>
            </div>
            <h1 className="nameTestimony" >Mercedes S. Cano Esq</h1>
            <p className="pTestimony" >Attorney al Law</p>
          </div>
        </div>
        <button className="testimonyButton" >SUBMIT A TESTIMONY</button>
      </div>

      <div className="cotactUsContainer" >
        <p className="titleContactUs" >Contact Us Today to Get Started</p>
        <p className="descriptionContactUs" >Online Paralegal Services provides services nationwide.</p>
        <button className="buttonContactUs" >Get In Touch</button>
      </div>

      <div className="footer">
        <div className="footerDetails">
          <p> &copy; By Freelance Paralegal Services</p>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Legal Notice</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Privacy Policy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cookies Policy</a>
            </li>
          </ul>
          <div className="socialMedia">
            <a className="mediaLink" href="https://www.instagram.com/onlineparalegalservice/" target="_blank" rel="noopener noreferrer" ><img className="mediaLogo2" src="https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_22,h_22,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8d6893330740455c96d218258a458aa4.png" alt="instagramLogo"/></a> 
            <a className="mediaLink" href="https://www.facebook.com/onlineparalegalservice?ref=pages_you_manage" target="_blank" rel="noopener noreferrer" ><img className="mediaLogo2" src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png" alt="facebookLogo"/></a>
            <a className="mediaLink" href="https://www.linkedin.com/company/76534303/admin/" target="_blank" rel="noopener noreferrer" ><img className="mediaLogo2" src="https://static.wixstatic.com/media/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/48a2a42b19814efaa824450f23e8a253.png" alt="linkedinLogo"/></a>
          </div>
        </div>
        <p>Developed by<a className="nav-link" href="#">Bryan Gaitan</a></p>
      </div>
    </div>
  );
}

export default Home;