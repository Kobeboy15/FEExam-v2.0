import Link from 'next/link'
import Card from './posts/postcard'
import styles from './news.module.css'
import { useState, useEffect, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import UserContext from './UserContext'

import Loading from '../components/loading'


function News() {

  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  const { isLogin } = useContext(UserContext);
  const [feedLimit, setFeedLimit] = useState(6);

  function updateFeedLimit() {
    setFeedLimit(feedLimit * 2);
  }

  if(loading){
    return (
    <div className={styles.news__loading}>
      <Loading />
    </div>
    )
  } else {
    return (
      <div className={styles.news__container}>
        <div className={styles.container__title}>
          <h2 className={styles.title__text}>News</h2>
          { isLogin ?
            <Link href="/posts/createpost">
              <a className={styles.title__newpost}>
                Create New Post
              </a>
            </Link>
            : null
          }
        </div>
        { data && 
          <div className={styles.container__content}>
            {
              data.posts.filter((item, index) => (index < feedLimit))
              .map((filteredItem) => 
                (
                  <Link 
                    href={{
                      pathname: '/posts/[postId]',
                      query: { postId: filteredItem.id }
                    }} 
                    key = {filteredItem.id}>
                    <a>
                      <Card 
                        date = {filteredItem.createdAt}
                        image = {filteredItem.image}
                        description = {filteredItem.title}
                      />
                    </a>
                  </Link>
                )
              )
            }
          </div>
        }
        {
          (data && (data.posts.length > feedLimit)) 
          ? <div className={styles.container__button__wrapper}>
              <button 
                className={styles.container__button}
                onClick={updateFeedLimit}
              >
                Load More
              </button>
            </div>
          : null
        }
      </div>
    )
  }
}

const FETCH_POSTS_QUERY = gql`
  {
    posts {
      id title createdAt image
    }
  }
`

export default News;