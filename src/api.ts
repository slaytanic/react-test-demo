type Pokemon = {
  name: string;
  order: number;
};

type PokemonApiResponse = {
  status: "ok" | "error";
  pokemon?: Pokemon;
};

export function getPokemon(name: string): Promise<PokemonApiResponse> {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
    async (response) => {
      if (!response.ok) {
        return { status: "error" };
      } else {
        return { status: "ok", pokemon: await response.json() };
      }
    }
  );
}
