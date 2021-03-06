import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

import Navbar from '../Navbar'

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ayum1n0 website</title>
      </Head>

      <Navbar></Navbar>

      <Container maxW="container.md" pt={10}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
