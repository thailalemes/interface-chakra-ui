import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function City({
  city,
  country,
  thumbnail,
  altThumbnail,
  flag,
  altFlag,
}) {
  const borderColor = useColorModeValue('rgba(255, 186, 8, 0.5)', 'yellow.400');
  const borderWidth = useColorModeValue('1px', '2px');
  return (
    <Box
      w="100%"
      maxWidth="16rem"
      h="279px"
      backgroundColor="#FFFFFF"
      borderRadius="4px"
    >
      <Image
        w="100%"
        maxWidth="16rem"
        h="173px"
        mx="auto"
        src={thumbnail}
        alt={altThumbnail}
      />
      <Flex
        w="100%"
        h="calc(100% - 173px)"
        justify="space-between"
        alignItems="center"
        px="6"
        pt="1.125rem"
        pb="25px"
        borderWidth={borderWidth}
        borderStyle="solid"
        borderColor={borderColor}
        borderTop="0"
      >
        <Flex direction="column">
          <Heading
            fontFamily="Barlow"
            fontWeight="600"
            fontSize="xl"
            lineHeight="25px"
            color="gray.700"
          >
            {city}
          </Heading>
          <Text
            fontFamily="Barlow"
            fontWeight="500"
            fontSize="md"
            lineHeight="26px"
            color="gray.500"
            pt="3"
          >
            {country}
          </Text>
        </Flex>
        <Image
          w="100%"
          maxWidth="30px"
          h="30px"
          mx="auto"
          src={flag}
          alt={altFlag}
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}
