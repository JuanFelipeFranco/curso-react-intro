import React from 'react'
import { RxCrossCircled } from "react-icons/rx";

const DeleteIcon = (props) => {
    const {className, onClick} = props
  return (
    <RxCrossCircled
        className={className}
        onClick={onClick}
    />
  )
}

export {DeleteIcon}