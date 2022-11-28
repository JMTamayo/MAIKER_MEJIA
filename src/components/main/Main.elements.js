import styled from "styled-components";

export const MainContainer = styled.main`

    /*Box Model:*/
        width: 100%;
        
    /*Display:*/
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
`;

export const FirstContainer = styled.section`

    /*Background:*/
        background: url('/img/photos/mobile2.jpg');
        background-repeat: no-repeat;
        background-size: auto 100vh;
        background-position: center top;

    /*Box Model:*/
        margin-top: 80px;
        padding: 5%;
        width: 100%;
        height: calc(100vh - 180px);

    /*Display:*/
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

`;

export const LogoImg = styled.img`
    
    /*Box Model:*/
        content: url('/img/logo/logo.png');
        height: 40px;
        
`;

export const FullLogoImg = styled.img`

    /*Box Model:*/
        content: url('/img/logo/redwinefulllogo.png');
        height: 140px;
        margin-top: 2rem;

`;

export const MiddleContainer = styled.section`

    /*Box Model:*/
        width: 100%;
        height: fit-content;
        padding: 0 5% 0;

    /*Display:*/
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        row-gap: 1rem;

`;

export const GeneralMsg = styled.p`

    /*Font:*/
        font-size: 1rem;
        text-align: justify;
        color: #000000;

`;

export const GeneralMsgUl = styled.ul`

    /*Box Model:*/
        width: 100%;
        padding-left: 2rem;

    /*Display:*/
        display: flex;
        flex-direction: column;
        align-items: flex-start;

`;

export const GeneralMsgLi = styled.li`

    /*Display:*/
        display: flex;
        align-items: center;
        column-gap: 0.5rem;

    list-style: none;

`;

export const SectionTitleContainer = styled.div`

    /*Box Model:*/
        margin: 0 auto;
        width: fit-content;

    /*Display:*/
        display: flex;
        align-items: center;
        column-gap: 0.5rem;

`;

export const LogoIcon = styled.i`
    
    /*Box Model:*/
        content: url('/img/logo/redwinelogo.png');
        height: 0.8rem;
        width: calc((129/135)*0.8rem);
        
`;

export const SectionTitle = styled.h2`

    /*Font:*/
        color: #92000A;
        font-size: 2rem;
        font-weight: normal;
        text-decoration: solid underline 1px;

`;

export const ImportantMsg = styled.p`

    /*Font:*/
        font-size: 1rem;
        text-align: justify;
        color: #92000A;
        font-weight: bold;

`;

export const WorkCategoryImg = styled.img`

    /*Box Model:*/
        width: 100%;

`;

export const SectionLineContainer = styled.div`

    /*Box Model:*/
        margin: 50px 0;
        width 100%;
        height: fit-content;

    /*Display:*/
        display: flex;
        align-items: center;
        justify-content: space-between;

    color: #92000A;
    opacity: 0.2;

`;

export const SectionLine = styled.hr`

    /*Box Model:*/
        border: solid 1px;
        width: 90%;
        height: 1px;
`;

export const LocalIcon = styled.img`

    /*Box Model:*/
        width: 1rem;
        height: 1rem;

`;