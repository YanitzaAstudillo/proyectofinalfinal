import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DropDownFarmacias from './DropDownFarmacias';


function CardFarmacia({nombre_Farmacia,direccion_Farmacia,telefono_Farmacia,imagen, horarios}) {
    
  return (
    <>
            <Card sx={{ maxWidth: 320 }}>
                <CardMedia
                component="img"
                alt={nombre_Farmacia}
                height="140"
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
                <Button size="small">Share</Button>
                <DropDownFarmacias horarios={horarios} /> 
             </CardActions>
            </Card>
        
    </>

    
  );
}
export default CardFarmacia