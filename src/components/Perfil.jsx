import perfil from "../assets/Images/perfil.jpg";
import {
  BrandGithub,
  BrandInstagram,
  BrandLinkedin,
  MapPin,
} from "tabler-icons-react";

const Perfil = () => {
  return (
    <section className=" w-[60%] p-4  flex items-center justify-center flex-col border-b border-[#343841] max-[552px]:w-[100%]">
      <div className=" flex items-center justify-around w-[500px] max-[552px]:w-[100%] max-[552px]:flex-col">
        <div className="">
          <div className="w-[130px] h-[130px] overflow-hidden flex items-center justify-center rounded-[100%] border-4 border-[#34befc]">
            <img src={perfil} alt="perfil image" className="mt-16" />
          </div>
          <div className="flex items-center justify-around w-full  p-2">
            <a className="bg-white w-8 rounded-[100%] h-8 p-1 text-black flex items-center justify-center">
              <BrandGithub />
            </a>
            <a className="bg-white w-8 rounded-[100%] h-8 p-1 text-black flex items-center justify-center">
              <BrandLinkedin />
            </a>
            <a className="bg-white w-8 rounded-[100%] h-8 p-1 text-black flex items-center justify-center">
              <BrandInstagram />
            </a>
          </div>
        </div>
        <div className=" ml-4 p-2  flex items-start justify-center flex-col ">
          <p className="text-xl font-extrabold text-[#34BEFC]">
            Nahuelcempellin
          </p>
          <p className="font-light">👨🏻‍💻 Fullstack developer / UX designer</p>
          <p className="font-light">🗓️ 28 años</p>
          <p className="font-light flex items-center justify-center">
            <MapPin />
            Mar del plata, Buenos aires, Argentina
          </p>
          <p className="w-full border-t mt-2 font-light text-sm p-2">
            Un apasionado por la tecnologia y el crecimiento personal. Fullstack
            developer con preferencias por el frontend.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Perfil;
