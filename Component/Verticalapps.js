import styles from '../styles/home.module.css'
import Button from './Button.js'
import Image from 'next/image'
export default function Verticalapps({app,call}){
  return(
    <div className={styles.vercontainer}>
    <div className={styles.father}>
    <Image src={`/${app.img}`}   width={100} height={100}></Image>
    <div>
    <div className={styles.son1}>
    <p>{app.title}</p>
    <p>{app.company}</p>
    </div>
    <div className={styles.son2}>
    <p>{app.rating}</p>
    <p>{app.size}</p>
    </div>
    </div>
    </div>
    <Button call={()=>call(app.id)}/>
    </div>
    );
}