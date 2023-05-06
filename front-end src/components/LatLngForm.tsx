import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
    FormLabel,
    FormErrorMessage,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
type ForgotPasswordFormInputs = {
    email: string;
};

function validateName(value) {
    let error
    if (!value) {
      error = 'Name is required'
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱"
    }
    return error
  }
export default function LatLngForm(): JSX.Element {
    // return (
    //     <Flex
    //         minH={'100vh'}
    //         align={'center'}
    //         justify={'center'}
    //     >
    //         <Stack
    //             spacing={4}
    //             w={'full'}
    //             maxW={'md'}
    //             align={'center'}
    //             justify={'center'}
    //             bg={useColorModeValue('white', 'gray.700')}
    //             rounded={'xl'}
    //             boxShadow={'lg'}
    //             p={6}
    //             my={12}>
    //             <Heading>
    //                 Welcome!
    //             </Heading>
    //             <Text
    //                 fontSize={{ base: 'sm', sm: 'md' }}
    //                 color={useColorModeValue('gray.800', 'gray.400')}>
    //                 Enter a valid latitude and longitude to get started.
    //             </Text>
    //             <FormControl isRequired id="lat" >
    //                 <FormLabel color={'gray.500'}>Latitude: </FormLabel>
    //                 <Input
    //                     placeholder="enter latitude"
    //                     _placeholder={{ color: 'gray.500' }}
    //                     type="email"
    //                 />
    //             </FormControl>
    //             <FormControl isRequired id="lng" >
    //                 <FormLabel color={'gray.500'}>Longitude: </FormLabel>
    //                 <Input
    //                     placeholder="enter longitude"
    //                     _placeholder={{ color: 'gray.500' }}
    //                     type="email"
    //                 />
    //             </FormControl>
    //             <FormControl isRequired id="sdate" >
    //                 <FormLabel color={'gray.500'}>Start Date: </FormLabel>
    //                 <Input
    //                     min="2018-01-01" max="2020-12-31"
    //                     type="date"
    //                 />
    //             </FormControl>
    //             <FormControl isRequired id="edate" >
    //                 <FormLabel color={'gray.500'}>Start Date: </FormLabel>
    //                 <Input
    //                     min="2018-01-01" max="2020-12-31"
    //                     type="date"
    //                 />
    //             </FormControl>

    //             <Stack spacing={6}>
    //                 <Button
    //                     bg={'green.400'}
    //                     color={'white'}
    //                     _hover={{
    //                         bg: 'green.500',
    //                     }}>
    //                     Visualise!
    //                 </Button>
    //             </Stack>
    //         </Stack>
    //     </Flex>
    // );
    return( <Formik
        initialValues={{ name: 'Sasuke' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
            <Field name='name' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>First name</FormLabel>
                  <Input {...field} placeholder='name' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme='teal'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>)
}