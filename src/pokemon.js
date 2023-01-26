import React, {useState, useEffect} from "react";
import axios from "axios";
import PokeCard from "./card";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';

const Pokemon = () =>{
const [pokedex, setpokedex] = useState(1);
const [num, setnum] = useState(1);
const [name, setname] = useState('');
const [moves, setmoves] = useState('');
const [imgpath, setimgpath] = useState('');

const onsubmit = (event)=>{
    event.preventDefault();
    
    if (!isNaN(pokedex)) {
        setnum(pokedex);
      }
}
const selectpokemon = (event) =>{
    setpokedex(event.target.value);
}

useEffect(()=>{
    async function pokedata(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        console.log(res);
        setname(res.data.name);
        setmoves(res.data.moves.length);
        var temp_val;
        if(num<10){
            temp_val = `00${num}`;
        }else if(num>10 && num<100){
            temp_val = `0${num}`;
        }else{
            temp_val = num;
        }
        setimgpath(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${temp_val}.png`);
    }

    pokedata();
});

return(
    <>
    <div className="maindiv">   
    <h1>PokePedia</h1>
    <br />
    <h2>Enter Pokedex Number</h2>
    <br />
    <form onSubmit={onsubmit}>
    <TextField InputProps={{ sx: { height: 40} }} id="outlined-basic" placeholder="Pokemon" variant="outlined" onChange={selectpokemon}/> &emsp;
    <Button sx={{height:'40'}} variant="contained" type="submit">Submit</Button>
    </form>
    <br />
    <PokeCard imagepath={imgpath} index={num} pokename={name} movescount={moves}/>
    </div>
    </>
);

}

export default Pokemon;