import React , {useEffect} from 'react'
import {Circles } from "react-loader-spinner"
import {Flex , Progress , Text} from "@chakra-ui/react"

function Spinner(props) {

    useEffect(() => {} , [props.progress])

  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems='center' height = "full"
     px={"10"} mt = "1"

    >
        <Circles color ="#008fff" width={"80"} height = " 80"   />
        <Text fontSize={"25"} textAlign = "center" px = "2">{props.msg}</Text>
     {props.progress && <div>
      <Progress mt={"50"} hasStripe size={"sm"} width = "220px" rounded={"sm"} colorScheme='linkedin'  value={Number.parseInt(props.progress)} />
      <Text fontSize={"25"} textAlign = "center" px = "2">{Math.round(props.progress)}%</Text>
      </div>
       }
    </Flex>
  )
}

export default Spinner