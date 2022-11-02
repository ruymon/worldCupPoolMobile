import { Center, Text } from 'native-base';

interface SignInProps {};

export function SignIn({}: SignInProps) {
  return (
    <Center flex={1} bgColor="gray.900">
      <Text color="gray.100" fontFamily="heading" fontSize={24}>SignIn</Text>
    </Center>
  );
};
