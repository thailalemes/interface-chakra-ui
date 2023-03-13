import { Grid } from '@chakra-ui/react';
import { Circle } from './Circle';
import { Description } from './Description';
import { Images } from './Images';
import { Item } from './Item';

export function TravelTypes() {
  return (
    <Grid
      as="section"
      w="100%"
      maxWidth="1160px"
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      justifyContent="space-between"
      mx="auto"
      my={['2.25rem', '5rem']}
      gap={6}
    >
      <Item>
        <Circle />
        <Images src={'./assets/nightlife.svg'} alt={'vida noturna'} />
        <Description>vida noturna</Description>
      </Item>

      <Item>
        <Images src={'./beach.svg'} alt={'praia'} />
        <Circle />
        <Description>praia</Description>
      </Item>

      <Item>
        <Images src={'./modern.svg'} alt={'moderno'} />
        <Circle />
        <Description>moderno</Description>
      </Item>

      <Item>
        <Images src={'./classic.svg'} alt={'clássico'} />
        <Circle />
        <Description>clássico</Description>
      </Item>

      <Item colSpan={[2, 2, 2, 1]}>
        <Images src={'./more.svg'} alt={'e mais...'} />
        <Circle />
        <Description>e mais...</Description>
      </Item>
    </Grid>
  );
}
