import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@features/themes';
// import {
//   faCheck,
//   faTimes,
//   faInfoCircle,
// } from '@fortawesome/free-solid-svg-icons';
// import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';

type UserType = {
  name: string;
};

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || '/';
  const [user, setUser] = useState<UserType>({ name: '' });
  const auth = useAuth();

  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLParagraphElement | null>(null);

  const [user1, setUser1] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [sucess, setSucess] = useState(false);

  useEffect(() => {
    if (userRef.current !== null) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user1);
    console.log(result);
    console.log(user1);
  }, [user1]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('Error');
  }, [user1, pwd, matchPwd]);

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <>
      <div>
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
      </div>
      <div>
        <p
          ref={errRef}
          className={errMsg ? 'errmsg' : 'offscreen'}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Register</h1>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser1(e.target.value)}
            required
            aria-invalid={validName ? 'false' : 'true'}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
        </form>
      </div>
    </>
  );
};
