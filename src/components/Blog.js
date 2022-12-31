import React from "react";
import NavBar from './NavBar'
import './styles/Blog.css'

function Blog() {
  return (
    <div>
      <NavBar />
      <div>
        <div className="blogContainer" >
          <img className="picImage" src="https://static.wixstatic.com/media/fde625_b74fa23994b745a49decf3b4ba60806d~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/fde625_b74fa23994b745a49decf3b4ba60806d~mv2.jpg" alt="firma"/>
          <div className="postDetails" >
            <div className="picData" >
              <img className="profilePic" src="https://lh6.googleusercontent.com/-LoOxqmKVjf8/AAAAAAAAAAI/AAAAAAAAHfw/mBah088mmwA/s96-c/photo.jpg" alt="profile"/>
              <div className="profData" >
                <p className="profileName" >Shaeleigh Severino</p>
                <p className="dataPost" >Jul 1 ¬ 3 min</p>
              </div>
            </div>
            <div className="postData" >
              <p className="postTitle" >Why You Need a Legal Blog Write</p>
              <p className="postDescription" >They have the skills and expertise to effectively communicate your message. A legal write who also happens to have a law degree is your...</p>
            </div>
            <hr/>
            <div className="interactionData" >
              <div className="viwComm" >
                <div>20 views   0 comments</div>
              </div>
              <div className="fav" >1 <img className="favIcon" src="https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-vector-favorite-icon-png-image_323833.jpg" alt="fav"/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog