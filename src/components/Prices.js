import React, {useState, useEffect} from "react";
import { useLocation, useNavigate} from "react-router-dom";
import NavBar from './NavBar'
import './styles/Prices.css'

import useQueryParams from './hooks/useQueryParams'

function Prices() {

  const navigate = useNavigate()

  function handleClick(e) {
    e.preventDefault();

    if(e.target.id != undefined) {  
      navigate(`/form?${e.target.id}`)
    }
  }

  return (
    <div>
      <NavBar />
            <div className="servicesContainer" >

        <div className="servicesImgContainer" >
          <p className="titleServiceOne" >AFFIDAVIT PRICING</p>
          <div className="serviceContent" >
            <p className="serviceTextOne" >
              I-601/I-601A AFFIDAVIT ASYLUM AFFIDAVIT<br/><br/>I-360 VAWA ADJUSTMENT OF STATUS AFFIDAVIT<br/><br/>I-130 FAMILY PETITION AFFIDAVIT<br/><br/>I-821 TPS AFFIDAVIT U-VISA AFFIDAVIT<br/><br/>N-400 CITIZENSHIP AFFIDAVIT AFFIDAVIT OF NAMES<br/><br/>I-751 REMOVAL OF CONDITIONS AFFIDAVIT<br/><br/>I821D DACA AFFIDAVIT    
            </p>
          </div>
          <button className="serviceButton" onClick={handleClick} id="service=affidavit" >$200 per Affidavit</button>
        </div>

        <div className="servicesImgContainer" >
          <p className="titleServiceTwo" >ADD-ON SERVICES & PRICING</p>
          <div className="serviceContent" >
            <p className="serviceTextTwo" >
              COUNTRY CONDITIONS REPORT<br/><br/>MEDICAL CONSITIONS REPORT<br/><br/>DOCUMENT/VIDEO TRANSCRIPTION<br/><br/>AFFIDAVIT TRASLATION<br/>(SPANISH/ENGLISH)
            </p>
          </div>
          <button className="serviceButton" onClick={handleClick} id="service=addonservices" >Starting at $100</button>
        </div>

        <div className="servicesImgContainer" >
          
          <p className="titleServiceThree" >BLOG CONTENT PACKAGES</p>
          
          <div className="packagesContainer" >
            
            <div className="packageContainer" >
              <div className="packageContainerBox" >
                <button className="packageButton" onClick={handleClick} id="blogpackage=bronze" >BRONZE $700</button>
                <p className="packageContainOne" >4 Blogs a month (1x a week)<br/>Keyword & Industry Research<br/>Proofreading<br/>On-page SEO + relevant tags<br/>One 30-min consult call</p>
              </div>
              <div className="packageContainerBoxFigure" ></div>
            </div>
            
            <div className="packageContainer" >
              <div className="packageContainerBox" >
                <button className="packageButton" onClick={handleClick} id="blogpackage=gold" >GOLD $3,000</button>
                <p className="packageContainTwo" >Blogging + Social Media<br/>Everything in Silver Package 20 post (5x a week) on all of the social media platforms Stategic tie-in of blog topics to social media post</p>
              </div>
              <div className="packageContainerBoxFigure" ></div>
            </div>
            
            <div className="packageContainerThree" >
              <div className="packageContainerBox" >
                <button className="packageButton" onClick={handleClick} id="blogpackage=silver" >SILVER $1,400</button>
                <p className="packageContainThree" >8 Blogs a month (2x a week)<br/>Keyword & Industry<br/>Research Proofreading<br/>On-page SEO + relevant tags<br/>One hour consultation call</p>
              </div>
              <div className="packageContainerBoxFigure" ></div>
            </div>

          </div>
          
          <p className="packageAdvert" >Each package listed above is a minimum 3-month commitment A typical blog post in any Package is 500-750 words. Blog posts come with 1 round of revisions. If your blog requires more than what is outlined here, please contact us whit the details so we can scope and quote the project</p>
        
        </div>

        <div className="servicesImgContainer" >
          <p className="titleServiceFour" >PRINT MARKETING MATERIALS</p>
          <div className="serviceContentFour" >
            <div className="serviceTextFour-One-Contain" >
              <p className="serviceTextFour-One" >
                PALMCARD<br/><br/>DOORHANGER<br/><br/>FOLDED POSTCARD<br/><br/>PROCHURES<br/><br/>POSTERS<br/><br/>FLOOR BANNER<br/><br/>BUSINESS CARD    
              </p>
            </div>
            <div className="serviceTextFour-Two-Contain">
              <p className="serviceTextFour-Two" >
                $100.00<br/><br/>$110.00<br/><br/>$125.00<br/><br/>$130.00<br/><br/>$100.00<br/><br/>$100.00<br/><br/>$50.00    
              </p>
            </div>
          </div>
          <form action="/form" >
            <label htmlFor="materialSelect" >
              <select className="materialName" name="selectoption" id="selectoption" >
                <option value="default" >Select a Material</option>
                <option value="palmcard" >Palmcard</option>
                <option value="doorhanger">Doorhanger</option>
                <option value="postcard">Folded Postcard</option>
                <option value="prochures">Prochures</option>
                <option value="posters">Posters</option>
                <option value="banner">Floor Banner</option>
                <option value="bussines">Business Card</option>
              </select>
            </label>
            <button className="submitButton" type="submit">Confirm</button>
          </form>
        </div>

        <div className="servicesImgContainer" >
          <p className="titleServiceFive" >LEGAL WRITING</p>
          <div className="serviceContentFive" >
            <p className="tierTitle" >TIER 1 BLOG CONTENT:</p>
            <p className="tierText" >500-750 WORDS</p>
            <p className="tierTitle" >TIER 2 BLOG CONTENT:</p>
            <p className="tierText" >750-1000 WORDS</p>
            <p className="tierTitle" >TIER 3 BLOG CONTENT:</p>
            <p className="tierText" >1000 WORDS & UP</p>
          </div>
          <button className="serviceButton" onClick={handleClick} id="service=writing" >Starting at $175</button>
        </div>

      </div>
    </div>
  );
}

export default Prices