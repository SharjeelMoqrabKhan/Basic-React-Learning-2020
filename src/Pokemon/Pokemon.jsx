import React, { useState, useEffect } from "react";
import Axios from "axios";

const Pokemon = () => {
  const [id, setId] = useState(1);
  const [name, setName] = useState();
  const [move, setMove] = useState();

  useEffect(() => {
    const pokemon = async () => {
      const pok = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setName(pok.data.name);
      setMove(pok.data.moves.length);
    };
    pokemon();
  }, [id]);
  return (
    <React.Fragment>
      <h1>Pokemon</h1>
      <h2>
        Id <span style={{ color: "red" }}>{id}</span>
      </h2>
      <h2>
        Selected Pokemon name <span style={{ color: "red" }}>{name}</span>
      </h2>
      <h2>
        {name} Move <span style={{ color: "red" }}>{move}</span>
      </h2>
      <h4>Change Pokemon</h4>
      <select
        onChange={(event) => {
          setId(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="25">25</option>
      </select>
    </React.Fragment>
  );
};

export default Pokemon;
