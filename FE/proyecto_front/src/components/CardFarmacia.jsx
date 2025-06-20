import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DropDownFarmacias from './DropDownFarmacias';
import '../styles/farmacia.css';

function CardFarmacia({ nombre_Farmacia, direccion_Farmacia, telefono_Farmacia,imagen,horarios,sucursales}) {
  return (
    <Card className="card-farmacia">
      <CardMedia
        component="img"
        className="card-img"
        alt={nombre_Farmacia}
        src={imagen}
      />
      <img className="card-img-mobile" src={imagen} alt={nombre_Farmacia} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {nombre_Farmacia}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {direccion_Farmacia}<br />{telefono_Farmacia}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="boton-waze" href="https://www.waze.com/es/live-map" target="_blank">
          WAZE
        </Button>
        <DropDownFarmacias horarios={horarios} sucursales={sucursales} />
      </CardActions>
    </Card>
  );
}

export default CardFarmacia;
