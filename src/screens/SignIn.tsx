import { Center, Text } from 'native-base';

import Logo from '../assets/logo.svg';
import { Button } from '../components/Button';

export function SignIn() {
  return (
    <Center flex={1} bg="gray.900">
      <Logo width={212} height={40} />

      <Button title='Entrar com google' />
    </Center>
  )
}