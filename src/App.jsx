import './App.css';
import { FirstComponent } from "./Components/FirstComponent";
import { SecondComponent } from "./Components/SecondComponent";
import { Avatars } from "./Components/Avatars";

function App() {

  return <div className='' width="100%" >
  <h2>Hooks</h2>
  <hr width="100%"/>
  <FirstComponent />
  <SecondComponent />
  <Avatars />
  </div>;
}

export default App;
