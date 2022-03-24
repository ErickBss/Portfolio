import { Flex, Heading, Stack } from '@chakra-ui/react'

import { DefinitionBox } from './DefinitionBox'

import { BsCodeSquare } from 'react-icons/bs'

interface DefinitionBoxProps {
  currentAbility: string
}

export function Definitions({ currentAbility }: DefinitionBoxProps) {
  return (
    <Stack direction="column" spacing="2rem" w="70rem">
      <Heading color="purple.400" fontWeight="600">
        Definitions:
      </Heading>

      <Flex justify="space-between" gap="2rem" flexWrap="wrap">
        <DefinitionBox
          icon={BsCodeSquare}
          ability="Web"
          currentAbility={currentAbility}
          description="I create beautiful iterfaces with simple HTML, CSS e JavaScript and also
          frameworks like Angular and ReactJS"
        />
        <DefinitionBox
          icon={BsCodeSquare}
          ability="Web"
          currentAbility={currentAbility}
          description="I create beautiful iterfaces with simple HTML, CSS e JavaScript and also
          frameworks like Angular and ReactJS"
        />
        <DefinitionBox
          icon={BsCodeSquare}
          ability="Web"
          currentAbility={currentAbility}
          description="I create beautiful iterfaces with simple HTML, CSS e JavaScript and also
        frameworks like Angular and ReactJS"
        />
        <DefinitionBox
          icon={BsCodeSquare}
          ability="Web Development"
          currentAbility={currentAbility}
          description="I create beautiful iterfaces with simple HTML, CSS e JavaScript and also
      frameworks like Angular and ReactJS"
        />
        <DefinitionBox
          icon={BsCodeSquare}
          ability="Web"
          currentAbility={currentAbility}
          description="I create beautiful iterfaces with simple HTML, CSS e JavaScript and also
    frameworks like Angular and ReactJS"
        />
        <DefinitionBox
          icon={BsCodeSquare}
          ability="Web"
          currentAbility={currentAbility}
          description="I create beautiful iterfaces with simple HTML, CSS e JavaScript and also
          frameworks like Angular and ReactJS"
        />
      </Flex>
    </Stack>
  )
}
