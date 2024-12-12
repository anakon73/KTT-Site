import { Theme } from '@radix-ui/themes' // Проверьте правильность импорта
import { Navbar } from './Navbar'

export default {
  title: 'NavBar',
  component: Navbar,
}

export function Default() {
  return (
    <Theme>
      <Navbar />
    </Theme>
  )
}
