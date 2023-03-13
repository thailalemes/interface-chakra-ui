import { Flex, useColorModeValue } from '@chakra-ui/react';

export function Divider() {
  const border = useColorModeValue('#47585B', 'gray.50');
  return (
    <Flex
      align="center"
      justify="center"
      mx="auto"
      w={['3.75rem', '5.625rem']}
      borderWidth={['1px', '2px']}
      borderStyle="solid"
      borderColor={border}
    ></Flex>
  );
}
