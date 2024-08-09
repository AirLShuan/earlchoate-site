'use client'

import axios from 'axios';
import { useState, useEffect } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

interface Pokemon {
  game_indices: [
    {
      game_index: number,
      version : {
        name: string, 
        url: string
      }
    }
  ];
  
  species: {
    name: string, 
    url: string
  };
}

export default function Page() {
  const [pokemon, setPokemon] = useState({});
  const [error, setError] = useState('');
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/wooper')
      .then((res) => {
        setPokemon(res.data),
        console.log(res.data)
      })
      .catch(err => setError(err.message));

  }, [])

  console.log("Pokemon:")
  console.log(pokemon)
  return (
    <>
      {error && <p className='text-danger'>{error}</p>}
      <ul>
        <li key={pokemon.game_indices[5].game_index}>{pokemon.species.name}</li>
      </ul>
    </>
  );
}