import React from 'react'
import {Alert , AlertTitle} from "@chakra-ui/react"

function AlertMsg(props) {
  return (
    <Alert  >
    {props.icon}
    <AlertTitle ml={10}  >{props.msg}</AlertTitle>
  </Alert>
   
  )
}

export default AlertMsg