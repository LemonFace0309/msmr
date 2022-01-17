import styles from './ConsultingServices.module.css'

const ConsultingServices = () => {
  return (
    <>
      <h1 className={styles.title}>Resilience Training Offerings</h1>
      <div className={styles.container}>
        <iframe
          className={styles.responsiveIframe}
          src="https://onedrive.live.com/embed?cid=7E48946A3901CDDC&amp;resid=7E48946A3901CDDC%21259346&amp;authkey=AMxm8iKvGJlCZOQ&amp;em=2&amp;wdAr=1.7777777777777777"
          width="350px"
          height="221px"
          frameborder="0"
        >
          This is an embedded
          <a target="_blank" href="https://office.com">
            Microsoft Office
          </a>
          presentation, powered by
          <a target="_blank" href="https://office.com/webapps">
            Office
          </a>
          .
        </iframe>
      </div>
    </>
  )
}

export default ConsultingServices
