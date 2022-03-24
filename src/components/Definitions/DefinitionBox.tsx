import { Box, Icon, Heading, Text, Flex, VStack } from '@chakra-ui/react'

import { IconType } from 'react-icons/lib'

interface DefinitionBoxProps {
  icon: IconType
  ability: string
  description: string
  currentAbility: string
}

export function DefinitionBox({
  icon,
  ability,
  description,
  currentAbility,
}: DefinitionBoxProps) {
  let isActive = false

  console.log(currentAbility, '||', ability)

  if (currentAbility === ability) {
    isActive = true
  }

  return (
    <Box
      display="flex"
      p="0 0.5rem"
      w="21.125rem"
      h="21.125rem"
      border="2px solid"
      borderColor={isActive ? 'purple.400' : 'white'}
      flexDirection="column"
      justifyContent="center"
      gap="1rem"
      alignItems="center"
      textAlign="center"
      borderRadius="1rem"
    >
      <VStack spacing="1rem">
        <Icon as={icon} fontSize="3.375rem" />
        <Heading fontSize="1.5rem" textTransform="uppercase" fontWeight="600">
          {ability}
        </Heading>
      </VStack>
      <Text fontSize="1rem" lineHeight="2rem">
        {description}
      </Text>
    </Box>
  )
}
