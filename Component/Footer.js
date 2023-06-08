import styles from '../styles/home.module.css'
import {useRouter} from 'next/router'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


export default function Footer(){
  

  
  
 return(
 <div className={styles.divfooter}>
<footer className={styles.footer}>
<ul className={styles.taglink}>
<Link href={"/app/catagory/recent"} className={styles.flink}>
<li>Recent apps</li>
</Link>
<Link href={"/app/catagory/top"} className={styles.flink}>
<li>Top apps</li>
</Link>
<Link href={"/app/catagory/coding"}  className={styles.flink}>
<li>Coding apps</li>
</Link>
</ul>
<hr />
<h3>Follow us on</h3>
<ul className={styles.sociallink}>
<li>
<a href="https://www.instagram.com/official_surajchawhan_078/">
<Image src="/insta.png" width={20} height={20}></Image>
</a>
</li>
<li>
<a href="https://youtube.com/@whacoder725">
<Image src="/youtube.png" width={20} height={20}></Image>
</a>
</li>
<li>
<a href="https://www.linkedin.com/in/suraj-chawhan-aa01a6244">
<Image src="/in.png"  width={20} height={20}></Image>
</a>
</li>
<li>
<a href="https://m.facebook.com/profile.php?id=100015470620889">
<Image src="/facebook.png" width={20} height={20}></Image>
</a>
</li>
<li>
<a href="https://www.freelancer.in/u/Suraj442917">
<Image src="/freelancer.png" width={20} height={20} ></Image>
</a>
</li>

</ul>
<hr />
</footer>
<p className={styles.copyright}>©All right reserved by suraj chauhan </p>
 </div>
   );
}