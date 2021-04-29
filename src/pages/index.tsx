import { Divider, Flex, Text } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { HomeIcon } from "../components/HomeIcon";
import { MySwiper } from "../components/MySwiper";

export default function Home() {
  return (
    <>
      <Header back={false} />
      <Banner />
      <Flex flexDir='column' align='center' w='100%'>

        <Flex
          as='section'
          justify={{ base: 'space-around', lg: 'space-between' }}
          w={{ base: '25rem', lg: '72.5rem' }}
          mt='7.12rem'
          wrap='wrap'
        >
          <HomeIcon icon='cocktail' text='vida noturna' />
          <HomeIcon icon='surf' text='praia' />
          <HomeIcon icon='building' text='moderno' mr='2.5rem' />
          <HomeIcon icon='museum' text='clássico' />
          <HomeIcon icon='earth' text='e mais...' />
        </Flex>

        <Divider borderColor='gray.600' borderWidth='2px' w='5.6rem' mt='5rem' />

        <Text
          as='h1'
          fontWeight='medium'
          my='3.25rem'
          fontSize='4xl'
          textAlign='center'
        >
          Vamos nessa?
          <Text>Então escolha seu continente</Text>
        </Text>

        <MySwiper />
      </Flex>
    </>
  )
}
