import React from "react";
import { MainContainer, MainSection, LastSection, LogoImg, SectionContainer, GeneralMsg, SectionTitleContainer, SectionTitle, WorkCategoryImg, HiringImg, ImportantMsg, GeneralMsgUl, GeneralMsgLi, SectionLine, SectionLineContainer, LocalIcon, FullLogo, LogoIcon, FinalSectionTitle} from "./Main.elements";
import AboutMe from "../../data/aboutme.json";
import Categories from "../../data/categories.json";
import Hiring from "../../data/hiring.json";
import Logo from "../../img/logo/logo.png";
import BlackLogo from "../../img/logo/blacklogo.png";
import FullLogoImg from "../../img/logo/redwinefulllogo.png";
import BkgImg from "../../img/photos/mobile.jpg";
import LogoIconImg from "../../img/logo/redwinelogo.png";
import SoloistImg from "../../img/photos/soloist.jpg";
import GroupImg from "../../img/photos/duet.jpg";
import DuetImg from "../../img/photos/group.jpg";
import SingerWomanImg from "../../img/icons/singerWoman.png";
import SingerManImg from "../../img/icons/singerMan.png";
import CongasImg from "../../img/icons/conga.png";
import PhoneImg from "../../img/icons/phone-call.png";
import { FaDrum } from "react-icons/fa";
import { CgPiano } from "react-icons/cg";
import { GiGClef} from "react-icons/gi";
import { HiDotsHorizontal} from "react-icons/hi";

const Main = () => {

    return (
        <>
            <MainContainer  id="main">
                <MainSection style={{backgroundImage:`url(${BkgImg})`}}>
                    <LogoImg src={Logo}/>
                </MainSection>
                <SectionLineContainer id="aboutme"></SectionLineContainer>  
                <SectionContainer>
                    <SectionTitleContainer>
                        <LogoIcon src={LogoIconImg}/>
                            <SectionTitle>
                                {AboutMe.title}
                            </SectionTitle>
                        <LogoIcon src={LogoIconImg}/>
                    </SectionTitleContainer>
                    <GeneralMsg>
                        {AboutMe.description[0]}
                    </GeneralMsg>
                    <iframe width="100%" height="250" src={AboutMe.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <GeneralMsg>
                        {AboutMe.description[1]}
                    </GeneralMsg>
                    <GeneralMsg>
                        {AboutMe.description[2]}
                    </GeneralMsg>
                    <FullLogo src={FullLogoImg} />
                </SectionContainer>
                <SectionLineContainer id="solist">
                    <GiGClef />
                    <SectionLine></SectionLine>
                    <HiDotsHorizontal />
                </SectionLineContainer>           
                <SectionContainer>
                    <SectionTitleContainer>
                        <LogoIcon src={LogoIconImg}/>
                            <SectionTitle>
                                {Categories[0].title}
                            </SectionTitle>
                        <LogoIcon src={LogoIconImg}/>
                    </SectionTitleContainer>
                    <GeneralMsg>
                        {Categories[0].description[0]}
                    </GeneralMsg>
                    <WorkCategoryImg src={SoloistImg}/>
                    <GeneralMsg>
                        {Categories[0].description[1]}
                    </GeneralMsg>
                    <iframe width="100%" height="250px" src={Categories[0].video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </SectionContainer>
                <SectionLineContainer id="duet">
                    <GiGClef />
                    <SectionLine></SectionLine>
                    <HiDotsHorizontal />
                </SectionLineContainer>   
                <SectionContainer>
                    <SectionTitleContainer>
                        <LogoIcon src={LogoIconImg}/>
                            <SectionTitle>
                            {Categories[1].title}
                            </SectionTitle>
                        <LogoIcon src={LogoIconImg}/>
                    </SectionTitleContainer>
                    <GeneralMsg>
                        {Categories[1].description[0]}
                    </GeneralMsg>
                    <WorkCategoryImg src={DuetImg} />
                    <GeneralMsg>
                        {Categories[1].description[1]}
                    </GeneralMsg>
                    <iframe width="100%" height="250" src={Categories[1].video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </SectionContainer>
                <SectionLineContainer id="group">
                    <GiGClef />
                    <SectionLine></SectionLine>
                    <HiDotsHorizontal />
                </SectionLineContainer>   
                <SectionContainer id="group">
                    <SectionTitleContainer>
                        <LogoIcon src={LogoIconImg}/>
                            <SectionTitle>
                            {Categories[2].title}
                            </SectionTitle>
                        <LogoIcon src={LogoIconImg}/>
                    </SectionTitleContainer>
                    <GeneralMsg>
                        {Categories[2].description[0]}
                    </GeneralMsg>
                    <WorkCategoryImg src={GroupImg} />
                    <GeneralMsg>
                        {Categories[2].description[1]}
                    </GeneralMsg>
                    <GeneralMsgUl>
                            <GeneralMsgLi><LocalIcon src={SingerWomanImg} alt=""/>
                                <GeneralMsg>
                                    {Categories[2].detail[0]}
                                </GeneralMsg>
                            </GeneralMsgLi>
                            <GeneralMsgLi><LocalIcon src={SingerManImg} alt=""/>
                                <GeneralMsg>
                                    {Categories[2].detail[1]}
                                </GeneralMsg>
                            </GeneralMsgLi>
                            <GeneralMsgLi><CgPiano />
                                <GeneralMsg>
                                    {Categories[2].detail[2]}
                                </GeneralMsg>
                            </GeneralMsgLi>
                            <GeneralMsgLi><FaDrum />
                                <GeneralMsg>
                                    {Categories[2].detail[3]}
                                </GeneralMsg>
                            </GeneralMsgLi>
                            <GeneralMsgLi><LocalIcon src={CongasImg} alt=""/>
                                <GeneralMsg>
                                    {Categories[2].detail[4]}
                                </GeneralMsg>
                            </GeneralMsgLi>
                        </GeneralMsgUl>
                    <GeneralMsg>
                        {Categories[2].description[2]}
                    </GeneralMsg>
                    <iframe width="100%" height="250" src={Categories[2].video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </SectionContainer>
                <SectionLineContainer id="hiring">
                    <GiGClef />
                    <SectionLine></SectionLine>
                    <HiDotsHorizontal />
                </SectionLineContainer>  
                <LastSection>
                    <SectionTitleContainer>
                        <LogoIcon src={LogoIconImg}/>
                            <SectionTitle>
                                {Hiring.title}
                            </SectionTitle>
                        <LogoIcon src={LogoIconImg}/>
                    </SectionTitleContainer>
                    <GeneralMsg>
                        {Hiring.description[0]}
                    </GeneralMsg>
                    <GeneralMsgUl>
                        <GeneralMsgLi>
                            <LocalIcon src={PhoneImg} alt=""/>
                            <GeneralMsg>
                                {Hiring.cel}
                            </GeneralMsg>
                        </GeneralMsgLi>
                    </GeneralMsgUl>
                    <ImportantMsg>
                    {Hiring.important_msg}
                    </ImportantMsg>
                    <HiringImg src={BlackLogo} />
                    <FinalSectionTitle>
                        ¡Sígueme en mis redes sociales!
                    </FinalSectionTitle>
                </LastSection>  
            </MainContainer>

            
        </>
    )

}

export default Main

/*<SectionLineContainer>
<GiGClef />
<SectionLine></SectionLine>
<HiDotsHorizontal />
</SectionLineContainer>*/