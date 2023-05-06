import {
  Flex, Heading, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Spacer, Text, useDisclosure, Button
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import Head from 'next/head'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import dynamic from 'next/dynamic'
import { LatLng } from 'leaflet'
import Link from 'next/link'




function selectLocation() {
  const [latlng, setLatLng] = useState<LatLng>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false
  });
  return (
    <Container height="100vh" align="center" isMap={true}>
      <Heading fontSize={{ base: '3vh', md: '10vh' }} marginTop="5vh" marginBottom="1em">Select a Location</Heading>


      <MapWithNoSSR setParentLatLng={setLatLng} />

      <Spacer />
      <Modal  motionPreset='slideInBottom' isOpen={latlng!==null} onClose={()=>{setLatLng(null)}} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Location: </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading>You chose </Heading>
            <Text >Latitude: {latlng?.lat}</Text>
            <Text>Longitude: {latlng?.lng}</Text>
          </ModalBody>

          <ModalFooter>
          <Link href="/dateRangeSelect">
            <Button bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)" color="white">Continue</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <DarkModeSwitch />
      <Footer>
        <Text textAlign={"center"}>made with ❤️ by team blitzkrieg</Text>
      </Footer>
    </Container>
  )
}

export default selectLocation