import { Flex, Image, Text } from "@chakra-ui/react";

interface CardProps {
  image: string;
  name: string;
  country: string;
  flag: string;
}

export function Card({ image, name, country, flag }: CardProps) {
  return (
    <Flex
      flexDir='column'
      w={{ base: '36.5rem', lg: '16rem' }}
      h={{ base: '40rem', lg: '17.5rem' }}
      mb='2.25rem'
    >
      <Image
        src={image}
        h={{ base: '25rem', lg: '11rem' }}
        borderTopRadius='base'
      />
      <Flex
        align='center'
        justify='space-between'
        w='100%'
        px='1.5rem'
        pt={{ base: '2.7rem', lg: '1.12rem' }}
        pb={{ base: '3rem', lg: '1.5rem' }}
        borderBottomRadius='base'
        border='1px'
        borderColor='rgba(255, 186, 8, 0.5)'
        borderTop='none'
        h='100%'
      >
        <Flex flexDir='column' justify='space-between' h='100%'>
          <Text as='h4' fontWeight='semibold' fontSize={{ base: '5xl', lg: 'xl' }}>{name}</Text>
          <Text color='gray.400' fontWeight='medium' fontSize='medium' >
            {country}
          </Text>
        </Flex>
        <Image
          src={flag}
          objectFit='cover'
          borderRadius='full'
          w={{ base: '4.2rem', lg: '1.875rem' }}
          h={{ base: '4.2rem', lg: '1.875rem' }}
        />
      </Flex>
    </Flex>
  )
}