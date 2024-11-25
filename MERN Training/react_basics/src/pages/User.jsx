import { useQuery } from "../hooks/useQuery";
export function User() {
  const { state, error, data } = useQuery(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <>
      <h1>User</h1>
      {state === "loading" && <p>loading....</p>}
      {state === "success" && (
        <ul>
          {data.map(({ name }) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
      )}
      {state === "error" && <p>{error}</p>}
    </>
  );
}
