
import Dropdown from 'react-bootstrap/Dropdown';

function DropDownFarmacias({ horarios = [], sucursales = [] }) {
  return (
    <div className="dropdown-container">

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

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-sucursales" className="dropdown-toggle">
          Sucursales
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {sucursales}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropDownFarmacias;
