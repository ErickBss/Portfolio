import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { NavBar } from './NavBar'

import { RiMenuLine } from 'react-icons/ri'

export function Header() {
  const isDrawerNavBar = useBreakpointValue({
    base: true,
    md: false,
  })

  const { isOpen, onClose, onOpen } = useDisclosure()

  if (isDrawerNavBar) {
    return (
      <Flex
        margin="0 auto"
        justify="space-between"
        alignItems="center"
        h="5rem"
        w={{ xs: '26rem', sm: '26rem', md: '54rem', lg: '64rem', xl: '70rem' }}
      >
        <Text fontWeight={600} color="purple.400" fontSize="1.75rem">
          ErickBss
        </Text>

        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="2rem"
          variant="unstyled"
          onClick={onOpen}
          mt={2}
          mr={2}
        />

        <Drawer isOpen={isOpen} placement="right" onClose={() => onClose()}>
          <DrawerOverlay>
            <DrawerContent bg="gray.900" p="1rem">
              <DrawerCloseButton fontSize="1.25rem" mt="1.5rem" />

              <DrawerHeader fontSize="1.5rem">Navigation</DrawerHeader>

              <DrawerBody>
                <NavBar closeDrawer={onClose} />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    )
  }
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
