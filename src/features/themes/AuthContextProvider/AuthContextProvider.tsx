import { useState, createContext, ReactNode } from 'react';

type UserType = {
  name: string;
  email: string;
};

export const AuthContext = createContext<{
  user: UserType | null;
  login: (user: UserType) => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);

  const login = (user: UserType) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
