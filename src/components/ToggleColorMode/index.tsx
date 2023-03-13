import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';

export default function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button
        onClick={toggleColorMode}
        position="absolute"
        top="0"
        right="0"
        m={['0.5rem', '1rem']}
      >
        {colorMode === 'light' ? (
          <SunIcon color="orange.400" />
        ) : (
          <MoonIcon color="blue.700" />
        )}
      </Button>
    </header>
  );
}
