import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movi) => console.log(movi));
  }, []);

  return <h1>Yooo</h1>;
}

export default App;
