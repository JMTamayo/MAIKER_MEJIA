import React from "react";
import { MainContainer, FirstContainer, LogoImg, MiddleContainer, GeneralMsg, SectionTitleContainer, SectionTitle, WorkCategoryImg, ImportantMsg, GeneralMsgUl, GeneralMsgLi, SectionLine, SectionLineContainer, LocalIcon, FullLogo, LogoIcon} from "./Main.elements";
import { PresentationText, WorkCategoriesInfo } from "./Main.info";
import Logo from '../../img/logo/logo.png';
import FullLogoImg from '../../img/logo/redwinefulllogo.png';
import BkgImg from '../../img/photos/mobile2.jpg';
import LogoIconImg from '../../img/logo/redwinelogo.png';
import SoloistImg from '../../img/photos/soloist.jpg';
import DuetImg from '../../img/photos/duet.jpg';
import GroupImg from '../../img/photos/group.jpg';
import SingerWomanImg from '../../img/icons/singerWoman.png';
import SingerManImg from '../../img/icons/singerMan.png';
import CongasImg from '../../img/icons/conga.png';
import { FaDrum } from "react-icons/fa";
import { CgPiano } from "react-icons/cg";
import { GiGClef} from "react-icons/gi";
import { HiDotsHorizontal} from "react-icons/hi";

const Main = () => {

    return (
        <>
            <MainContainer id="s01">
                <FirstContainer style={{backgroundImage:`url(${BkgImg})`}}>
                    <LogoImg src={Logo}/>
                </FirstContainer>
            </MainContainer>
            
            <MiddleContainer id="s02">
                <SectionLineContainer>
                    <GiGClef />
                    <SectionLine></SectionLine>
                    <HiDotsHorizontal />
                </SectionLineContainer>
                <SectionTitleContainer>
                    <LogoIcon src={LogoIconImg}/>
                        <SectionTitle>
                            Acerca de Mi
                        </SectionTitle>
                    <LogoIcon src={LogoIconImg}/>
                </SectionTitleContainer>
                <iframe width="100%" height="250" src="https://www.youtube.com/embed/jNwjYVSmjx0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <GeneralMsg>
                    {PresentationText[0]}
                </GeneralMsg>
                <GeneralMsg>
                    {PresentationText[1]}
                </GeneralMsg>
                <GeneralMsg>
                    {PresentationText[2]}
                </GeneralMsg>
                <FullLogo src={FullLogoImg} />
            </MiddleContainer>
            
            <MiddleContainer id="s03">
                <SectionLineContainer>
                    <GiGClef />
                    <SectionLine></SectionLine>
                    <HiDotsHorizontal />
                </SectionLineContainer>
                <SectionTitleContainer>
                    <LogoIcon src={LogoIconImg}/>
                        <SectionTitle>
                            Solista
                        </SectionTitle>
                    <LogoIcon src={LogoIconImg}/>
                </SectionTitleContainer>
                <GeneralMsg>
                    {WorkCategoriesInfo.soloist.description[0]}
                </GeneralMsg>
                <WorkCategoryImg src={SoloistImg}/>
                <GeneralMsg>
                    {WorkCategoriesInfo.soloist.description[1]}
                </GeneralMsg>
                <iframe width="100%" height="250px" src="https://www.youtube.com/embed/1hpe_0VPZjE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                <ImportantMsg>
                    {WorkCategoriesInfo.soloist.extra[0]}
                </ImportantMsg>
            </MiddleContainer>

            <MiddleContainer id="s04">
                <SectionLineContainer>
                    <GiGClef />
                    <SectionLine></SectionLine>
                    <HiDotsHorizontal />
                </SectionLineContainer>
                <SectionTitleContainer>
                    <LogoIcon src={LogoIconImg}/>
                        <SectionTitle>
                            Duo
                        </SectionTitle>
                    <LogoIcon src={LogoIconImg}/>
                </SectionTitleContainer>
                <GeneralMsg>
                    {WorkCategoriesInfo.duet.description[0]}
                </GeneralMsg>
                <WorkCategoryImg src={DuetImg} />
                <GeneralMsg>
                    {WorkCategoriesInfo.duet.description[1]}
                </GeneralMsg>
                <iframe width="100%" height="250" src="https://www.youtube.com/embed/z81GO0EVGTg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <ImportantMsg>
                    {WorkCategoriesInfo.duet.extra[0]}
                </ImportantMsg>
            </MiddleContainer>

            <MiddleContainer id="s05">
                <SectionLineContainer>
                    <GiGClef />
                    <SectionLine></SectionLine>
                    <HiDotsHorizontal />
                </SectionLineContainer>
                <SectionTitleContainer>
                    <LogoIcon src={LogoIconImg}/>
                        <SectionTitle>
                            Grupo Musical
                        </SectionTitle>
                    <LogoIcon src={LogoIconImg}/>
                </SectionTitleContainer>
                <GeneralMsg>
                    {WorkCategoriesInfo.group.description[0]}
                </GeneralMsg>
                <WorkCategoryImg src={GroupImg} />
                <GeneralMsg>
                    {WorkCategoriesInfo.group.description[1]}
                </GeneralMsg>
                <GeneralMsgUl>
                        <GeneralMsgLi><LocalIcon src={SingerWomanImg} alt=''/>
                            <GeneralMsg>
                                {WorkCategoriesInfo.group.detail[0]}
                            </GeneralMsg>
                        </GeneralMsgLi>
                        <GeneralMsgLi><LocalIcon src={SingerManImg} alt=''/>
                            <GeneralMsg>
                                {WorkCategoriesInfo.group.detail[1]}
                            </GeneralMsg>
                        </GeneralMsgLi>
                        <GeneralMsgLi><CgPiano />
                            <GeneralMsg>
                                {WorkCategoriesInfo.group.detail[2]}
                            </GeneralMsg>
                        </GeneralMsgLi>
                        <GeneralMsgLi><FaDrum />
                            <GeneralMsg>
                                {WorkCategoriesInfo.group.detail[3]}
                            </GeneralMsg>
                        </GeneralMsgLi>
                        <GeneralMsgLi><LocalIcon src={CongasImg} alt=''/>
                            <GeneralMsg>
                                {WorkCategoriesInfo.group.detail[4]}
                            </GeneralMsg>
                        </GeneralMsgLi>
                    </GeneralMsgUl>
                <GeneralMsg>
                    {WorkCategoriesInfo.group.description[2]}
                </GeneralMsg>
                <iframe width="100%" height="250" src="https://www.youtube.com/embed/fk08YDqD4_E?start=34" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <ImportantMsg>
                    {WorkCategoriesInfo.group.extra[0]}
                </ImportantMsg>
            </MiddleContainer>

            <MiddleContainer>
                <SectionLineContainer>
                    <GiGClef />
                    <SectionLine></SectionLine>
                    <HiDotsHorizontal />
                </SectionLineContainer>
            </MiddleContainer>
        </>
    )

}

export default Main