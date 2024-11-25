import { useQuery } from "../hooks/useQuery";

export function Pokemon() {
  const { state, error, data } = useQuery("https://pokeapi.co/api/v2/pokemon");

  return (
    <>
      <h1>Pokemon</h1>
      {state === "loading" && <p>loading....</p>}
      {state === "success" && (
        <ul>
          {data.results.map(({ name }) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
      )}
      {state === "error" && <p>{error}</p>}
    </>
  );
}
