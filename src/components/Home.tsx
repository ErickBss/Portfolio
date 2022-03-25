import { Flex, Text, HStack, Button, Icon, Image, Box } from '@chakra-ui/react'

import { IoMdPerson } from 'react-icons/io'
import { AiFillEye } from 'react-icons/ai'

export function Home() {
  return (
    <Flex
      w="100vw"
      alignItems="center"
      h="max(600px ,calc(100vh - 5rem))"
      bg="purple.900"
    >
      <Flex
        gap="2.5rem"
        direction={{ base: 'column-reverse', md: 'row' }}
        margin="0 auto"
        w={{ base: '30rem', md: '54rem', lg: '64rem', xl: '70rem' }}
      >
        <Flex
          flex="1"
          gap="1.5rem"
          flexDirection="column"
          align={{ base: 'center', md: 'flex-start' }}
          justify="center"
          fontWeight="600"
          lineHeight="1"
        >
          <Text fontSize="2rem">Hello, I am</Text>
          <Text fontSize={{ base: '2.75rem', lg: '3rem', xl: '3.25rem' }}>
            Erick Souza Basso
          </Text>
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            fontSize="1.125rem"
            lineHeight="normal"
          >
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
          <Box
            borderRadius="full"
            padding={{
              base: '2rem',
              md: '2.5rem',
              lg: '3rem',
            }}
            bg="purple.400"
          >
            <Image
              src="/logo.png"
              w={{
                base: '12rem',
                md: '15.6rem',
              }}
              alt="Creator photo"
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
