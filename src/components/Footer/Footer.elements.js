import styled from 'styled-components';

export const FooterContainer = styled.footer`

        /*Background:*/
            background-color: #FFFFFF;

        /*Box Model:*/
            height: 100px;
            width: 100%;

        /*Display:*/
            display: sticky;
            position: fixed;
            bottom: 0;
            z-index = 98;
`;

export const FooterWrapper = styled.div`

    /*Box Model:*/
        height: 100%;
        width: 90%;
        max-width: 1280px;
        margin: auto;

    /*Display:*/
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

    /*Font:*/
        color: #000000;

`;

export const ContactInfoContainer = styled.div`

    /*Box Model:*/
        width: 100%;
        height: fit-content;

    /*Display:*/
        display: flex;
        justify-content: center;
        column-gap: 2rem;

`;

export const DeveloperInfoContainer = styled.div`

    /*Box Model:*/
        width: 100%;

    /*Display:*/
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 4px;

`;

export const DeveloperInfo = styled.p`

    /*Box Model:*/
        width: fit-content;

    /*Display:*/
        column-gap: 4px;

    /*Font:*/
        font-size: 1rem;

`;

export const DeveloperInfoLink = styled.a`

    /*Font:*/
        font-weight: bold;
        text-decoration: none;

    &:visited{

        /*Font:*/
            color: #000000;

    }

    &:hover {

        /*Display:*/
            cursor: pointer;

        /*Font:*/
            color: #808080;
            transition: 0.3s all ease-out;

    }

`;

export const ContactInfoLink = styled.a`
    
    /*Box Model:*/
        display: flex;
        align-items: center;

`;

export const ContactInfoImg = styled.img`
    
    /*Box Model:*/
        width: 2.8rem;
        border-radius: 1rem;

    &:hover{

        /*Box Model:*/
            width: 3.0rem;
            transition: 0.1s all ease-out;
    }

`;
