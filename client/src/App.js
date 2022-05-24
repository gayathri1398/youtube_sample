
import { Routes,Route } from "react-router-dom";

// components
import SinglePage from "./Page/SinglePage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" exact element={<SinglePage/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
