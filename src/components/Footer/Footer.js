import React from "react";
import { FooterContainer, FooterWrapper, ContactInfoContainer, ContactInfoImg, ContactInfoLink, DeveloperInfo, DeveloperInfoLink, DeveloperInfoContainer } from "./Footer.elements";
import { FaReact } from "react-icons/fa";
import './animation.css'


let ContactInfo = [

    { 
        label: 'facebook',
        link: 'https://www.facebook.com/maiker.mejia.77',
        iconDirectory: '/img/icons/fb.svg'
    },
    {
        label: 'instagram',
        link: 'https://instagram.com/maikermejiacantante?utm_medium=copy_link',
        iconDirectory: '/img/icons/ig.svg'
    },
    {
        label: 'youtube',
        link: 'https://youtube.com/@maikermejia3849',
        iconDirectory: '/img/icons/youtube.svg'
    },
    {
        label: 'whatsapp',
        link: 'https://api.whatsapp.com/send?phone=573006908335',
        iconDirectory: '/img/icons/wp.svg'
    },
     
];

const Footer = () => {

    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <ContactInfoContainer>
                        <ContactInfoLink href={ContactInfo[0].link} target="_blank"><ContactInfoImg src={ContactInfo[0].iconDirectory} alt={ContactInfo[0].label}/></ContactInfoLink> 
                        <ContactInfoLink href={ContactInfo[1].link} target="_blank"><ContactInfoImg src={ContactInfo[1].iconDirectory} alt={ContactInfo[1].label}/></ContactInfoLink>
                        <ContactInfoLink href={ContactInfo[2].link} target="_blank"><ContactInfoImg src={ContactInfo[2].iconDirectory} alt={ContactInfo[2].label}/></ContactInfoLink>
                        <ContactInfoLink href={ContactInfo[3].link} target="_blank"><ContactInfoImg src={ContactInfo[3].iconDirectory} alt={ContactInfo[3].label}/></ContactInfoLink>
                    </ContactInfoContainer>
                    <DeveloperInfoContainer>
                        <FaReact className="Atom"/>
                        <DeveloperInfo>Powered by <DeveloperInfoLink href='https://www.linkedin.com/in/juanmtamayo/' target="_blank">JMTamayo</DeveloperInfoLink>
                        </DeveloperInfo>
                    </DeveloperInfoContainer>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
    
};

export default Footer