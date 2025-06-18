import '../styles/adminClinic.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import llamadosClinic from '../services/llamadosClinic.jsx';
import Swal from 'sweetalert2';
import Grafico from './grafico.jsx';

function AdminClinic() {
    const [clinicas, setClinicas] = useState([]);
    const [provincias, setProvincias] = useState([]);

    const [nombre_ClinicaEd, setNombre_ClinicaEd] = useState("");
    const [direccion_ClinicaEd, setDireccion_ClinicaEd] = useState("");
    const [horarioEd, setHorarioEd] = useState("");
    const [telefono_ClinicaEd, setTelefono_ClinicaEd] = useState("");
    const [nombre_ProvinciaEd, setNombre_ProvinciaEd] = useState("");
    const [idEd, setIdEd] = useState(null);

    useEffect(() => {
        async function cargarClinicas() {
            const datax = await llamadosClinic.getClinicas();
            setClinicas(datax);
        }

        async function cargarProvincias() {
            const res = await fetch('http://127.0.0.1:8000/api/provincias/');
            const data = await res.json();
            setProvincias(data);
            console.log(data);
            
        }

        cargarClinicas();
        cargarProvincias();
    }, []);

    function inicioEdition(clinica) {
        setIdEd(clinica.id);
        setNombre_ClinicaEd(clinica.nombre_Clinica);
        setDireccion_ClinicaEd(clinica.direccion_Clinica);
        setHorarioEd(clinica.horario);
        setTelefono_ClinicaEd(clinica.telefono_Clinica);
        setNombre_ProvinciaEd(clinica.Provincia);
    }

    async function Edittt(id) {
        if (!nombre_ClinicaEd || !direccion_ClinicaEd || !horarioEd || !telefono_ClinicaEd || !nombre_ProvinciaEd) {
            Swal.fire('¡Error!', 'Todos los campos deben estar completos.', 'error');
            return;
        }

        const peticion = await llamadosClinic.updateClinicas(
            nombre_ClinicaEd,
            direccion_ClinicaEd,
            horarioEd,
            telefono_ClinicaEd,
            parseInt(nombre_ProvinciaEd),
            id
        );

        Swal.fire('Clínica actualizada', 'La actualización fue exitosa!', 'success');

        setClinicas(prev =>
            prev.map(clinica =>
                clinica.id === id
                    ? {
                        ...clinica,
                        nombre_Clinica: nombre_ClinicaEd,
                        direccion_Clinica: direccion_ClinicaEd,
                        horario: horarioEd,
                        telefono_Clinica: telefono_ClinicaEd,
                        Provincias: parseInt(nombre_ProvinciaEd)
                    }
                    : clinica
            )
        );
        setNombre_ClinicaEd("");
        setDireccion_ClinicaEd("");
        setHorarioEd("");
        setTelefono_ClinicaEd("");
        setNombre_ProvinciaEd("");
        setIdEd(null);
    }

    function ClinicaElim(id) {
        async function elis(id) {
            const confirm = window.confirm("¿Está seguro de eliminar?");
            if (!confirm) return;

            const delet = await llamadosClinic.deleteClinicas(id);
            if (!delet) {
                setClinicas(prev => prev.filter(clinica => clinica.id !== id));
                Swal.fire("Clínica eliminada", "", "success");
            } else {
                Swal.fire("Error al eliminar", "", "error");
            }
        }
        elis(id);
    }

    return (
        <div className='body8'>
            <div className='container88'>
                <p className='tit'>Panel de Control</p><br /><br />
                <>
                    <Link to={"/Admin"}><button id="boton911">ADMIN USUARIOS</button></Link>
                    <Link to={"/AdminFarm"}><button id="boton181">ADMIN FARMACIAS</button></Link>
                    <Link to={"/AdminClinica"}><button id="boton222">ADMIN CLINICAS</button></Link>
                    <Link to={"/AdminEspecial"}><button id="boton12">ADMIN ESPECIALIDADES</button></Link>
                </>
            </div>

            <div className='dentroo'>
                {clinicas.map((clinica) => (
                    <ul key={clinica.id}>
                        <br />
                        <strong>Nombre Clínica:</strong> {clinica.nombre_Clinica} <br />
                        <strong>Dirección:</strong> {clinica.direccion_Clinica} <br />
                        <strong>Horario:</strong> {clinica.horario} <br />
                        <strong>Teléfono:</strong> {clinica.telefono_Clinica} <br />
                        <strong>Provincia:</strong> {clinica.nombre_Provincia} <br /> {/* ID o nombre, según tu backend */}

                        {idEd === clinica.id && (
                            <>
                                <input id="redo" value={nombre_ClinicaEd} onChange={(e) => setNombre_ClinicaEd(e.target.value)} type="text" /> Nombre<br />
                                <input id="redo" value={direccion_ClinicaEd} onChange={(e) => setDireccion_ClinicaEd(e.target.value)} type="text" /> Dirección<br />
                                <input id="redo" value={horarioEd} onChange={(e) => setHorarioEd(e.target.value)} type="text" /> Horario<br />
                                <input id="redo" value={telefono_ClinicaEd} onChange={(e) => setTelefono_ClinicaEd(e.target.value)} type="text" /> Teléfono<br />

                                <select id="redo" value={nombre_ProvinciaEd} onChange={(e) => setNombre_ProvinciaEd(e.target.value)}>
                                    <option value="">Seleccione una provincia</option>
                                    {provincias.map(prov => (
                                        <option key={prov.id} value={prov.id}>
                                            {prov.nombre_Provincia}
                                        </option>
                                    ))}
                                </select> Provincia<br /><br />
                            </>
                        )}

                        {idEd !== clinica.id && (
                            <button id="boton13" onClick={() => inicioEdition(clinica)}>Editar</button>
                        )}

                        <button id="boton13" onClick={() => Edittt(clinica.id)}>Confirmar edición</button><br />
                        <button id="boton14" onClick={() => ClinicaElim(clinica.id)}>Eliminar</button><br />
                    </ul>
                ))}
                <Grafico clinicas={clinicas}/>
            </div>
        </div>
    );
}

export default AdminClinic;
