import { Flex, Text, Heading, Stack } from '@chakra-ui/react'
import { AbilitiesCards } from './cards'

import { BsCodeSquare } from 'react-icons/bs'

export function About() {
  return (
    <Flex mt="8rem" width="100vw" minH="100vh" bg="purple.900">
      <Flex
        w={{ base: '40rem', md: '54rem', lg: '64rem', xl: '70rem' }}
        h="auto"
        p="2rem 0"
        margin="0 auto"
        direction="column"
        align={{ base: 'center', md: 'flex-start' }}
        textAlign={{ base: 'center', md: 'left' }}
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
        <Stack
          align="center"
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: '0.5rem', md: '2rem' }}
        >
          <Text fontSize="6rem" fontWeight="600" color="purple.400">
            4
          </Text>
          <Text fontWeight="500" fontSize="1.5rem">
            Years of experience. Specialised in building apps, while ensuring a
            seamless web experience for end users.
          </Text>
        </Stack>

        <Flex
          w={{ base: '40rem', md: '54rem', lg: '64rem', xl: '70rem' }}
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
