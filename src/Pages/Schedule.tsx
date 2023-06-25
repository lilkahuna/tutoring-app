import React, { useState } from 'react'
import ButtonLink from '../Components/ButtonLink'
import { TbArrowBackUp, TbArrowForwardUp } from 'react-icons/tb'
import Form from '../Components/Form'

type info = {
  studentName: string
  email: string
  time: string
  subject: string
}

const Schedual = () => { 
  const [info, setInfo] = useState<info>()

  //error here
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
    const {name, value} = e.target
    setInfo((prev: any)=> {
      return{...prev, [name]: value}
    })
  }

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(info)
  }

  return (

    <>
      <div>
        <Form title="Schedule Here" onSubmit={handleSchedule} isSelectVisible={true} onChange={handleChange}/>
      </div>
      <ButtonLink text="Back" path="/" icon={<TbArrowBackUp />} />
      <ButtonLink text="Issues" path="/issues" icon={<TbArrowForwardUp />} />
    </>
  )
}


export default Schedual