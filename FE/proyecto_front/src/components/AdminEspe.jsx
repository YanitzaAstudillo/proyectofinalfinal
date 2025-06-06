
import '../styles/adminEspe.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import llamadosEspecial from '../services/llamadosEspecial';
import Swal from 'sweetalert2';


function AdminEspe() {
        const[especialidades, setEspecialidades]=useState([]);
        const[nombre_EspecialidadEd, setNombre_EspecialidadEd]=useState("");
        const[nombre_Medico_ClinicaEd, setNombre_EspecialidadEd]=useState("");

        const[direccion_FarmaciaEd, setDireccion_FarmaciaEd]= useState("");
        const[telefono_FarmaciaEd, setTelefono_FarmaciaEd]= useState("");
        const[horario_FarmaciaEd, setHorario_FarmaciaEd]=useState("");
        const [idEdit, setIdEdit] = useState(null)




}