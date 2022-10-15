import { Flex, useColorMode, useColorModeValue , Text,Image } from '@chakra-ui/react'
import { getFirestore } from 'firebase/firestore';
import moment from 'moment/moment';
import React, { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom'
import { firebaseApp } from '../firebase-config';
import { getUserInfo } from '../utils/fetchData';
import "./Videopin.css"


function VideoPin(props) {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue('blackAlpha.600', "blackAlpha.600");
  const textColor = useColorModeValue('gray.100', 'gray.100');
  const [userInfo, setUserInfo] = useState(null);
  const [userId, setUserId] = useState(null);
  const firestoreDB = getFirestore(firebaseApp);


  useEffect(() => {
    if(props.data) setUserId(props.data.userId);
    
    if(userId)  {
      getUserInfo(firestoreDB ,userId).then((data) => {
        setUserInfo(data);
      });
      
    }
   
  }, [userId]);




  return (
    <Flex justifyContent={"space-between"} alignItems = "center" direction={"column"} cursor = "pointer"  mb={"1vh"}
    shadow={"lg"} _hover = {{shadow : "xl"}} rounded = "md" overflow={"hidden"} position = "relative" height = "165px"  maxWidth={"300px"} 
   
    
    >
      <Link to={`/videoDetail/${props.data.id}`}>
        
      <video className='abc'  src = {props.data.videoURL} muted  onMouseOver={(e) => e.target.play()}  onMouseOut = {(e) => e.target.pause()} />
      
      </Link>
      <Flex  position={"absolute"} bottom ="0" left={"0"} height ="45px" px={"1vw"} bg={bg} width = "full" direction={"column"}  >

        <Flex width={"full"} justifyContent = "space-between" alignItems={ "center"} >
         
            <Text color = {textColor}  fontSize={"15px"} >{props.data.title.substring(0,Math.min(10,props.data.title.length))}  </Text>
            <Link to={`/userDetails/${userId}`} >
               <Image src = {userInfo?.photoURL} rounded = "full" width ="35px" border = "2px" borderColor={bg} mt = {"-2.3vw"}  />
            </Link>
        </Flex   >
        <Text mb={"0.5vh"} fontSize={"12px"} color = {textColor} ml = "auto" >{moment(new Date(parseInt(props.data.id)).toISOString()).fromNow()}</Text>

      </Flex>

    </Flex>
  )
}

export default VideoPin