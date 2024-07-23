import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route,Routes } from "react-router-dom";
import Vehicle from "./components/Vehicle";
import Services from "./components/Services";
import AddVehicle from "./components/AddVehicle";
import UpdateVehicle from "./components/UpdateVehicle";


function App(){
  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vehicles" element={<Vehicle/>}/>
      <Route path="/add-list" element={<AddVehicle/>}/>
      <Route path="/update-vehicle/:id" element={<UpdateVehicle/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    <Footer/>
    </>
  )
}


export default App;

