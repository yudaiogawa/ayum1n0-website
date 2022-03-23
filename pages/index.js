import { Container, Box, Heading } from '@chakra-ui/react'

import Example from './Example'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        p={8}
        textAlign="center"
        fontSize="2xl"
        bg="teal.300"
      >
        ayum1n0 Website
      </Box>

      <Box display={{ md: 'flex' }} p={4}>
        <Box flexGrow={1}>
          <Heading as="h2">Yudai Ogawa</Heading>
        </Box>
      </Box>

      <Example />
    </Container>
  )
}

export default Page
