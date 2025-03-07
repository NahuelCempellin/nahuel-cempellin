import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaHeart, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const techColors = {
  React: "#61DBFB",
  Redux: "#764ABC",
  TailwindCss: "#38B2AC",
  "Node.js": "#68A063",
  Typescript: "#007ACC",
  MongoDB: "#4DB33D",
  Figma: "#F24E1E",
  Javascript: "#F7DF1E",
  Css: "#264de4",
  MUI: "#007FFF",
};

export default function Gallery({ cardsContent }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [likes, setLikes] = useState({});

  const handleLike = (index) => {
    setLikes((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="w-full min-h-screen flex items-start justify-center p-4">
      <section className="w-full grid grid-cols-3 gap-4 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1">
        {cardsContent.map((el, i) => (
          <article key={i} className="relative cursor-pointer" onClick={() => setSelectedIndex(i)}>
            <img src={el.image} alt={el.nombre} className="w-full rounded-lg shadow-lg" />
          </article>
        ))}
      </section>

      {selectedIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-6 rounded-lg max-w-lg w-full relative shadow-xl"
          >
            <button className="absolute top-4 right-4 rounded-full w-8 h-8 bg-gray-500 flex items-center justify-center" onClick={() => setSelectedIndex(null)}>
              <IoIosClose size={28} />
            </button>
            <img src={cardsContent[selectedIndex].image} alt={cardsContent[selectedIndex].nombre} className="w-full rounded" />
            <h2 className="text-xl font-bold mt-4">
              <a href={cardsContent[selectedIndex].deploy} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
                {cardsContent[selectedIndex].nombre}
              </a>
            </h2>
            <p className="text-sm text-gray-600 mt-2">{cardsContent[selectedIndex].descripcion}</p>
            <p className="text-xs text-gray-500 mt-1">Cliente: <span className="font-semibold">{cardsContent[selectedIndex].cliente || "N/A"}</span></p>
            <p className="text-xs text-gray-500">Fecha: {cardsContent[selectedIndex].fecha}</p>

            <div className="flex flex-wrap mt-4">
              {cardsContent[selectedIndex].tecnologias.map((tech, index) => (
                <span
                  key={index}
                  className="text-white text-xs font-semibold px-2 py-1 rounded mr-2 mb-2"
                  style={{ backgroundColor: techColors[tech] || "#999" }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button onClick={() => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : cardsContent.length - 1))}>
                <FaArrowLeft size={24} />
              </button>
              
              <button onClick={() => setSelectedIndex((prev) => (prev < cardsContent.length - 1 ? prev + 1 : 0))}>
                <FaArrowRight size={24} />
              </button>
            </div>
          
          </motion.div>
        </div>
      )}
    </div>
  );
}