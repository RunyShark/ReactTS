import {
  // Conunter,
  // ConunterBy,
  // ConunterEffec,
  // ConunterHook,
  // ConunterReducerComponent,
  ConunterReducerComponentRefactorizado,
} from "./index/index";
function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      {/* <Conunter value={15} />
      <ConunterBy />
      <ConunterEffec />
      <ConunterHook /> */}
      <ConunterReducerComponentRefactorizado />
    </>
  );
}

export default App;
