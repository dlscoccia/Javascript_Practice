import React from 'react'
import { FaCopyright, FaInstagram } from 'react-icons/fa'
import { FooterContainer, SocialMedia, TextContainer } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <TextContainer>
        <FaCopyright />
        Todos los derechos reservados {new Date().getFullYear()}
      </TextContainer>
      <SocialMedia>
        <FaInstagram />
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
