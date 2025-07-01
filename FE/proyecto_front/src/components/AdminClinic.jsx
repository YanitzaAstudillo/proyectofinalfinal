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
            ...clinica,nombre_Clinica: nombre_ClinicaEd,direccion_Clinica: direccion_ClinicaEd,horario: horarioEd, telefono_Clinica: telefono_ClinicaEd, Provincias: parseInt(nombre_ProvinciaEd)
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
            if (delet) {
                setClinicas(prev => prev.filter(clinica => clinica.id !== id));
                Swal.fire("Clínica eliminada", "", "success");
            } else {
            Swal.fire("Error al eliminar", "", "error");
            }
        }
        elis(id);
    }


    console.log(provincias);
    
    return (
        <div className='body8'>
            <div className='container88'>
                <p className='tit'>Panel de Control</p><br /><br />
                <>
                 <Link to={"/Admin"}><button id="boton911">ADMIN USUARIOS</button></Link>
                 <Link to={"/AdminFarm"}><button id="boton181">ADMIN FARMACIAS</button></Link>
                 <Link to={"/AdminClinica"}><button id="boton222">ADMIN CLINICAS</button></Link>
                 <Link to={"/AdminEspecial"}><button id="boton12">ADMIN ESPECIALIDADES</button></Link>
                 <Link to={"/AdminSocios"}><button id="boton102">ADMIN SOCIOS</button></Link>
                <>
                  <div className="bodies">
                    <button className="card human-resources" href="/">
                     <div className="overlay" />
                     <div className="circle">
                     <svg xmlnsXlink="/" xmlns="" version="1.1" viewBox="1855 26 66 77" height="77px" width="66px">
                     <desc>Created with Sketch.</desc>
                     <defs />
                     <g transform="translate(1855.000000, 26.000000)" fillRule="evenodd" fill="none" strokeWidth={1} stroke="none" id="Page-1">
                     <path fill="#AFCEFF" id="Fill-8" d="M4.28872448,42.7464904 C4.28872448,39.3309774 5.4159227,33.7621426 6.40576697,30.4912557 C10.5920767,32.1098991 14.3021264,35.1207513 18.69596,35.1207513 C30.993618,35.1207513 42.5761396,28.7162991 49.9992251,17.9014817 C56.8027248,23.8881252 60.8188351,33.0463165 60.8188351,42.7464904 C60.8188351,60.817447 47.6104607,76.6693426 32.5537798,76.6693426 C17.4970989,76.6693426 4.28872448,60.817447 4.28872448,42.7464904" />
                     <path fill="#3B6CB7" id="Fill-10" d="M64.3368879,31.1832696 L62.8424171,46.6027478 L60.6432609,46.7824348 L59.8340669,34.6791304 L47.6573402,25.3339478 C44.2906753,34.068487 34.3459503,40.2903304 24.4684093,40.2903304 C17.7559812,40.2903304 10.046244,37.4168 5.80469412,32.8004522 L5.80469412,34.6791304 L5.80469412,46.6027478 L4.28932167,46.6027478 L1.30187314,27.8802435 C1.30187314,20.9790957 3.52342407,15.5432 7.27229127,11.3578087 C13.132229,4.79558261 21.8124018,0.0492173913 30.5672235,0.342852174 C37.4603019,0.569286957 42.6678084,2.72991304 50.8299179,0.342852174 C51.4629405,1.44434783 51.8615656,3.00455652 51.5868577,5.22507826 C51.4629405,6.88316522 51.2106273,7.52302609 50.8299179,8.45067826 C58.685967,14.1977391 64.3368879,20.7073739 64.3368879,31.1832696" />
                     <path fill="#568ADC" id="Fill-13" d="M58.9405197,54.5582052 C62.0742801,54.8270052 65.3603242,52.60064 65.6350321,49.5386574 C65.772386,48.009127 65.2617876,46.5570226 64.3182257,45.4584487 C63.3761567,44.3613357 62.0205329,43.6162922 60.4529062,43.4818922 L58.9405197,54.5582052 Z" />
                     <path fill="#568ADC" id="Fill-15" d="M6.32350389,54.675367 C3.18227865,54.8492104 0.484467804,52.4957496 0.306803449,49.4264626 C0.217224782,47.8925496 0.775598471,46.4579757 1.75200594,45.3886191 C2.7284134,44.3192626 4.10792487,43.6165843 5.67853749,43.530393 L6.32350389,54.675367 Z" />
                     </g>
                     </svg>
                     </div>
                     <p><Link to="/" style={{ color: 'white', textDecoration: 'none' }} >CERRAR SESION</Link></p>
                    </button>
                    </div>
                </>
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
                <strong>Provincia:</strong> {clinica.nombre_Provincia} <br />

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
