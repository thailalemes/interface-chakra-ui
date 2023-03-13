import {
  GridItem,
  GridItemProps as ChakraGridItemProps,
} from '@chakra-ui/react';

interface ItemProps extends ChakraGridItemProps {
  colSpan?: React.CSSProperties | any;
  children: React.ReactNode;
}

export function Item({ colSpan, children }: ItemProps) {
  return (
    <GridItem
      display="flex"
      flexDirection={['row', 'column']}
      justifyContent="center"
      alignItems="center"
      colSpan={colSpan}
    >
      {children}
    </GridItem>
  );
}
