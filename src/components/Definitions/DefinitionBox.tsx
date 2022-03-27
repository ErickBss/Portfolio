import { Box, Icon, Heading, Text, Flex, VStack } from '@chakra-ui/react'

import { IconType } from 'react-icons/lib'

interface DefinitionBoxProps {
  icon: IconType
  category: string
  ability: string
  description: string
  currentAbility: string
}

export function DefinitionBox({
  icon,
  category,
  ability,
  description,
  currentAbility,
}: DefinitionBoxProps) {
  let isActive = false

  if (currentAbility === category) {
    isActive = true
  }

  return (
    <Box
      display="flex"
      p="0 0.5rem"
      w="21.125rem"
      h="21.125rem"
      border="2px solid"
      borderColor={isActive ? 'purple.400' : 'gray.400'}
      flexDirection="column"
      justifyContent="center"
      gap="1rem"
      alignItems="center"
      textAlign="center"
      borderRadius="1rem"
      transition="0.2s"
    >
      <VStack spacing="1rem">
        <Icon
          as={icon}
          color={isActive ? 'white' : 'gray.400'}
          fontSize="3.375rem"
        />
        <Heading
          color={isActive ? 'white' : 'gray.400'}
          fontSize="1.5rem"
          textTransform="uppercase"
          fontWeight="600"
        >
          {ability}
        </Heading>
      </VStack>
      <Text
        color={isActive ? 'white' : 'gray.400'}
        fontSize="1rem"
        lineHeight="2rem"
      >
        {description}
      </Text>
    </Box>
  )
}
