import { ArrowDownLeft } from "tabler-icons-react";
import { CardsContent } from "../MockedData";
import nahuelCempellin from "../assets/NahuelCempellinCV.pdf";

const Proyectos = () => {
  return (
    <div className=" w-[80%] flex items-center justify-center flex-col p-4 max-[800px]:w-full">
      <div className="p-2 flex items-center justify-center flex-col w-[80%] max-[800px]:w-full">
        <h1 className="text-xl font-bold">¡Bienvenido a mi portfolio!</h1>
        <p className="p-6 font-light text-center">
          Aquí podrás ver una variedad de proyectos personales y profesionales
          en los cuales estuve participando este último año.{" "}
          <strong>¡Espero que sean de tu agrado!</strong>
        </p>
        <div className="p-4 w-[80%] mb-2 flex items-center justify-around">
          <a
            className="bg-white font-bold rounded-xl pl-6 pr-6 pt-1 pb-1 text-black"
            href={nahuelCempellin}
            download="NahuelCempellinCV.pdf"
          >
            Descargar Cv
          </a>
        </div>
      </div>

      <div className="w-full min-h-[150vh] flex items-center justify-center  ">
        <section
          className="w-full min-h-[150vh]  grid gap-10 md:grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 max-[640px]:min-h-[350vh]  "
          id="banish-box"
        >
          {CardsContent.map((el, i) => {
            return (
              <article
                key={i}
                className="w-[100%] h-[180px]   relative max-[600px]:mb-32 min-[1800px]:mb-80"
              >
                <img
                  src={el.image}
                  alt={el.nombre}
                  className="w-full"
                  id="image"
                />
                <div
                  className="  w-full h-[100%] p-3 mt-[-180px] font-bold absolute hidden "
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
                  <div
                    className="w-full overflow-x-scroll overflow-y-hidden p-2"
                    id="card-y-container"
                  >
                    <div className="">
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
                  </div>
                  <p className="p-2 text-sm font-light">{el.descripcion}</p>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Proyectos;
