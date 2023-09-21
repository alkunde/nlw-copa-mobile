import { ReactNode, createContext, useState } from 'react';

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  isUserLoading: boolean;
  signIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [isUserLoading, setIsUserLoading] = useState(false);

  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   clientId: '91382439033-tbvv8glacc58rqdjbj12556edmt0ojt1.apps.googleusercontent.com',
  //   redirectUri: AuthSession.makeRedirectUri(),
  //   scopes: ['profile', 'email']
  // });

  async function signIn() {
    try {
      setIsUserLoading(true);
      //TODO: autenticação com o google
      setUser({
        name: 'Andreoid',
        avatarUrl: 'https://github.com/alkunde.png',
      });
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsUserLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      isUserLoading,
      user,
    }}>
      {children}
    </AuthContext.Provider>
  );
}