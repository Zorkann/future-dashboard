import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '@features/themes';

type UserType = {
  name: string;
};

export const LoginPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserType>({ name: '' });
  const auth = useAuth();

  const handleLogin = () => {
    auth.login(user);
    navigate('/');
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
      <button onClick={() => navigate('/data')}>Redirect to Data</button>
    </>
  );
};
