import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function SobreMim() {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              'https://media.licdn.com/dms/image/D4D03AQFB40w-jGfnPw/profile-displayphoto-shrink_800_800/0/1688489587717?e=2147483647&v=beta&t=9xMeiXgylhTKM4EpsGCp995YY4R7THpuBf32JFe4PFw'
            }
            alt="Foto de perfil de Barbara Bruzon"
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Barbara Bruzon
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            @barbara-bruzon
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Estagiária em DevOps, iniciante nesse mundo de programação e Linux. Terrível em web.
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #python
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #linux
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #bash
            </Badge>
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}>
            
            <Link to='https://github.com/barbara-bruzon'>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}>
                GitHub
              </Button>
            </Link>
            <Link to='https://br.linkedin.com/in/barbara-bruzon-60b36b23b'>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                LinkedIn
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  )
}
