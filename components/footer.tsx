import styled from 'styled-components'
import Image from 'next/image'

// fonts
import localFont from '@next/font/local'
const baskerville = localFont({src: '../public/Assets/fonts/Baskerville/baskvl.ttf'})


const FooterContainer = styled.footer`
    display:flex;
    align-items: top;
    justify-content:space-between;
    gap: 40px;
    font-family: ${baskerville.style.fontFamily};
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
    background-color:#002A3A;
    color:#fff;
    padding: 2.5rem 5%;

    @media only screen and (max-width: 1100px){
        flex-direction: column;
        padding: 4rem 5%;
        gap: 60px;
        position: relative;
    
    }
`
const Wrappers = styled.div`
    min-width: 200px;
`
const SocialContainer =styled.div`
    display:flex;
    align-item:center;
    gap: 20px;

    @media only screen and (max-width: 1100px){
       position: absolute;
       top:4rem;
       right: 20%;
        
    }
    @media only screen and (max-width:780px){
        position: static;
     }
    
`
function Footer() {
  return (
    <FooterContainer>
        <Wrappers>
            <p>Mastering Excellent Service Ltd.</p>
        </Wrappers>
        <Wrappers>
            <p>hello@masteringexcellence.com</p>
            <p>+1 (786) 123-4567</p>
            </Wrappers>
        <Wrappers>
            <p>Kingston</p>
            <p>Jamaica</p>
            </Wrappers>
        <SocialContainer>
            <Image src='/Assets/svg/social/linkedin-in-brands 1.svg' width='28' height='32' alt='linkedin icon'/>
            <Image src='/Assets/svg/social/instagram-brands 1.svg' width='28' height='32' alt='instagram icon'/>
        </SocialContainer>
    </FooterContainer>
  )
}

export default Footer