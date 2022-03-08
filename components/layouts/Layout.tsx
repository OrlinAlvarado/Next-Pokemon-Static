import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name="author" content="Orlin Alvarado" />
        <meta name="description" content="Información sobre el pokemón XXXXX" />
        <meta name="keywords" content="XXX, pokemon, poxedex" />
      </Head>
      <Navbar />

      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
