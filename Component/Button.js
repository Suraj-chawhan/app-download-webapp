import styles from '../styles/home.module.css'

export default function Button({call}){
 return(
 <button onClick={call} className={styles.appbtn}>Download</button>
   );
}