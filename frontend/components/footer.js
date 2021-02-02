import styles from './footer.module.css'

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

export default function Footer() {
  return (
    <div className={styles.footer__container}>
      <div className={styles.container__content}>
        <div className={styles.content__items}>
          <div className={styles.items__left}>
            <img 
              src="/images/LOGO_white.svg" 
              alt="Logo White"
              className={styles.items__image}
            />
            <p className={styles.items__text}>
              サンプルテキストサンプル ルテキストサンプルテキストサンプルテキス<br />
              トサンプル ルテキスト
            </p>
          </div>
          <div className={styles.items__right}>
            <button 
              className={styles.items__right__button}
              onClick={scrollToTop}
            >
              <div>
                <img src="/images/top.svg"/>
                <p className={styles.button__text}>TOP</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.container__copyright}>
        <p className={styles.copyright__text}>Copyright©2007-2020 Blog Inc.</p>
      </div>
    </div>
  )
}
