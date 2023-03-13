import { Text, useColorModeValue } from '@chakra-ui/react';
import { ContinentProps } from '../../pages/continent/[slug]';

export default function Bio({ continent }: ContinentProps) {
  const color = useColorModeValue('gray.700', 'gray.300');
  return (
    <Text
      fontWeight="normal"
      fontSize={['sm', 'md', 'xl', '2xl']}
      lineHeight={['21px', '28px', '36px']}
      textAlign="justify"
      color={color}
    >
      {continent?.description}
    </Text>
  );
}
