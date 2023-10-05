import { Button } from '@chakra-ui/react'

export default function BotaoInserir() {
  return (
      <Button
        marginLeft={2}
        marginRight={2}
        px={8}
        bg={"blue"}
        color={'white'}
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
        >
        Inserir
      </Button>
  )
}
