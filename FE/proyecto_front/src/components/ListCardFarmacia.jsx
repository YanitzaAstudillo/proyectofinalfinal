
import CardFarmacia from "./CardFarmacia";

const ListCardFarmacia = ({ farmacias }) => {



  return (
    <>
      {farmacias.map((farmacia) => (
        <CardFarmacia
          key={farmacia.id}
          nombre_Farmacia={farmacia.nombre_Farmacia}
          direccion_Farmacia={farmacia.direccion_Farmacia}
          telefono_Farmacia={farmacia.telefono_Farmacia}
          imagen={farmacia.img}
          horarios={farmacia.horarios}
          sucursales={farmacia.sucursales_Farmacia}
        />
      ))}
    </>
  );
};

export default ListCardFarmacia;
