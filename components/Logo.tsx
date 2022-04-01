import Link from 'next/link'
import { Text } from '@chakra-ui/react'

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Text fontWeight="bold" ml={4}>
          AYMN
        </Text>
      </a>
    </Link>
  )
}

export default Logo
