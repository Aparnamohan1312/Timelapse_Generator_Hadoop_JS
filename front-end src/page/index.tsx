import {
  Text,
  Flex,
  Button,
} from '@chakra-ui/react'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'

import { Footer } from '../components/Footer'
import Link from 'next/link'




const Index = () => (
  <Container height="100vh" align="center">
    <Hero title='Welcome!' />
    <Flex
      justifyContent="center"
      direction="column"
      textAlign="center"
    >
      <Text marginTop={{ base: "20px" }} fontSize={{ base: "1xl", 'md': "2xl" }}>This is a project aimed at generating location specific timelapses on the LandSat8® Dataset.
        We use <em>HDFS</em> to ingest the Spatial Data (Large GeoTiffs: <strong>~150GB</strong>) and serve requests from the client 
        using a Python FastAPI Server. This serves as a Proof-Of-Concept for our CS225/CS226 Project.
      </Text>
      <Link href="/dateRangeSelect">
        <Button marginTop={{ base: "120px" }} size="lg"
          bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)" color="white"> Get Started!</Button></Link>

    </Flex>

    <DarkModeSwitch />
    <Footer>
      <Text textAlign={"center"}>made with ❤️ by team blitzkrieg</Text>
    </Footer>
  </Container>
)

export default Index
