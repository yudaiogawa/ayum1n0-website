import { IconButton } from '@chakra-ui/react'
import { MdDarkMode } from 'react-icons/md'

export default function ThemeSwitch() {
  return <IconButton aria-label="switch theme" icon={<MdDarkMode />} />
}
