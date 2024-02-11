import "./App.css";

import Perfil from "./components/Perfil";
import Proyectos from "./components/Proyectos";

function App() {
  return (
    <div className=" w-[100%] min-h-screen  text-white flex flex-col items-center ">
      <header className="w-full  flex items-center justify-center p-4"></header>

      <Perfil />

      <Proyectos />
    </div>
  );
}

export default App;
