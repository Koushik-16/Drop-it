import React from 'react'
import {Text, Flex , Image} from "@chakra-ui/react"
import notFoundSvg from "../img/notfound.svg";


function NotFound() {
    return (
        <Flex
          width={"full"}
          justifyContent="center"
          alignItems={"center"}
          direction="column"
        >
          <Image src={notFoundSvg} width={600} />
          <Text fontSize={40} fontWeight="semibold" fontFamily={"cursive"}>
            Not Found
          </Text>
        </Flex>
      );
}

export default NotFound