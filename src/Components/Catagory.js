import React from 'react'
import { Link } from 'react-router-dom';
import {Flex , useColorMode, useColorModeValue, Tooltip, Box} from "@chakra-ui/react"

function Catagory(props) {

  const { colorMode } = useColorMode();
  const bg = useColorModeValue('gray.600', 'gray.300');
  


  return (
    <Flex cursor = {"pointer"} my = {"5"}  >
      <Link to = {`/catagory/${props.data.name}`}>
      <Tooltip
          hasArrow
          placement="right"
          closeDelay={300}
          arrowSize={5}
          label={props.data.name}
          bg={bg}
        >
          <Box>{props.data.iconSrc}</Box>
        </Tooltip>
      </Link>
    </Flex>
  )
}

export default Catagory;