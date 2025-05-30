import Dropdown from 'react-bootstrap/Dropdown';

function DropDownFarmacias({ horarios }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Horarios
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {horarios.length > 0 ? (
          horarios.map((horario, index) => (
            <Dropdown.Item key={index}>{horario}</Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item>No hay horarios disponibles</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownFarmacias;
