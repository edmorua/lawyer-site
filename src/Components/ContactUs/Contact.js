import React, { Component } from 'react';
import axios from 'axios';
import useForm from './useForm';

import './stylees/contact.css';


class Contact extends Component {
    name = React.createRef();
    email = React.createRef();
    affair = React.createRef();
    phone = React.createRef();
    message = React.createRef();

    state = {
        name: '',
        email: '',
        affair: '',
        phone: '',
        message: ''
    };

    
    checkChanges = () => {
        const name = this.name.current.value;
        const email = this.email.current.value;
        const affair = this.affair.current.value;
        const phone = this.phone.current.value;
        const message = this.message.current.value;
        
        this.setState({
            name:name,
            email:email,
            affair:affair,
            phone:phone,
            message:message
        }); 
    };

    constructor(){
        super();
        this.sentEmail = this.sentEmail.bind(this);
    }

    async sentEmail(e) {
        e.preventDefault();
        const { name, email, affair, phone, message } = this.state;
        const form = await axios.post('/api/form',{
            name,
            email,
            affair,
            phone,
            message
        }); 
    }
    
    render(){
       //// const { handleChange, values } = useForm();
        return (
            <div class="container">
                <div class="contact-box">
                    <div class="left">
                        
                    </div>
                    <div class="right">
                        <h2>Contactanos</h2>
                        <input
                            id="name" 
                            type="text" 
                            name="name"
                            class="field" 
                            placeholder="Nombre"

                        />
                        <input
                            id="email" 
                            type="email"
                            name="email" 
                            class="field" 
                            placeholder="Email"
                        />
                        <input
                            id="phone" 
                            type="text"
                            name="phone" 
                            class="field" 
                            placeholder="Teléfono"
                        />
                        <textarea 
                            class="field area" 
                            placeholder="Mensaje">    
                        </textarea>
                        <button class="btn">Enviar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact

