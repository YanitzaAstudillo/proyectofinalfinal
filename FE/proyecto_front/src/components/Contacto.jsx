
import React from "react";
import emailjs from '@emailjs/browser';
import '../styles/contac.css';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from "react";


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
  const navig = useNavigate()


  return (
    <div className="todo">
    <img src="../src/assets/portada3.jpg" alt="portada" width="1370" height="750" />

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
      <Link to="/PagInicio" style={{ color: 'white', textDecoration: 'none' }} className='enlace_sin_linea'>INICIO</Link>
      <Link to="/Nosotros" style={{ color: 'white', textDecoration: 'none' }} className='enlace_sin_lineaa'>NOSOTROS</Link>
      <Link to="/Contac" style={{ color: 'white', textDecoration: 'none' }} className='enlace_sin_linea1'>CONTACTO</Link>
    </div>
    
  )
};
export default Contacto