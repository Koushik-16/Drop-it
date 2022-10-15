import React from 'react'
import logo from "../img/logo.png";
import logoDark from "../img/logo_dark.png";
import { Link, useNavigate } from "react-router-dom"
import { Flex, useColorMode, useColorModeValue, Image, InputGroup, InputLeftElement, Input, Menu , MenuButton, MenuList , MenuItem } from '@chakra-ui/react';
import { IoAdd, IoLogOut, IoMoon, IoSearch, IoSunny } from "react-icons/io5"
import image from "../img/images.jpg"
import ProfileImage from './ProfileImage';



function NavBar(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#fff", "#fff");
  const navigate = useNavigate();
  
 
  return (
    <Flex justifyContent={"space-between"} alignItems='center'  py = "4"   position={'fixed'} width={'100vw'} zIndex={"999"} backgroundColor = "black"  >
      <Link to={"/"}>
        <Image src= {logo} width = "auto" maxHeight={"40px"}    />
      </Link>

      <InputGroup mx={"5px"} width={"50vw"} >
        <InputLeftElement 
          pointerEvents='none'
          children={<IoSearch fontSize={"20px"} color="#fff" />}
        />
        <Input variant={"filled"}  textColor={"#fff"}  background={"#fff"} backgroundColor={"black"} borderColor={"#fff"} type='text' placeholder='Search' fontSize={"20px"} fontWeight="medium"

        />
      </InputGroup>

      <Flex justifyContent={"space-between"} alignItems='center'>
        <Flex width={"25px"}
          height={"auto"}
          justifyContent="center"
          alignItems={"center"}
          cursor={"pointer"}
         
          onClick={toggleColorMode}
        >
          {colorMode === 'light' ? <IoMoon fontSize={"25px"} color={"#fff"} /> : <IoSunny fontSize={"25px"} />}

        </Flex>

        <Link to = {"/create"}>
          <Flex justifyContent="center"  alignItems={"center"} bg = {bg}  width = "auto" height={"3.3vh"} borderRadius = "5px"
            mr={'2vw'} ml = {"1vw"} cursor = "pointer"
          _hover={{shadow : 'md'}}  transition = "ease-in-out" transitionDuration={"0.1s"}
          >
           <IoAdd ml = "5px" fontSize={"30px"}   color = "black"/>
           </Flex>
        </Link>

        <Menu>
  <MenuButton >
     <ProfileImage link = { props.user ?   props.user[0].photoURL : image} /> 
  </MenuButton>
  <MenuList  shadow={"lg"}>
    
    <Link to={`/userDetails/${props.user?props.user[0].uid: 1}`}  >
     <MenuItem> My Account</MenuItem>
    </Link> 
    
    <Link to = {"/login"} >
     <MenuItem
     flexDirection={"row"}
     alignItems = "center"
     gap={"4"}
     onClick= {() => {
        localStorage.clear();
      
     }}
     >Logout <IoLogOut fontSize={"20px"}/></MenuItem>
    </Link>
  </MenuList>
</Menu>

      </Flex>

    </Flex>
  )
}

export default NavBar