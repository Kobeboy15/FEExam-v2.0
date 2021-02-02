import Link from 'next/link'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
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
    addUser();
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
          <div className={styles.input__login}>
            <p className={styles.login__text}>Confirm Password</p>
            <input 
              type="password"
              name="confirmPassword" 
              className={styles.login__textbox}
              value={values.confirmPassword}
              onChange={onChange}  
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

const REGISTER_USER = gql`
  mutation Register(
    $email: String!
    $password: String!
  ) {
    register(
      email: $email
      password: $password
    ) 
  }
`

const AUTHENTICATE_USER = gql`
mutation Authenticate(
  $email: String!
  $password: String!
) {
  authenticate(
    email: $email
    password: $password
  ) 
}
`

export default Register;
