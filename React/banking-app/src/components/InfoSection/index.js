import React from 'react'
import { Button } from '../Button/ButtonElements'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrapper,
    ImgWrap,
    Img,

} from './InfoElements'


const Info = ({lightBg, lightText, topLine, id, headline, darkText, description, buttonLabel, img, alt, imgStart,     primary, dark}) => {

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrapper>
                        <Button to='home'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        >{buttonLabel}</Button>
                    </BtnWrapper>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img src={img} alt={alt}/>
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info
