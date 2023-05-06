import { Flex, FlexProps } from '@chakra-ui/react'

export const Container = (props: any) => (
  <Flex
    direction="column"
    alignItems="center"
    padding={props.isMap?{ base: '3vh', md: '3vh' }:{ base: '10vh', md: '10vh' }}
    justifyContent="flex-start"
    bg="gray.50"
    color="black"
    _dark={{
      bg: 'gray.900',
      color: 'white',
    }}
    transition="all 0.15s ease-out"
    {...props}
  />
)
