import { Box, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface AbilitiesCardsProps {
  ability: string
  icon: IconType
  isActive?: boolean
}

export function AbilitiesCards({
  ability,

  icon,
  isActive = false,
}: AbilitiesCardsProps) {
  return (
    <Box
      display="flex"
      w="256px"
      h="254px"
      p="20px"
      bg={isActive ? 'purple.400' : 'gray.400'}
      flexDirection="column"
      gap="1rem"
      justifyContent="flex-end"
    >
      <Icon as={icon} fontSize="3.25rem" />
      <Text fontSize="1.5rem" fontWeight="600" textTransform="uppercase">
        {ability}
      </Text>
    </Box>
  )
}
