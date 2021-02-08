import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { FETCH_POST_QUERY, ADD_COMMENT, UPDATE_POST } from '../../repositories/posts'
import UserContext from '../../components/UserContext'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Loading from '../../components/loading'
import styles from './viewpost.module.css';


function ViewPost() {
  const uploadImage = useRef(null);
  const router = useRouter();
  const { isLogin } = useContext(UserContext);
  const { postId } = router.query;
  
  const [postDetails, setPostDetails] = useState({});
  const [isEditing, setEditStatus] = useState(false);
  const [imgValue, setImgValue] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const [tempValues, setTempValues] = useState({
    id: null,
    title: '',
    content: '',
    image: ''
  })

  const { loading, error, data } = useQuery(FETCH_POST_QUERY, {
    variables: { 
      postId: Number(postId) 
    }
  })

  const [addComment, { loadingComment }] = useMutation(ADD_COMMENT, {
    update(_,result) {
      let commentArray = postDetails.comments;
      let newComment = {
        id: result.data.addComment.id,
        content: result.data.addComment.content,
        createdAt: result.data.addComment.createdAt
      }
      commentArray.unshift(newComment);
      setPostDetails({...postDetails, ['comments']: commentArray});
    },
    onError(err) {
      console.log(err);
    },
    variables: {
      postId: Number(postId),
      content: commentContent
    }
  })

  const [updatePost, { loadingUpdate }] = useMutation(UPDATE_POST, {
    update(_, result) {
      location.reload();
    },
    onError(err){
      console.log(err);
    },
    variables: {
      id: tempValues.id,
      title: tempValues.title,
      content: tempValues.content,
      image: imgValue
    }
  })

  const handleComment = (event) => {
    setCommentContent(event.target.value);
  }

  const onChange = (event) => {
    setTempValues({...tempValues, [event.target.name]: event.target.value});
  }

  const handleEditPost = () => {
    console.log(data);
    let tempObject = {
      id: data.post.id,
      title: data.post.title,
      content: data.post.content,
      image: data.post.image
    }
    setTempValues(tempObject);
    setEditStatus(true);
  }

  const cancelEditPost = () => {
    var res = confirm("Are you sure you want to cancel changes?");
    if(res){
      let tempObject = {
        id: data.post.id,
        title: data.post.title,
        content: data.post.content,
      }
      setImgValue(data.post.image);
      setTempValues(tempObject);
      setEditStatus(false);
    }
  }

  const saveEditPost = () => {
    updatePost();
    setEditStatus(false);
  }

  const handleImageUpload = () => {
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
        setImgValue(res);
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  useEffect(() => {
    if(data){
      setPostDetails(data.post);
      document.title = `${data.post.title} - BLOG`;
    }
  }, [data])

  if(loading){
    return (
      <div className={styles.viewpost__loading}>
        <Loading />
      </div>
    )
  } else {
    return (
      <div className="container">
        { postDetails &&
          <div className={styles.viewpost__container}>
            <Navbar />
            { postDetails.title &&
              <div className={styles.navigation__header}>
                <div className={styles.navigation__content}>
                  <Link href="/">
                    <a className={styles.content__text}>HOME</a>
                  </Link>
                  <p>&nbsp;&nbsp;{' > '}&nbsp;</p>
                  <p>&nbsp;{postDetails.title}</p>
                </div>
              </div>
            }
            <div className={styles.navigation__body}>
              { isLogin &&
                <div className={styles.body__action}>
                  { isEditing ?
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
                  : <p 
                      className={styles.action__text}
                      onClick={handleEditPost}
                    >Edit Post</p>
                  }
                </div>
              }
              { postDetails &&
                <div className={styles.body__details}>
                  <p className={styles.details__date}>
                    {postDetails.createdAt ? data.post.createdAt.slice(0,10) : null}
                  </p>
                  { !isEditing 
                  ? <h2 className={styles.details__title}>{postDetails.title}</h2>
                  : <textarea
                      placeholder="title"
                      name="title"
                      onChange={onChange}
                      defaultValue={tempValues.title}
                      className={`${styles.details__title} + ${styles.details__title__text}`}
                    />
                  }
                  <div className={styles.details__container}>
                    { isEditing && 
                      <div className={styles.details__}>
                        <button
                          className={styles.details__upload_image}
                          onClick={handleImageUpload}
                        >
                          Upload Image
                        </button>
                        <input 
                          name="myfile" 
                          type="file"
                          ref={uploadImage} 
                          onChange={handleImage}
                          hidden
                        />
                      </div>
                    }
                    <img
                      className={styles.details__image} 
                      src={imgValue ? imgValue 
                        :(postDetails.image ? postDetails.image : "/images/girl.png")}
                    />
                  </div>
                  { !isEditing
                    ? <p className={styles.details__body}>{postDetails.content}</p>
                    : <textarea
                        placeholder="Content"
                        name="content"
                        onChange={onChange}
                        defaultValue={tempValues.content}
                        className={`${styles.details__body} + ${styles.details__body__text}`}
                      />
                  }
                </div>
              }
              <hr />
              <div className={styles.body__comments}>
                <h2 className={styles.comments__title}>COMMENT</h2>
                { postDetails.comments &&
                  postDetails.comments.map((comment) => {
                    return(
                      <div key={comment.id} className={styles.comments__item}>
                        <p className={styles.item__content}>{comment.content}</p>
                        <p className={styles.item__date}>{comment.createdAt.slice(0,10)}</p>
                      </div>
                    )
                  })
                }
                <div className={styles.comments__input}>
                  <textarea
                    placeholder="Write comment" 
                    name="comment"
                    onBlur={handleComment}
                    defaultValue={commentContent}
                    className={styles.input__textarea} 
                  />
                  <input 
                    type="button" 
                    value="Submit"
                    onClick={() => { commentContent && addComment() }}
                    className={styles.input__submit}
                  />
                </div>
              </div>
            </div>
          </div>
        }
        <Footer />
      </div>
    )
  }
}

export const getServerSideProps = async ({params}) => {
  return {props: {}};
}

export default ViewPost;
