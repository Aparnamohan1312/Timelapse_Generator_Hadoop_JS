import {
    Heading,
    Box,
    Text
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import axios from 'axios'


function VideoScreen() {

    return (
        <Container height="100vh" align="center" isMap={true}>

            <Heading fontSize={{ base: '3vh', md: '10vh' }} marginTop="5vh" marginBottom="1em">Click play to watch the timelapse</Heading>

            <video controls>
                <source src={"/timelapseVideo.mp4"} type="video/mp4" />
            </video>
            <DarkModeSwitch />
            <Footer>
                <Text textAlign={"center"}>made with ❤️ by team blitzkrieg</Text>
            </Footer>
        </Container>

    )
}

// export async function getServerSideProps() {
//     // Fetch data from external API
//   const res = await fetch(`http://localhost:8000/getTimelapse`)
//   const {path} = await res.json()

//   // Pass data to the page via props
//   return { props: { path } }
//   }

export default VideoScreen