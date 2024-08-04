import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  insta,
  weblog,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  nextjs,
  prisma,
  grocify,
  weatherapp,
  algoryte,
  taskmt,
  sass,
  loopstudio,
  furnitureshop,
  omnifood,
  graphql,
  bytewise,
} from "../images";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Next.js Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Algoryte",
    icon: algoryte,
    iconBg: "#383E56",
    date: "July 2023 - September 2023",
    points: [
      "Developing and maintaining web application using MERN Stack for a metaverse gaming application",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Performed API integration and backend endpoint fixing as well as gained proficiency in TypeScript and Prisma for refactoring the backend codebases",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "MERN Stack Intern",
    company_name: "Bytewise Limited",
    icon: bytewise,
    date: "March 2023 - June 2023",
    points: [
      "Fellowship at a rigorous professional development program that provides hands-on training in software development and project management",
      "Collaborated with a team to develop a web application using the MERN stack, resulting in a responsive and user-friendly platform that meets the needs of our target audience.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "TaskMT: A Task Management and Collaboration SAAS Application ",
    description:
      "A progressive web  application that integrates real-time chat, task prioritization, deadline reminders, and in-app audio/video calls to enhance team collaboration and project management, empowering administrators, project managers, and employees to efficiently assign, track, and discuss tasks within a unified platform, resulting in improved productivity and streamlined communication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "violet-text-gradient",
      },

      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "rtk-query",
        color: "violet-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
      {
        name: "zod",
        color: "orange-text-gradient",
      },
    ],
    image: taskmt,
    source_code_link: "https://github.com/Hasnain-Mustafa/TaskMT-fyp",
    site_link:
      "https://drive.google.com/file/d/1VmbKPcawKY_ksx9fv72mvkvB97bUEl7g/view?usp=sharing",
  },
  {
    name: "Full Stack Instagram Clone",
    description:
      "The Instagram clone is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It follows the MVC (Model-View-Controller) architecture and incorporates various features like user registration, authentication, password reset, feed functionality, CRUD operations, chat functionality, and more. The project also utilizes Redux Toolkit for state management and implements email functionalities using Nodemailer and JWT (JSON Web Tokens) for user authorization.",
    tags: [
      {
        name: "reactjs",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "jwt-authentication",
        color: "orange-text-gradient",
      },
      {
        name: "cronjobs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind-CSS",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "violet-text-gradient",
      },
    ],
    image: insta,
    source_code_link: "https://github.com/emankamran/final-project-bytewise",
    site_link: "https://github.com/emankamran/final-project-bytewise",
  },
  {
    name: "Weather App",
    description:
      "The Weather App is a React application that offers real-time weather information for cities worldwide. Users can search for a city, and the app retrieves and displays detailed weather data from the OpenWeatherMap API, including temperature, weather conditions, and humidity. The app features intuitive weather icons and presents the information in a clear, tabular format, converting temperatures from Kelvin to Fahrenheit for ease of understanding. With its user-friendly design and instant data retrieval, the Weather App provides a straightforward way to stay informed about current weather conditions.",
    tags: [
      {
        name: "reactjs",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind-CSS",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/emankamran/weather-app-react",
    site_link: "https://forecast-city.netlify.app",
  },
  {
    name: "Loopstudios Landing Page",
    description:
      "My practice project that involved designing a visually striking landing page for a VR company using Tailwind CSS, featuring a sleek, modern interface with responsive design elements",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: loopstudio,
    source_code_link:
      "https://github.com/emankamran/Bytewise-Internship-MERN/tree/main/Task-06-Tailwind",
    site_link: "https://vr-set.netlify.app",
  },
  {
    name: "Modern Furniture Shop",
    description:
      "Created a simple user-friendly web page with HTML and advanced CSS techniques, including Grid and Flexbox for a polished layout. Used media queries to ensure a seamless, responsive design that looks great on any device.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "flex-box",
        color: "green-text-gradient",
      },
      {
        name: "css-grid",
        color: "pink-text-gradient",
      },
    ],
    image: furnitureshop,
    source_code_link:
      "https://github.com/emankamran/Bytewise-Internship-MERN/tree/main/Task-03-Html-CSS-Project",
    site_link: "https://buyfurniture-shop.netlify.app",
  },

  {
    name: "Omnifood: Food Delivery",
    description:
      "Created a simple user-friendly food delivery landing page with HTML and advanced CSS techniques, including Grid and Flexbox for a polished layout. Used media queries to ensure a seamless, responsive design that looks great on any device.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "flex-box",
        color: "green-text-gradient",
      },
      {
        name: "css-grid",
        color: "pink-text-gradient",
      },
    ],
    image: omnifood,
    source_code_link:
      "https://github.com/emankamran/food-delivery-landing-page",
    site_link: "https://food-delivery-web-page.netlify.app",
  },
  {
    name: "Blog Site",
    description:
      "This project involved redesigning a blog website initially built with WordPress, transitioning it to a modern static site with Sass for enhanced styling and maintainability. The redesign aimed to refresh the visual appeal, optimize performance, and provide a more streamlined development experience.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "SASS (SCSS)",
        color: "green-text-gradient",
      },
      {
        name: "responsive-design",
        color: "pink-text-gradient",
      },
    ],
    image: weblog,
    source_code_link: "https://github.com/emankamran/we-blog-site",
    site_link: "https://we-blog-site.netlify.app",
  },
  {
    name: "SASS Practice Project",
    description:
      "This project showcases a modern hero section designed for a website’s landing page. It features a clean and responsive design, with a focus on visual appeal and usability.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "SASS (SCSS)",
        color: "green-text-gradient",
      },
      {
        name: "responsive-design",
        color: "pink-text-gradient",
      },
    ],
    image: sass,
    source_code_link:
      "https://github.com/emankamran/Bytewise-Internship-MERN/tree/main/Task-05-SASS",
    site_link: "https://sass-task-05.netlify.app",
  },

  {
    name: "Grocery App",
    description:
      "This project features a hero section designed for a grocery app landing page. The design focuses on user engagement with a clean and modern layout, optimized for various devices using Tailwind CSS.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind-CSS",
        color: "green-text-gradient",
      },
      {
        name: "responsive-design",
        color: "pink-text-gradient",
      },
    ],
    image: grocify,
    source_code_link: "https://github.com/emankamran/tailwind-project",
    site_link: "https://grocery-web-page.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
