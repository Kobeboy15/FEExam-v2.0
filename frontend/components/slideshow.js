import { useEffect, useState } from 'react'
import styles from './slideshow.module.css'
import axios from 'axios'

export default function SlideShow() {

  const [slideImages, updateImages] = useState([]);
  const [currentIndex, updateCurrentIndex] = useState(0);
  const [slideDirection, updateDirection] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  
  useEffect(() => {
    axios.get('http://localhost:3000/images-list.json')
    .then((res) => {
      updateImages(res.data);
    })
  }, [])

  const getDirection = () => {
    if(slideDirection){
      return slideDirection == 'left' ? 'slideshow__slideleft': 'slideshow__slideright';
    }
  }

  const getNext = () => {
    if(currentIndex != 0 && Math.abs(currentIndex + 1) % slideImages.length == 0){
      return 0;
    } else {
      return (currentIndex + 1);
    }
  }

  const getPrev = () => {
    if(currentIndex == 0){
      return (slideImages.length-1);
    } else {
      return (currentIndex - 1);
    }
  }

  const nextImage = () => {
    if(!isDisabled){
      setIsDisabled(true);
      updateDirection('left');
      updateCurrentIndex(getNext());
      setTimeout(() => {
        updateDirection(null);
        setIsDisabled(false);
      }, 1000)
    }
  }

  const prevImage = () => {
    if(!isDisabled){
      setIsDisabled(true);
      updateDirection('right');
      updateCurrentIndex(getPrev());
      setTimeout(() => {
        updateDirection(null);
        setIsDisabled(false);
      }, 1000)
    }
  }

  const changePage = (selectedPage) => {
    if(!isDisabled){
      setIsDisabled(true);
      if(selectedPage > currentIndex){
        updateDirection('left');
        updateCurrentIndex(selectedPage);
      } else {
        updateDirection('right');
        updateCurrentIndex(selectedPage);
      }
      setTimeout(() => {
        updateDirection(null);
        setIsDisabled(false);
      }, 1000)
    }
  }

  return (
    <div className={styles.slideshow__container}>
      { slideImages
        ? <div className={styles.slideshow__actions}>
            <img 
              src="images/left.svg" 
              alt="left arrow" 
              className={styles.actions__arrows}
              onClick={prevImage}
            />
            <div className={styles.actions__selector}>
              {
                slideImages.map((item, index) => {
                    if(index == currentIndex) {
                      return <img key={index} src="images/CircleDark.svg" />
                    } else {
                      return <img key={index} src="images/CircleLight.svg" onClick={() => changePage(index)}/>
                    }
                })
              }
            </div>
            <img 
              src="images/right.svg" 
              alt="right arrow" 
              className={styles.actions__arrows}
              onClick={nextImage}
            />
          </div>
        : null
      }
      { slideImages.length > 0
      ? <div className={styles.slideshow__image_wrapper}>
          <div className={`${styles.image_wrapper__container} ${slideDirection ? getDirection(): ''}`}>
            <div className={styles.container__text}>
              <h2 className={styles.text__title}>
                サンプルテキスト<br />
                サンプル ルテキストサン<br />
                プルテキスト
              </h2>
              <p className={styles.text__date}>2019.06.19</p>
            </div>
            <img 
              src={slideImages[getPrev()].image_path} 
              className={styles.slideshow__image}
            />
          </div>
          <div className={`${styles.image_wrapper__container} ${slideDirection ? getDirection(): ''}`}>
            <div className={styles.container__text}>
              <h2 className={styles.text__title}>
                サンプルテキスト<br />
                サンプル ルテキストサン<br />
                プルテキスト
              </h2>
              <p className={styles.text__date}>2019.06.19</p>
            </div>
            <img 
              src={slideImages[currentIndex].image_path} 
              className={styles.slideshow__image}
            />
          </div>
          <div className={`${styles.image_wrapper__container} ${slideDirection ? getDirection(): ''}`}>
            <div className={styles.container__text}>
              <h2 className={styles.text__title}>
                サンプルテキスト<br />
                サンプル ルテキストサン<br />
                プルテキスト
              </h2>
              <p className={styles.text__date}>2019.06.19</p>
            </div>
            <img 
              src={slideImages[getNext()].image_path} 
              className={styles.slideshow__image}
            />
          </div>
        </div>
      : null
      }
    </div>
  )
}