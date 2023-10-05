import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import {GiHamburgerMenu, GiSwordwoman} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

const Links = [
    {href: '/', texto: 'Home'},
    {href: '/tarefas', texto: 'Tarefas'},
    {href: '/contato', texto: 'Contato'},
    {href: '/sobre', texto: 'Sobre'},
]

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Topo() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('teal.200', 'teal.400')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
                <GiSwordwoman size={40}/>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link to={link.href}> 
                    <NavLink key={link.texto}>{link.texto}</NavLink>
                </Link>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link to={link.href}> 
                    <NavLink key={link.texto}>{link.texto}</NavLink>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}