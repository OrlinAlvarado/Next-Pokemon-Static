import type { AppProps } from 'next/app';

import { NextUIProvider } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';

import { darkTheme, lightTheme } from '../themes';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(true);

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
