import React from "react";
import { FooterContainer, FooterWrapper, ContactInfoContainer, ContactInfoImg, ContactInfoLink, DeveloperInfo, DeveloperInfoLink, DeveloperInfoContainer } from "./Footer.elements";
import ContactInfo from "../../data/contactinfo.json";
import facebook from "../../img/icons/fb.svg";
import instagram from "../../img/icons/ig.svg";
import youtube from "../../img/icons/youtube.svg";
import whatsapp from "../../img/icons/wp.svg";
import { FaReact } from "react-icons/fa";
import "./animation.css";

const Footer = () => {

    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <ContactInfoContainer>
                        <ContactInfoLink href={ContactInfo[0].link} target="_blank"><ContactInfoImg src={facebook} alt={ContactInfo[0].label}/></ContactInfoLink> 
                        <ContactInfoLink href={ContactInfo[1].link} target="_blank"><ContactInfoImg src={instagram} alt={ContactInfo[1].label}/></ContactInfoLink>
                        <ContactInfoLink href={ContactInfo[2].link} target="_blank"><ContactInfoImg src={youtube} alt={ContactInfo[2].label}/></ContactInfoLink>
                        <ContactInfoLink href={ContactInfo[3].link} target="_blank"><ContactInfoImg src={whatsapp} alt={ContactInfo[3].label}/></ContactInfoLink>
                    </ContactInfoContainer>
                    <DeveloperInfoContainer>
                        <FaReact className="Atom"/>
                        <DeveloperInfo>Powered by <DeveloperInfoLink href="https://www.linkedin.com/in/juanmtamayo/" target="_blank">JMTamayo</DeveloperInfoLink>
                        </DeveloperInfo>
                    </DeveloperInfoContainer>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
    
};

export default Footer