import {useState, useEffect} from 'react';
import Axios from 'axios';
import aboutus from '../images/om-os.jpg'

const AboutUs = () => {

    const [data, setData] = useState([]);

  useEffect(()=> {

    const fetchData = async () => {
      const result = await Axios(
'http://localhost:3002/api/about');

      setData(result.data);
    };

     fetchData();
   
    }, []);

    return(
        <section>
{data.map(text => {

    return(
        <figure className='aboutus' key={text.title} >
           <img src={aboutus}/>
           <figcaption>
            <h2>Lidt om os</h2>
             <h4>{text.title}</h4>
             <p>{text.content}</p> 
            </figcaption>   
        </figure>
    )
})}
        </section>
    )
}

export default AboutUs;