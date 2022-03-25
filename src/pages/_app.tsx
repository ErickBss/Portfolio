import { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import '../styles/globalParameterSize.css'
import { UseIsActiveProvider } from '../components/hook/useIsActive'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <UseIsActiveProvider>
        <Component {...pageProps} />
      </UseIsActiveProvider>
    </ChakraProvider>
  )
}

export default MyApp
