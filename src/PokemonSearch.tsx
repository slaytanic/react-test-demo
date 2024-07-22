import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "./api";
import { Card } from "./Card";

export function PokemonSearch() {
  const [name, setName] = useState("ditto");
  const { isPending, isError, isSuccess, data, error } = useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemon(name),
  });

  return (
    <>
      <label>
        Pokemon name:
        <input
          type="text"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        ></input>
      </label>
      {isPending && <span>Loading...</span>}
      {isError && <span>Error: {error.message}</span>}
      {isSuccess && data.pokemon !== undefined ? (
        <Card name={data.pokemon.name} order={data.pokemon.order} />
      ) : (
        !isPending && <span>Not found</span>
      )}
    </>
  );
}
