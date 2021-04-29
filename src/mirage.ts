import { createServer, Model } from "miragejs"

const mockModels = {
  continent: Model.extend({
    id: 0,
    name: '',
    description: '',
    image: '',
    slug: '',
  }),
};

const mockFactories = {
};

export function makeServer({ environment = "test" } = {}) {
  const server = createServer<typeof mockModels, typeof mockFactories>({
    environment,

    models: mockModels,

    seeds(server) {
      server.db.loadData({
        continents: [
          {
            id: 1, image: '/Europe.png', name: 'Europa', description: 'O continente mais antigo.', slug: 'europa',
            banner: '/clock.png', extendedDescription: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
            countries: 50, languages: 72, plusHundredCities: 5, cities: [
              {
                name: 'Londres',
                image: 'https://images.unsplash.com/photo-1529180184525-78f99adb8e98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                country: 'Reino Unido',
                flag: 'https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png'
              },
              {
                name: 'Paris',
                image: '/paris.jpg',
                country: 'França',
                flag: 'https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png'
              },
              {
                name: 'Roma',
                image: '/roma.jpg',
                country: 'Itália',
                flag: 'https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png'
              },
              {
                name: 'Praga',
                image: 'https://images.pexels.com/photos/4448369/pexels-photo-4448369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                country: 'República Tcheca',
                flag: 'https://www.countryflags.com/wp-content/uploads/czech-republic-flag-png-large.png'
              },
              {
                name: 'Barcelona',
                image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                country: 'Espanha',
                flag: 'https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png'
              },
            ],
          },
          {
            id: 2, image: '/North-America.jpg', name: 'América do Norte', description: 'A terra da liberdade.', slug: 'america-do-norte',
            banner: 'https://images.pexels.com/photos/417054/pexels-photo-417054.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', extendedDescription: 'A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia). Pela última definição, a América do Norte incluiria a América Central Continental e Insular (Caribe)',
            countries: 4, languages: 42, plusHundredCities: 4, cities: [
              {
                name: 'Nova York',
                image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                country: 'Estados Unidos',
                flag: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png'
              },
              {
                name: 'Miami',
                image: 'https://images.pexels.com/photos/421655/pexels-photo-421655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                country: 'Estados Unidos',
                flag: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png'
              },
              {
                name: 'Los Angeles',
                image: 'https://images.pexels.com/photos/1688186/pexels-photo-1688186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                country: 'Estados Unidos',
                flag: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png'
              },
              {
                name: 'Toronto',
                image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                country: 'Canadá',
                flag: 'https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png'
              },
            ],
          },
          {
            id: 3, image: '/South-America.jpg', name: 'América do Sul', description: 'O lugar onde a biodiversidade reina.', slug: 'america-do-sul',
            banner: 'https://images.pexels.com/photos/2017747/pexels-photo-2017747.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', extendedDescription: 'A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de Drake. Tem uma extensão de 7 500 km desde o mar do Caribe até ao cabo Horn, ponto extremo sul do continente. Os outros pontos extremos da América do Sul são: ao norte a Punta Gallinas, na Colômbia, ao leste a Ponta do Seixas, no Brasil, e a oeste a Punta Pariñas, no Peru. Seus limites naturais são: ao norte com o mar do Caribe; a leste, nordeste e sudeste com o oceano Atlântico; e a oeste com o oceano Pacífico. O Brasil representa atualmente a metade da população e produto econômico desta região.',
            countries: 13, languages: 37, plusHundredCities: 1, cities: [
              {
                name: 'Buenos Aires',
                image: 'https://images.pexels.com/photos/2438323/pexels-photo-2438323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                country: 'Argentina',
                flag: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-7-2048x1283.jpg'
              }
            ],
          },
          {
            id: 4, image: '/Asia.jpg', name: 'Ásia', description: 'O continente com mais pessoas e experiências.', slug: 'asia',
            banner: 'https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', extendedDescription: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering. O ponto extremo setentrional do continente está localizado no oceano Glacial Ártico. Mas na parte meridional, a Ásia chega ao seu final na região mais quente dos trópicos, nas imediações da linha do equador.[1] Na Ásia são encontradas algumas das montanhas mais altas do mundo; os rios mais extensos; os maiores desertos, planícies e planaltos; as selvas e florestas mais densas. A altitude máxima e a mínima está localizada na Ásia. O monte Everest, a altitude máxima do planeta, está localizada a 8 848 m acima do nível do mar; ao longo da linha fronteiriça da República Democrática Federal do Nepal com a região autônoma chinesa do Tibete. O litoral do mar Morto, a planície de menor altitude do mundo, estão localizadas a 396 m abaixo do nível do mar, na região fronteiriça do Estado de Israel com o Reino Hashemita da Jordânia.',
            countries: 49, languages: 199, plusHundredCities: 6, cities: [
              {
                name: 'Hong Kong',
                image: 'https://images.pexels.com/photos/424172/pexels-photo-424172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                country: 'China',
                flag: 'https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png'
              },
              {
                name: 'Bangkok',
                image: 'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                country: 'Tailândia',
                flag: 'https://www.countryflags.com/wp-content/uploads/thailand-flag-png-large.png'
              },
              {
                name: 'Macau',
                image: 'https://images.pexels.com/photos/4223678/pexels-photo-4223678.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                country: 'China',
                flag: 'https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png'
              },
              {
                name: 'Dubai',
                image: 'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                country: 'Emirados Árabes Unidos',
                flag: 'https://www.countryflags.com/wp-content/uploads/united-arab-emirates-flag-png-large.png'
              },
              {
                name: 'Kuala Lumpur',
                image: 'https://images.pexels.com/photos/22804/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                country: 'Malásia',
                flag: 'https://www.countryflags.com/wp-content/uploads/malaysia-flag-png-large.png'
              },
              {
                name: 'Istambul',
                image: 'https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                country: 'Turquia',
                flag: 'https://www.countryflags.com/wp-content/uploads/turkey-flag-png-large.png'
              },
            ],
          },
          {
            id: 5, image: '/Oceania.jpg', name: 'Oceania', description: 'O mais novo mundo.', slug: 'oceania',
            banner: 'https://images.pexels.com/photos/3569263/pexels-photo-3569263.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', extendedDescription: "Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes.",
            countries: 14, languages: 38, plusHundredCities: 1, cities: [
              {
                name: 'Sidney',
                image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                country: 'Austrália',
                flag: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-2048x1024.jpg'
              }
            ],
          },
          {
            id: 6, image: '/Africa.jpg', name: 'África', description: 'O continente forte.', slug: 'africa',
            banner: 'https://images.pexels.com/photos/4577811/pexels-photo-4577811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', extendedDescription: "A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005), representando cerca de um sétimo da população mundial, e 54 países independentes. Tem se transformado na ultima década em uma continente cada vez mais católico.",
            countries: 54, languages: 197, plusHundredCities: 1, cities: [
              {
                name: 'Joanesburgo',
                image: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                country: 'África do Sul',
                flag: 'https://www.countryflags.com/wp-content/uploads/south-africa-flag-png-large.png'
              }
            ],
          },
        ],
      })
    },

    routes() {
      this.passthrough((request) => {
        if (request.url === "/_next/static/development/_devPagesManifest.json") return true;
      });

      this.namespace = 'api';

      this.get('/continents', (schema) => {
        return this.schema.all('continent');
      });

      this.get('/:continent', (schema, request) => {
        const slug = request.params.continent;
        return this.schema.findBy('continent', { slug })
      });
    },
  });

  return server;
}