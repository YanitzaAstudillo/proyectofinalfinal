

import '../styles/farmacia.css';

function Farma() {
    const lista = [
        { nombre: "farma1" },
        { nombre: "farma2" },
        { nombre: "farma3" },
    ];

    return (
        <div>
            <ul>
                {lista.map((farm) => (
                    <li key={farm.nombre}>{farm.nombre}</li>
                ))}
            </ul>

            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-danger dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >Dan
                </button>
                <button type="button" class="btn btn-outline-primary">Primary</button>
                <button type="button" class="btn btn-outline-info">Info</button>
                <button type="button" class="btn btn-outline-light">Light</button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>Action</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>Another action</a></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>Something else here</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>Separated link</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Farma;