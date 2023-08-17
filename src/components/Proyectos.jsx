import { ArrowDownLeft } from "tabler-icons-react";
import { CardsContent } from "../MockedData";

const Proyectos = () => {
  return (
    <div className=" w-[80%] flex items-center justify-center flex-col p-4 max-[800px]:w-full">
      <div className="p-2 flex items-center justify-center flex-col w-[80%] max-[800px]:w-full">
        <h1 className="text-xl font-bold">¡Bienvenido a mi portafolios!</h1>
        <p className="p-6 font-light ">
          Aquí podrás ver una variedad de proyectos personales y profesionales
          en los cuales estuve participando este último año.{" "}
          <strong>¡Espero que sean de tu agrado!</strong>
        </p>
      </div>

      <div className="w-full flex items-center justify-center ">
        <ul className="w-full min-h-[110vh]  grid gap-5 md:grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 ">
          {CardsContent.map((el, i) => {
            return (
              <li key={i} className="w-full h-[150px] relative mb-32">
                <img
                  src={el.image}
                  alt={el.nombre}
                  className="w-full"
                  id="image"
                />
                <div
                  className=" w-full h-[100%] p-3 mt-[-135px] font-bold absolute flex flex-col items-cemter justify-start"
                  id="bg"
                >
                  <a
                    className="flex items-center decoration-solid pl-2"
                    href={el.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {el.nombre} <ArrowDownLeft className="rotate-180" />
                  </a>
                  <div>
                    {el.tecnologias.map((text, i) => {
                      return (
                        <a
                          key={i}
                          className="font-light text-sm bg-white text-black ml-2 p-1 rounded-sm"
                        >
                          {text}
                        </a>
                      );
                    })}
                  </div>
                  <p className="p-2 text-sm font-light">{el.descripcion}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Proyectos;
