import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

import { Header } from "../components/Header";
import { Card } from "../components/Card";

type City = {
  image: string;
  name: string;
  country: string;
  flag: string;
};

type Continent = {
  image: string,
  name: string;
  slug: string;
  banner: string;
  extendedDescription: string;
  countries: number;
  languages: number;
  plusHundredCities: number;
  cities: City[];
};

export default function Continent() {
  const router = useRouter();
  const [continent, setContinent] = useState<Continent | null>(null);

  useEffect(() => {
    async function loadContinent() {
      const { slug } = router.query;
      const buffer = await fetch(`http://localhost:3000/api/${slug}`);
      const response = await buffer.json();

      if (response === null) {
        return;
      }
      console.log(response.continent);
      setContinent(response.continent);
    };

    loadContinent();
  }, []);

  if (!continent) {
    return (
      <Flex align='center' justify='center'>
        <h1>Carregando...</h1>
        <Link href='/' passHref>
          <a>voltar</a>
        </Link>
      </Flex>
    )
  }

  return (
    <>
      <Header back={true} />
      <Flex
        align={{ base: 'center', lg: 'flex-end' }}
        justify={{ base: 'center', lg: '' }}
        px='8.75rem'
        py='3.7rem'
        h={{ base: '21rem', lg: '31.25rem' }}
        bgImage={`url(${continent.banner})`}
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize='cover'
      >
        <Text
          as='h1'
          fontSize={{ base: '6xl', lg: '5xl' }}
          color='gray.50'
          fontWeight='semibold'
        >
          {continent.name}
        </Text>
      </Flex>

      <Flex flexDir='column' w='100%' px={{ base: '2rem', lg: '8.75rem' }}>
        <Flex flexDir={{ base: 'column', lg: 'row' }} align='center' justify='space-between' my={{ base: '3rem', lg: '5rem' }} w='100%'>
          <Text w={{ base: '100%', lg: '37.5rem' }} fontSize='2xl' fontWeight='normal' textAlign='justify'>
            {continent.extendedDescription}
          </Text>
          <Flex w={{ sm: '100%', lg: '30rem' }} justify='space-between' ml={{ base: 0, lg: '4.5rem' }} mt={{ base: '2rem', lg: 0 }}>
            <Flex flexDir='column' align='center'>
              <Text fontWeight='semibold' fontSize='5xl' color='orange.100'>{continent.countries}</Text>
              <Text as='span' fontSize='2xl' color='gray.600' fontWeight='semibold'>países</Text>
            </Flex>
            <Flex flexDir='column' align='center'>
              <Text fontWeight='semibold' fontSize='5xl' color='orange.100'>{continent.languages}</Text>
              <Text as='span' fontSize='2xl' color='gray.600' fontWeight='semibold'>línguas</Text>
            </Flex>
            <Flex flexDir='column' align='center'>
              <Text fontWeight='semibold' fontSize='5xl' color='orange.100'>{continent.plusHundredCities}</Text>
              <Text as='span' fontSize='2xl' color='gray.600' fontWeight='semibold'>cidades +100</Text>
            </Flex>
          </Flex>
        </Flex>

        <Text as='h1' fontSize='4xl' fontWeight='medium' mb='2.5rem'>
          Cidades +100
        </Text>
        <Flex flexDir={{ base: 'column', lg: 'row' }} justify='space-between' align={{ base: 'center', lg: '' }} wrap='wrap'>
          {
            continent.cities.map(city => (
              <Card
                key={city.name}
                name={city.name}
                country={city.country}
                flag={city.flag}
                image={city.image}
              />
            ))
          }
          <Flex w='16rem' h='0' />
          <Flex w='16rem' h='0' />
          <Flex w='16rem' h='0' />
        </Flex>
      </Flex>
    </>
  )
}