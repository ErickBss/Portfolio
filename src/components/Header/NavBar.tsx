import { Flex, Link } from '@chakra-ui/react'

interface NavBarProps {
  closeDrawer?: () => void
}

export function NavBar({ closeDrawer }: NavBarProps) {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      justify="space-between"
      gap={{ base: '2rem', md: 0 }}
      fontWeight={600}
      w={{ base: 'auto', md: '28rem' }}
      fontSize="1.125rem"
    >
      <Link
        onClick={() => (closeDrawer ? closeDrawer() : '')}
        color="purple.400"
      >
        Home
      </Link>
      <Link onClick={() => (closeDrawer ? closeDrawer() : '')}>About me</Link>
      <Link onClick={() => (closeDrawer ? closeDrawer() : '')}>Projects</Link>
      <Link onClick={() => (closeDrawer ? closeDrawer() : '')}>Contact</Link>
    </Flex>
  )
}
