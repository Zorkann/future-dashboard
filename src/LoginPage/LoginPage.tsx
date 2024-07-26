import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '@features/themes';

type UserType = {
  name: string;
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || '/';
  const [user, setUser] = useState<UserType>({ name: '' });
  const auth = useAuth();

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <>
      <label>
        Username: {''}
        <input
          type="text"
          className="bg-white text-black"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </label>

      <button onClick={handleLogin}>Login</button>
    </>
  );
};
