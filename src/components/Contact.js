import React from "react";
import NavBar from './NavBar'
import './styles/Contact.css'

function Contact() {
  return (
    <div >
      <NavBar />
      <h1 className="contactTitle">A PARALEGAL SERVICE PROVIDER YOU CAN TRUST</h1>
      <h2 className="contactDescription">If you have a general inquiry or want more information, fill out your details and we will respond shortly.</h2>
    
      <div className="contactUs" >

        <h1 className="contactFormTitle" >Order Service Form</h1>
        <p className="contactFormDescription" >Hi! 
          <br/><br/>
          Thank you for choosing OPS to assist you! We are extremely excited to get started!
          <br/><br/>
          Please provide us with all the needed information to best assist you and your client. The more information we have- the better the affidavit will be. If we don't have all the information we need- there will be blanks within the affidavit for you to complete on behalf of the client.
          <br/><br/>
          As a reminder: All documentation, correspondences, and communications are protected under attorney-client privilege as a nonemployee.
        </p>
        <div className="formContactUs" >
          <form action="" className="form" >
            <label className="labelBasicData" htmlFor="">Your Name/ Law Firm: <input type="text"/></label>
            <label className="labelBasicData" htmlFor="">Your Email * <input type="text"/></label>
            <label className="labelBasicData" htmlFor="">Your Phone Number * <input type="text"/></label>
            <label className="labelBasicData" htmlFor="">Client Information *
              <p>All client information including but not limited to: Full name, phone number, email (if relevant), best availability if known, any information we should know about them</p>  
              <textarea className="typeDescription"></textarea>
            </label>
            <div className="otionSelector" >Client Main Language *
                <div className="otionSelec" >
                  <input type="checkbox" name="my-input" id="en"/>
                  <label htmlFor="en">English</label>
                  <input type="checkbox" name="my-input" id="es"/>
                  <label htmlFor="es">Spanish</label>
                </div>
            </div>
            <label className="documentAttach" htmlFor="">Please Attach All Relevant Docs 
              <p>This includes any documentation about their case that is helpful (i.e If Asylum- their I-589 form, children info in documentation, etc.)
                <br/>
                You can attach multiple documents. If the files are too big- feel free to send them via email altogether with the information requested in this form.</p>  
              <div className="file-select" id="src-file1" >
                <input type="file" name="src-file1" aria-label="Archive" accept=".pdf,.jpg,.png" multiple />
              </div>
            </label>
            <label className="documentAttach" htmlFor="">[If Applicable] Additional Space for documents. 
              <p>You can attach multiple documents.</p>  
              <div className="file-select" id="src-file2" >
                <input type="file" name="src-file2" aria-label="Archive" accept=".pdf,.jpg,.png" multiple />
              </div>
            </label>
            <label className="questions" htmlFor="">Any Questions/Comments? * 
              <textarea className="typeDescription"></textarea>
            </label>
            <label htmlFor="">Do you require an expedited service? *
              <p>Most services can be completed within 8-12 days. Rush services have a tier system. 
              <br/><br/>
              Rush within 24-48 hours: Up to $40<br/>
              Rush within 4-5 days: Up to $20</p> 
              <div className="otionSelec" >
                <input type="radio" name="my-input" id="yes"/>
                <label htmlFor="yes">Yes</label>
                <input type="radio" name="my-input" id="no"/>
                <label htmlFor="no">No</label>
              </div>
            </label>
            <button type="submit" className="contactFormButton" >Submit</button>
          </form>
        </div>

      </div>

    </div>
  );
}

export default Contact