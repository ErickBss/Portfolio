import { Flex, Heading, Stack } from '@chakra-ui/react'

import { DefinitionBox } from './DefinitionBox'

export function Definitions() {
  return (
    <Stack direction="column" spacing="2rem" w="70rem">
      <Heading color="purple.400" fontWeight="600">
        Definitions:
      </Heading>

      <Flex justify="space-between" gap="2rem" flexWrap="wrap">
        <DefinitionBox />
        <DefinitionBox />
        <DefinitionBox />
        <DefinitionBox />
        <DefinitionBox />
        <DefinitionBox />
      </Flex>
    </Stack>
  )
}
