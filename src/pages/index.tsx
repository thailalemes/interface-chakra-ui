/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { GetStaticProps } from 'next';

import { Flex, Heading, Slider, useColorModeValue } from '@chakra-ui/react';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';
import Header from '../components/Header';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export interface ContinentProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[];
}

export default function Home({ continents }: ContinentProps) {
  const color = useColorModeValue('gray.700', 'gray.50');
  return (
    <Flex direction="column" w="100%" h="100%">
      <Header />
      {/* <TravelTypes /> */}
      {/* <Divider /> */}
      <Heading
        fontWeight="500"
        fontSize={['xl', '2xl', '3xl', '4xl']}
        lineHeight={['30px', '54px']}
        textAlign="center"
        color={color}
        mt={['1.5rem', '2rem', '2.25rem', '3.25rem']}
        mb="15px"
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Slider continents={continents} />
    </Flex>
  );
}
// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };
