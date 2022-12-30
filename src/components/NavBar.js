import React, {useState, Fragment} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css"

function NavBar() {

const [colorChange, setColorchange] = useState(false);
const [serviceChange, setServiceChange] = useState(false)
  const changeNavbar = () =>{

     if(window.scrollY >= 150){
       setColorchange(true);
       setServiceChange(true)
     }
     else{
       setColorchange(false);
       setServiceChange(false)
     }
  };
  window.addEventListener('scroll', changeNavbar);


  const navigate = useNavigate()

  function ServiceClick(e){
    e.preventDefault();
    navigate("/services")
  }

  return (
    <Fragment>
      <div className={colorChange ? 'navbar navBarChange' : 'navbar'}>
      <nav className={colorChange ? 'nav navChange' : 'nav'}>
        <img className={colorChange ? 'image imageChange' : 'image'} src="https://static.wixstatic.com/media/fde625_e0e6a626aaed4279943d2fad9c2becd8~mv2.png/v1/crop/x_73,y_0,w_411,h_452/fill/w_158,h_165,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Transparent%20logo_PNG.png" alt="logo"/>
        <ul className={colorChange ? 'nav-ul nav-ulChange' : 'nav-ul'}>
          <Link to="/" className={colorChange ? 'nav-link nav-linkChange' : 'nav-link'} >HOME</Link>
          <Link to="/aboutus" className={colorChange ? 'nav-link nav-linkChange' : 'nav-link'}>ABOUT US</Link>
          <div className={serviceChange ? 'nav-linkService nav-linkChangeService' : 'nav-linkService'} value="Services" >
            <Link to="/services" className="linkService" >SERVICES</Link>
            <ul>
              <Link to="/servicedeclaration" className="link" >Declaration Services</Link>
              <Link to="/servicewriter" className="link" >Content Writer: Blogs</Link>
            </ul>
          </div>
          <Link to="/prices" className={colorChange ? 'nav-link nav-linkChange' : 'nav-link'}>PRICES</Link>
          <Link to="/blog" className={colorChange ? 'nav-link nav-linkChange' : 'nav-link'}>BLOG</Link>
          <Link to="/contactus" className={colorChange ? 'nav-link nav-linkChange' : 'nav-link'}>CONTACT US</Link>
        </ul>
      </nav>
      </div>
    </Fragment>
  );
}

export default NavBar;