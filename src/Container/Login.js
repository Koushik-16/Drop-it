import { Button, Flex, VStack } from '@chakra-ui/react'
import { CgProfile } from "react-icons/cg";
import React from 'react'
import musicbg from "../img/musicbg.jpg"
import {Image} from "@chakra-ui/react"
import {FcGoogle} from "react-icons/fc"
import { getAuth, signInWithPopup, GoogleAuthProvider , signInAnonymously  } from "firebase/auth";
import {firebaseApp} from "../firebase-config"
import {useNavigate} from "react-router-dom"
import {doc  , setDoc, getFirestore} from "firebase/firestore";
import {fetchUser} from "../utils/fetch"
import image from "../img/images.jpg"


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
    console.log(user);
    localStorage.clear();
    localStorage.setItem("user",JSON.stringify(providerData));
    localStorage.setItem("accessToken",JSON.stringify(refreshToken));
    await setDoc(doc(firebaseDB, 'users', providerData[0].uid),providerData[0]);


    navigate("/", {replace : true});
   
  }).catch((error) => {
    
    console.log(error);
    
  });
}

const loginAsGuest = () => {
 
  signInAnonymously(firebaseAuth)
  .then(async (result) => {
    // Signed in..
    const user = result.user;
    const {refreshToken , providerData} = user;
    
    
    const Guestdata = [{displayName : `Guest${user.uid}` , email : null , uid : user.uid , photoURL : image}]
    localStorage.setItem("user",JSON.stringify(Guestdata));
    localStorage.setItem("accessToken",JSON.stringify(refreshToken));
    await setDoc(doc(firebaseDB, 'users', user.uid),Guestdata[0]);
    navigate("/", {replace : true});

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
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
          <VStack>
            <Button  leftIcon={<FcGoogle fontSize={25}/>}  colorScheme= "whiteAlpha" shadow={'lg'}  color = "#f1f1f1"
            onClick = {() => login()}>Sign in with Google</Button>
            <Button leftIcon={<CgProfile fontSize={30} />}  colorScheme= "whiteAlpha" shadow={'lg'}  color = "#f1f1f1"
            onClick={() =>loginAsGuest()}
            >Continue as Guest</Button>
          </VStack>
          
        </Flex>
      </Flex>
      
  )
}

export default Login