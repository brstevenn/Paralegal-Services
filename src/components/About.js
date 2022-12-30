import React from "react";
import NavBar from './NavBar'
import './styles/About.css'

function About() {
  return (
    <div>
      <NavBar />
      <div className="divContainer">
        <p className="description">
          Shaeleigh "Shae" Severino has worked as a paralegal since the age of 17, 
          assisting as a Spanish/English Translator and Interpreter for over 400 clients regarding legal documents, 
          constructed different types of affidavits on the client’s behalf and produce professional blogs for the legal firm’s 
          website and social media accounts receiving over 1,000 reads. 
          She have written over 400 affidavits for clients which included and are not limited to Asylum, Waivers, 
          Adjustment of Status, DACA, U-Visa, TPS and holds experience in administrative tasks as well as preparing correspondence, 
          memoranda, and other legal and non-legal documents in an accurate and timely manner, 
          proofread and conduct research in order to provide quality verification of each document for content, context, accuracy, 
          spelling, grammar, punctuation, and proper formatting.
          <br/>
          <br/>
          Shaeleigh Severino is a graduate of St. John's University with a ABA- Approved Bachelors of Science in Legal Studies and 
          Bachelors of Arts in Government and Politics. She is an excellent organizer, communications strategist, legislative and 
          policy-centered operative, time manager, team, and self-motivator. She is currently enrolled in a Master's Program with the 
          trajectory of receiving her J.D and Ph.D. in the future.
        </p>
        <div className="profile">
          <img className="profilePhoto" src="https://static.wixstatic.com/media/fde625_b6581c9dfbdc4278aa0b75fb0cd78afe~mv2.jpeg/v1/crop/x_0,y_330,w_3220,h_3848/fill/w_415,h_496,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_2900_JPEG.jpeg" alt="profailphoto" />
          <h1 className="name" >Shaeleigh Severino</h1>
          <h2 className="description" >Freelance Paralegal</h2>
          <div >
            <a href="https://www.linkedin.com/company/76534303/admin/" target="_blank" rel="noopener noreferrer" ><img className="mediaLogo" src="https://static.wixstatic.com/media/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/48a2a42b19814efaa824450f23e8a253.png" alt="linkedinLogo"/></a>
            <a href="https://www.facebook.com/onlineparalegalservice?ref=pages_you_manage" target="_blank" rel="noopener noreferrer" ><img className="mediaLogo" src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png" alt="facebookLogo"/></a>
            <a href="https://twitter.com/theshaesev" target="_blank" rel="noopener noreferrer" ><img className="mediaLogo" src="https://static.wixstatic.com/media/9c4b521dd2404cd5a05ed6115f3a0dc8.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c4b521dd2404cd5a05ed6115f3a0dc8.png" alt="twitterLogo"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About