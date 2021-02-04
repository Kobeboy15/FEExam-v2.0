import Link from 'next/link'
import Card from './posts/postcard'
import styles from './news.module.css'
import { useState, useEffect, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { FETCH_POSTS_QUERY } from '../repositories/posts';
import UserContext from './UserContext'

import Loading from '../components/loading'


function News() {

  const { isLogin } = useContext(UserContext);
  const [postItems, setPostItems] = useState([]);
  const [feedLimit, setFeedLimit] = useState(6);

  const { loading, data } = useQuery(FETCH_POSTS_QUERY, {
    variables: {
      limit: feedLimit,
      offset: 0
    }
  });

  useEffect(() => {
    if(data){
      setPostItems(data.posts);
    }
  }, [data])

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
          { isLogin &&
            <Link href="/posts/createpost">
              <a className={styles.title__newpost}>
                Create New Post
              </a>
            </Link>
          }
        </div>
        { postItems && 
          <div className={styles.container__content}>
            {
              postItems.map((postItem) => 
                (
                  <Link 
                    href={{
                      pathname: '/posts/[postId]',
                      query: { postId: postItem.id }
                    }} 
                    key = {postItem.id}>
                    <a>
                      <Card 
                        date = {postItem.createdAt}
                        image = {postItem.image}
                        description = {postItem.title}
                      />
                    </a>
                  </Link>
                )
              )
            }
          </div>
        }
        {
          (postItems && (postItems.length >= feedLimit)) 
          && <div className={styles.container__button__wrapper}>
              <button 
                className={styles.container__button}
                onClick={updateFeedLimit}
              >
                Load More
              </button>
            </div>
        }
      </div>
    )
  }
}

export default News;