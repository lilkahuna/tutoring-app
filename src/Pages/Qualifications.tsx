import React from 'react'
import ButtonLink from '../Components/ButtonLink'
import { TbArrowBackUp } from 'react-icons/tb'

const Qualifications = () => {
  return (
    <>
      <div>

        <h1 className='text-center text-sky-500 text-5xl m-12'>Nicole's Qualifications</h1>

        <div className='mt-10 bg-gradient-to-t from-yellow-200 via-30% to-sky-300 
  rounded-2xl shadow-lg justify-evenly flex flex-row mx-6 p-5'>
            
                      

        </div>
      </div>

      <ButtonLink text='Back' path='/' icon={<TbArrowBackUp />} />
    </>
  )
}

export default Qualifications;