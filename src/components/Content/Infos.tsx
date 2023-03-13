import {
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';
import { ContinentProps } from '../../pages/continent/[slug]';

export default function Infos({ continent }: ContinentProps) {
  const colorText = useColorModeValue('gray.700', 'gray.300');
  const popoverIcon = useColorModeValue('gray.400', 'gray.300');
  const bgPopoverContent = useColorModeValue('gray.700', 'gray.600');
  const colorPopoverCloseButton = useColorModeValue('gray.200', 'gray.100');

  return (
    <Flex
      align="center"
      justify={[
        'space-between',
        'space-evenly',
        'space-evenly',
        'space-between',
      ]}
    >
      <Flex
        direction="column"
        align={['flex-start', 'flex-start', 'center']}
        justify="center"
      >
        <Heading
          fontWeight={'600'}
          fontSize={['2xl', '3xl', '4xl', '5xl']}
          lineHeight={['36px', '48px', '56px', '72px']}
          textAlign={['center']}
          color="yellow.400"
        >
          {continent?.countries}
        </Heading>
        <Text
          fontWeight={['400', '600']}
          fontSize={['lg', 'lg', 'xl', '2xl']}
          lineHeight={['27px', '32px', '36px']}
          textAlign="center"
          color={colorText}
        >
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        align={['flex-start', 'flex-start', 'center']}
        justify="center"
      >
        <Heading
          fontWeight={'600'}
          fontSize={['2xl', '3xl', '4xl', '5xl']}
          lineHeight={['36px', '48px', '56px', '72px']}
          textAlign="center"
          color="yellow.400"
        >
          {continent?.languages}
        </Heading>
        <Text
          fontWeight={['400', '600']}
          fontSize={['lg', 'lg', 'xl', '2xl']}
          lineHeight={['27px', '32px', '36px']}
          textAlign="center"
          color={colorText}
        >
          línguas
        </Text>
      </Flex>

      <Flex
        direction="column"
        align={['flex-start', 'flex-start', 'center']}
        justify="center"
      >
        <Heading
          fontWeight={'600'}
          fontSize={['2xl', '3xl', '4xl', '5xl']}
          lineHeight={['36px', '48px', '56px', '72px']}
          textAlign="center"
          color="yellow.400"
        >
          {continent?.cities}
        </Heading>
        <Text
          fontWeight={['400', '600']}
          fontSize={['lg', 'lg', 'xl', '2xl']}
          lineHeight={['27px', '32px', '36px']}
          textAlign="center"
          color={colorText}
        >
          cidades +100
          <Popover>
            <>
              <span>
                <Icon
                  as={RiInformationLine}
                  w={['10px', '1rem']}
                  h={['10px', '1rem']}
                  cursor="pointer"
                  ml="5px"
                  color={popoverIcon}
                />
              </span>
            </>
            <PopoverContent
              bg={bgPopoverContent}
              w={['200px', '200px', '600px', 'max-content']}
              h="auto"
            >
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton color={colorPopoverCloseButton} />

              <PopoverBody
                fontWeight="400"
                fontSize={['sm', 'lg']}
                color="yellow.400"
                mt="1rem"
              >
                {`${continent?.cities_list} e mais...`}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  );
}
