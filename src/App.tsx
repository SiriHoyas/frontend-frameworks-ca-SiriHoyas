import { useState } from "react";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className="App">
      <Button className="primary" type="submit" label="I was made dynamically" onClick={() => console.log("hei")} />
      <Button className="secondary" type="button" label="Me too!" onClick={() => {}} />
    </div>
  );
}

export default App;
