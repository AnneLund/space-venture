import {useState, useEffect} from 'react';
import Axios from 'axios';

const Team = () => {

    const [data, setData] = useState([]);

    useEffect(()=> {
  
    const fetchData = async () => {
    const result = await Axios('http://localhost:3002/api/team');

    setData(result.data);
    };
  
    fetchData();


    }, []);

return(

<section className='team'>
      <h2>Vores team</h2>    
   
  
<article className='team-members'>
    {data.map(info => {
            return(
                <div key={info.name}>
                <figure >
                      <img src={info.image}/>    
                    <figcaption>
<h5>{info.name}</h5>
<p className='title'>{info.title}</p>
<p>{info.phone}</p>
                    </figcaption>
                </figure>
                </div>
            )
        })}
  
    {/* {data.map(text => {
        return(

        <figure className='aboutus'>
           <img src={aboutus}/>
           <figcaption>
            <h2>Lidt om os</h2>
             <h4>{text.title}</h4>
             <p>{text.content}</p> 
            </figcaption>   
        </figure>
    )
})} */}
</article>
</section>
    )
}

export default Team;