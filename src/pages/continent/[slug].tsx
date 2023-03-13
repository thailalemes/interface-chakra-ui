import { Flex } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Cities } from '../../components/Cities';
import Content from '../../components/Content';
import { Header } from '../../components/Header';
import { getPrimiscClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import ContinentBanner from '../../components/Banner/ContinentBanner';
import { useRouter } from 'next/router';
import Loading from '../../components/Loading';

export interface ContinentProps {
  continent: {
    slug: string;
    title: string;
    description: string;
    banner_image: string;
    altBanner: string;
    countries: number;
    languages: number;
    cities: number;
    cities_list: string;
    cities_100: {
      city: string;
      country: string;
      thumbnail: string;
      altThumbnail: string;
      flag: string;
      altFlag: string;
    }[];
  };
}

export default function Continent({ continent }: ContinentProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <Flex direction="column">
      <Header />

      <ContinentBanner continent={continent} />
      <Flex
        direction="column"
        w="100%"
        h="100%"
        maxWidth="1160px"
        mx="auto"
        mt={['6', '8', '12', '20']}
        px="1rem"
      >
        <Content continent={continent} />
        <Cities continent={continent} />
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrimiscClient();
  const continents = await prismic.query([
    Prismic.Predicates.at('document.type', 'continent'),
  ]);

  const paths = continents.results.map(continent => {
    return {
      params: {
        slug: continent.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async content => {
  const prismic = getPrimiscClient();
  const { slug } = content.params;
  const response = await prismic.getByUID<any>('continent', String(slug), {});

  const continent = {
    slug: response.uid,
    title: response.data.title,
    description: RichText.asText(response.data.description),
    banner_image: response.data.banner_image.url,
    altBanner: response.data.banner_image.alt,
    countries: response.data.countries,
    languages: response.data.languages,
    cities: response.data.cities,
    cities_list: response.data.cities_list,
    cities_100: response.data.cities_100.map(city => {
      return {
        city: city.city,
        country: city.country,
        thumbnail: city.thumbnail.url,
        altThumbnail: city.thumbnail.alt,
        flag: city.flag.url,
        altFlag: city.flag.alt,
      };
    }),
  };

  return {
    props: {
      continent,
    },

    revalidate: 1800,
  };
};
