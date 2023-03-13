import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ContinentProps } from '../../pages';

export function Slider({ continents }: ContinentProps) {
  return (
    <Flex
      w="100%"
      maxWidth={['375px', '1240px']}
      h={['250px', '450px']}
      mt={['1.25rem', '1.75rem', '2rem', '3.25rem']}
      mb={['1.5rem', '1.75rem', '2rem', '2.5rem']}
      mx="auto"
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 4000 }}
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.slug}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="row"
              bgImage={`url('${continent.image}')`}
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
              textAlign="center"
            >
              <Link href={`/continent/${continent.slug}`}>
                <a>
                  <Heading
                    fontStyle="normal"
                    fontWeight="bold"
                    fontSize={['2xl', '3xl', '4xl', '5xl']}
                    lineHeight={['36px', '72px']}
                    textAlign="center"
                    color="gray.50"
                  >
                    {continent.title}
                  </Heading>
                  <Text
                    fontStyle="normal"
                    fontWeight="bold"
                    fontSize={['sm', 'md', 'xl', '2xl']}
                    lineHeight={['21px', '36px']}
                    textAlign="center"
                    color="gray.200"
                  >
                    {continent.summary}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
