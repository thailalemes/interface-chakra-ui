import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      w="100%"
      h={['163px', '335px']}
      bgImage="url(/banner.png)"
      bgSize="cover"
      bgRepeat="no-repeat"
      px={['1rem', '8.75rem']}
      gap={['205.25px']}
    >
      <Flex flexDirection="column" mx="auto" py={['1.75rem', '5rem']}>
        <Box w="100%" maxWidth={['238px', '426px']}>
          <Heading
            fontWeight="500"
            fontSize={['xl', '3xl', '4xl']}
            lineHeight={['30px', '46px', '46px', '42px', '54px']}
            color="gray.50"
          >
            5 Continentes, infinitas possibilidades.
          </Heading>
        </Box>

        <Box w="100%" maxWidth={['333px', '524px']} mt={['0.5rem', '1.25rem']}>
          <Text
            fontWeight="normal"
            fontSize={['sm', 'md', 'xl']}
            lineHeight={['21px', '24px', '30px']}
            color="gray.200"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
      </Flex>

      <Box
        maxWidth="417.15px"
        mt="4.75rem"
        display={['none', 'none', 'none', 'block']}
      >
        <Image
          src="./airplane.svg"
          alt="Avião"
          w="100%"
          transform="rotate(3deg)"
        />
      </Box>
    </Flex>
  );
}
