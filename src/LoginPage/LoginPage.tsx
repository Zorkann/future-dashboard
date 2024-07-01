import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Page2</div>
      <button onClick={() => navigate('/data')}>Redirect to Data</button>
    </>
  );
};
