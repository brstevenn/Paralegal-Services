import React, { useState } from "react";
import NavBar from './NavBar'
import './styles/ServiceWriter.css'

function ServiceWriter() {

    const images = [
        "https://st2.depositphotos.com/5024787/9085/i/600/depositphotos_90850012-stock-photo-picture-of-themis-femida-or.jpg",
        "https://st.depositphotos.com/1177973/1364/i/600/depositphotos_13649899-stock-photo-wooden-gavel-and-books-on.jpg",
        "https://st4.depositphotos.com/11249622/25068/i/600/depositphotos_250680090-stock-photo-sculpture-blind-themis-holding-empty.jpg",
        "https://st.depositphotos.com/2631303/3723/i/600/depositphotos_37234135-stock-photo-trial.jpg",
    ]


    const [imageState, setimageState] = useState({
        image: "https://st2.depositphotos.com/5024787/9085/i/600/depositphotos_90850012-stock-photo-picture-of-themis-femida-or.jpg",
        id: 1,
    })

    const {image, id} = imageState


    function handleClick(e) {
        e.preventDefault()
        const image = document.getElementsByClassName("imageview")
        const imgId = image[0].id
        if(e.target.name === "preview"){
            if(imgId === '1'){
                let imageUrl = images[images.length - 1]
                let imageId = images.length
                setimageState({...imageState, image: imageUrl, id: imageId})
            } else {
                if(parseInt(imgId) === images.length){
                    let imageUrl = images[parseInt(imgId) - 2]
                    let imageId = images.length - 1
                    setimageState({...imageState, image: imageUrl, id: imageId})
                } else {
                    let imageUrl = images[parseInt(imgId) - 2]
                    let imageId = parseInt(imgId) - 1
                    setimageState({...imageState, image: imageUrl, id: imageId})
                }
            }
        }
        if(e.target.name === "next"){
            if(parseInt(imgId) === images.length){
                let imageUrl = images[0]
                let imageId = 1
                setimageState({...imageState, image: imageUrl, id: imageId})
            } else {
                let imageUrl = images[parseInt(imgId)]
                let imageId = parseInt(imgId) + 1
                setimageState({...imageState, image: imageUrl, id: imageId})
            }
        }
    }


    return (
        <div>
            <NavBar />
            <div className="slideContainer">
                <input className="slideNavigate" type="button" value="<" onClick={handleClick} name="preview" id="preview" />
                <div className="slideImages">
                    <div className="slideImg" >
                        <img src={image} alt="review" id={id} className="imageview" />
                    </div>
                </div>
                <input className="slideNavigate" type="button" value=">" onClick={handleClick} name="next" id="next" />
            </div>
        </div>
    );
}

export default ServiceWriter