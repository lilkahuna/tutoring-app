import React from 'react'
import ButtonLink from '../Components/ButtonLink'
import { FaBeer } from 'react-icons/fa'

const Qualifications = () => {
  return (
    <>
      <div>Qualifications</div>
      <ButtonLink text='Back' icon={<FaBeer />} path='/'/>
    </>
  )
}

export default Qualifications