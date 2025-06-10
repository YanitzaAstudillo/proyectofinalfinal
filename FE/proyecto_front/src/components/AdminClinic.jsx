
import '../styles/adminClinic.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import llamadosClinic from '../services/llamadosClinic.jsx';

function adminClinic() {
    const [clinicas, setClinicas]=useState([]);
    const [nombre_ClinicaEd, setNombre_ClinicaEd]= useState("");
    const [direccion_ClinicaEd, setDireccion_ClinicaEd]= useState("");
    const [horarioEd, setHorarioEd]= useState("");
    const [telefono_ClinicaEd, setTelefono_ClinicaEd]= useState("");
    const [nombre_provinciaEd, setNombre_provinciaEd]= useState("");

    useEffect(() => {
                async function cargarClinicas() {
                    const datax = await llamadosClinic.getClinicas();
                        setClinicas(datax);
                    }
                    cargarClinicas();
            }, []);


}