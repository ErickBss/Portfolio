import { Flex, Text, Heading, Stack } from '@chakra-ui/react'
import { AbilitiesCards } from './cards'

import { BsServer } from 'react-icons/bs'
import { RiPagesFill } from 'react-icons/ri'
import { FaServer, FaCode } from 'react-icons/fa'

import { Definitions } from '../Definitions'

export function About() {
  return (
    <Flex mt="8rem" width="100vw" minH="100vh" bg="purple.900">
      <Flex
        w={{ base: '30rem', md: '54rem', lg: '64rem', xl: '70rem' }}
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
        <Text textAlign="justify" fontSize="1.125rem">
          Hi, my name is Érick, I am a student and practically programming. I
          focus on the full-stack area and on React, NodeJs, NextJs and Postgres
          technologies. I want to improve myself more and more, so that through
          programming I can successfully solve recurring problems. I am very
          curious and always looking for challenges to test my knowledge. I
          really enjoy training (gym), watching NBA games and playing chess.
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
            Years of experience. Building web applications and interacting with
            databases.
          </Text>
        </Stack>

        <Flex
          // w={{ base: '30rem', md: '54rem', lg: '64rem', xl: '70rem' }}
          alignItems="flex-start"
          gap="2rem"
          justifyContent={{ base: 'center', md: 'space-between' }}
          flexWrap="wrap"
          m="2rem 0"
        >
          <AbilitiesCards
            key="Web Development"
            ability="Web Development"
            icon={FaCode}
          />
          <AbilitiesCards
            key="Front - End Service"
            ability="Front - End Service"
            icon={RiPagesFill}
          />

          <AbilitiesCards
            key="Back - End Service"
            ability="Back - End Service"
            icon={FaServer}
          />

          <AbilitiesCards
            key="Database Handle"
            ability="Database Handle"
            icon={BsServer}
          />
        </Flex>

        <Definitions />
      </Flex>
    </Flex>
  )
}
