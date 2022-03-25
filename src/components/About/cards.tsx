import { Box, Icon, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import { useIsActive } from '../hook/useIsActive'

interface AbilitiesCardsProps {
  ability: string
  icon: IconType
}

export function AbilitiesCards({ ability, icon }: AbilitiesCardsProps) {
  const { currentItem, setCurrentItem } = useIsActive()
  const currentAbility = currentItem

  let isActive = false

  if (currentAbility === ability) {
    isActive = true
  }
  return (
    <Box
      as="button"
      onClick={() => {
        setCurrentItem(ability)
      }}
      display="flex"
      w={{ base: '10rem', lg: '13rem', xl: '15.875rem' }}
      h={{ base: '10rem', lg: '13rem', xl: '15.875rem' }}
      p="1.25rem"
      bg={isActive ? 'purple.400' : 'gray.400'}
      flexDirection="column"
      gap="1rem"
      justifyContent="flex-end"
      textAlign="left"
      transition="0.2s"
      _hover={{ bg: 'purple.400' }}
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
