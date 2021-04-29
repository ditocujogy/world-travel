import { Flex, Text, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      align='center'
      justify='space-between'
      px='8.75rem'
      h='21rem'
      bgImage='url("/Background.png")'
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      <Text
        as='h1'
        fontSize='4xl'
        w='26.6rem'
        color='gray.50'
        fontWeight='medium'
      >
        5 Continentes,
        <Text>infinitas possibilidades.</Text>
        <Text
          fontSize='xl'
          w='32.75rem'
          pt='1.25rem'
          color='gray.300'
          fontWeight='normal'
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Text>
      <Image src='/Airplane.svg' mb='-7rem' display={{ base: 'none', lg: 'block' }} />
    </Flex>
  )
}