import './App.css';
import { FirstComponent } from "./Components/FirstComponent";
import { SecondComponent } from "./Components/SecondComponent";
import { Avatars } from "./Components/Avatars";
import { useState } from 'react';

function App() {

  const [ persons, setPersons ] = useState([
    {
      id: 1,
      name: "Oscar Eduardo",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
      id: 2,
      name: "Carolina",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      id: 3,
      name: "Catalina",
      role: "UI/UX Designer",
      img: "https://bootdey.com/img/Content/avatar/avatar8.png",
    },
  
  ]);

  return <div className='app' width="100%" >
    <div className="row">
      <div className="col">
        <h1>ToDo</h1>
        <input type="text" className='form-control' />
      </div>
      <div className="col">
        <h1>List ToDo</h1>
        <div className='bg-primary-subtle'>
          Mi todo
        </div>
      </div>
    </div>
    {/* <div className='container'>
      <Avatars persons={persons} setPersons={setPersons}/>
    </div> */}
  {/* <FirstComponent />
  <SecondComponent /> */}
  </div>;
}

export default App;
