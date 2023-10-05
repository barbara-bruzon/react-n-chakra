import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin} from 'react-icons/fa'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { GiSwordwoman } from 'react-icons/gi'

const SocialButton = ({
  children,
  label,
}: {
  children: ReactNode
  label: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Rodape() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        
        <GiSwordwoman size={40}/>
        <Text>© 2022 Chakra Templates. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <Link to='https://github.com/barbara-bruzon'>
            <SocialButton label={'GitHub'}>
              <FaGithub />
            </SocialButton>
          </Link>
          <Link to='https://br.linkedin.com/in/barbara-bruzon-60b36b23b'>
            <SocialButton label={'LinkedIn'}>
              <FaLinkedin />
            </SocialButton>
          </Link>
        </Stack>
      </Container>
    </Box>
  )
}