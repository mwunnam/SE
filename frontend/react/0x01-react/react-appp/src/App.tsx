import ListGroup from "./Components/ListGroup";
function App() {
   let items = ["Michael", "Kojo", "Kofi", "Kuukua", "Adjoa"];
  return <div><ListGroup items={items} heading="Names" /></div>
}

export default App;