import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  colors: {
    purple: {
      '900': '#1a1a29',
      '700': '#282162',
      '400': '#7562E0',
    },

    gray: {
      '900': '#181824',
      '600': '#31313F',
      '400': '#BDBDBD',
    },
  },

  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },

  styles: {
    global: {
      html: {
        overflowX: 'hidden',
      },

      body: {
        bg: 'gray.900', // bg --> background
        color: 'white',
        fontWeight: '500',
      },
    },
  },
}

export const theme = extendTheme(customTheme)
