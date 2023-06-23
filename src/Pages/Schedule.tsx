import React, { MutableRefObject, RefObject, useRef } from 'react'
import ButtonLink from '../Components/ButtonLink'
import { TbArrowBackUp, TbArrowForwardUp } from 'react-icons/tb'
import Form from '../Components/Form'
import emailjs from '@emailjs/browser'

const Schedule = () => {
  const formRef = useRef()


  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault()
    
    emailjs.sendForm('service_os6o6t6', 'template_ajedy5a', formRef.current, 'YlBlgsE3qya_lU-_j')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    
  };
  
  return (

    <>
      <div>
        <Form title="Schedule Here" onSubmit={handleSchedule} isSelectVisible={true} ref={formRef}/>
      </div>
      <ButtonLink text="Back" path="/" icon={<TbArrowBackUp />} />
      <ButtonLink text="Issues" path="/issues" icon={<TbArrowForwardUp />} />
    </>
  )
}


export default Schedule 