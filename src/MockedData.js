import antonucci from "./assets/proyectos/Antonucci.png";
import remitos from "./assets/proyectos/Omas-remito.png";
import omas from "./assets/proyectos/Omas.png";
import kmk from "./assets/proyectos/Kmk.png";
import Coally from "./assets/proyectos/Coally.png";
import Galu from "./assets/proyectos/Galu.png";
import Mobile from "./assets/proyectos/Movile.png";
import Vazalto from "./assets/proyectos/Portfolio.png";
import colefinder from "./assets/proyectos/Colefinder.png";
import ikigai from "./assets/proyectos/Ikigai.png";
import simply from "./assets/proyectos/Simmply.png";
import budo from './assets/proyectos/BudoAcademy.png'
import budoFigma from './assets/proyectos/BudoFigma.png'
import SanMarcos from './assets/proyectos/SanMarcos.png'
import Idoc from './assets/proyectos/Idoc.png'
import curemd from './assets/proyectos/Curemd.png'
import curemdio from './assets/proyectos/curemdio.png'

export const CardsContent = [
  {
    nombre: "CureMD.io",
    tipo: "Contractor",
    image: curemdio,
    descripcion: "Landing page para una plataforma de telemedicina.",
    deploy: "https://curemd.io/",
    tecnologias: ["React", "TailwindCss", "Node.js"],
    cliente: "MoneyFy",
    fecha: "15/02/2024",
  },
  {
    nombre: "CureMD Plus",
    tipo: "Contractor",
    image: curemd,
    descripcion: "Landing page para un seguro médico de la plataforma de CureMD.io.",
    deploy: "https://plus.curemd.io",
    tecnologias: ["React", "Next.js", "TailwindCss"],
    cliente: "MoneyFy",
    fecha: "20/02/2024",
  },
  {
    nombre: "iDoc",
    tipo: "Contractor",
    image: Idoc,
    descripcion: "Chatbot médico con cumplimiento HIPAA.",
    deploy: "https://idoc.bot/",
    tecnologias: ["React", "Node.js", "MongoDB", "ChatGPT API"],
    cliente: "MoneyFy",
    fecha: "10/03/2024",
  },
  {
    nombre: "Budo Academy",
    tipo: "Personal",
    image: budo,
    descripcion: "Red social para artistas marciales (En desarrollo)",
    deploy: "https://budoacademy.vercel.app/",
    tecnologias: [
      "React",
      "Redux",
      "TailwindCss",
      "Node.js",
      "Typescript",
      "MongoDB",
    ],
    cliente: "",
    fecha: "25/01/2024",
  },
  {
    nombre: "SanMarcos Music (Figma)",
    tipo: "Personal",
    image: SanMarcos,
    descripcion: "Diseño UX/UI de un reproductor de musica para la Universidad de San Marcos",
    deploy: "https://www.figma.com/file/cyS7QXnYQfbXRcCkni4NFH/Reproductor-de-musica?type=design&node-id=184%3A222&mode=design&t=7pCnkYK8lXuuE9tN-1",
    tecnologias: [
      "Figma",
    ],
    cliente: "",
    fecha: "01/12/2023",
  },
  {
    nombre: "Budo Academy (Figma)",
    tipo: "Freelance",
    image: budoFigma,
    descripcion: "Diseño UX/UI de Budo Academy",
    deploy: "https://www.figma.com/file/9MMIUSADC4l1NEO0PhMMLQ/Budo-academy?type=design&node-id=101%3A4&mode=design&t=7pCnkYK8lXuuE9tN-1",
    tecnologias: [
      "Figma",
    ],
    cliente: "",
    fecha: "01/12/2023",
  },
  {
    nombre: "Simmply-commerce",
    tipo: "Freelance",
    image: simply,
    descripcion: "Plantilla de ecommerce diseñada para pequeños emprendedores.",
    deploy: "https://simply-commerce.vercel.app/",
    tecnologias: [
      "React",
      "Redux",
      "TailwindCss",
      "Node.js",
      "Typescript",
      "MongoDB",
    ],
    cliente: "",
    fecha: "08/08/2023",
  },
  // {
  //   nombre: "Ikigai development",
  //   tipo: "Estudios",
  //   image: ikigai,
  //   descripcion: "Pagina web de mi emprendimiento.",
  //   deploy: "https://ikiastro.vercel.app/",
  //   tecnologias: ["Astro", "TailwindCss"],
  //   cliente: "",
  //   fecha: "08/08/2023",
  // },
  {
    nombre: "Smart Turns",
    tipo: "Estudios",
    image: Mobile,
    descripcion: "Concepto de aplicacion para turnos desarrollado en Figma.",
    deploy:
      "https://www.figma.com/file/iGVxvT3fmhh3q7FmJXBHKt/SmartTurns?type=design&node-id=0%3A1&mode=design&t=xpgunNGg3LehJaib-1",
    tecnologias: ["Figma"],
    cliente: "",
    fecha: "08/08/2023",
  },
  {
    nombre: "Colefinder",
    tipo: "Estudios",
    image: colefinder,
    descripcion: "Concepto de aplicacion para un buscador de colegios.",
    deploy:
      "https://www.figma.com/file/tYGoXfV4HGORkpVQNGbfal/ColeFinder?type=design&mode=design&t=xpgunNGg3LehJaib-1",
    tecnologias: ["Figma"],
    cliente: "",
    fecha: "08/08/2023",
  },
  {
    nombre: "Vazalto producciones",
    tipo: "Freelance",
    image: Vazalto,
    descripcion: "Concepto de aplicacion para una televisora Argentina.",
    deploy:
      "https://www.figma.com/file/y7rI0giH9bORbKWRcBZtd3/Vazalto?type=design&mode=design&t=xpgunNGg3LehJaib-1",
    tecnologias: ["Figma"],
    cliente: "",
    fecha: "08/08/2023",
  },
  {
    nombre: "IDEA Mdp",
    tipo: "Freelance",
    image: antonucci,
    descripcion:
      "Proyecto con el objetivo de generarle presencia en la web a un instituto de danzas.",
    deploy: "https://ideamdp.vercel.app/",
    tecnologias: ["Javascript", "React", "TailwindCss"],
    cliente: "Instituto Antonucci",
    fecha: "03/04/23",
  },
  {
    nombre: "Omas Remitos",
    tipo: "Freelance",
    image: remitos,
    descripcion:
      "Aplicación de uso interno para la empresa OMAS.SPA, con el objetivo de generar una herramienta para el área de facturaciones.",
    deploy: "https://omas-remito.vercel.app/",
    tecnologias: ["Javascript", "React", "TailwindCss"],
    cliente: "OMAS s.p.a",
    fecha: "03/04/23",
  },
  {
    nombre: "Omas Admin",
    tipo: "Freelance",
    image: omas,
    descripcion:
      "Aplicación de uso interno para la empresa OMAS.SPA, con el objetivo de generar un panel de admin para supervisores.",
    deploy: "https://omas-alpha.vercel.app/",
    tecnologias: ["Javascript", "React", "Redux", "MUI"],
    cliente: "OMAS s.p.a",
    fecha: "02/02/23",
  },
  {
    nombre: "Kenmukan web",
    tipo: "Freelance",
    image: kmk,
    descripcion:
      "Proyecto con el objetivo de generarle presencia en la web a un dojo de artes marciales.",
    deploy: "https://kenmukankyokai.com.ar/",
    tecnologias: ["Javascript", "React", "Css"],
    cliente: "OMAS s.p.a",
    fecha: "20/08/22",
  },
  {
    nombre: "Galu Pet's hotel",
    tipo: "Contractor",
    image: Galu,
    descripcion: "Desarrollo frontend para un hotel de perros.",
    deploy: "",
    tecnologias: ["Javascript", "React", "Redux", "Css", "MUI"],
    cliente: "Galu pet hotel",
    fecha: "03/01/23",
  },
  {
    nombre: "Coally",
    tipo: "Contractor",
    image: Coally,
    descripcion: "Desarrollo frontend para la plataforma de Coally.",
    deploy: "https://coally.com/",
    tecnologias: ["Javascript", "React", "Redux", "Css", "MUI"],
    cliente: "Coally",
    fecha: "11/03/22 - 02/01/2023",
  },
];
