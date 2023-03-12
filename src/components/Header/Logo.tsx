import { Image } from '@chakra-ui/react';

interface LogoProps {
  justifySelf: React.CSSProperties | any;
  gridColumn: React.CSSProperties | any;
}

export function Logo({ gridColumn, justifySelf }: LogoProps) {
  return (
    <Image
      w="100%"
      maxWidth={['81px', '184px']}
      h={['20px', '45.92px']}
      src="/logo.svg"
      alt="Logo worldtrip"
      gridColumn={gridColumn}
      justifySelf={justifySelf}
    />
  );
}
