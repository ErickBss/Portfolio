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
      w={{ base: '8rem', md: '10rem', lg: '13rem', xl: '15.875rem' }}
      h={{ base: '8rem', md: '10rem', lg: '13rem', xl: '15.875rem' }}
      p="1.25rem"
      bg={isActive ? 'purple.400' : 'gray.400'}
      flexDirection="column"
      gap="1rem"
      justifyContent="flex-end"
      textAlign="left"
    >
      <Icon
        as={icon}
        fontSize={{ base: '1.75rem', md: '2rem', lg: '2.5rem', xl: '3.25rem' }}
      />
      <Text
        fontSize={{ base: '0.75rem', md: '1rem', lg: '1.25rem', xl: '1.5rem' }}
        fontWeight="600"
        textTransform="uppercase"
      >
        {ability}
      </Text>
    </Box>
  )
}
