import React from 'react'
import {Image} from "@chakra-ui/react"

function ProfileImage(props) {
  return (
    <Image src = {props.link} marginRight = "1vw" width = {"30px"}   rounded = "full" referrerPolicy='no-referrer'/>
  )
}

export default ProfileImage