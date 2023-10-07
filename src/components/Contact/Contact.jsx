import React from "react";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs"; 
import {HiChatBubbleBottomCenter} from "react-icons/hi2"
// import{}
import "./Contact.css"


const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="c-container paddings innerWidth flexCenter">
        {/* left side */}
        <div className="c-left flexColStart">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexCenter">
                        <div className="flexCenter icon">
                            <MdCall size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Call</span>
                            <span className="secondaryText">8340563042</span>
                        </div>
                    </div>
                    <div className="button flexCenter">
                        Call Now
                    </div>
                </div>

                {/* second mode */}

                <div className="flexColCenter mode">
                    <div className="flexCenter">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Chat</span>
                            <span className="secondaryText">8340563042</span>
                        </div>
                    </div>
                    <div className="button flexCenter">
                        Chat Now
                    </div>
                </div>
                </div>
                {/* third mode */}

                <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexCenter">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Video Call</span>
                            <span className="secondaryText">8340563042</span>
                        </div>
                    </div>
                    <div className="button flexCenter">
                       Video Call Now
                    </div>
                </div>

                {/* 4th mode */}

                <div className="flexColCenter mode">
                    <div className="flexCenter">
                        <div className="flexCenter icon">
                            <HiChatBubbleBottomCenter size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Message</span>
                            <span className="secondaryText">8340563042</span>
                        </div>
                    </div>
                    <div className="button flexCenter">
                        Message Now
                    </div>
                </div>
                </div>
            
          </div>
        </div>

        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
