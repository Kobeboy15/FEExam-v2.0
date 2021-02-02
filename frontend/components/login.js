import Link from 'next/link'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import { AUTHENTICATE_USER } from '../repositories/users'
import UserContext from './UserContext'
import styles from './login.module.css'

function Login() {
  const router = useRouter();
  const { setLogin } = useContext(UserContext);

  const [error, setError] = useState({});
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const onChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  }

  const [authenticateUser, { loadingWait }] = useMutation(AUTHENTICATE_USER, {
    update(_, result){
      if(result.data.authenticate){
        localStorage.setItem('token', result.data.authenticate);
        setLogin(true);
        router.push('/');
      }
    },
    onError(err){
      setError(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: {
      email: values.email,
      password: values.password
    }
  })
  
  const onSubmit = (event) => {
    event.preventDefault();
    authenticateUser();
  }
  

  return (
    <div className={styles.login__container}>
      <div className={styles.container__content}>
        <div className={styles.content__title}>
          <h2 className={styles.title__text}>Login</h2>
        </div>
        <form 
          onSubmit={onSubmit}
          className={styles.content__input}
        >
          <div className={styles.input__login}>
            <p className={styles.login__text}>Email</p>
            <input 
              type="email"
              name="email" 
              className={styles.login__textbox}
              value={values.email}
              onChange={onChange}
            />
          </div>
          <div className={styles.input__login}>
            <p className={styles.login__text}>Password</p>
            <input 
              type="password"
              name="password"
              className={styles.login__textbox}
              value={values.password}
              onChange={onChange}  
            />
          </div>
          <button 
            type="submit"
            className={styles.input__button}
          >
            Login
          </button>
          <p className={styles.input__register}>
            No account yet?
            <Link href="/register">
              <a className={styles.register__link}>Register Here</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login;