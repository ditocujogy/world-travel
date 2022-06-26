import { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

type Continent = {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export function MySwiper() {
  const [continents, setContinents] = useState<Continent[]>([]);

  useEffect(() => {
    async function getContinents() {
      const response = await fetch('http://localhost:3005/api/continents');
      const continents = await response.json();
      setContinents(continents.continents);
    };

    getContinents();
  }, []);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      style={{
        width: '77.5rem',
        height: '28.12rem',
        marginBottom: '2.5rem'
      }}
    >
      {
        continents.map(continent => (
          <SwiperSlide
            key={continent.id}
            style={{
              backgroundImage: `url(${continent.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Link href={`/${continent.slug}`} passHref>
              <a>
                <Text
                  as='h1'
                  fontSize='5xl'
                  fontWeight='bold'
                  color='gray.50'
                  textAlign='center'
                >
                  {continent.name}
                  <Text color='gray.300' fontSize='2xl' mt='1rem'>
                    {continent.description}
                  </Text>
                </Text>
              </a>
            </Link>
          </SwiperSlide>
        ))
      }
      ...
    </Swiper>
  )
}