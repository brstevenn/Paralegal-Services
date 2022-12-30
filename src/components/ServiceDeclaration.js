import React from "react";
import NavBar from './NavBar';
import { useNavigate } from "react-router-dom";
import './styles/ServiceDeclaration.css'

function ServiceDeclaration() {

    const navigate = useNavigate()

    function handleClickContactUs(e) {
        e.preventDefault();
        navigate(`/contactus`)

    }

    return (
        <div>
            <NavBar />
            <div className="declarationContainer" >
                <p className="declarationTitle" >PERSONAL DECLARATION SERVICE</p>
                <p className="declarationDescription" >Comprehensive Declarations/Affidavits for a variety of USCIS Applications</p>
                <div className="declarationContainCrads" >
                    <div className="declarationCard" >
                        <p className="declarationOneTitle" >I-601A & I-601 Waivers</p>
                        <p className="declarationOneText" >Leaving one’s home country due to poverty, violence, or both is, possibly, one of the hardest decisions someone can make. And yet, countless people feel forced to say goodbye to everything they have ever known, bringing with them the tiny glimmer of hope that they will provide something good for their loved ones. From the struggles of growing up in a hostile environment, to the relief that attaining comfort and security in a new country and being members of good character in this country, writing these stories is the main focus of our work.</p>
                        <button className="declarationButton" onClick={handleClickContactUs} >SEE EXCERPTS HERE</button>
                    </div>
                    <div className="declarationCard" >
                        <p className="declarationTwoTitle" >VAWA Petitions</p>
                        <p className="declarationTwoText" >There are, sadly, too many ways in which a spouse can abuse one’s trust, resulting in physical, mental, emotional and psychological pain. Every story is not the same but every case has a story of struggle and loss behind it. Capturing that sentiment in a declaration while granting the client room to talk and process these memories often results in a cathartic and productive experience is crucial when talking about these matters. </p>
                        <button className="declarationButton" onClick={handleClickContactUs} >SEE EXCERPTS HERE</button>
                    </div>
                    <div className="declarationCard" >
                        <p className="declarationThreeTitle" >Asylum Applications</p>
                        <p className="declarationThreeText" >In today’s world, the U.S. has shined for its protection to immigrants suffered persecution or fear that they will suffer persecution due to their race, religion, nationality membership in a particular social group or political opinion. Despite this, the complexity of the petitioner’s decision requires a detailed account of the personal and societal circumstances, as well as a description of the impact that being forced to go back to a country that would harm or potentially murder them, if returned. </p>
                        <button className="declarationButton" onClick={handleClickContactUs} >SEE EXCERPTS HERE</button>
                    </div>
                    <div className="declarationCard" >
                        <p className="declarationFourTitle" >Adjustment of Status</p>
                        <p className="declarationFourText" >Finding love, happiness and strength through a marriage is a blessing that not many have the ability to say they have. As new bonds form and families come together, we get to shed light into a amazing union of two people that love each other and don't want legal status to come in between that. Capturing the horrid pasts before the relationship, the growth and beautiful love story and the potential future together they want to have is our main goal. </p>
                        <button className="declarationButton" onClick={handleClickContactUs} >SEE EXCERPTS HERE</button>
                    </div>
                    <div className="declarationCard" >
                        <p className="declarationFiveTitle" >U- Visa Declaration</p>
                        <p className="declarationFiveText" >Many come to the United States in search of the American Dream only to find themselves a victim of a crime in the U.S. For those that search for justice and assist the police- we can ensure to capture their experience and pain but their shinning hope for a criminal justice system to work for them and their loved ones. These stories contain different types of attacks that they were a victim to and the need to remain in the U.S for their loved ones or direct family. </p>
                        <button className="declarationButton" onClick={handleClickContactUs} >SEE EXCERPTS HERE</button>
                    </div>
                    <div className="declarationCard" >
                        <p className="declarationSixTitle" >Temporary Protected Status (TPS) Declarations</p>
                        <p className="declarationSixText" >There are thousands of people whose country is unsafe to return to or  the country is unable to handle the return of people adequately due to ngoing armed conflict (such as civil war), An environmental disaster (such as earthquake or hurricane), or an epidemic or other extraordinary and temporary conditions. No case is the same despite these three general causes of protective status. People who are from Burma (Myanmar), El Salvador, Haiti, Honduras, Nepal, Nicaragua, Somalia, Sudan, South Sudan, Syria, Venezuela and Yemen will have a chance of telling their story.</p>
                        <button className="declarationButton" onClick={handleClickContactUs} >SEE EXCERPTS HERE</button>
                    </div>
                    <div className="declarationCard" >
                        <p className="declarationSevenTitle" >Medical Conditions Report</p>
                        <p className="declarationSevenText" >Medical Country Conditions serve as evidence and proof of the many medical issues a client or loved one has. This is often paired with Asylum, Waiver, Motions or TPS cases to highlight the need of medical support that they need/receive in the U.S versus their country of origin. All reports come with a table of contents and highlighted articles to make it easier to include in the final package for USCIS/Judge reviewing. All research is specific to each client.</p>
                        <button className="declarationButton" onClick={handleClickContactUs} >SEE EXCERPTS HERE</button>
                    </div>
                    <div className="declarationCard" >
                        <p className="declarationNigthTitle" >Country Conditions Reports</p>
                        <p className="declarationNigthText" >Country Conditions serve as evidence and proof of the horrid conditions and quality of life of the client's  country of origin. Reports are comprised of education quality, health options, family safety and children lifestyle (if applicable), and job availability/ economy. All reports come with a table of contents and highlighted articles to make it easier to include in the final package for USCIS/Judge reviewing. All research is specific to each client.</p>
                        <button className="declarationButton" onClick={handleClickContactUs} >SEE EXCERPTS HERE</button>
                    </div>
                    <div className="declarationCard" >
                        <p className="declarationNineTitle" >English/Spanish Translations</p>
                        <p className="declarationNineText" >For businesses that are on a mission to connect successfully with Spanish-speaking audiences, we are ready to help you achieve this through Spanish website translation, Spanish marketing, and advertisement translation, Spanish video translation, and much more. Our team is available to provide professional transcriptions as soon as you submit your request. Our services vary from audio transcription & video transcription with flexible prices and needs. You interview someone for a case study at night, submit it before bed to have the transcription in your inbox before you get to work the next day</p>
                        <button className="declarationButton" onClick={handleClickContactUs} >SEE EXCERPTS HERE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceDeclaration