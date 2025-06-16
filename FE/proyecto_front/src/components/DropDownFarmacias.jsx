
import Dropdown from 'react-bootstrap/Dropdown';

function DropDownFarmacias({ horarios = [], sucursales = [] }) {
  return (
    <div className="dropdown-container">
      {/* Dropdown de Horarios */}
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-horarios" className="dropdown-toggle">
          Horario
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {horarios.length > 0 ? (
            horarios.map((horario, index) => (
              <Dropdown.Item key={index} className="horario-item">
                {horario}
              </Dropdown.Item>
            ))
          ) : (
            <Dropdown.Item className="horario-item">No disponibles</Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>

      {/* Dropdown de Sucursales */}
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-sucursales" className="dropdown-toggle">
          Sucursales
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {sucursales.length > 0 ? (
            sucursales.map((sucursal, index) => (
              <Dropdown.Item key={index} className="sucursal-item">
                {sucursal}
              </Dropdown.Item>
            ))
          ) : (
            <Dropdown.Item className="sucursal-item">No disponibles</Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropDownFarmacias;
