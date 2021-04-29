import { Flex, Img } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderProps {
  back: boolean;
}

export function Header({ back }: HeaderProps) {
  return (
    <Flex as='header' w='100%' h='6.2rem' align='center' justify='center'>
      {back &&
        <Link href='/' passHref>
          <a>
            <Img src='/Back.svg' position='absolute' left='9.5rem' top='2.625rem' w='0.5rem' h='1rem' />
          </a>
        </Link>}
      <Img src="/Logo.svg" alt="World trip" width='11.5rem' height='2.9rem' />
    </Flex>
  )
}