import { Button, Flex } from '@chakra-ui/react'

export default function BotaoVermelho() {
  return (
    <Flex >
      <Button
        size={'sm'}
        marginLeft={2}
        marginRight={2}
        bg={"red"}
        color={'white'}
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
        >
        Pendente
      </Button>

      <Button
        marginLeft={2}
        marginRight={2}
        size={'sm'}
        bg={"red"}
        color={'white'}
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
        >
        Excluir
      </Button>
    </Flex>
  )
}
