import { Slide } from 'react-slideshow-image';
// import {useState, useEffect} from 'react';
// import Axios from 'axios'

const Slideshow = () => {

// const [data, setData] = useState([]);

//   useEffect(()=> {

//     const fetchData = async () => {
//       const result = await Axios(
//         'http://localhost:3001/api',

//         );

//       setData(result.data);
//     };

//      fetchData();
//     }, []);

  
    const slideImages = [
      {
        url: 'https://i.imgur.com/EWpmTXZ.jpg',
        h2: 'Se jorden stå op',
        content: 'Flyv med til månen!'
      },
      {
        url: 'https://i.imgur.com/VO6vyUW.jpg',
        h2: 'Oplev den røde planet',
        content: 'Turen går til Mars!'
      },
      {
        url: 'https://i.imgur.com/SZ37wQX.jpg',
        h2: 'Tophastighed på 1.000.000 km/t',
        content: 'Stig ombord på rumfærgen!'
      },
    ];



return(
<section className="slide-container">
  <article >
 <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className="slide" style={{'backgroundImage': `url(${slideImage.url})`}}>
                <div className="text">
                  <h2> {slideImage.h2}</h2>
                  <p>{slideImage.content}</p>  
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