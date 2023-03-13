import { Grid } from '@chakra-ui/react';
import { ContinentProps } from '../../pages/continent/[slug]';
import Bio from './Bio';
import Infos from './Infos';

export default function Content({ continent }: ContinentProps) {
  return (
    <Grid
      gridTemplateColumns={['1fr', '1fr', '1fr', '1.3fr 1fr']}
      gap={['1rem', '2rem', '2rem', '4.375rem']}
    >
      <Bio continent={continent} />
      <Infos continent={continent} />
    </Grid>
  );
}
