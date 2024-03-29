import { ArrowDownLeft } from "tabler-icons-react";
import { CardsContent } from "../MockedData";
import nahuelCempellin from "../assets/NahuelCempellinCV.pdf";

const Proyectos = () => {
  return (
    <div className=" w-[80%]  min-h-[250vh] flex items-center justify-start flex-col p-4 max-[800px]:w-full">
      <div className="p-2 flex items-center justify-center flex-col w-[80%] max-[800px]:w-full">
        <h2 className="text-2xl font-bold text-[#34BEFC]">¡Bienvenido a mi portfolio!</h2>
        <p className="p-6 font-light text-center">
        🚀 ¡Bienvenido a mi portafolio! Soy Nahuel Cempellin, un apasionado desarrollador fullstack con 2 años de experiencia construyendo emocionantes aplicaciones web. Aquí encontrarás una fascinante variedad de proyectos personales y profesionales en los que he estado trabajando durante el último año. Desde aplicaciones innovadoras hasta soluciones prácticas, cada proyecto refleja mi dedicación y habilidades técnicas. ¡Espero que te encanten tanto como a mí! 🌟 En este espacio, estoy encantado de compartir mis logros y hacer una exposición detallada de mis proyectos para que puedas explorar mi trabajo y descubrir todo lo que tengo para ofrecer en el mundo del desarrollo web. <strong>¡Adelante, disfruta de tu recorrido por mi portafolio! 🚀</strong>
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
        <section
         className='w-full  grid grid-cols-3 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1'
          id="banish-box"
        >
          {CardsContent.map((el, i) => {
            return (
              <article
                key={i}
                className="w-[calc(33.333% - 10px)] mb-1 mr-1  relative "
              >
                <img
                  src={el.image}
                  alt={el.nombre}
                  className="w-full"
                  id="image"
                />
                <div
                  className="w-full h-[190px] p-3 mt-[-190px] font-bold absolute hidden "
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
