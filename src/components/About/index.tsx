import { Flex, Text, Heading, HStack, SimpleGrid, Box } from '@chakra-ui/react'
import { AbilitiesCards } from './cards'

import { BsCodeSquare } from 'react-icons/bs'
import { AiFillExperiment } from 'react-icons/ai'

export function About() {
  return (
    <Flex mt="8rem" width="100vw" minH="100vh" bg="purple.900">
      <Flex
        w="70rem"
        p="2rem 0"
        margin="0 auto"
        direction="column"
        align="flex-start"
        justify="space-evenly"
      >
        <Heading color="purple.400" fontWeight="600" fontSize="2rem">
          About me:
        </Heading>
        <Text fontSize="1.125rem">
          Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer,
          UI designer, and Mobile developer. I jhave honed my skills in Web
          Development and advance i have core understanding of advance UI design
          principles. Here are the major skiills i have.
        </Text>
        <HStack spacing="2rem">
          <Text fontSize="6rem" fontWeight="600" color="purple.400">
            4
          </Text>
          <Text fontWeight="500" fontSize="1.5rem">
            Years of experience. Specialised in building apps, while ensuring a
            seamless web experience for end users.
          </Text>
        </HStack>

        <Flex
          width={['60rem', '60rem', '60rem', '70rem']}
          alignItems="flex-start"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <AbilitiesCards
            ability="Web Development"
            icon={BsCodeSquare}
            isActive
          />

          <AbilitiesCards ability="Web Development" icon={BsCodeSquare} />

          <AbilitiesCards ability="Web Development" icon={BsCodeSquare} />

          <AbilitiesCards ability="Web Development" icon={BsCodeSquare} />
        </Flex>
      </Flex>
    </Flex>
  )
}
