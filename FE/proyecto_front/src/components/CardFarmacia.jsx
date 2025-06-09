import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DropDownFarmacias from './DropDownFarmacias';
import "../styles/farmacia.css"
import { blue } from '@mui/material/colors';


function CardFarmacia({nombre_Farmacia,direccion_Farmacia,telefono_Farmacia,imagen, horarios}) {
    
  return (
    <>
      <Card id= "dee"sx={{ maxWidth: 220 }}>
           <CardMedia
            component="img"
            className='imagenquenosequierecambiar'
            alt={nombre_Farmacia}
            
            image={imagen}
   />  
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {nombre_Farmacia}
        </Typography>
        <Typography variant="body" sx={{ color: 'text.secondary' }}>
           {direccion_Farmacia} - {telefono_Farmacia}
        </Typography>
       </CardContent>
        <CardActions>
          <Button id="deee" size="smaller">hola</Button>
          <DropDownFarmacias horarios={horarios} /> 
        </CardActions>
       </Card>
        
    </>

    
  );
}
export default CardFarmacia