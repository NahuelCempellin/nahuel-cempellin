import { ArrowDownLeft } from "tabler-icons-react";
import { CardsContent } from "../MockedData";
import nahuelCempellin from "../assets/proyectos/NahuelFelipeCempellin_CV.pdf";
import Gallery from "./ProyectsContent/ProyectsContent";

const Proyectos = () => {
  return (
    <div className=" w-[80%]  min-h-[250vh] flex items-center justify-start flex-col p-4 max-[800px]:w-full">
      <div className="p-2 flex items-center justify-center flex-col w-[80%] max-[800px]:w-full">
        <h2 className="text-2xl font-bold text-[#34BEFC]">¡Bienvenido a mi portfolio!</h2>
        <p className="p-6 font-light text-center">
  🚀 ¡Bienvenido a mi portafolio! Soy Nahuel Cempellin, desarrollador fullstack con 2 años de experiencia creando aplicaciones web. Aquí encontrarás una selección de proyectos personales y profesionales que destacan mi enfoque en soluciones innovadoras y funcionales. Explora mi trabajo y descubre cómo transformo ideas en software de calidad. <strong>¡Disfruta el recorrido! 🌟</strong>
</p>

        <div className="p-4 w-[80%] mb-2 flex items-center justify-around ">
          <a
            className="bg-white font-bold rounded-xl pl-6 pr-6 pt-1 pb-1 text-black"
            href={nahuelCempellin}
            download="NahuelCempellinCV.pdf"
          >
            Descargar Cv
          </a>
        </div>
      </div>

      <div className="w-full min-h-screen flex items-start justify-center ">
        
             <Gallery cardsContent={CardsContent} />
          
      </div>
    </div>
  );
};

export default Proyectos;
