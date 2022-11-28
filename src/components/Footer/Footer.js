import React from "react";
import { FooterContainer, FooterWrapper, ContactInfoContainer, ContactInfoImg, ContactInfoLink, DeveloperInfo, DeveloperInfoLink, DeveloperInfoContainer } from "./Footer.elements";
import  Instagram  from '../../img/icons/ig.svg';
import  Facebook  from '../../img/icons/fb.svg';
import  Youtube  from '../../img/icons/youtube.svg';
import  Whatsapp  from '../../img/icons/wp.svg';
import { FaReact } from "react-icons/fa";
import './animation.css'


let ContactInfo = [

    { 
        label: 'facebook',
        link: 'https://www.facebook.com/maiker.mejia.77',
    },
    {
        label: 'instagram',
        link: 'https://instagram.com/maikermejiacantante?utm_medium=copy_link',
    },
    {
        label: 'youtube',
        link: 'https://youtube.com/@maikermejia3849',
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
                        <ContactInfoLink href={ContactInfo[0].link} target="_blank"><ContactInfoImg src={Facebook} alt={ContactInfo[0].label}/></ContactInfoLink> 
                        <ContactInfoLink href={ContactInfo[1].link} target="_blank"><ContactInfoImg src={Instagram} alt={ContactInfo[1].label}/></ContactInfoLink>
                        <ContactInfoLink href={ContactInfo[2].link} target="_blank"><ContactInfoImg src={Youtube} alt={ContactInfo[2].label}/></ContactInfoLink>
                        <ContactInfoLink href={ContactInfo[3].link} target="_blank"><ContactInfoImg src={Whatsapp} alt={ContactInfo[3].label}/></ContactInfoLink>
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