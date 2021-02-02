import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'
import styles from './navbar.module.css'
import UserContext from './UserContext'

function renderButton(userStatus, currentPath, setLoginStatus) {

  const router = useRouter();

  const handleLogOut = () => {
    let logOutConfirm = confirm("Are you sure you want to log out?");
    if(logOutConfirm) {
      setLoginStatus(false);
      localStorage.removeItem('token');
      router.push('/');
    }
  }

  if(!userStatus) {
    if(currentPath == "/") {
      return (
        <Link href="/login">
          <a className={styles.container__text}>LOGIN</a>
        </Link>
      );
    } else {
      return (
        <Link href="/">
          <a className={styles.container__text}>CLOSE</a>
        </Link>
      );
    }
  } else {
    return (
      <p 
        className={styles.container__text}
        onClick={handleLogOut}
      >
        LOGOUT
      </p>
    )
  }
}

export default function Navbar() {

  const router = useRouter();
  const { isLogin, setLogin } = useContext(UserContext);
  const [currentPath, updateCurrentPath] = useState();

  useEffect(() => {
    updateCurrentPath(router.pathname);
  }, [])

  return (
    <div className={styles.nav__container}>
      <img src="/images/LOGO.svg" alt="Logo" />
      {renderButton(isLogin, currentPath, setLogin)}
    </div>
  )
}
