import Image from 'next/image'
import styles from '../styles/home.module.css'


export default function Appdetails({appdetails}){
  

 
   const download= () => {
    const downloadUrl = appdetails.files;
    window.open(downloadUrl, '_blank');
  };




return(
  <div>
   <Image src={`/${appdetails.img}`} width={60} height={60} className={styles.appdetailsimg}></Image>
  <p>{appdetails.title}</p>
  <h2>Rating</h2>
  <p>{appdetails.rating}</p>
  <h2>Size</h2>
  <p>{appdetails.size}</p>
  <p>{appdetails.description}</p>
  <button className={styles.detailbtn} onClick={download}>Click to Download</button>
  </div>
  );
}


