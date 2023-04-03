import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image'
import { Carousel } from '@mantine/carousel';
import { Accordion } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Modal } from '@mantine/core';
// partials
import Navbar from "../components/navbar"
import HireModal from '../components/partials/hireModal';
import CvModal from '../components/partials/cvModal';
import Personal from "../components/partials/personal"

// icons
// import HeroBgImage from "../Assets/HeroBackground.jpg"
import AccordianIcon from '../components/svg_component/accordianIcon';
import Footer from '../components/footer';
import HotelBell from '../components/lottie_animation_component/hotell bell animation/hotelBell';

// fonts
import localFont from '@next/font/local'
const figtree = localFont({src: '../public/Assets/fonts/Figtree/Figtree-VariableFont_wght.ttf'})
const baskerville = localFont({src: '../public/Assets/fonts/Baskerville/baskvl.ttf'})
const Container = styled.div`
  max-width: 1280px;
`

// ! common
const ImgNdTextContainer = styled.section`
  padding:0 5%;
  position: relative;
  margin-bottom: 6rem;
  @media only screen and (max-width: 780px){
    padding:0;
  }
  .contentBg{
    position:absolute;
    background-color: #EBE4D2;
    padding: 4%;
    width: 50%;
    top:  1vw;
    right:5rem;
    box-shadow: -44px 17px 20px 0px #3B3F4033;

    @media only screen and (max-width: 1300px){
      position:relative;
      top: -100px;
      left:0;
      right:0;
      margin: 0 auto;
      width: 90%;
    }
    @media only screen and (max-width: 780px){
      padding:50px 5%;
      top: 0px;
      width: 100%;
    }
    
  }
  .contentBg2{
    top:  5vw;
    @media only screen and (max-width: 1300px){
     
      top: -200px;
      width:100%;
      max-width: 700px;
      margin-bottom: -200px;
    }
    @media only screen and (max-width: 780px){
      top: -150px;
      margin-bottom: -180px;
    }
    @media only screen and (max-width: 680px){
      top: 0px;
      margin-bottom: 0px;
    }
  }

  .flexImg{
    @media only screen and (max-width: 1300px){
      margin: 0 auto;
    }
  }
  h3{
    font-family:${baskerville.style.fontFamily};
    color: #002A3A;
    font-size:2rem;
    text-align:center;
    margin-bottom: 30px;
  }
  p{
    color:#A48042;
    font-family:${figtree.style.fontFamily};
    font-weight: 200;
    font-size:1.1rem;
    line-height: 1.8rem;
  }

`
const ImgNdTextContainerReverse = styled(ImgNdTextContainer)`
  .contentBg{
    left:5rem;
  }
  display:flex;
  justify-content:flex-end;
  @media only screen and (max-width: 1300px){
    display:block;
    .contentBg{
      left:0rem;
    }
  }

`
const HeroButton = styled.button`
  background-color:#A48042;
  border-radius: 10px;
  color: white;
  padding: 12px;
  width: 100%;
  max-width: 640px;
  z-index:0;
  font-family:${figtree.style.fontFamily};
  @media only screen and (min-width: 480px){
    font-size: 1.1rem;
  }
`
const Subtitle = styled.h2`
  font-size: 3rem;
  font-family:${baskerville.style.fontFamily};
  color:#A48042;
  text-align:center;
  margin: 5rem 0;
`
// ! 1st section
const HeroImgFilter =styled.div`
position: absolute;
height: 100vh;
width: 100vw;
img{
  filter: grayscale(50%);
}
`
const HeroContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 20px;
  width: 100vw;
  
`
const Title = styled.h1`
  color: white;
  font-size: 3rem;
  line-height:3.5rem;
  z-index:0;
  font-family: ${baskerville.style.fontFamily};
  font-size:64px
  display:inline-block;
  margin-bottom:25px;
  @media only screen and (min-width: 480px){
    font-size: 3.5rem;
    line-height:4rem;
    margin-bottom:0px;
  }
`
const TagLine = styled.p`
  color: white;
  z-index:0;
  font-family:${figtree.style.fontFamily};
  font-size:1.3rem;
  line-height: 1.9rem;
  margin-bottom: 40px;
  font-weight: 200;
  @media only screen and (min-width: 480px){
    font-size: 1.3rem;
    margin: 6px 0 40px 0;
  }
`

// ! 2nd section
const AboutUsContainer = styled.main`
scroll-margin: 150px;
`
const Team = styled.section`
  display:flex;
  align-items:center;
  justify-content:center;
  gap: 3%;
  margin: 100px auto 50px auto;
  padding:0 5%;

  @media only screen and (max-width: 1300px){
    margin: -100px auto 50px auto;
  }
  @media only screen and (max-width: 780px){
    flex-direction: column;
    margin: 100px auto 50px auto;
    text-align:center;
    gap: 50px;
  }
  .membersName{
    font-family: ${baskerville.style.fontFamily};
    font-size: 1.5em;
    color:#A48042;
    margin:16px 0 2px 0;
    @media only screen and (max-width: 780px){
      font-size: 2rem;
    }
  }
  .membersTitle{
    font-family: ${figtree.style.fontFamily};
    font-size: 1em;
    font-weight:200;
    color: #002A3A;

    @media only screen and (max-width: 780px){
      font-size: 1rem;
    }
  }

`
const JoinUsOnInstagram = styled.section`
  display:flex;
  align-items:center;
  justify-content:center;
  gap: 100px;
  margin:150px auto 180px auto;
 

  @media only screen and (max-width: 780px){
    text-align:center;
    padding: 0 5%;
    flex-direction: column;
    gap: 0px;
  }

  .instaLink{
    color:#A48042;
    font-size: 3rem;
    text-decoration: underline;
    font-family:${baskerville.style.fontFamily};
    margin-bottom: 20px;

    @media only screen and (max-width: 480px){
      font-size: 2.5em;
      
   }
  }
  .content{
    max-width: 300px;
    margin-top: 50px;
    p{
      color:#002A3A;
      line-height: 1.5rem;
      
    }

    @media only screen and (max-width: 780px){
       max-width: 100%;
    }
  }

`

// ! 3rd section 
const Services = styled.section`
scroll-margin: 150px;
`
const ContactPoint = styled.div`
 
  display:flex;
  align-items:center;
  justify-content:center;
  gap:60px;
  width: 70%;
  margin:100px auto 150px auto;
  position: relative;

  @media only screen and (max-width: 780px){
   flex-direction:column;
   gap:10px;
   margin:150px auto 150px auto;
  }
`

// ! 4th section
const Testimonials = styled.section`
  @media only screen and (max-width: 520px){
    padding: 0 20px;
  }
`

const CarouselContainer = styled.div`
  margin-bottom: 100px;
`
const Slider = styled.div`
  border: 1px solid #A48042;
  padding:4rem 2rem 3rem 2rem;
  text-align:center;
`
const TestimonialsMessage = styled.p`
  font-family:${baskerville.style.fontFamily};
  font-size: 1.5rem;
  margin-bottom:60px;
`
const TestimonialsAuthor = styled.p`
  font-family:${figtree.style.fontFamily};
  font-weight: 200;
  font-size: 1.5rem;
  margin-bottom:10px;
 
`
const TestimonialsAuthorDesignation = styled.p`
  font-family:${figtree.style.fontFamily};
  font-weight: 200;

`

// ! 5 section
const ContactFormContainer = styled.section`
  padding:0 5%;
  display:flex;
  justify-content:space-between;
  gap: 20px;
  align-items:center;
  margin: 200px 0 100px 0;

  @media only screen and (max-width: 1300px){
    margin:0 auto;
    flex-direction:column-reverse;
    justify-content:row;
    text-align:center;
   
      margin-bottom: 5rem;
    
  }
`

const ContactForm = styled.form`
  width:100%;
  max-width:550px;

`
const InputsWrapper = styled.div`
  display:flex;
  flex-direction:column;
  margin: 1rem auto;
`
const TextInput = styled.input`
  padding: .3rem;
  margin: .6rem 0 .6rem 0;
  font-size: .9rem;
  font-family: ${figtree.style.fontFamily};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  border:1px solid #002A3A80;
  width:100%;
  border-radius: 5px;
`

const ContactTitle = styled.h3`
  font-family: ${baskerville.style.fontFamily};
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
  color:#A48042;
  max-width: 300px;
  @media only screen and (max-width: 1300px){
    max-width: 100%;
  }

`
const ContactSubtitle = styled.p`
  font-family: ${figtree.style.fontFamily};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color:#002A3A;
  max-width:300px;
  @media only screen and (max-width: 1300px){
    max-width: 100%;
  }
`
const ContactLogosContainer = styled.div`
 
  @media only screen and (max-width: 1300px){
    margin-bottom: 5rem;
  }

`
const ContactDiscription = styled.p`
  font-family: ${baskerville.style.fontFamily};
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
  color:#002A3A;
  max-width:380px;
  margin-bottom: 2rem;
  @media only screen and (max-width: 1300px){
    max-width: 100%;
    margin-bottom: 3rem;
  }
`

// ! 6th section
const FaqsContainer = styled.section`
  scroll-margin: 200px;
  padding: 0 5%;
  margin: 190px auto;
  display:flex;
  justify-content:space-between;
  align-items:top;
  gap: 20px;

  @media only screen and (max-width: 1300px){
    display:block;
  }
`
const FaqsTitleContainer = styled.div`
  max-width: 400px;

  @media only screen and (max-width: 1300px){
    margin: 100px auto 0 auto;
    max-width: 100%;
    text-align:center;
    margin-bottom: 40px;
  }
  
`
const FaqsTitle = styled.h2`
  font-size: 3rem;
  font-family:${baskerville.style.fontFamily};
  color:#A48042;
  margin-bottom: 1rem;
`
const FaqsSubtitle = styled.p`
  color:#002A3A;
`
const AccordianCont = styled.section`

`

export default function Home() {
  const [value, setValue] = useState<string | null>(null);

  // modals
  const [hireModal, setHireModal] = useState<boolean>(false);
  const [cvModal, setCvModal] = useState<boolean>(false);
  const [personal, setPersonal] = useState<string>('');

   




  return (
    <>
      {/* HEAD INFORMATION GOES HERE */}
      <Head>
        <title>MES</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Assets/svg/logo.svg" />
       
      </Head>
      {/* BODY STARTS HERE */}
      <Navbar/>
      
      <HeroContainer>
        <HeroImgFilter>
        <Image src='/Assets/png/HeroBackground.jpg' alt='Hero Background'className="flexImg" fill />
        </HeroImgFilter>
        <Title>Mastering Excellent Service</Title>
        <TagLine >Elevating experiences for the finest in the Caribbean</TagLine>
        <HeroButton >Learn More</HeroButton>
      </HeroContainer>
      
      <AboutUsContainer id='about'>
      <Subtitle>About Us</Subtitle>
      <ImgNdTextContainer>
      <Image src='/Assets/png/4 1.png' width='1009' height='501' alt='Mastering Excellent Service'className="flexImg"></Image>
      <div className='contentBg'>
        <h3>Mastering Excellent Service</h3>
        <p >
        At Mastering Excellent Service, we believe in the power of Caribbean hospitality and more importantly, of our Caribbean people. Our diverse panel of experienced, contemporary professionals are dedicated to sustainable growth of the region's luxury market. We offer bespoke training and consultancy programs to help our partners energise their teams and elevate their services. Our vision is to help shape a resilient, innovative and unique tourism and hospitality industry in the Caribbean. Our mission is to inspire hospitality teams to cultivate their skills and achieve greatness. All of our projects are designed with our core values of transparency, empathy, excellence and teamwork in mind. 
        </p>
      </div>
      </ImgNdTextContainer>
     

      <Team>
        <div onClick={() => setPersonal('Rochelle Amour')}>
          <Image src="/Assets/png/9 1.png" width='380' height='360' alt='Rochelle Amour png'/>
          <div>
            <h4 className='membersName'>
            Rochelle Amour
            </h4>
            <p className={`membersTitle`}>
            Director
            </p>
          </div>
        </div>
        <div onClick={() => setPersonal('Rory Baugh')}>
          <Image src="/Assets/png/5- Rory Baugh Website Photo 2.png" width='380' height='360' alt='Rory Baugh png'/>
          <div>
            <h4 className='membersName'>
            Rory Baugh
            </h4>
            <p className={`membersTitle`}>
            Director
            </p>
          </div>
        </div>
        <div onClick={() => setPersonal('Conroy Thompson')}>
          <Image src="/Assets/png/6- Conroy Thompson Website Photo 1.png" width='380' height='360' alt='Conroy Thompson'/>
          <div>
            <h4 className='membersName'>
            Conroy Thompson
            </h4>
            <p className={`membersTitle`}>
            Consultant
            </p>
          </div>
        </div>
      </Team>

      
         <Modal 
          transition="fade"
          transitionDuration={600}
          transitionTimingFunction="ease" 
          size={1100}
          opened={!!personal} 
          onClose={() => setPersonal('')}>
           <Personal personal={personal}/>
        </Modal> 
       
      
      <JoinUsOnInstagram>
        <div className='content'>
          <a href='https://www.instagram.com/mastering.excellent.service/'>
          <h4 className='instaLink'>
            Join us on Instagram
          </h4>
          </a>
          <p >Keep up with our latest programmes and opportunities</p>
        </div>
        
        <HotelBell/>

      </JoinUsOnInstagram>
      </AboutUsContainer>


      <Services id='services'>
          <Subtitle>Services</Subtitle>
          <ImgNdTextContainer>
            <Image src='/Assets/png/Rectangle 18.png' width='795' height='525' alt='Food & Beverage Services'className="flexImg"></Image>
            
            <div className='contentBg contentBg2'>
              <h3>Food & Beverage Services</h3>
              <p >
              Food & Beverage operations often require strategic restructuring, stronger teamwork, and rapid problem-solving skills. We design tailored training programs and longer-term consultancies to support your property's needs and vision. In order to tailor our service, we conduct an initial assessment to help identify gaps from the guest perspective before fine-tuning a program for effective and lasting results.
              </p>
            </div>
          </ImgNdTextContainer>
          <ImgNdTextContainerReverse>
            <Image src='/Assets/png/Rectangle 19.png' width='795' height='525' alt='Butler Service'className="flexImg"></Image>
            
            <div className='contentBg contentBg2'>
              <h3>Butler Service</h3>
              <p >
              Food & Beverage operations often require strategic restructuring, stronger teamwork, and rapid problem-solving skills. We design tailored training programs and longer-term consultancies to support your property's needs and vision. In order to tailor our service, we conduct an initial assessment to help identify gaps from the guest perspective before fine-tuning a program for effective and lasting results.
              </p>
            </div>
          </ImgNdTextContainerReverse>

          <ImgNdTextContainer>
            <Image src='/Assets/png/Rectangle 18-1.png' width='795' height='525' alt='Specialised Consultancy'className="flexImg"></Image>
            
            <div className='contentBg contentBg2'>
              <h3>Specialised Consultancy</h3>
              <p >
              If your property is experiencing unprecedented demand, changing guest expectations or dissatisfied team members, we are here to help. We partner with forward thinking entities to help them expand or strengthen F&B operations; introduce butler service; elevate guest experiences across the property; boost team morale; shape a new generation of team members or integrate a new technology to improve efficiency.
              </p>
            </div>
          </ImgNdTextContainer>
          <ImgNdTextContainerReverse>
            <Image src='/Assets/png/Rectangle 19-1.png' width='795' height='525' alt='Specialist Workshops'className="flexImg"></Image>
            
            <div className='contentBg contentBg2'>
              <h3>Specialist Workshops</h3>
              <p >
              Food & Beverage operations often require strategic restructuring, stronger teamwork, and rapid problem-solving skills. We design tailored training programs and longer-term consultancies to support your property's needs and vision. In order to tailor our service, we conduct an initial assessment to help identify gaps from the guest perspective before fine-tuning a program for effective and lasting results.
              </p>
            </div>
          </ImgNdTextContainerReverse>

          <ImgNdTextContainer>
            <Image src='/Assets/png/Rectangle 19-2.png' width='795' height='525' alt='Staff Referrals'className="flexImg"></Image>
            
            <div className='contentBg contentBg2'>
              <h3>Staff Referrals</h3>
              <p >
              If your property is experiencing unprecedented demand, changing guest expectations or dissatisfied team members, we are here to help. We partner with forward thinking entities to help them expand or strengthen F&B operations; introduce butler service; elevate guest experiences across the property; boost team morale; shape a new generation of team members or integrate a new technology to improve efficiency.
              </p>
            </div>
          </ImgNdTextContainer>

          <ContactPoint id='contactPoint'>
            
            <HeroButton onClick={() => setCvModal(prev => !prev)} >Submit CV</HeroButton>

            {
              cvModal ? 
              <Modal size='xl' opened={cvModal} onClose={() =>setCvModal(prev => !prev)}><CvModal/></Modal> : ""
            }
            
            <HeroButton onClick={() => setHireModal(prev => !prev)}>Hire Team Members</HeroButton>

            {
              hireModal ?  <Modal  size='xl'  opened={hireModal} onClose={() =>setHireModal(prev => !prev)}><HireModal  /></Modal> : ""
            }
  
          </ContactPoint>
      </Services>

      <Testimonials>
        <Subtitle>Testimonials</Subtitle>
       

      <CarouselContainer>
        <Carousel
        withIndicators
        height=''
        slideSize="350px"
        slideGap="lg"
        loop
        align="start"
        slidesToScroll={1}
        withControls={false}
        >
        <Carousel.Slide>
          <Slider>
             <TestimonialsMessage>
              “You guys do a really good job. I'm glad I decided to work with you.”
              </TestimonialsMessage>
              <TestimonialsAuthor >-JOHN DOE</TestimonialsAuthor>
             
              <TestimonialsAuthorDesignation >Head of Marketing, Hilton</TestimonialsAuthorDesignation>
          </Slider>
        </Carousel.Slide>
        <Carousel.Slide>
        <Slider>
             <TestimonialsMessage>
              “You guys do a really good job. I'm glad I decided to work with you.”
              </TestimonialsMessage>
              <TestimonialsAuthor >-JOHN DOE</TestimonialsAuthor>
             
              <TestimonialsAuthorDesignation >Head of Marketing, Hilton</TestimonialsAuthorDesignation>
          </Slider>
        </Carousel.Slide>
        <Carousel.Slide> 
        <Slider>
             <TestimonialsMessage>
              “You guys do a really good job. I'm glad I decided to work with you.”
              </TestimonialsMessage>
              <TestimonialsAuthor >-JOHN DOE</TestimonialsAuthor>
             
              <TestimonialsAuthorDesignation >Head of Marketing, Hilton</TestimonialsAuthorDesignation>
          </Slider>
        </Carousel.Slide>
        <Carousel.Slide>
        <Slider>
             <TestimonialsMessage>
              “You guys do a really good job. I'm glad I decided to work with you.”
              </TestimonialsMessage>
              <TestimonialsAuthor >-JOHN DOE</TestimonialsAuthor>
             
              <TestimonialsAuthorDesignation>Head of Marketing, Hilton</TestimonialsAuthorDesignation>
          </Slider>
        </Carousel.Slide>
        <Carousel.Slide>
        <Slider>
             <TestimonialsMessage>
              “You guys do a really good job. I'm glad I decided to work with you.”
              </TestimonialsMessage>
              <TestimonialsAuthor >-JOHN DOE</TestimonialsAuthor>
             
              <TestimonialsAuthorDesignation >Head of Marketing, Hilton</TestimonialsAuthorDesignation>
          </Slider>
        </Carousel.Slide>
        <Carousel.Slide> 
        <Slider>
             <TestimonialsMessage>
              “You guys do a really good job. I'm glad I decided to work with you.”
              </TestimonialsMessage>
              <TestimonialsAuthor >-JOHN DOE</TestimonialsAuthor>
             
              <TestimonialsAuthorDesignation >Head of Marketing, Hilton</TestimonialsAuthorDesignation>
          </Slider>
        </Carousel.Slide>
        {/* ...other slides */}
        </Carousel>
      </CarouselContainer>
  

      </Testimonials>

      <ContactFormContainer>
        <ContactForm>
          <ContactTitle>In the spirit of tailored service...</ContactTitle>
          <ContactSubtitle >Kindly complete the below form to book your consultation</ContactSubtitle>
          <InputsWrapper >
          <TextInput type='text' placeholder='Name of property'/>
          <TextInput type='text' placeholder='Location'/>
          <TextInput type='text' placeholder='We are interested in ....'/>
          <TextInput type='text' placeholder='Size of Team for Training'/>
          <TextInput type='text' placeholder='Size of Team for Training'/>
          <TextInput type='text' placeholder='Date/Time'/>
          </InputsWrapper>
          <HeroButton >Book a Consultation</HeroButton>
        </ContactForm>
        <ContactLogosContainer>
          <ContactDiscription>
          We continue to be the force behind excellent. 
          </ContactDiscription>
          <Image src='/Assets/svg/Frame 44.svg' alt='logos' height='301' width='560'/>
        </ContactLogosContainer>
      </ContactFormContainer>

      <FaqsContainer id='faqs'>
        <FaqsTitleContainer>
          <FaqsTitle>Frequently Asked Questions</FaqsTitle>
          <FaqsSubtitle >Everything you need to know to know before you work with us.</FaqsSubtitle>
        </FaqsTitleContainer>

        <AccordianCont>
          <Accordion
          sx={{ maxWidth: 600 }} mx="auto"
            chevron={<AccordianIcon />}
            styles={{
              chevron: {
                '&[data-rotate]': {
                  transform: 'rotate(45deg)',
                },
              },
              item: {
                border: 'none',
                fontFamily:`${figtree.style.fontFamily}`,
                fontSize:'1rem',
                },
              label: {
                fontFamily:'${baskerville.style.fontFamily}',
                fontSize:'2rem',
                padding: '1rem',
              }
            }}
            value={value} onChange={setValue}
          >
            <Accordion.Item value="item-1">
              <Accordion.Control>Where is your company based?</Accordion.Control>
              <Accordion.Panel>panel-1</Accordion.Panel>
            </Accordion.Item>
           
            <Accordion.Item value="item-2">
              <Accordion.Control>What is the recommended number of training participants?</Accordion.Control>
              <Accordion.Panel>panel-1</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="item-3">
              <Accordion.Control> Do you offer one-on one training to individuals?</Accordion.Control>
              <Accordion.Panel>panel-1</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </AccordianCont>
      </FaqsContainer>
     
     <Footer/>
    </>
  )
}
