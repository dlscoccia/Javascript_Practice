import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    WebSiteRights
} from './FooterElements'


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems > 
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                                <FooterLink to='/signin'>About us</FooterLink>
                                <FooterLink to='/signin'>How it Works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems > 
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                                <FooterLink to='/signin'>About us</FooterLink>
                                <FooterLink to='/signin'>How it Works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems > 
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                                <FooterLink to='/signin'>About us</FooterLink>
                                <FooterLink to='/signin'>How it Works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems > 
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                                <FooterLink to='/signin'>About us</FooterLink>
                                <FooterLink to='/signin'>How it Works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>dolla</SocialLogo>
                        <WebSiteRights>dolla c {new Date().getFullYear()}</WebSiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='socialmedianame'>facebook</SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='socialmedianame'>twitter</SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='socialmedianame'>Instagram</SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
