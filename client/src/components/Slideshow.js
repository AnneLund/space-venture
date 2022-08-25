import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {useState, useEffect} from 'react';
import Axios from 'axios'

    const slideImages = [
      {
        url: 'https://i.imgur.com/VO6vyUW.jpg'
      },

      {
         url: 'https://i.imgur.com/EWpmTXZ.jpg'
      },
      
      {
        url: 'https://i.imgur.com/SZ37wQX.jpg'
      },
    ];

  
    const slideProperties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: false,
      // onChange: (oldIndex, newIndex) => {
      //   console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      // }
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
                      <div key={text.title}>
                        <h2>{text.title}</h2> 
                        <p>{text.content}</p> 
                      </div>
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