import React from 'react'
import ButtonLink from '../Components/ButtonLink'
import { TbArrowBackUp } from 'react-icons/tb'

const Qualifications = () => {
  return (
    <>
      <div>Qualifications</div>
      <ButtonLink text='Back' path='/' icon={<TbArrowBackUp />} />
    </>
  )
}

export default Qualifications