import React, { useRef } from 'react'
import ButtonLink from '../Components/ButtonLink'
import { TbArrowBackUp, TbArrowForwardUp } from 'react-icons/tb'
import Form from '../Components/Form'
import emailjs from '@emailjs/browser'

const Schedual = () => {
  const formRef = useRef<React.MutableRefObject<string | HTMLFormElement>>()

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault()
  
    emailjs.sendForm('service_os6o6t6', 'template_ajedy5a', formRef.current ,'YlBlgsE3qya_lU-_j')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      
  }
  
  return (

    <>
      <div>
        <form ref={formRef}>
          <input type='text' />

        </form>
        <Form title="Schedule Here" submitFunc={handleSchedule} isSelectVisible={true} />
      </div>
      <ButtonLink text="Back" path="/" icon={<TbArrowBackUp />} />
      <ButtonLink text="Issues" path="/issues" icon={<TbArrowForwardUp />} />
    </>
  )
}


export default Schedual