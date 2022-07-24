import { Conunter, ConunterBy, ConunterEffec } from "./index/index";
function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Conunter value={15} />
      <ConunterBy />
      <ConunterEffec />
    </>
  );
}

export default App;
