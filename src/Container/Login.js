import { Button, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import musicbg from "../img/musicbg.jpg"
import {Image} from "@chakra-ui/react"
import {FcGoogle} from "react-icons/fc"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {firebaseApp} from "../firebase-config"
import {useNavigate} from "react-router-dom"
import {doc  , setDoc, getFirestore} from "firebase/firestore";
import {fetchUser} from "../utils/fetch"

function Login() {

  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider()
  const navigate = useNavigate();
  const firebaseDB = getFirestore(firebaseApp);
  

const login =  () => {
  
  signInWithPopup(firebaseAuth, provider)
  .then( async (result) => {
    const user = result.user;
    const {refreshToken , providerData} = user;
    localStorage.clear();
    localStorage.setItem("user",JSON.stringify(providerData));
    localStorage.setItem("accessToken",JSON.stringify(refreshToken));
    await setDoc(doc(firebaseDB, 'users', providerData[0].uid),providerData[0]);


    navigate("/", {replace : true});
   
  }).catch((error) => {
    
    console.log(error);
    
  });
}


  return (
    <Flex
      justifyContent = {'center'}
      alignItems = {'center'}
      width = {'100vw'}
      height = {'100vh'}
      position = {'relative'}
      >
        <Image src = {musicbg} objectfit = 'cover' width = {"full"}  height = {"full"} />
        <Flex
          position={"absolute"}
          width = {"100vw"}
          height = {'100vh'}
          bg = {"blackAlpha.600"}
          top = {"0"}
          left = {"0"}
          justifyContent = "center"
          alignItems={"center"}

        >
          <HStack>
            <Button  leftIcon={<FcGoogle fontSize={25}/>}  colorScheme= "whiteAlpha" shadow={'lg'}  color = "#f1f1f1"
            onClick = {() => login()}>Sign in with Google</Button>
          </HStack>
        </Flex>
      </Flex>
  )
}

export default Login