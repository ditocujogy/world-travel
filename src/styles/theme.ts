import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "375px",
  md: "700px",
  lg: "960px",
  xl: "1440px",
})

export const theme = extendTheme({
  breakpoints,
  colors: {
    orange: {
      100: '#FFBA08',
    },
    gray: {
      50: '#F5F8FA',
      300: '#DADADA',
      400: '#999999',
      600: '#47585B',
    },
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  styles: {
    global: {
      html: {
        fontSize: { base: '43.75%', md: '68.75%', xl: '100%' },
      },
      body: {
        bg: 'gray.50',
        color: 'gray.600',
      },
    },
  },
});
