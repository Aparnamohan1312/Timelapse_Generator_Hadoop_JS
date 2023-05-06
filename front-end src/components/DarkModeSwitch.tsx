import { useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <IconButton
      position="fixed"
      top={4}
      right={4}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      color="white"
      _hover={{
        _light:{
          color : "pink"
        },
        _dark:{
          color : "yellow"
        }
      }}
      onClick={toggleColorMode}
    />
  )
}
