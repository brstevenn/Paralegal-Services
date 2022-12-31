import React from "react";
import NavBar from './NavBar'
import './styles/Services.css'

function Services() {
  return (
    <div>
      <NavBar />
      <div className="servicesCon" >
        <p className="titleServices" >Services Available</p>
        <div className="servicesContainerAll" >
        
          <div className="servicesCard" >
            <p className="servicesTitleOne" >PERSONALIZED AFFIDAVITS</p>
            <p className="servicesTextOne" >For many different types of applications, a self-sworn Affidavit can be essential to showing a bonafide relationship or a declaration of facts. With the experience of writing over 300 Affidavits for a variety of applications. Attorneys can decide if they would like their client to complete a quick questionnaire (provided) or if they prefer a phone conference in order to take down facts and write a well-developed statement</p>
          </div>

          <div className="servicesCard" >
            <p className="servicesTitleTwo" >ENGLISH/SPANISH TRANSLATIONS & TRANSCRIPTIONS</p>
            <p className="servicesTextTwo" >For businesses that are on a mission to connect successfully with Spanish-speaking audiences, we are ready to help you achieve this through Spanish website translation, Spanish marketing, and advertisement translation, Spanish video translation, and much more. Our team is available to provide professional transcriptions as soon as you submit your request. Our services vary from audio transcription & video transcription with flexible prices and needs. You interview someone for a case study at night, submit it before bed to have the transcription in your inbox before you get to work the next day</p>
          </div>

          <div className="servicesCard" >
            <p className="servicesTitleThree" >CONTENT WRITER</p>
            <p className="servicesTextThree" >Blog writing is a key element if remaining engaged with your clients and potential clients. Make your website more accessible by having an updated blog with relevant recent topics. With the requisite of being informative but also captivating through the use of the different types and styles of writing, flexibility is a unique requirement. The blog writing service is customizable and targeted to the special needs of your audience and the type of clientele you wish to attract.</p>
          </div>

          <div className="servicesCard" >
            <p className="servicesTitleFour" >SOCIAL MEDIA MANAGEMENT</p>
            <p className="servicesTextFour" > In the digital age, there’s no getting around it: your competitors and colleagues use social media, if you want to stay current you need to get involved. Social media profiles can drive people to your law firm’s website—where potential clients can find the information they need to hire your firm. We offer a series of plans and packages that includes content creation, content scheduling, strategy sessions, engagement management, DM Management, Hashtag and SEO research. </p>
          </div>

          <div className="servicesCard" >
            <p className="servicesTitleFive" >RESEARCH & WRITING</p>
            <p className="servicesTextFive" >Ability to research and analyze law sources such as statutes, recorded judicial decisions, legal articles, constitutions, and legal codes to prepare a memorandum of law in support of, immigration and asylum appeals. As well as researching old cases to investigate facts related to the current case, and provided suggestions related to current proceedings. </p>
          </div>

          <div className="servicesCard" >
            <p className="servicesTitleSix" >ADMINISTRATIVE SERVICES</p>
            <p className="servicesTextSix" >We can help your law firm increase efficiencies, scale more rapidly, and provide a client-centered experience. We complete routine administrative tasks and improve customer service by managing client calls, coordinating important meetings and deadlines, PowerPoint creation, copywriting blogs or newsletters, and more.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Services