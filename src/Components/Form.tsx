import React from 'react'

type InputSettings = {
    isVisible: boolean,
    name?: string,
    type?: string
}

interface FormProps{
    title: string 
    changeInputOne?: InputSettings
    changeInputTwo?: InputSettings
    changeInputThree?: InputSettings
    isSelectVisible: boolean
    submitFunc: (e: React.FormEvent) => void
}

// decalre defaults for props here
const Form: React.FC<FormProps> = ( { title, submitFunc, changeInputOne={isVisible: true}, changeInputTwo={isVisible: true}, 
    changeInputThree={isVisible: true}, isSelectVisible } ) => {
    
    return (

        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6 text-center text-sky-500">{title}</h1>
            <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" onSubmit={submitFunc}>
                {changeInputOne?.isVisible && <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input_one">{changeInputOne?.name || "Student Name"}</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        type={changeInputOne?.type || "text"} name='input_one' id='input_one'/>
                </div>}
                {changeInputTwo?.isVisible&& <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input_two">{changeInputTwo?.name || "Email"}</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        type={changeInputTwo?.type || "email"} name='input_two' id='input_two'/>
                </div>}
                {changeInputThree?.isVisible && <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input_three">{changeInputThree?.name || "Appointment Time"}</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        type={changeInputThree?.type || "datetime-local"} name='input_three' id='input_three'/>
                </div>}
                {isSelectVisible && <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="select_one">Subject</label>
                    <select className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'>
                        <option>Math</option>
                        <option>Science</option>
                        <option>History</option>
                        <option>English</option>
                    </select>
                </div>}
                <button
                    className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                    type="submit">Submit</button>
            </form>
        </div>


    )
}



export default Form;
