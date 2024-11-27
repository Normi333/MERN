import { UseUser } from "../App";

export function ActionButton() {
  const value = UseUser();
  return (
    <>
      {value.role.includes("admin") && (
        <>
          <button>edit</button>
          <button>delete</button>
        </>
      )}
      <button>view</button>
    </>
  );
}