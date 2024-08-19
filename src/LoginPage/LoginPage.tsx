// import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
// import { useAuth } from '@features/themes';
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// type UserType = {
//   name: string;
// };

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const LoginPage = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const redirectPath = location.state?.path || '/';
  // const [user, setUser] = useState<UserType>({ name: '' });
  // const auth = useAuth();

  // const handleLogin = () => {
  //   auth.login(user);
  //   navigate(redirectPath, { replace: true });
  // };

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
    console.log('work');
    if (userRef.current !== null) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user1);
    console.log(result);
    console.log(user1);
    setValidName(result);
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

  return (
    <>
      {/* <div>
        <label>
          Username: {''}
          <input
            type="text"
            className="bg-white text-black"
            value={user1}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </label>

        <button onClick={handleLogin}>Login</button>
      </div> */}
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
          <label htmlFor="username">
            Username:
            <span className={validName ? 'valid' : 'hide'}>
              <FontAwesomeIcon icon={faCheck} />{' '}
            </span>
            <span className={validName || !user1 ? 'hide' : 'invalid'}>
              <FontAwesomeIcon icon={faTimes} />{' '}
            </span>
          </label>
          <input
            className="bg-white text-black"
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
          <p
            id="uidnote"
            className={
              userFocus && user1 && !validName ? 'instructions' : 'offscreen'
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.
            <br />
            Muset begin with a letter. <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>

          <label htmlFor="password">
            Password:
            <span className={validPwd ? 'valid' : 'hide'}>
              <FontAwesomeIcon icon={faCheck} />{' '}
            </span>
            <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
              <FontAwesomeIcon icon={faTimes} />{' '}
            </span>
          </label>

          <input
            className="bg-white text-black"
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            required
            aria-invalid={validPwd ? 'false' : 'true'}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <p
            id="pwdnote"
            className={
              pwdFocus && user1 && !validPwd ? 'instructions' : 'offscreen'
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character. <br />
            Allowed special characters:{' '}
            <span aria-label="exclamation mark">!</span>
            <span aria-label="at symbol">@</span>{' '}
            <span aria-label="hastag">#</span>
            <span aria-label="dollar sign">$</span>{' '}
            <span aria-label="percent">%</span>
          </p>
        </form>
      </div>
    </>
  );
};
