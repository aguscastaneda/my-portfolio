export const projects = [
  {
    id: 1,
    title: "TurismoApp",
    description:
      "TurismoApp es una plataforma web de viajes que permite registrarse, explorar paquetes turísticos, convertir divisas en tiempo real y gestionar compras seguras mediante carrito y Mercado Pago. Cada orden queda registrada en la base de datos y se confirma automáticamente con un correo al usuario.",
    image: "/turismoapp_logo.jpg",
    tech: ["MariaDB", "Express", "React", "Node.js"],
    github: "https://github.com/aguscastaneda/TurismoApp",
    demo: "https://turismo21.site",
    featured: true,
  },
  {
    id: 2,
    title: "HardWindows",
    description:
      "HardWindows es un sistema en Python que permite administrar configuraciones avanzadas de Windows (registro, procesos, usuarios y permisos) desde una interfaz gráfica simple. Su objetivo es dar al usuario un control centralizado y fácil de usar sobre funciones que normalmente requieren conocimientos técnicos.",
    image: "/hardwindows_logo.png",
    tech: ["Python", "Winreg", "Tkinter", "psutil"],
    github: "https://github.com/aguscastaneda/HardWindows",
    featured: true,
  },
  {
    id: 3,
    title: "Bolita Comilona",
    description:
      "Bolita Comilona es un juego en Unity desarrollado en C# donde controlás una esfera que recorre laberintos recolectando 10 monedas por nivel, mientras esquivás zonas mortales y, en niveles más avanzados, enemigos que te persiguen. A medida que progresás, los mapas se vuelven más grandes y aparecen más obstáculos.",
    image: "/bolita_comilona.jpeg",
    tech: ["Unity", "C#"],
    github: "https://github.com/aguscastaneda/Bolita-Comilona",
    featured: true,
  },
  {
    id: 4,
    title: "Task Manager",
    description:
      "Task Manager desarrollado con stack MERN, que utiliza MongoDB como base de datos no relacional para gestionar usuarios mediante registro e inicio de sesión. La aplicación permite crear, actualizar, completar y eliminar tareas de forma eficiente.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/aguscastaneda/Gestor-Tareas",
  },
  {
    id: 5,
    title: "Bloc de notas",
    description:
      "Aplicación de bloc de notas desarrollada en C, que almacena la información en un archivo .txt utilizado como base de datos local. Fue mi primer proyecto en este lenguaje.",
    tech: ["C"],
    github: "https://github.com/aguscastaneda/Bloc-de-Notas",
  },
  {
    id: 6,
    title: "Chat Bot AC",
    description:
      "Chat Bot AC es un sistema de IA desarrollado en Python, utilizando Grok para procesamiento de lenguaje natural y Streamlit como interfaz, diseñado para ofrecer respuestas dinámicas y adaptadas al contexto.",
    tech: ["Python", "Streamlit", "Grok"],
    github: "https://github.com/aguscastaneda/ChatBotAC",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/aguscastaneda",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/agustin-castaneda-8297822bb/",
    icon: "linkedin",
  },
  {
    name: "Gmail",
    url: "https://mail.google.com/mail/?view=cm&to=castaneda.agustin.et21.21@gmail.com",
    icon: "gmail",
  },
];

export const technologies = [
  "JavaScript",
  "React & Next.js",
  "Node.js & Express",
  "TypeScript",
  "Tailwind CSS",
  "MongoDB & MariaDB",
  "Git & GitHub",
  "C",
  "Python",
  "C#",
];
