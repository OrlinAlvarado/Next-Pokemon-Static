import Image from 'next/image';
import { Spacer, Text, useTheme, Link, Switch } from '@nextui-org/react';
import NextLink from 'next/link';
import useDarkMode from 'use-dark-mode';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [textColor, setTextColor] = useState('white');
  const { theme, isDark } = useTheme();
  const darkMode = useDarkMode(true);

  useEffect(() => {
    setTextColor(darkMode.value ? 'white' : 'black');
  }, [darkMode.value]);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: darkMode.value
          ? theme?.colors.gray900.value
          : theme?.colors.white.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la app"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color={textColor} h2>
            P
          </Text>
          <Text color={textColor}>okémon</Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />

      <Text color={textColor} h5>
        {darkMode.value ? 'Modo oscuro' : 'Modo claro'}
      </Text>
      <Spacer />
      <Switch checked={darkMode.value} onChange={() => darkMode.toggle()} />
      <Spacer />
      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: '10px' }}>
          <Text color={textColor}>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
