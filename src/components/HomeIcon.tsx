import { Flex, FlexProps, Image, Text, useMediaQuery } from "@chakra-ui/react";

interface HomeIconProps extends FlexProps {
  icon: string;
  text: string;
}

export function HomeIcon({ icon, text, ...rest }: HomeIconProps) {
  const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');

  return (
    <Flex flexDir='column' align='center' {...rest}>
      {
        isLargerThan1440 && <Image src={`/${icon}.svg`} pb='1.5rem' />
      }
      <Text
        as='span'
        fontWeight='semibold'
        fontSize='2xl'
        pl='1rem'
        _before={!isLargerThan1440 && {
          position: 'absolute',
          marginLeft: '-3rem',
          content: '""',
          borderWidth: '0.5rem',
          borderColor: 'orange.100',
          backgroundColor: 'orange.100',
          borderRadius: 'full',
          transform: 'translate(0, 50%)'
        }}
      >
        {text}
      </Text>
    </Flex >
  )
}