import styled from 'styled-components';

export const NavbarContainer = styled.header`
    
    /*Background:*/
        background-color: #000000;

    /*Box Model:*/
        height: 80px;
        width: 100%;
        
    /*Display:*/
        position: fixed;
        top: 0;
        z-index = 99;
`;

export const NavbarWrapper = styled.div`

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
        color: #FFFFFF;

    @media screen and (max-width: 1600px) {

        /*Box Model:*/
            height: 100%;
            width: 90%;
            
    };

`;

export const LogoContainer = styled.div`

    /*Box Model:*/
        height: 100%;

    /*Display:*/
        display: flex;
        align-items: center;

`;

export const LogoImg = styled.img`
    
    /*Box Model:*/
        content: url('/img/logo/logo.png');
        height: 60%;
        
`;

export const LogoH1 = styled.h1`
    
    /*Box Model:*/
        padding-left: 0.1rem;
        margin-top: 10px;

    /*Font:*/
        font-family: 'Roboto Flex', sans-serif;
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: lighter;
        
`;

export const BarsMenu = styled.div`

    /*Display:*/
        display: none;

    &:hover {

        /*Display:*/
            coursor: pointer;
    }

    @media screen and (max-width: 960px) {

        /*Display:*/
            display: flex;

        /*Font:*/
            font-size: 2.5rem;

    };

    &:hover{

        /*Display:*/
            cursor: pointer;

        /*Font:*/
            font-size: 2.6rem;
            transition: 0.1s all ease-out;
        
    }

`;

export const NavbarUl = styled.ul`
    
    /*Box Model:*/
        height: 100%;

    /*Display:*/
        list-style: none;
        display: flex;
        column-gap: 1rem;

    @media screen and (max-width: 960px) {

        /*Background:*/
            background-color: #000000;
            opacity: 0.8;

        /*Box Model:*/
            width: 100vw;
            height: calc(100vh - 80px - 100px);

        /*Display:*/
            position: absolute;
            top: -100vh;
            left: 0;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: 1s all ease-out;

        top: ${({ click}) => ( click ? "80px": "-100vh")};
            
    };

`;

export const Navbarli = styled.li`

    /*Box Model:*/
        height: 100%;

    /*Display:*/


    /*Font:*/
        font-weight: normal;
        font-size: 1.2rem;
        text-transform: uppercase;

    @media screen and (max-width: 960px) {

        /*Box Model:*/
            width: 12rem;
            height: 80px;
            margin: 1rem 0;

    };

`;

export const SectionLink = styled.a`

    /*Box Model:*/
        height: 100%;

    /*Font:*/
        font-weight: normal;

    /*Display:*/
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    &:hover{

        /*Display:*/
            cursor: pointer;

        /*Font:*/
            font-weight: 600;
        
    }
`;