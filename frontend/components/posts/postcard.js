import styles from './postcard.module.css'

export default function PostCard(props) {

  const formattedDate = (date) => {
    if(date){
      return date.slice(0, 10);
    }
  }

  return (
    <div className={styles.card__container}>
      <img 
        src={props.image ? props.image : "/images/card-image.png"} 
        alt="Man with hands" 
        className={styles.container__image}
      />
      <div className={styles.container__text}>
        <p className={styles.text__date}>{formattedDate(props.date)}</p>
        <p className={styles.text__body}>{props.description}</p>
      </div>
    </div>
  )
}