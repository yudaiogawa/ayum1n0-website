import { Container, Box, Heading } from '@chakra-ui/react'

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
        <Heading as="h4">FOO</Heading>
        <p>foo ...</p>
      </Section>

      <Section delay="0.4">
        <Heading as="h4">BAR</Heading>
        <p>bar ...</p>
      </Section>

      <Example />
    </Container>
  )
}

export default Page
