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
                <Form title='What Went Wrong?' isSelectVisible={false} onSubmit={handleIssue} changeInputOne={{name: "Name", isVisible: true}} 
                    changeInputThree={{name: "Issue", type: "text", isVisible: true}}/>
            <ButtonLink text='Back' path='/schedule' icon={<TbArrowBackUp />}/>
            </div>
        </>
    )
}

export default Issues