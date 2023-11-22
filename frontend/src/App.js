import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

library.add(fas, faTwitter, faFontAwesome)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="/UserList" element={[<Navbar/>,<UserList/>]}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
