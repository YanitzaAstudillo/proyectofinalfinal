
import CardFarmacia from "./CardFarmacia";
import LaBombaImg from '../assets/LaBomba.png';
import farmaValue from '../assets/farmaValue.jpg';
import Saba from '../assets/Saba.png';

const ListCardFarmacia = ({ farmacias }) => {
  console.log(farmacias);

  const imagenesFarmacias = {
    1: LaBombaImg,
    2: farmaValue,
    3: Saba,
  };

  return (
    <>
      {farmacias.map((farmacia) => (
        <CardFarmacia
          key={farmacia.id}
          nombre_Farmacia={farmacia.nombre_Farmacia}
          direccion_Farmacia={farmacia.direccion_Farmacia}
          telefono_Farmacia={farmacia.telefono_Farmacia}
          imagen={imagenesFarmacias[farmacia.id]}
          horarios={farmacia.horarios}
        />
      ))}
    </>
  );
};

export default ListCardFarmacia;
