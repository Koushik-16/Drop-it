import React, { useEffect, useState } from "react";
import { getAllFeeds } from "../utils/fetchData";
import Spinner from "./Spinner";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { VideoPin } from ".";

const RecommendedVideos = ({ feeds }) => {
  return (
    <SimpleGrid
    minChildWidth='300px'   spacing='5px' width={"full"}autoColumns ={"max-content"} px = "2px" overflowX={"hidden"} justifyContent = "center" alignItems ="center"  
    >
      {feeds &&
        feeds.map((data) => (
          <Flex direction={"column"} justifyContent = "center" alignItems={"center"} key = {data.id}  ><VideoPin  maxWidth = {"400px"} height = "100px"  data = {data}  /> </Flex>))}
        
    </SimpleGrid>
  );
};

export default RecommendedVideos;