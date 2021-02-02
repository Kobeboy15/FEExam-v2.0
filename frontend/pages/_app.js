import '../styles/global.css'
import ApolloClient from "apollo-client"
import UserContext from '../components/UserContext'
import { ApolloProvider } from '@apollo/react-hooks'
import { setContext } from '@apollo/client/link/context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http';
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

  const [isLogIn, setIsLogIn] = useState(false);
  const httpLink = createHttpLink({
    uri: "http://localhost:4000"
  })
  
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
      headers: {
        ...headers,
        authorization: token ? token : "",
      }
    }
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
  })

  useEffect(() => {
    if(localStorage.getItem('token')){
      setIsLogIn(true);
    }
  }, [])

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ isLogin: isLogIn, setLogin: setIsLogIn }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </ApolloProvider>
  )
}