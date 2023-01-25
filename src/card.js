import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function PokeCard(props) {
    
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <Card sx={{ maxWidth: 300, minWidth:300}}>
      <CardMedia
        component="img"
        height="200"
        image={props.imagepath}
        alt="Image not available"
        sx={{objectFit: "contain"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>Pokedex No : {props.index}</b>
          <br/>
          <b>Pokemon Name : {props.pokename}</b>
          <br/>
          <b>Pokemon Moves : {props.movescount}</b>
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}