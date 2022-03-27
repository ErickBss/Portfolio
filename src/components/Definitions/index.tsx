import { Flex, Heading, Stack } from '@chakra-ui/react'

import { DefinitionBox } from './DefinitionBox'

import { BsServer } from 'react-icons/bs'
import { RiPagesFill } from 'react-icons/ri'
import { FaServer, FaCode } from 'react-icons/fa'

import { useIsActive } from '../hook/useIsActive'

export function Definitions() {
  const { currentItem } = useIsActive()
  const currentAbility = currentItem

  return (
    <Stack direction="column" spacing="2rem">
      <Heading color="purple.400" fontWeight="600">
        Definitions:
      </Heading>

      <Flex
        justify={{ base: 'center', xl: 'space-between' }}
        gap="2rem"
        flexWrap="wrap"
      >
        <DefinitionBox
          icon={FaCode}
          ability="Full Stack"
          category="Web Development"
          currentAbility={currentAbility}
          description="All the necessary abilities to make a complete web site, with, front - end, back - end and the database resources"
        />

        <DefinitionBox
          icon={RiPagesFill}
          ability="Interfaces"
          category="Front - End Service"
          currentAbility={currentAbility}
          description="The interface is the visual communication with the user, so, for the development I use the library ReactJS with the framework NextJS"
        />
        <DefinitionBox
          icon={FaServer}
          ability="Server Side"
          category="Back - End Service"
          currentAbility={currentAbility}
          description="The logical app part is on the server, where is made all the sensitive features and treatment of private data. I use NodeJs with Express for it"
        />
        <DefinitionBox
          icon={FaServer}
          ability="RestAPI"
          category="Back - End Service"
          currentAbility={currentAbility}
          description="Api is the way for get some data a internal or external server. RestAPI is a group of obligations which I use to consume that data"
        />

        <DefinitionBox
          icon={BsServer}
          ability="Storage"
          category="Database Handle"
          currentAbility={currentAbility}
          description="Store the data has many purpose, like, a login system or just for register. For all the possible storage features I use mysql and postgres databases"
        />

        <DefinitionBox
          icon={BsServer}
          ability="Handling Data"
          category="Database Handle"
          currentAbility={currentAbility}
          description="Many apps has the need to handle data user, like, update and delete. Prisma is the ORM tool which I use for this purpose"
        />
      </Flex>
    </Stack>
  )
}
