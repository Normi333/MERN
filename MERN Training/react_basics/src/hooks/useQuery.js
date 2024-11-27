import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "success":
      return { state: "success", error: null, data: action.payload };
    case "error":
      return { state: "error", error: action.payload, data: null };
  }
}

export function useQuery(url) {
  // const [state, setState] = useState("loading");
  // const [error, setError] = useState();
  // const [data, setData] = useState();

  const [state, dispatch] = useReducer(reducer, {
    state: "loading",
    error: null,
    data: null,
  });

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // throw new Error("Time limit exceeded")
        // setState("success");
        // setData(data);
        dispatch({ type: "success", payload: data });
      })
      .catch((err) => {
        // setState("error");
        // setError(err.message);
        dispatch({ type: "error", payload: err.message });
      });
  }, [url]);

  return state;
}
