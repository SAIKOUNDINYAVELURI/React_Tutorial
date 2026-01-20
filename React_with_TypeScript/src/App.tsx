import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  // eslint-disable-next-line prefer-const
  let items = ["Mumbai", "Hyderabad", "Benguluru", "Chennai", "Vizag"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlert] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <br></br>
      <br></br>
      {alertVisible && (
        <Alert onClose={() => setAlert(false)}>
          {" "}
          <h1>Alert</h1>
        </Alert>
      )}

      <br></br>
      <br></br>
      <Button color="outline-danger" onClick={() => setAlert(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
