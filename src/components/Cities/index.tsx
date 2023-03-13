import { Box, Grid, Heading, useColorModeValue } from '@chakra-ui/react';
import { ContinentProps } from '../../pages/continent/[slug]';
import City from './City';

export function Cities({ continent }: ContinentProps) {
  const color = useColorModeValue('gray.700', 'gray.300');
  return (
    <Box as="section" mt={['8', '20']} mb={['1rem', '2.187rem']} mx="auto">
      <Heading
        fontWeight="500"
        fontSize={['2xl', '3xl', '3xl', '4xl']}
        lineHeight={['36px', '42px', '42px', '54px']}
        textAlign="left"
        color={color}
      >
        Cidades +100
      </Heading>

      <Grid
        gridTemplateColumns={[
          '1fr',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={['20px', '45px']}
        alignItems="center"
        justifyContent="center"
        mt={['5', '10']}
        boxSizing="border-box"
      >
        {continent?.cities_100.map(city => (
          <City
            key={city.city}
            city={city.city}
            country={city.country}
            thumbnail={city.thumbnail}
            altThumbnail={city.altThumbnail}
            flag={city.flag}
            altFlag={city.altFlag}
          />
        ))}
      </Grid>
    </Box>
  );
}
