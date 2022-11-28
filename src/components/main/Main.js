import React from "react";
import { MainContainer, FirstContainer, LogoImg, MiddleContainer, GeneralMsg, SectionTitleContainer, LogoIcon, SectionTitle, WorkCategoryImg, ImportantMsg, GeneralMsgUl, GeneralMsgLi, SectionLine, SectionLineContainer, LocalIcon, FullLogoImg } from "./Main.elements";
import { PresentationText, WorkCategoriesInfo } from "./Main.info";
import { FaDrum } from "react-icons/fa";
import { CgPiano } from "react-icons/cg";
import { GiGClef} from "react-icons/gi";
import { HiDotsHorizontal} from "react-icons/hi";

const Main = () => {

    return (
        <>
            <MainContainer id="s01">
                <FirstContainer>
                    <LogoImg />
                </FirstContainer>
            </MainContainer>
            
            <MiddleContainer id="s02">
                <SectionLineContainer>
                    <GiGClef />
                    <SectionLine></SectionLine>
                    <HiDotsHorizontal />
                </SectionLineContainer>
                <SectionTitleContainer>
                    <LogoIcon />
                        <SectionTitle>
                            Acerca de Mi
                        </SectionTitle>
                    <LogoIcon />
                </SectionTitleContainer>
                <GeneralMsg>
                    {PresentationText[0]}
                </GeneralMsg>
                <GeneralMsg>
                    {PresentationText[1]}
                </GeneralMsg>
                <GeneralMsg>
                    {PresentationText[2]}
                </GeneralMsg>
                <FullLogoImg />
            </MiddleContainer>
            
            <MiddleContainer id="s03">
                <SectionLineContainer>
                    <GiGClef />
                    <SectionLine></SectionLine>
                    <HiDotsHorizontal />
                </SectionLineContainer>
                <SectionTitleContainer>
                    <LogoIcon />
                        <SectionTitle>
                            Solista
                        </SectionTitle>
                    <LogoIcon />
                </SectionTitleContainer>
                <GeneralMsg>
                    {WorkCategoriesInfo.soloist.description[0]}
                </GeneralMsg>
                <WorkCategoryImg src='/img/photos/soloist.jpg'/>
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
                    <LogoIcon />
                        <SectionTitle>
                            Duo
                        </SectionTitle>
                    <LogoIcon />
                </SectionTitleContainer>
                <GeneralMsg>
                    {WorkCategoriesInfo.duet.description[0]}
                </GeneralMsg>
                <WorkCategoryImg src='/img/photos/duet.jpg'/>
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
                    <LogoIcon />
                        <SectionTitle>
                            Grupo Musical
                        </SectionTitle>
                    <LogoIcon />
                </SectionTitleContainer>
                <GeneralMsg>
                    {WorkCategoriesInfo.group.description[0]}
                </GeneralMsg>
                <WorkCategoryImg src='/img/photos/group.jpg'/>
                <GeneralMsg>
                    {WorkCategoriesInfo.group.description[1]}
                </GeneralMsg>
                <GeneralMsgUl>
                        <GeneralMsgLi><LocalIcon src='/img/icons/singerWoman.png' alt=''/>
                            <GeneralMsg>
                                {WorkCategoriesInfo.group.detail[0]}
                            </GeneralMsg>
                        </GeneralMsgLi>
                        <GeneralMsgLi><LocalIcon src='/img/icons/singerMan.png' alt=''/>
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
                        <GeneralMsgLi><LocalIcon src='/img/icons/conga.png' alt=''/>
                            <GeneralMsg>
                                {WorkCategoriesInfo.group.detail[4]}
                            </GeneralMsg>
                        </GeneralMsgLi>
                    </GeneralMsgUl>
                <GeneralMsg>
                    {WorkCategoriesInfo.group.description[2]}
                </GeneralMsg>
                <iframe width="100%" height="250" src="https://www.youtube.com/embed/fk08YDqD4_E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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