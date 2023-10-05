import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { BsPerson } from 'react-icons/bs'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'

export default function Contatos() {
  const { hasCopied, onCopy } = useClipboard('bruzon.barbara404@outlook.com.com')

  return (
    <Flex
      align="center"
      justify="center"
      id="contact">
      <Box borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }} p={{ base: 5, lg: 16 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 5 }}>
            <Heading
              fontSize={{
                base: '3xl',
                md: '5xl',
              }}>
              Entre em contato
              <Tooltip
                  label={hasCopied ? 'Email copiado!' : 'Copiar email'}
                  closeOnClick={false}
                  hasArrow>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="4xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>
            </Heading>
            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}>
              <Box
                bg={useColorModeValue('blue.50', 'blue.40')}
                borderRadius="lg"
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base">
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Nome</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson />
                      </InputLeftElement>
                      <Input type="text" name="name" placeholder="Seu nome" />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input type="email" name="email" placeholder="Seu Email" />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Mensagem</FormLabel>
                    <Textarea
                      name="message"
                      placeholder="Sua mensagem"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>
                  <Button
                    colorScheme="blue"
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: 'blue.500',
                    }}
                    width="full">
                    Enviar
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  )
}
