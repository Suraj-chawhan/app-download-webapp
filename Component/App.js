import Button from './Button.js'
import styles from "../styles/home.module.css"
import Image from 'next/image'
export default function App({app,call}){
 return(
 <div className={styles.appcontainer}>
  <Image src={`/${app.img}`} width={60}  height={60}></Image>
  <h3>{app.title}</h3>
<Button call={()=>call(app.id)}/>
   </div>
   );
}