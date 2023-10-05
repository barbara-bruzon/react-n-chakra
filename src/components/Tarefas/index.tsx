import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import BotaoVermelho from '../BotaoVermelho'
import BotaoInserir from '../BotaoInserir'
import Checkbox from '../Checkbox'

interface CardProps {
  description: string
}

const Card = ({ description }: CardProps) => {
  return (
    <Flex align={'start'} 
    alignItems={'center'}
    borderRadius="lg"  
    backgroundColor={'gray.200'}
    padding={2}>
      <Box 
      width={500}
      fontSize={17}
      textAlign={'left'}
      borderWidth={5}>
      {description}        
      </Box>
      <BotaoVermelho />
    </Flex>
  )
}

export default function Tarefas() {
  return (
    <Flex
      align="center"
      justify="center"
      id="tasks">
      <Box>
        <VStack spacing={{ base: 4, md: 8, lg: 5 }}>
          <Heading
            fontSize={{
              base: '3xl',
              md: '5xl',
            }}>
            Lista de tarefas
          </Heading>

          <Stack
            spacing={{ base: 4, md: 8, lg: 20 }}
            direction={{ base: 'column', md: 'row' }}>
            <Box
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="lg"
              p={8}
              color={useColorModeValue('gray.700', 'whiteAlpha.900')}
              shadow="base">
              <VStack spacing={5}>
                <FormControl>
                  <FormLabel>Inserir nova tarefa</FormLabel>
                  <InputGroup>
                    <Input type="text" name="name" placeholder="Digite o título da task" />
                    <Checkbox />
                    <BotaoInserir />
                  </InputGroup>
                </FormControl>
                
                <Card
                  description={'Tarefa 1'}
                />
                 <Card
                  description={'Tarefa 2'}
                />
                 <Card
                  description={'Tarefa 3'}
                />
                 <Card
                  description={'Tarefa 4'}
                />
               </VStack>
             </Box>
           </Stack>
         </VStack>
       </Box>
    </Flex>
  )
}
