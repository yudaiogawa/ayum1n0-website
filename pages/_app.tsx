import { ChakraProvider } from '@chakra-ui/react'

import Main from '../components/layouts/main'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  )
}

export default MyApp
