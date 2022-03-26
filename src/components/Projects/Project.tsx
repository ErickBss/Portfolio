import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'

interface ProjectProps {
  image: string
  title: string
  description: string
  warning?: string
  published_link?: string
  repo_link: string
}

export function Project({
  image,
  title,
  description,
  warning,
  published_link,
  repo_link,
}: ProjectProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-between"
      p="1rem"
      w="21.438rem"
      h="26rem"
      bg="gray.600"
      borderRadius="0.5rem"
    >
      <Box w="100%" h="10.8rem">
        <Image
          src={image}
          alignSelf="center"
          objectFit="contain"
          alt="logo from space traveling project"
        />
      </Box>
      <Heading color="purple.400" fontSize="1.5rem">
        {title}
      </Heading>

      <Text fontSize="1.125rem">{description}</Text>

      <Flex w="100%" justify="space-between">
        <Button
          as="a"
          display={published_link ? 'flex' : 'none'}
          href={published_link}
          fontWeight="600"
          fontSize="1rem"
          textAlign="center"
          w="9rem"
          h="2.7rem"
          colorScheme="purple"
          borderRadius="0.5rem"
        >
          View Live
        </Button>

        <Button
          as="a"
          href={repo_link}
          fontWeight="600"
          fontSize="1rem"
          textAlign="center"
          w="9rem"
          h="2.7rem"
          variant="outline"
          colorScheme="purple"
          border="2px solid"
          borderRadius="0.5rem"
        >
          GitHub Repo
        </Button>
      </Flex>
    </Box>
  )
}
