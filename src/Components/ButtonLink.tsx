import React from 'react'
import { Link } from 'react-router-dom'

interface Props{
    text: string
    path: string
    icon?: React.JSX.Element
}

const ButtonLink: React.FC<Props> = ({ text, icon, path }) => {
  return (
    <Link  
      className={"bg-transparent hover:bg-blue-500 text-blue-700 \
        font-semibold hover:text-white py-1 px-6 border border-blue-500 hover:border-transparent rounded mx-8 float-left"}
      to={path}>{text} {icon}
    </Link>
  )
}

export default ButtonLink;