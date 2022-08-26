import {Component} from "react";
import Axios from 'axios'

//Jeg laver et kontrolleret komponent, dvs at den value som brugeren skriver i inputtet,
//er kontrolleret af React state.  

class Form extends Component {
//Min constructor er en metode som bliver påkaldt under kontruktionen af et objekt.
//
    constructor(props){
        super(props);

     this.state = {
        email: ''
    };
}

//setState sørger for at min value bliver opdateret
//'e' er en syntetisk event der sørger for at den virker i alle browsere.
handleEmailChange = e => {
        this.setState({email: e.target.value})
    }

handleSubmit = (e) => {
        e.preventDefault();
    
        const newEmail = {
            email: this.state.email,
        };

           Axios.post('http://localhost:3002/api/newsletter', newEmail)
            .then(response => {           
                this.setState({}) // get age, name and other data from response and set 
                console.log(response.data)                  //  the states here respectively 
            })
            .catch(error => error);           
    alert('Tak for din tilmelding!')
    }
   
    render() {
        return (
            <article className="newsletter">
                <h2>Tilmeld dig og få 25% rabat!</h2>
               
                  <form onSubmit={this.handleSubmit}>
                      <input 
                      placeholder="Email"
                      type="text" 
                      onChange={this.handleEmailChange} 
                      id="email"
                      value={this.state.email}
                      />
                      <button type="submit">Tilmeld</button>
                  </form>
                
            </article>
        );
    }
}

export default Form;
    
  