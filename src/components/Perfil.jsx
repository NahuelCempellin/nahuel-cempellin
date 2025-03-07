import perfil from "../assets/Images/perfil.jpg";
import {
  BrandGithub,
  BrandInstagram,
  BrandLinkedin,
  MapPin,
} from "tabler-icons-react";

const Perfil = () => {
  return (
    <section className=" w-[80%] p-4 flex items-center justify-center flex-col border-b border-[#343841] max-[552px]:w-[100%]">
      <div className=" flex items-center justify-center w-[600px] max-[552px]:w-[100%] max-[552px]:flex-col">
        <div className="">
          <div className="w-[140px] h-[140px] overflow-hidden flex items-center justify-center rounded-full border-2">
            <img src={perfil} alt="perfil image" className="w-full" />
          </div>
          <div className="flex items-center justify-around w-full  p-2">
            <a
              className="bg-black w-9 rounded-[100%] h-9 p-1 text-white border flex items-center justify-center"
              href="https://github.com/NahuelCempellin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandGithub />
            </a>
            <a
              className="bg-[#0a66c2] text-white w-9 rounded-[100%] h-9 p-1 text-black flex items-center justify-center"
              href="https://www.linkedin.com/in/nahuel-felipe-cempellin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandLinkedin />
            </a>
            <a
              className="bg-gradient-to-b from-[#4654cb] via-[#f70494] to-[#f7ce68] text-white w-9 rounded-[100%] h-9 p-1 text-black flex items-center justify-center"
              href="https://www.instagram.com/nahuelcempellin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandInstagram />
            </a>
          </div>
        </div>
        <div className=" ml-4 p-2  flex items-start justify-center flex-col max-[552px]:items-center ">
          <h1 className="text-3xl font-extrabold text-[#34BEFC]">
            Nahuel Cempellin
          </h1>
          <p className="font-light">🗓️ 30 años</p>
          <p className="font-light">👨🏻‍💻 Fullstack developer / UX designer</p>
          <p className="font-light flex items-center justify-center border-b pb-4">
            <MapPin color="#34BEFC" />
            Vicente Lopez, Buenos aires, Argentina
          </p>
          <p className="w-full -t mt-2 font-light text-sm p-1 pb-4">
           Artista marcial, un apasionado por la tecnologia y el crecimiento personal. Fullstack
            developer con preferencias por el frontend.
          </p>
          <div className="w-fit ">
            
            <div className="flex flex-wrap justify-center items-center gap-2">
              <p className="px-2 py-1 bg-gray-200 text-black rounded mb-1">#Typescript</p>
              <p className="px-2 py-1 bg-gray-200 text-black rounded mb-1">#Javascript</p>
              <p className="px-2 py-1 bg-gray-200 text-black rounded mb-1">#Node.js</p>
              <p className="px-2 py-1 bg-gray-200 text-black rounded mb-1">#Github</p>
              
          </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Perfil;
