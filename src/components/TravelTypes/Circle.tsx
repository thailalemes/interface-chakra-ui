import { Box } from '@chakra-ui/react';

export function Circle() {
  return (
    <Box
      display={['block', 'none', 'none']}
      w="8px"
      h="8px"
      borderRadius="50%"
      backgroundColor="yellow.400"
    />
  );
}
