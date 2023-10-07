import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion"
import "./Value.css";
const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="v-container paddings innerWidth flexCenter ">
        {/* left-side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* right side */}

        <div className="v-right flexColStart">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded = {false}
            preExpanded = {[0]}
            >{
                data.map((item,i)=>{
                  const [className,setClassName] = useState(null);
                    return(
                        // for this Accordion section key is necessary as well as uuid is equallly necessary
                        <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                          <AccordionItemState>
                            {({expanded})=>{expanded ? setClassName("expanded") : setClassName("collapsed")}}
                          </AccordionItemState>
                            <AccordionItemHeading>
                                <AccordionItemButton className="flexCenter accordionButton">
                                    <div className="flexCenter icon">{item.icon}</div>
                                    <span className="primaryText">
                                        {item.heading}
                                    </span>
                                    <div className="div flexCenter icon">
                                        <MdOutlineArrowDropDown size={20}/>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                
                                <p className="secondaryText">{item.detail}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })
            }
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
