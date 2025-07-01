
import React from "react";
import emailjs from '@emailjs/browser';
import '../styles/contac.css';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from "react";
import porta from '../assets/porta.png';


export const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs
      .sendForm('service_sq3tcej', 'template_i0wdhot', form.current, {
        publicKey: 'fvzfcVtZJftSwctPO',
      })
      .then(
        () => {
          

          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }
  const navigate = useNavigate()


  return (
    <div className='booody'style={{ backgroundImage: `url(${porta})` }}>
      <div className="form-layout">
      <img src="https://images.pexels.com/photos/11198234/pexels-photo-11198234.jpeg" alt="Dos cirujanos" className="ciru"/>
      <>
        <form id="uno" ref={form} onSubmit={sendEmail}>
            <h2 id="cuadro">Contacto</h2>
            <br />
            <div className='field'>
              <label>Name</label>
              <input type="text" name="user_name" />
            </div>
            <div className='field'>
                <label>Email</label>
                <input type="email" name="user_email" />
            </div>
            <div className='field'>
               <label>Message</label>
            </div>
              <textarea name="message" />
            <br />
             <br />
            <input type="submit" value="Send" />
        </form>
      </>
    <nav className="nav-bar2">
      <Link to="/PagInicio" className="nav-link2">Inicio</Link>
      <Link to="/Nosotros" className="nav-link2">Nosotros</Link>
      <Link to="/Contac" className="nav-link2">Contacto</Link>
    </nav>
      </div>
      
    </div>
    
  )
};
export default Contacto