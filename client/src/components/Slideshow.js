import { Slide } from 'react-slideshow-image';
import {useState, useEffect} from 'react';
//Axios er et promise-baseret javascript bibliotek der bruges til HTTP requests.
//Den skaber forbindelse imellem node.js og browseren.
import Axios from 'axios'

//Jeg opretter et array med mine billeder
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

//Dette slideshow er fundet på https://www.npmjs.com/package/react-slideshow-image og derefter tilrettet
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
//Jeg bruger en 'hook' som er en funktion, der giver mig adgang til reacts funktioner.
//Derved undgår jeg at skulle bruge Class og 'this' som jeg har gjort i mit Form-component.
//Min useState hook kan jeg kalde direkte i min funktion:
const [data, setData] = useState([]);
useEffect(()=> {
    const fetchData = async () => {
    const result = await Axios('http://localhost:3002/api');

      setData(result.data);
    };

     fetchData();

    }, []);

//I min Slide bruger jeg 'spread'-syntaxen (...slideProperties) for at tildele hver slide mine properties.
//Jeg bruger en map()-funktion til at kunne manipulere med hver enkelt objekt i mit array.
return(

    <section className="slide-container">
      <article>
        <Slide {...slideProperties}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className="slide" style={{'backgroundImage': `url(${slideImage.url})`}}>
                <div>
                {data.map((text, idx) => {
                    if (index === idx) {
                    return(
                      <div className="text" key={text.title}>
                        <h3>{text.title}</h3> 
                        <p>{text.content}</p> 
                      </div>)}
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