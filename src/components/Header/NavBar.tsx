import { Flex, Link, useBreakpointValue } from '@chakra-ui/react'

export function NavBar() {
  const isWideVersion = useBreakpointValue({
    base: true,
    md: false,
  })

  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      justify="space-between"
      gap={{ base: '2rem', md: 0 }}
      fontWeight={600}
      w={{ base: 'auto', md: '28rem' }}
      fontSize="1.125rem"
    >
      <Link color="purple.400">Home</Link>
      <Link>About me</Link>
      <Link>Projects</Link>
      <Link>Contact</Link>
    </Flex>
  )
}
