import { Box, Icon, Heading, Text, Flex, VStack } from '@chakra-ui/react'

import { BsCodeSquare } from 'react-icons/bs'

export function DefinitionBox() {
  return (
    <Box
      display="flex"
      p="0 0.5rem"
      w="21.125rem"
      h="21.125rem"
      border="2px solid white"
      flexDirection="column"
      justifyContent="center"
      gap="1rem"
      alignItems="center"
      textAlign="center"
      borderRadius="1rem"
    >
      <VStack spacing="1rem">
        <Icon as={BsCodeSquare} fontSize="3.375rem" />
        <Heading fontSize="1.5rem" textTransform="uppercase" fontWeight="600">
          Web Development
        </Heading>
      </VStack>
      <Text fontSize="1rem" lineHeight="2rem">
        I create beautiful iterfaces with simple HTML, CSS e JavaScript and also
        frameworks like Angular and ReactJS
      </Text>
    </Box>
  )
}
