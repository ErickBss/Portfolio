import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Project } from './Project'

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

        <Flex w="70rem" justifyContent="space-between">
          <Project
            image="/spacetraveling.svg"
            title="Spacetraveling"
            description="Blog to expose articles about the TI world."
            published_link="http://space-traveling-nine.vercel.app/"
            repo_link="https://github.com/ErickBss/space-traveling"
          />

          <Project
            image="/covid.png"
            title="Covid Daily Cases"
            description="Project about worldwide statistics of Covid-19 and variants cases, filtered by daily and total cases."
            warning="For a correct use, read the instructions on the Github repository"
            published_link="http://challenge-covid-daily-cases.vercel.app/"
            repo_link="https://github.com/ErickBss/Challenge-Covid-Daily-Cases"
          />

          <Project
            image="/prisma.png"
            title="Refresh token JWT"
            description="Project to practice authentication with JWT and revalidation with refresh tokens."
            warning="For a correct use, read the instructions on the Github repository"
            repo_link="https://github.com/ErickBss/Challenge-Covid-Daily-Cases"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
