import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'

export default function Projects() {
  return (
    <Flex bg="purple.900" w="100vw" minH="100vh">
      <Flex
        direction="column"
        justify="space-evenly"
        m="0 auto"
        w="70rem"
        p="2rem  0"
      >
        <Heading color="purple.400" fontSize="2rem">
          Projects:
        </Heading>

        <Text fontSize="1.125rem">
          I have worked on many projects over the course of being a Web
          Developer, here are a few of my live, real-world projects
        </Text>

        <Flex>
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
            <Box w="100%" h="10.8rem" bg="purple.400">
              <Image
                src="/spacetraveling.svg"
                objectFit="cover"
                alt="logo from space traveling project"
              />
            </Box>
            <Heading color="purple.400" fontSize="1.5rem">
              Spacetraveling
            </Heading>

            <Text fontSize="1.125rem">
              A live Geolocation app for finding tweets and twitter users around
              you.
            </Text>

            <Flex w="100%" justify="space-between">
              <Button
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
        </Flex>
      </Flex>
    </Flex>
  )
}
