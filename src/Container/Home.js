import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom"
import { Catagory, Feed, NavBar, Create, Search } from "../Components";
import VideoPinDetail from '../Components/VideoPinDetail';
import UserProfile from '../Components/UserProfile';
import { categories } from "../data.js"
import {fetchUser} from "../utils/fetch"


function Home(props) {
 const [user, setUser]  = useState(fetchUser());
  
 
  return (
   

    <Flex direction={"column"}  justifyContent = "center" alignItems = "center"   >
      
    <Flex direction={"column"}  justifyContent = "center" alignItems = "center" height={"8vh"} mb = "2vh" width={"100vw"}  backgroundColor = "black" >
       <NavBar user={user} />
      </Flex>
      <Flex width="100vw"  >
        <Flex direction={"column"} justifyContent="start" alignItems={"center"} width='5%' ml={"10px"}  >
          <Flex direction={"column"}  justifyContent = "center" alignItems = "center" position={"fixed"} >
          {categories && categories.map((data) => { return <Catagory key={data.id} data={data} /> })}
          </Flex>
        </Flex>
        <Flex width={"95%"} px = "1"  justifyContent= {"center"} alignItems = "center" ml={'1.5vw'} mt = "2vh" >
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/catagory/:catagoryId" element={<Feed />} />
            <Route path="/create" element={<Create />} />
            <Route path="/videoDetail/:videoId" element={<VideoPinDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/userDetails/:userId" element={<UserProfile />} />
          </Routes>

        </Flex>
      </Flex>
      
    </Flex>
  )
}

export default Home;