import { useAuth } from '@features/themes';
import { useNavigate } from 'react-router-dom';
export const ProfilePage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };
  return (
    <div>
      Welcome {auth.user ? auth.user.name : ''}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
