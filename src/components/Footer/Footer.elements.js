import styled from 'styled-components';

export const FooterContainer = styled.footer`

        /*Background:*/
            background-color: #FFFFFF;

        /*Box Model:*/
            height: 100px;
            width: 100%;

        /*Display:*/
            display: sticky;
            position: absolute;
            bottom: 0;
            z-index = 98;
`;

export const FooterWrapper = styled.div`

    /*Box Model:*/
        height: 100%;
        width: 100%;
        max-width: 1280px;
        margin: auto;

    /*Display:*/
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

    /*Font:*/
        color: #000000;

    @media screen and (max-width: 1600px) {

        /*Box Model:*/
            height: 100%;
            width: 90%;
        };

    };

`;

export const ContactInfoContainer = styled.div`

    /*Box Model:*/
        width: 100%;
        height: 60px;

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

    }

`;

export const ContactInfoLink = styled.a`
    
    /*Box Model:*/
        display: flex;
        align-items: center;

`;

export const ContactInfoImg = styled.img`
    
    /*Box Model:*/
        width: 3rem;
        border-radius: 1rem;

    &:hover{

        /*Box Model:*/
            width: 3.2rem;
    }

`;
