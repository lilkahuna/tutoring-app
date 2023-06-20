import React from 'react'
import ButtonLink from '../Components/ButtonLink'
import { TbArrowBackUp, TbArrowForwardUp } from 'react-icons/tb'
import Form from '../Components/Form'

const handleSchedule = (e: React.FormEvent) => {
  console.log("Hello!")
  e.preventDefault()
}


const Schedual = () => {
  return (
    <>
      <div>
        <Form title="Schedule Here" submitFunc={handleSchedule} isSelectVisible={true} />
      </div>
      <ButtonLink text="Back" path="/" icon={<TbArrowBackUp />} />
      <ButtonLink text="Issues" path="/issues" icon={<TbArrowForwardUp />} />      
    </>
  )
}


export default Schedual