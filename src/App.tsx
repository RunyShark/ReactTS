import { Conunter, ConunterBy } from "./index/index";
function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Conunter value={15} />
      <ConunterBy />
    </>
  );
}

export default App;
