import { Flex, Text, HStack, Button, Icon, Image, Box } from '@chakra-ui/react'

import { IoMdPerson } from 'react-icons/io'
import { AiFillEye } from 'react-icons/ai'

export function Home() {
  return (
    <Flex
      w="70rem"
      margin="0 auto"
      justify="space-between"
      alignItems="center"
      h="calc(100vh - 5rem)"
    >
      <Flex
        flex="1"
        gap="1rem"
        flexDirection="column"
        justify="flex-start"
        fontWeight="600"
      >
        <Text fontSize="2rem">Hello, I am</Text>
        <Text fontSize="3.25rem">Erick Souza Basso</Text>
        <Text fontSize="1.125rem" fontWeight="400">
          Freelance UI designer, Fullstack developer, Data Miner. I create
          seamless web experiences for end-users.
        </Text>
        <HStack spacing="1rem">
          <Button colorScheme="purple">
            About me <Icon as={IoMdPerson} ml="5px" fontSize="1.5rem" />
          </Button>

          <Button variant="outline" colorScheme="purple">
            Projects
            <Icon as={AiFillEye} ml="5px" fontSize="1.5rem" />
          </Button>
        </HStack>
      </Flex>
      <Flex flex="1" justify=" center">
        <Box borderRadius="full" padding="3rem" bg="purple.400">
          <Image src="/logo.png" alt="Creator photo" />
        </Box>
      </Flex>
    </Flex>
  )
}
