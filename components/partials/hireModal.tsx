import styled from "styled-components"

// fonts
import localFont from '@next/font/local'
const figtree = localFont({src: '../../public/Assets/fonts/Figtree/Figtree-VariableFont_wght.ttf'})
const baskerville = localFont({src: '../../public/Assets/fonts/Baskerville/baskvl.ttf'})

const Modal = styled.div`
  background-color: #fff;
  padding:0 7% 7% 7%;
`
const ModalTtitle = styled.p`
  font-family: ${baskerville.style.fontFamily};
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
  color:#A48042
`
const ModalSubtitle = styled.p`
  font-family: ${figtree.style.fontFamily};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color:#002A3A;
`

const Form = styled.form`
  display:flex;
  align-items:flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin:30px auto;
`
const FormInput = styled.input`
  border: 1px solid #002A3A50;
  width: 100%;
  padding: .5rem;
  border-radius 5px;
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
      <ModalTtitle>Hire Team Members</ModalTtitle>
      <ModalSubtitle>Kindly complete the below form to hire members. Sections marked with * are mandatory.</ModalSubtitle>
      <Form>
        <FormInput type="text" placeholder="Country *"></FormInput>
        <FormInput type="text" placeholder="Location *"></FormInput>
        <FormInput type="text" placeholder="Department *"></FormInput>
        <FormInput type="text" placeholder="Role *"></FormInput>
        <FormInput type="text" placeholder="Proposed Salary Range *"></FormInput>
        <FormInput type="text" placeholder="Job Description"></FormInput>
        <FormInput type="text" placeholder="Desired Start Date *"></FormInput>
      </Form>
      <FormSubmit>Book a Consultation</FormSubmit>
    </Modal>
  )
}

export default HireModal