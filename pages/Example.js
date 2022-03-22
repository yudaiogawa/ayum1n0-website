import * as React from 'react'
import { Box, Center, Image, Flex, Badge, Text } from '@chakra-ui/react'
import { MdStar } from 'react-icons/md'

export default function Example() {
  return (
    <Center h="100vh">
      <Box p="5" maxW="320px" borderWidth="1px">
        <Image borderRadius="md" src="https://bit.ly/2k1H1t6" alt="sample" />
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">FOO</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            Verified &bull; Foo Town
          </Text>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          Foo, Bar, Baz, Qux
        </Text>
        <Text mt={2}>$2048 / midnight</Text>
        <Flex mt={2} align="center">
          <Box as={MdStar} color="orange" />
          <Text ml={1} fontSize="sm">
            <b>5.01</b> (1024)
          </Text>
        </Flex>
      </Box>
    </Center>
  )
}
