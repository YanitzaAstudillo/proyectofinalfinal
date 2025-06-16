
import React, { useEffect, useState } from 'react';
import llamadosClinic from '../services/llamadosClinic.jsx';
import '../styles/clinicas.css';
import { registerLoading } from 'echarts';

const provincias = [
    "San José",
    "Alajuela",
    "Cartago",
    "Heredia",
    "Guanacaste",
    "Puntarenas",
    "Limón"
];
function Clinic() {
    const [clinicasPorProvincia, setClinicasPorProvincia] = useState("");
    const [traerClinicas, setTraerClinicas] = useState([])

    useEffect(() => {
        async function fetchClinicas() {
            try {
                const clinicas = await llamadosClinic.getClinicas();
                const clinicasFiltradas = clinicas.filter((clinica) => clinica.nombre_provincia === clinicasPorProvincia)
                setTraerClinicas(clinicasFiltradas)
                console.log(clinicasFiltradas);
            } catch (error) {
                console.error("Error cargando clínicas:", error);
            }
        }

        fetchClinicas();
    }, [clinicasPorProvincia]);

    return (
        <div className="body45">
            <select name="" id="" onChange={(e) => setClinicasPorProvincia(e.target.value)}>
                <option value="" disabled selected>Seleccione una provinica para filtrar</option>
                <option value="alajuela">Alajuela</option>
                <option value="limón">Limón</option>
                <option value="cartago">Cartago</option>
                <option value="guanacaste">Guanacaste</option>
                <option value="san josé">San José</option>
                <option value="puntarenas">Puntarenas</option>
                <option value="heredia">Heredia</option>
                </select>
                {traerClinicas.map((clin) => {
                    return (
                        <>
                            <strong>Nombre Clinica:</strong> {clin.nombre_Clinica} <br />
                            <strong>Direccion:</strong> {clin.direccion_Clinica} <br />
                            <strong>Horario:</strong> {clin.horario} <br />
                            <strong>Telefono:</strong> {clin.telefono_Clinica} <br />
                            <strong>Provincia:</strong> {clin.nombre_provincia} <br />
                        </>
                    )
                })}

        </div>
    );
}

export default Clinic;
