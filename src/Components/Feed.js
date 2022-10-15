import React , { useEffect } from 'react'
import {firebaseApp} from "../firebase-config"
import {collection , getDocs, orderBy, query , getFirestore} from "firebase/firestore"
import getAllFeeds, { categoryFeeds } from '../utils/fetchData';
import { useState } from "react"
import  Spinner  from '../Components/Spinner';
import {SimpleGrid , Box, Flex} from "@chakra-ui/react"
import VideoPin from './VideoPin';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

function Feed() {

  const [feeds, setFeeds] = useState(null);
  const [loading, setLoading] = useState(false);
  const {catagoryId} = useParams();

  const firestoreDB = getFirestore(firebaseApp);

  useEffect ( () => {
    setLoading(true);
    if(catagoryId) {
      console.log(catagoryId);
         categoryFeeds(firestoreDB,catagoryId).then((data) => {
          setFeeds(data);
          setLoading(false);
         });
    }else {
    getAllFeeds(firestoreDB).then(data => {
      setFeeds(data);
      setLoading(false);
    });
  }

  }, [catagoryId]);


  if(loading) return (<Spinner  msg = {"Loading your feeds"}/>);
  if (!feeds?.length > 0) return <NotFound />;


  return (
    
    <SimpleGrid  minChildWidth='300px'   spacing='5px' width={"full"}autoColumns ={"max-content"} px = "2px" overflowX={"hidden"} justifyContent = "center" alignItems ="center"   >
      
         {feeds && feeds.map((data) => (<Flex direction={"column"} justifyContent = "center" alignItems={"center"} key = {data.id}  ><VideoPin  maxWidth = {"400px"} height = "100px"  data = {data}  /> </Flex>))}
        
</SimpleGrid>
  )
}

export default Feed