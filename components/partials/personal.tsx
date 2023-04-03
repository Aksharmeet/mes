import React from 'react'
import styled from 'styled-components'

// fonts
import localFont from '@next/font/local'
const figtree = localFont({ src: '../../public/Assets/fonts/Figtree/Figtree-VariableFont_wght.ttf' })
const baskerville = localFont({ src: '../../public/Assets/fonts/Baskerville/baskvl.ttf' })

interface props {
	personal: string
}

const Modal = styled.div`
	background-color: #fff;
	padding: 0 7% 7% 7%;
	display: flex;
	align-items: end;
	justify-content: center;
	gap: 30px;
	@media only screen and (max-width: 780px) {
		padding: 0 2% 2% 2%;
	}
`
const ModalContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
	align-items: end;
	@media only screen and (max-width: 1024px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`

// ! left flex
const ImageContainer = styled.div`
	width: 50%;
	@media only screen and (max-width: 1024px) {
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		margin-bottom: 40px;
	}
`

// ! right flex
const Text = styled.div`
	width: 70%;
	position: relative;
	@media only screen and (max-width: 1024px) {
		width: 100%;
		text-align: center;
	}
`
const Name = styled.p`
	font-family: ${baskerville.style.fontFamily};
	font-size: 40px;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: 0em;
	color: #002a3a;
	margin-bottom: 20px;
`
const Designation = styled.p`
	font-family: ${figtree.style.fontFamily};
	font-size: 32px;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: 0em;
	color: #a48042;
	margin-bottom: 40px;
`
const Info = styled.p`
	font-family: ${figtree.style.fontFamily};
	font-size: 20px;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: 0em;
	color: #a48042;
	text-align: left;
	margin-bottom: 20px;
`
const PersonalLink = styled.a`
	font-family: ${figtree.style.fontFamily};
	font-size: 18px;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: 0em;
	color: #002a3a;
`

const personalData = {
	RoryBaugh: {
		name: 'Rory Baugh',
		img: '/Assets/png/5- Rory Baugh Website Photo modal.png',
		designation: 'Director',
		info: "Director Rory Baugh's passion for capacity-building allows him to train with masterful precision. As the only Caribbean hotelier Certified as a Master Trainer by the Guild of Professional English Butlers, Rory boasts over 20 years of experience across several property models and departments. Rory's unmatched skillset serves as an invaluable resource for long-standing and emergent luxury properties.",
		link: 'rory.baugh.linkedin.com',
	},
	ConroyThompson: {
		name: 'Conroy Thompson',
		img: '/Assets/png/6- Conroy Thompson Website Photo modal.png',
		designation: 'Consultant',
		info: 'Consultant Conroy D. Thompson has over 20 years of combined experience in Guest Relations, Events Management, Sales Management and HR/Training. He uses his diverse background to design unique and highly effective transformational leadership programs for individuals and teams.',
		link: 'conroy.thompson.linkedin.com',
	},
	RochelleAmour: {
		name: 'Rochelle Amour',
		img: '/Assets/png/9 2 modal.png',
		designation: 'Director',
		info: 'Director Rochelle Amour is an award-winning researcher with over 14 years of experience in Psychology, Gerontology and Communications. Rochelle is also a registered and certified cultural worker with the National Registry of Artists and Cultural Workers of Trinidad and Tobago, and is committed to translating academic ideas about market trends and brain health to make them accessible and helpful for teams.',
		link: 'rochelleamour.com',
	},
}

const Personal: React.FC<props> = ({ personal }) => {
	personal = personal.replace(' ', '')

	return (
		<Modal>
			{personalData[personal] ? (
				<ModalContainer>
					<ImageContainer>
						<img src={personalData[personal].img} alt='Specialised Consultancy' className='flexImg' />
					</ImageContainer>
					<Text>
						<Name>{personalData[personal].name}</Name>
						<Designation>{personalData[personal].designation}</Designation>
						<Info>{personalData[personal].info}</Info>
						<PersonalLink href='#'>{personalData[personal].link}</PersonalLink>
					</Text>
				</ModalContainer>
			) : (
				''
			)}
		</Modal>
	)
}

export default Personal
