import { Flex, Link } from '@chakra-ui/react'

export function NavBar() {
  return (
    <Flex
      justify="space-between"
      fontWeight={600}
      w="28rem"
      fontSize="1.125rem"
    >
      <Link color="purple.400">Home</Link>
      <Link>About me</Link>
      <Link>Projects</Link>
      <Link>Contact</Link>
    </Flex>
  )
}
