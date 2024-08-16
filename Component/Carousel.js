import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function carousel(props){
  
  const b=props.a.map(val=>{
    return(
       <div>
<h1>{val.title}</h1>
 </div>
      );
  })
  
return (
 <Carousel>
{b}
</Carousel>
  );
  }