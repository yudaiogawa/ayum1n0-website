import Logo from './Logo'
import NextLink from 'next/link'
import {
  Box,
  Container,
  Stack,
  Link,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import { FcMenu } from 'react-icons/Fc'

const LinkItem = ({ href, children }) => {
  const enable = true
  return (
    <NextLink href={href} passHref>
      <Link p={2} color={enable ? 'red.100' : 'grey.100'}>
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = () => {
  return (
    <Box w="100%" maxW="container.md" position="fixed" bg="blue.100">
      <Flex>
        <Heading size="xl">
          <Logo />
        </Heading>
      </Flex>

      <Container
        display="flex"
        maxW="container.md"
        alignItems="center"
        bg="blue.200"
      >
        <Stack direction={{ base: 'column', md: 'row' }}>
          <LinkItem href="/">Foo</LinkItem>
          <LinkItem href="/">Bar</LinkItem>
          <LinkItem href="/">GitHub</LinkItem>
        </Stack>
      </Container>

      <Menu>
        <MenuButton>
          <FcMenu />
        </MenuButton>
        <MenuList>
          <NextLink href="/" passHref>
            <MenuItem>Foo</MenuItem>
          </NextLink>
          <NextLink href="/" passHref>
            <MenuItem>Bar</MenuItem>
          </NextLink>
          <NextLink href="https://github.com/yudaiogawa" passHref>
            <MenuItem>GitHub</MenuItem>
          </NextLink>
        </MenuList>
      </Menu>
    </Box>
  )
}

export default Navbar
