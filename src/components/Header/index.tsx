import { Flex, Text } from '@chakra-ui/react'
import { NavBar } from './NavBar'

export function Header() {
  return (
    <Flex
      margin="0 auto"
      justify="space-between"
      alignItems="center"
      h="5rem"
      w={{ base: '30rem', md: '54rem', lg: '64rem', xl: '70rem' }}
    >
      <Text fontWeight={600} color="purple.400" fontSize="1.75rem">
        ErickBss
      </Text>
      <NavBar />
    </Flex>
  )
}
