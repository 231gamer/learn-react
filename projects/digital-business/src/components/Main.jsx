import React  from "react";
import email_logo from '../assets/Mail.png'
import linkedin_logo from '../assets/linkedin.png'


const Main = () => {
    return (
        <div className="main-container">
            <h3 className="main-heading main-content">
                Business Card
            </h3>
            <h4 className="main-h4-one main-content">
                Front-End Developer
            </h4>
            <span className="main-span-two main-content">
                Website Link Channel
            </span>
            <div className="btn-container">
            <button className="main-btn btn-email">
               <img src={email_logo} className="email" /> Email 
            </button>
            <button className="main-btn btn-linkedin">
               <img src={linkedin_logo} className="linkedin" /> Linkedin
            </button>
            </div>

            <div className="main-about-interest">
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum dolorem non doloremque, tempora soluta commodi sunt velit! Expedita ipsam voluptatibus neque quibusdam ratione dolor voluptates, aliquid in quos doloremque labore aliquam deleniti repellat.</p>
                <h3>Interest</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur error exercitationem, totam eius fugiat veniam, iusto dolor commodi magni cupiditate assumenda. Similique iste dolor earum eveniet suscipit nulla quidem, optio explicabo aspernatur ut assumenda!</p>
            </div>  
        </div>
    )
}

export default Main