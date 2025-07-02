
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../styles/plan.css';

import { useState,useEffect, } from 'react';
import {PayPalScriptProvider,PayPalButtons} from "@paypal/react-paypal-js"

function PlanComprar() {

const location = useLocation();
const [precioVenta,SetPrecioVenta] = useState()



    useEffect(() => {
        async function cargarLocation() {
            SetPrecioVenta(location.state.price)
        }
        cargarLocation();
    }, []);

const initianlOptions ={
        "clientId":"AYn5GQDaEORz5rK1WX5eLuo2xeMcwHvKn9VDWJAatOcXArvWADmDN2ykf16K9xkkpPKxB1yh_zNFQzG3",
         currency:"USD",
         intent:"capture"
    }

    const createOrder = (data,actions)=> {
              return actions.order.create({
                purchase_units:[
                    {
                        amount:{
                            currency:"USD",
                            value:precioVenta
                        }
                    }
                ]
            })
        }
        const onApprove = (data,actions)=> {
          return actions.order.capture().then(function(details){
            alert("Pago Completado" + details.payer.name.given_name)
          })
        }
        const onCancel = () => {
            alert("Pago Cancelado");
        };

        
      return (
        <div className="body3" >
            <nav className="nav-bar2">
            <Link to="/PagInicio" className="nav-link2">Inicio</Link>
            <Link to="/Nosotros" className="nav-link2">Nosotros</Link>
            <Link to="/Contac" className="nav-link2">Contacto</Link>
            </nav>
            <img
             src="https://images.pexels.com/photos/20217786/pexels-photo-20217786.jpeg?auto=compress&cs=tinysrgb&w=800"
             alt="Cirujanos operando en quirófano"
             className="header-image"
            />

            <div className="card tarjeta-plan" style={{ width: "40rem" }}>
                <div className="card-body">
                <h5 className="card-title">Elija el plan mensual que desee</h5>
             <br />
                <p className="card-text m-3">Con la comodidad que brinda un plan seguro para nuestros asociados</p>
            
            <PayPalScriptProvider options={initianlOptions} >
                <PayPalButtons
                style={{
                    layout: "horizontal",
                    color: "blue",
                    shape:"rect",
                    label: "paypal"
                }}
                createOrder={(data,actions)=>createOrder(data,actions)}
                onApprove={(data,actions)=> onApprove(data,actions)}
                onCancel={onCancel}
                />
            </PayPalScriptProvider>
            
            </div>
        </div>

            
        </div>
      )
    }
    export default PlanComprar;







    
