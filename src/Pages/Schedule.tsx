import React, { useState } from 'react'
import ButtonLink from '../Components/ButtonLink'
import { TbArrowBackUp, TbArrowForwardUp } from 'react-icons/tb'
import Form from '../Components/Form'

type Info = {
  input_one: string
  input_two: string
  input_three: string
  select_one: string
}

const Schedual = () => { 
  const [schedule, setScedule] = useState<Info | undefined>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
    //object deconstruction
    const {name, value} = e.target
    setScedule((prev: Info | undefined)=> {
      //make sure to add type to return value
      return{...prev, [name]: value} as Info | undefined
    })
  }

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(schedule?.select_one)
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