import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {useState, useEffect} from 'react';
import Axios from 'axios'

    const slideImages = [
      {
        url: 'https://i.imgur.com/VO6vyUW.jpg',
        h2: 'Oplev den røde planet',
        content: 'Turen går til Mars!'
      },

      {
         url: 'https://i.imgur.com/EWpmTXZ.jpg',
        h2: 'Se jorden stå op',
        content: 'Flyv med til månen!'
      },
      
      {
        url: 'https://i.imgur.com/SZ37wQX.jpg',
        h2: 'Tophastighed på 1.000.000 km/t',
        content: 'Stig ombord på rumfærgen!'
      },
    ];

  
    const slideProperties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: false,
      onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      }
    }

const Slideshow = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {

    const fetchData = async () => {
      const result = await Axios(
'http://localhost:3002/api');

      setData(result.data);
    };

     fetchData();
     console.log(data)
    }, []);


return(
<section className="slide-container">
  <article >
 <Slide {...slideProperties}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className="slide" style={{'backgroundImage': `url(${slideImage.url})`}}>
                <div className="text">
                {data.map((text, idx) => {

if (index === idx) {
  return(
    <>
      <h2>{text.title}</h2> 
      <p>{text.content}</p> 
    </>

  )
  
}


                })} 
                </div>
              </div>
            </div>
          ))}    
  </Slide>  
  </article>

 
</section>
)
  }

export {Slideshow};