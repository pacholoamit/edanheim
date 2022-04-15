import {
  MantineProvider,
  MantineThemeOverride,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core'

const ThemeProvider: React.FC = ({ children }) => {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('light')

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'))
  }
  const mantineTheme: MantineThemeOverride = {
    primaryColor: 'indigo',
    fontFamily: 'Rubik,sans-serif',
    headings: {
      fontFamily: 'Rubik,sans-serif',
    },
    colorScheme,
  }

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={mantineTheme} withNormalizeCSS withGlobalStyles>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default ThemeProvider
