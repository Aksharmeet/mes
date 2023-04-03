import React, { useState } from 'react'
import styled from 'styled-components'


import Logo from './svg_component/logo'
import HambugerIcon from './svg_component/hambugerIcon'
import CloseIcon from './svg_component/closeIcon'


// fonts
import localFont from '@next/font/local'
const figtree = localFont({src: '../public/Assets/fonts/Figtree/Figtree-VariableFont_wght.ttf'})


function Navbar() {
    
    
    const [toggle, setToggle] = useState(false)
  return (
    <NavContainer>
        <LogoWrapper>
        <Logo />
        </LogoWrapper>

        <HambugerIconWrapper onClick={() => setToggle(prev => !prev)} >
        <HambugerIcon width={'30px'} height={'30px'} />
        </HambugerIconWrapper>

        <NavLinksContainer>
            <div className={toggle ? 'container': 'container slideOut'}>
            <div className='closeIconCont' onClick={() => setToggle(prev => !prev)}>
                <CloseIcon width={'40px'} height={"40px"}/>
            </div>
            <a href="#about" className='links' >About Us</a>
            <a href="#services" className='links'>Services</a>
            <a href="#faqs" className='links'>FAQs</a>
            <ConsultionButton>Book a Consultation</ConsultionButton>
            </div>
        </NavLinksContainer>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
    background-color:#fff;
    position:sticky;
    top:0;
    z-index:1;
    padding: .5rem 1.2rem .5rem .5rem;
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    @media only screen and (min-width: 900px) {
        padding: .5rem 5%;
   }
`

const LogoWrapper = styled.div`
    width: 150px;
    overflow:hidden;

    @media only screen and (min-width: 900px) {
        width: 170px;
   }
`

const HambugerIconWrapper = styled.div`
    position:absolute;
    right: 1.2rem;
   @media only screen and (min-width: 900px) {
        display:none;
   }
`

const NavLinksContainer = styled.div`
    font-family:${figtree.style.fontFamily};

    .container{
        position:absolute;
        display:flex;
        flex-direction: column;
        width:100vw;
        top:0;
        left:0;
        padding: 100px 0 0 0rem;
        height:100vh;
        background-color:#fff;
        .closeIconCont{
            position: absolute;
            top:1rem;
            right:1rem;
        }
        .links{
            font-size: 1rem;
            padding:1rem 0 1rem 1.5rem;
            border-bottom: 1px solid rgba(0,0,0,.1);
            :hover{
                background-color:rgba(0,0,0,.05);
            }
        
        }   
        transition: .3s all ease-in-out;

        @media only screen and (min-width: 900px) {
            flex-direction: row;
            justify-content:space-between;
            align-items:center;
            gap: 20px;
            width:100%;
            height:auto;
            background-color:rgba(0,0,0,0);
            position:static;
            padding: 0;
            .closeIconCont{
                display:none;
            }
            .links{
                border-bottom: none;
                padding:0;
                width: 100px;
                :hover{

                    background-color:rgba(0,0,0,.0);
                }
            }
       }
    }
    .slideOut{
        transform: translateX(-100vw);
        transition: .3s all ease-in-out;
        
        @media only screen and (min-width: 900px) {
            transform: translateX(0vw);
            transition: .3s all ease-in-out;
       }
    }
  
  
`

const ConsultionButton = styled.button`
    background-color:#A48042;
    color: white;
    padding:1rem 0 1rem 0rem;
    width: 100%;
    z-index:0;
    font-family:${figtree.style.fontFamily};
    font-size:1rem;

    @media only screen and (min-width: 900px) {
        max-width: 200px;
        padding:.5rem 0 .5rem 0;
        border-radius: 10px;
   }

`
export default Navbar