import {
    Heading, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Spinner,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Spacer, Text, useDisclosure, Button, Input, Stack, useToast
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { atom, useAtom } from 'jotai'
import Router from 'next/router'
import axios from 'axios';


export const startDate = atom("");
export const endDate = atom("");

function dateRangeSelect() {
    const toast = useToast()
    const [sDate, setSDate] = useAtom(startDate);
    const [eDate, setEDate] = useAtom(endDate);
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = () => {
        const x = new Date(sDate);
        const y = new Date(eDate);
        if (x > y) {
            toast({
                position: 'top',
                title: "Start Date cannot be greater than End Date",
                status: "error",
                isClosable: true,
                size: "sm"
            })
        } else {
            // send to server and get response
            setIsLoading(true);
            axios.get(`http://localhost:8000/video/${sDate}/${eDate}`,{timeout: 1000*300}).then(
                (res) => {
                    setIsLoading(false);


                    Router.push('/video')
                }
            )
        }
    }

    return (
        <Container height="100vh" align="center" isMap={true}>
            {isLoading ? <>
                <Heading fontSize={{ base: '3vh', md: '10vh' }} marginTop="5vh" marginBottom="1em">Server is processing your request</Heading>

                <Spinner />
                <Spacer />
                <Text> This takes about 3-4 mins. Please wait.</Text>
            </> : <>
                <Heading fontSize={{ base: '3vh', md: '10vh' }} marginTop="5vh" marginBottom="1em">Select Start/End Date</Heading>

                <Stack>
                    <Text> Start Date</Text>
                    <Input size="sm" value={sDate} type={"date"} onChange={(e) => { setSDate(e.target.value) }} />

                    <Spacer />
                    <Text> End Date</Text>
                    <Input size="sm" value={eDate} type={"date"} onChange={(e) => { setEDate(e.target.value) }} />
                </Stack>
                <Spacer />

                {sDate !== "" && eDate !== "" &&
                    <Button bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)" onClick={handleClick} color="white">Continue</Button>
                }
            </>}
            <DarkModeSwitch />
            <Footer>
                <Text textAlign={"center"}>made with ❤️ by team blitzkrieg</Text>
            </Footer>
        </Container>

    )
}

export default dateRangeSelect