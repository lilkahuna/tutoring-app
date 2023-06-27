import React, { useState } from 'react'
import Form from '../Components/Form'
import ButtonLink from '../Components/ButtonLink'
import { TbArrowBackUp } from 'react-icons/tb'

type Info = {
    input_one: string
    input_two: string
    input_three: string
}

const Issues = () => {
    const [issue, setIssue] = useState<Info | undefined>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target
        setIssue((prev: Info | undefined)=> {
            return{...prev, [name]: value} as Info | undefined
        })

    }
    
    const handleIssue = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(issue?.input_one)
    }
    



    return (
        <>
            <div>
                <Form title='What Went Wrong?' isSelectVisible={false} onSubmit={handleIssue} changeInputOne={{name: "Name", isVisible: true}} 
                    changeInputThree={{name: "Issue", type: "text", isVisible: true}} onChange={handleChange}/>
            <ButtonLink text='Back' path='/schedule' icon={<TbArrowBackUp />}/>
            </div>
        </>
    )
}

export default Issues