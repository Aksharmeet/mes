import styled from "styled-components"
import Image from "next/image"

// fonts
import localFont from '@next/font/local'
const figtree = localFont({src: '../../public/Assets/fonts/Figtree/Figtree-VariableFont_wght.ttf'})
const baskerville = localFont({src: '../../public/Assets/fonts/Baskerville/baskvl.ttf'})

const Modal = styled.div`
  background-color: #fff;
  padding:0 7% 7% 7%;
  text-align:center;
`
const ModalTtitle = styled.p`
  font-family: ${baskerville.style.fontFamily};
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0em;
  color:#A48042
`
const ModalSubtitle = styled.p`
  font-family: ${figtree.style.fontFamily};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  color:#002A3A;
`

const Form = styled.form`
  display:flex;
  align-items:flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin:30px auto;
  position: relative;
`
const FileFilter = styled.div`
  width:100%;
  height: 40vh;
  position: absolute;
  top:0;
  left:0;
  background:#fff;
  border: 1px solid #002A3A50;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  pointer-events:none;
  font-family: ${figtree.style.fontFamily};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #002A3A50;

`
const FormInput = styled.input`
 width:100%;
 height: 40vh;
 cursor:pointer;
 opacity:0;
`
const FormSubmit = styled.button`
  padding: 1rem;
  background: #A48042;
  border-radius: 6px;
  width: 100%;
  color:#fff;
`

function HireModal() {
  return (
    <Modal>
      <ModalTtitle>Submit CV</ModalTtitle>
      <ModalSubtitle>Upload your CV in PDF format below</ModalSubtitle>
      <Form>
     
        <FormInput type="file" id='file'></FormInput>
        <FileFilter>
          <Image src="/Assets/svg/upload.svg" width='61' height='65' alt='upload icon'/>
          <p style={{marginTop: '20px'}}>Upload a CV</p>
        </FileFilter>
      </Form>
      <FormSubmit>Book a Consultation</FormSubmit>
    </Modal>
  )
}

export default HireModal