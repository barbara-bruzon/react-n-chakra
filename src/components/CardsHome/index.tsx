import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcAbout,
  FcCallback,
  FcTodoList,
} from 'react-icons/fc'
import { Link } from 'react-router-dom'

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
}

const Card = ({ heading, description, icon }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.600', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default function CardsHome() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Bem-vindo(a)
        </Heading>
        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Projeto desenvolvido durante as aulas de programação web ministradas no quarto semestre de Análise e Desenvolvimento de Sistemas da Fatec Indaiatuba.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
        <Link to='/tarefas'>
          <Card
              heading={'Lista de tarefas'}
              icon={<Icon as={FcTodoList} w={10} h={10} />}
              description={'Atividades realizadas durante o desenvolvimento do projeto'}
          />
        </Link>
        <Link to='/contato'>
          <Card
            icon={<Icon as={FcCallback} w={10} h={10} />}
            heading={'Entre em contato'}
            description={'Não hesite em falar comigo se ficou interessado'}
          />
        </Link>
        
        <Link to='/sobre'>
        <Card
            heading={'Sobre'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={'Um breve resumo sobre a desenvolvedora'}
          />
        </Link>
          
        </Flex>
      </Container>
    </Box>
  )
}