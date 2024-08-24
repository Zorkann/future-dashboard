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

//poprzedni return
{
  /* <div>
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
      </div> */
}
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.]).{8,24}$/;

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

  const [user, setUser] = useState('');
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
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd]);

  return (
    <>
      <div className="w-full max-w-[420px] min-h-[400px] flex flex-col justify-start p-4 bg-black bg-opacity-40">
        <p
          ref={errRef}
          className={`${
            errMsg
              ? 'bg-lightpink text-firebrick font-bold p-4 mb-0.5'
              : 'absolute left-[-9999px]'
          }`}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Register</h1>
        <form className="flex flex-col justify-between h-full p-4">
          <label htmlFor="username">
            Username:
            <FontAwesomeIcon
              icon={faCheck}
              className={`${validName ? 'text-limegreen ml-1/4' : 'hidden'}`}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={`${validName || !user ? 'hidden' : 'text-red ml-1/4'}`}
            />
          </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            aria-invalid={validName ? 'false' : 'true'}
            aria-describedby="uidnote"
            className="text-lg px-1 py-2 rounded-md text-black"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <p
            id="uidnote"
            className={`${
              userFocus && user && !validName
                ? 'text-white bg-black rounded-md text-xs p-1/4 relative top-2'
                : 'absolute left-[-9999px]'
            }`}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>

          <label htmlFor="password">
            Password:
            <FontAwesomeIcon
              icon={faCheck}
              className={`${validPwd ? 'text-limegreen ml-1/4' : 'hidden'}`}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={`${validPwd || !pwd ? 'hidden' : 'text-red ml-1/4'}`}
            />
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            aria-invalid={validPwd ? 'false' : 'true'}
            aria-describedby="pwdnote"
            className="text-lg px-1 py-2 rounded-md text-black"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <p
            id="pwdnote"
            className={`${
              pwdFocus && !validPwd
                ? 'text-white bg-black rounded-md text-xs p-1/4 relative top-2'
                : 'absolute left-[-9999px]'
            }`}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:{' '}
            <span aria-label="exclamation mark">!</span>{' '}
            <span aria-label="at symbol">@</span>{' '}
            <span aria-label="hashtag">#</span>{' '}
            <span aria-label="dollar sign">$</span>{' '}
            <span aria-label="percent">%</span>
          </p>

          <label htmlFor="confirm_pwd">
            Confirm Password:
            <FontAwesomeIcon
              icon={faCheck}
              className={`${
                validMatch && matchPwd ? 'text-limegreen ml-1/4' : 'hidden'
              }`}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={`${
                validMatch || !matchPwd ? 'hidden' : 'text-red ml-1/4'
              }`}
            />
          </label>
          <input
            type="password"
            id="confirm_pwd"
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            required
            aria-invalid={validMatch ? 'false' : 'true'}
            aria-describedby="confirmnote"
            className="text-lg px-1 py-2 rounded-md text-black"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          <p
            className={`${
              matchFocus && !validMatch
                ? 'text-white bg-black rounded-md text-xs p-1/4 relative top-2'
                : 'absolute left-[-9999px]'
            }`}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first password input field.
          </p>

          <button
            className="mt-4 px-2 py-1 bg-blue-500 text-white rounded-md text-lg  "
            disabled={!validName || !validPwd || !validMatch ? true : false}
          >
            Sign Up
          </button>
        </form>
        <p>
          Already registered?
          <br />
          <span className="inline-block">
            {/*put router link here*/}
            <a href="#">Sign In</a>
          </span>
        </p>
      </div>
    </>
  );
};
