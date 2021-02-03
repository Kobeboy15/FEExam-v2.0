import Link from 'next/link'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import { REGISTER_USER, AUTHENTICATE_USER } from '../repositories/users'
import UserContext from './UserContext'
import styles from './Register.module.css'



function Register() {
  const router = useRouter();
  const { setLogin } = useContext(UserContext);

  const [error, setError] = useState({});
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const onChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  }

  const [authenticateUser, { loadingWait }] = useMutation(AUTHENTICATE_USER, {
    update(_, result){
      localStorage.setItem('token', result.data.authenticate);
      setLogin(true);
      router.push('/');
    },
    onError(err){
      console.log(err);
    },
    variables: {
      email: values.email,
      password: values.password
    }
  })

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, result){
      authenticateUser();
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
    if(values.password == values.confirmPassword){
      addUser();
    } else {
      alert("Password doesn't Match.")
    }
  }

  return (
    <div className={styles.register__container}>
      <div className={styles.container__content}>
        <div className={styles.content__title}>
          <h2 className={styles.title__text}>Register</h2>
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
              required
            />
          </div>
          <div className={styles.input__login}>
            <p className={styles.login__text}>Password</p>
            <input 
              id="password"
              type="password" 
              name="password"
              className={styles.login__textbox}
              value={values.password}
              onChange={onChange}
              required
            />
          </div>
          <div className={styles.input__login}>
            <p className={styles.login__text}>Confirm Password</p>
            <input
              id="confirm_password"
              type="password"
              name="confirmPassword" 
              className={styles.login__textbox}
              value={values.confirmPassword}
              onChange={onChange}
              required
            />
          </div>
          <button
            type="submit"
            className={styles.input__button}
          >
            Register
          </button>
          <p className={styles.input__register}>
            Already have an account?
            <Link href="/login">
              <a className={styles.register__link}>Login Here</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register;
