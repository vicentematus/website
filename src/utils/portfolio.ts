const IMG_PATH = "/img/";

export const portfolio = {
  hero: {
    title: "Frontend developer, UI designer, y un poco de backend Software.",
    description:
      "Estudiante de Ingeniería en Ejecución Informática. Actualmente cursando el último semestre de la carrera. Con experiencia en desarrollo de aplicaciones web, usando tecnologías cómo React, Next.js, Vanilla Javascript, EJS +2 años de experiencia. Conocimiento de base de datos relacionales cómo SQL con Postgre SQL y SQLITE. También base de datos no relacionales cómo MongoDB.",
  },
  curriculum: {
    word: "",
    pdf: "",
  },
  work_experience: [
    {
      id: 0,
      workplace: "Crimson",
      title: "Frontend Developer",
      start_date: "Ene 2022",
      end_date: "Julio 2022",
      images: ["/img/work/crimson.png"],

      duration: "7 meses",
      description:
        "Trabajo independiente con un grupo de 3 desarrolladores, el cual trabajé en el front-end en una aplicación relacionada a la industria de la robótica.",
      items: [
        {
          id: 0,
          description:
            "Encargado del Front-end usando tecnologías cómo Vanilla Javascript, EJS.",
        },
        {
          id: 1,
          description:
            "Me encargué del desarrollo de UI de la aplicación desde el comienzo, hasta haciendo pruebas de UX para facilitar el uso de la aplicación.",
        },
        {
          id: 1,
          description: "Trabajé con API REST y Websockets.",
        },
      ],
      technologies: [
        {
          id: 0,
          name: "Javascript",
          path: "/img/technologies/javascript.png",
          color: "bg-yellow-700",
        },

        {
          id: 2,
          name: "API Rest",
          path: "/img/technologies/api-rest.png",
          color: "bg-yellow-600",
        },
        {
          id: 3,
          name: "Figma",
          path: "/img/technologies/figma.png",
          color: "bg-yellow-600",
        },
        {
          id: 4,
          name: "Web Sockets",
          path: "/img/technologies/socket.png",
          color: "bg-yellow-600",
        },
        {
          id: 5,
          name: "GIT",
          path: "/img/technologies/git.png",
          color: "bg-yellow-600",
        },
        {
          id: 1,
          name: "EJS",
          path: "/img/technologies/ejs.png",
          color: "bg-yellow-600",
        },
      ],
    },
    {
      id: 1,
      workplace: "Espacio 126",
      title: "Desarrollador Web",
      start_date: "Oct 2019",
      images: ["/img/work/espacio-126-agencia-concepcion.png"],
      duration: "1 años 2 meses",
      end_date: "Nov 2021",
      description:
        "Co-fundé una agencia digital llamada Espacio 126 junto con 2 socios, un espacio creativo en dónde diversas áreas se complementan para impulsar marcas, comercios a través del Marketing Digital.",
      items: [
        {
          id: 0,
          description:
            "Trabajamos con empresas de distintos rubros, cómo Panadería Los Robles, Laminas Chile, que trajó Lux Chile, Ayudamos a Bikecenter a implementar estrategias de publicidad para traer a Vespa Chile.",
        },
        {
          id: 1,
          description:
            "Aptitudes: Desarrollo de páginas web con CMS y código. Logrando trabajar con más de 10+ empresas formales en la región del Bío-Bío.",
        },
        {
          id: 2,
          description:
            "Tecnologías Utilizadas: Wordpress CMS, Javascript, Figma para diseño de interfaces, Google Workspace, GIT.",
        },
        {
          id: 3,
          description:
            "Trabajo SEO con WordPress y Jumpseller logrando rankear #1 en keywords cómo 'panadería en concepción' , 'limpieza en concepción'",
        },
      ],
      technologies: [
        {
          id: 0,
          name: "Wordpress",
          path: "/img/technologies/wordpress.png",
          color: "bg-yellow-600",
        },
        {
          id: 1,
          name: "Javascript",
          path: "/img/technologies/javascript.png",
          color: "bg-yellow-700",
        },

        {
          id: 3,
          name: "Figma",
          path: "/img/technologies/figma.png",
          color: "bg-yellow-600",
        },
        {
          id: 5,
          name: "GIT",
          path: "/img/technologies/git.png",
          color: "bg-yellow-600",
        },
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: "Ingeniería en Ejecución en Computación e Informática ",

      institution: "Universidad del Bío Bío",
      location: "Concepción, Chile",
      start_date: "2019",
      end_date: "Presente",
      description:
        "Educación Universitaria. Alumno Tesista cursando ultimo semestre de la carrera.",
      image: "/img/logos/universidad-del-biobio.png",
    },
    {
      id: 0,
      degree: "Educación Media",
      institution: "Kingston College",
      location: "Concepción, Chile",
      start_date: "2009",
      end_date: "2019",
      description: "Educación media y básica.",
      image: "/img/logos/kingston-college.png",
    },
  ],
  projects: [
    {
      id: 0,
      published: true,
      title: "Volume Landmarks from Rennaisance Periodization",
      description:
        "Aplicación web que ayuda a visualizar los volume landmarks de las guías de Reinassance Periodization. Con web scraping se logró capturar la información",
      technologies: [],
      images: ["/img/volume-landmarks-reinassance-periodization-preview.png"],
      links: {
        deploy: "https://volume-landmarks-rp-rals.vercel.app/",
        github: "https://github.com/vicentematus/volume-landmarks-rp/",
      },
    },
    {
      id: 1,
      title: "Rankings de la UFC",
      published: false,
      description:
        "Proyecto para poder visualizar los rankings de los distintos pesos de la UFC.",
      technologies: [],
      images: [],
      links: {
        deploy: "",
        github: "https://github.com/vicentematus/ufc-sportsradar",
      },
    },
    {
      id: 2,
      published: true,
      title: "Pokedex con Svelte",
      description:
        "Trabajo con la PokeAPI para poder visualizar los 150 primeros pokemones. ",
      technologies: [],
      images: ["/img/svelte-pokedex.png"],
      links: {
        deploy: "https://svelte-pokedex-rust.vercel.app/",
        github: "https://github.com/vicentematus/svelte-pokedex",
      },
    },
  ],
  design: [
    {
      id: 0,
      title: "Lux Chile - E-commerce and Landing Page for Cleaning Products",
      description:
        "Diseño y programación para una landing page para representantes de Lux Chile.",
      technologies: [],
      images: ["/img/design/lux-portfolio.png"],
      links: {
        deploy:
          "https://dribbble.com/shots/16769180-Lux-Chile-E-commerce-and-Landing-Page-for-Cleaning-Products",
        figma:
          "https://www.figma.com/file/aJgaQbQuraXwjHkPApzfcR/Greenescape?node-id=0%3A1",
      },
    },
    {
      id: 1,
      title: "Solar Power Landing Page - Renewable Energy",
      description: "",

      images: ["/img/design/greenscape-energia-solar.png"],
      links: {
        deploy:
          "https://dribbble.com/shots/15060683-Solar-Power-Landing-Page-Renewable-Energy",
        figma: "",
      },
    },
    {
      id: 2,
      title: "Health subscription boxes for COVID-19 - Wedosafety",
      description: "",

      images: ["/img/design/wedosafety-mask.png"],
      links: {
        deploy:
          "https://dribbble.com/shots/15060683-Solar-Power-Landing-Page-Renewable-Energy",
        figma: "",
      },
    },
    {
      id: 3,
      title: "Contact Page for an Agency",
      description: "",

      images: [],
      links: {
        deploy:
          "https://dribbble.com/shots/15060683-Solar-Power-Landing-Page-Renewable-Energy",
        figma: "",
      },
    },
  ],
};
