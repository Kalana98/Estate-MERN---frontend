import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src='./value.png' alt=''/>
                </div>
            </div>
            {/* right side */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give To You</span>
                <span className='secondaryText'>We prioritize clients, ensuring personalized service and exceeding expectations consistently.
                    Customer satisfaction is our commitment; your property journey, our top priority.
                </span>
            

            <Accordion
            className='accordian'
            allowMultipleExpanded={false}
            preExpanded={[0]}
            >
                {
                    data.map((item, i) => {
                        const [className, setClassName] = useState(null);
                        return (
                            <AccordionItem className={`accordianItem ${className}`} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordionButton'>

                                    <AccordionItemState>
                                        {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsedd")}
                                    </AccordionItemState>


                                        <div className="flexCenter icon">
                                            {item.icon}
                                        </div>
                                        <span className="primaryText">
                                            {item.heading}
                                        </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
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
  )
}

export default Value
