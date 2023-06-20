import React from 'react'
import Form from '../Components/Form'
import ButtonLink from '../Components/ButtonLink'
import { TbArrowBackUp } from 'react-icons/tb'

const handleIssue = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('hello')
}


const Issues = () => {
    return (
        <>
            <div>
                <Form title='What Went Wrong?' isSelectVisible={false} submitFunc={handleIssue} changeInputOne={{name: "Name", isVisible: true}} 
                    changeInputThree={{name: "Issue", type: "textarea", isVisible: true}}/>
            <ButtonLink text='Back' path='/schedule' icon={<TbArrowBackUp />}/>

            </div>
        </>
    )
}

export default Issues