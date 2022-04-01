import NextLink from 'next/link'
import { Container, Box, Heading, Button } from '@chakra-ui/react'

import Example from './Example'
import Section from '../components/Section'

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

      <Section delay="0.2">
        <Heading as="h4">ASDF</Heading>
        <p>FOO...</p>
        <Box my={8}>
          <NextLink href="https://github.com/yudaiogawa">
            <Button colorScheme="telegram">GITHUB</Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay="0.4">
        <Heading as="h4">ASDF</Heading>
        <p>BAZ...</p>
        <Box my={8}>
          <NextLink href="https://www.youtube.com/channel/UCHT3a2bqmq6Vkufzoyeza7A">
            <Button colorScheme="telegram">YOUTUBE</Button>
          </NextLink>
        </Box>
      </Section>

      <Example />
    </Container>
  )
}

export default Page
