import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useRef, useContext, useEffect } from 'react'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import styles from './viewpost.module.css';

import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

function CreatePost() {
  const router = useRouter()
  const uploadImage = useRef(null);
  const [dateToday, setDateToday] = useState('');
  const [values, setValues] = useState({
    title: '',
    content: '',
    image: ''
  })

  const onChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  }

  const [addPost, { loading }] = useMutation(ADD_POST, {
    update(_, result) {
      if(result.data.addPost.id != -1){
        router.push(`/posts/${result.data.addPost.id}`)
      } else {
        alert("There was an error");
        router.push('/');
      }
    },
    onError(err){
      console.log(err);
    },
    variables: {
      title: values.title,
      content: values.content,
      image: values.image
    }
  })

  const cancelEditPost = (e) => {
    let Answer = confirm("Are you sure you want to cancel?");
    if(Answer) {
      e.preventDefault();
      router.push('/');
    }
  }

  const saveEditPost = () => {
    addPost();
  }

  const handleImageUpload = (event) => {
    uploadImage.current.click();
  }

  const fileDataURL = file => new Promise((resolve, reject) => {
    let fr = new FileReader();
    fr.onload = () => resolve(fr.result);
    fr.onerror = reject;
    fr.readAsDataURL(file);
  })

  const handleImage = (event) => {
    if(event.target.files[0]){
      fileDataURL(event.target.files[0])
      .then(res => {
        setValues({...values, image: res});
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  useEffect(() => {
    let date = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    setDateToday(date);
  }, [])


  return (
    <div className="container">
      <div className={styles.viewpost__container}>
        <Navbar />
          <div className={styles.navigation__header}>
            <div className={styles.navigation__content}>
              <Link href="/">
                <a className={styles.content__text}>HOME</a>
              </Link>
              <p>&nbsp;&nbsp;{' > '}&nbsp;</p>
              <p>&nbsp;Create New Post</p>
            </div>
          </div>
        <div className={styles.navigation__body}>
          <div className={styles.body__action}>
            <div className={styles.action__container}>
              <p 
                className={styles.action__text}
                onClick={saveEditPost}
              >
                Save Post</p>
              <p 
                className={styles.action__text}
                onClick={cancelEditPost}
              >Cancel</p>
            </div>
          </div>
          <div className={styles.body__details}>
            <p className={styles.details__date}>{dateToday}</p>
            <textarea 
              placeholder="Title"
              name="title"
              onChange={onChange}
              values={values.title}
              className={`${styles.details__title} + ${styles.details__title__text}`}
            />
            <div className={styles.details__container}>
                <div className={styles.details__}>
                  <button
                    className={styles.details__upload_image}
                    onClick={handleImageUpload}
                  >
                    Upload Image
                  </button>
                  <input 
                    name="image" 
                    type="file"
                    ref={uploadImage} 
                    onChange={handleImage}
                    hidden
                  />
                </div>
                <img
                  className={styles.details__image} 
                  src={values.image ? values.image : null}
                />
            </div>
              <textarea
                placeholder="Content"
                name="content"
                onChange={onChange}
                values={values.content}
                className={`${styles.details__body} + ${styles.details__body__text}`}
              />
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  )
}

const ADD_POST = gql`
  mutation addPost(
    $title:String!
    $content:String!
    $image:String!
  ){
    addPost(
      post: {
        title: $title,
        content: $content,
        image: $image	
    })
    {
      id
    }
  }
`

export default CreatePost;
