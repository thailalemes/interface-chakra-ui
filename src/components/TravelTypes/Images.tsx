import { Image, ImageProps } from '@chakra-ui/react';

interface Images extends ImageProps {
  src: string;
  alt: string;
}

export function Images({ src, alt }: ImageProps) {
  return (
    <Image
      display={['none', 'block', 'block']}
      src={src}
      alt={alt}
      w="100%"
      maxWidth="5.312rem"
      h="5.312rem"
      mx="auto"
    />
  );
}
