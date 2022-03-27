import { Flex, Icon, IconButton } from '@chakra-ui/react'

import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { Element } from 'react-scroll'

export function Contact() {
  return (
    <Flex
      justify={{ base: 'center', md: 'flex-start' }}
      margin="0 auto"
      p="1rem 0"
      gap="2rem"
      fontSize="2rem"
      w={{ base: '30rem', md: '54rem', lg: '64rem', xl: '70rem' }}
    >
      <Element name="contact" />

      <IconButton
        as="a"
        href="https://github.com/ErickBss"
        variant="unstyled"
        fontSize="1.5rem"
        aria-label="Open navigation"
        icon={<Icon as={BsGithub} />}
      />

      <IconButton
        as="a"
        href="https://www.linkedin.com/in/erickbasso-fullstack?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BCN1HAogKTfua8qHTcMLj1A%3D%3D"
        variant="unstyled"
        fontSize="1.5rem"
        aria-label="Open navigation"
        icon={<Icon as={BsLinkedin} />}
      />

      <IconButton
        as="a"
        href="mailto:erickbasso22@gmail.com"
        variant="unstyled"
        fontSize="1.5rem"
        aria-label="Open navigation"
        icon={<Icon as={SiGmail} />}
      />

      <IconButton
        as="a"
        href="https://wa.me/55011993695670"
        variant="unstyled"
        fontSize="1.5rem"
        aria-label="Open navigation"
        icon={<Icon as={BsWhatsapp} />}
      />
    </Flex>
  )
}
