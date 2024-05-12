import React from 'react'
import { RxCheckCircled } from "react-icons/rx";


const CompleteIcon = (props) => {
    const {className, onClick} = props
  return (
    <RxCheckCircled
        className={className}
        onClick={onClick}
    />
  )
}

export {CompleteIcon}