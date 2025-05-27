const navLinks = [
  {
    name: "Proyectos", // Work
    link: "#work",
  },
  {
    name: "Experiencia", // Experience
    link: "#experience",
  },
  {
    name: "Habilidades", // Skills
    link: "#skills",
  },
  {
    name: "Testimonios", // Testimonials
    link: "#testimonials",
  },
];

const words = [
  { id: 1, text: 'Ideas', imgPath: '/images/ideas.svg' },
  { id: 2, text: 'Conceptos', imgPath: '/images/concepts.svg' },
  { id: 3, text: 'Diseños', imgPath: '/images/designs.svg' },
  { id: 4, text: 'código', imgPath: '/images/code.svg' },
  { id: 5, text: 'Ideas', imgPath: '/images/ideas.svg' },
  { id: 6, text: 'Conceptos', imgPath: '/images/concepts.svg' },
  { id: 7, text: 'Diseños', imgPath: '/images/designs.svg' },
  { id: 8, text: 'código', imgPath: '/images/code.svg' },
];

const counterItems = [
  {
    value: 12,
    suffix: "+",
    label: "Años desarrollando software",
    sublabel: "Desde 2012, creando soluciones reales",
    icon: "🧠"
  },
  {
    value: 50,
    suffix: "+",
    label: "Proyectos finalizados",
    sublabel: "Sitios web, apps, sistemas internos",
    icon: "💻"
  },
  {
    value: 20,
    suffix: "+",
    label: "Clientes que confían",
    sublabel: "Freelance, empresas, startups",
    icon: "🤝"
  },
  {
    value: 100,
    suffix: "%",
    label: "Compromiso en entregas",
    sublabel: "Siempre orientado a calidad y cumplimiento",
    icon: "🎯"
  }
];

const projectItems = [
  {
    title: "Nova",
    description: "Rediseño del frontend de un CMS moderno con enfoque en accesibilidad, rendimiento y diseño adaptativo.",
    image: "/images/projects/nova.jpg",
    category: "Frontend",
    role: "UI Developer",
    techStack: ["React", "TailwindCSS", "Framer Motion"],
    highlights: [
      "Animaciones fluidas con Framer Motion",
      "Dark mode y temas configurables",
      "100% puntuación en Lighthouse"
    ]
  },
  {
    title: "FormlyX",
    description: "Framework de formularios empresariales con validación dinámica, persistencia de datos y lógica condicional.",
    image: "/images/projects/formlyx.jpg",
    category: "Frontend",
    role: "Frontend Engineer",
    techStack: ["React", "Zod", "React Hook Form"],
    highlights: [
      "Sistema de esquemas validables",
      "Integración con REST y GraphQL",
      "Editor de formularios en vivo"
    ]
  },
  {
    title: "DashCraft",
    description: "Dashboard personalizable para visualizar métricas de negocio, con múltiples layouts y filtros en tiempo real.",
    image: "/images/projects/dashcraft.jpg",
    category: "Frontend",
    role: "Frontend Architect",
    techStack: ["Vite", "React", "Zustand", "ApexCharts"],
    highlights: [
      "Gráficos reactivos y responsivos",
      "Gestión global del estado con Zustand",
      "Soporte multiusuario"
    ]
  },
  {
    title: "Invoix API",
    description: "Motor de facturación electrónica con validación DIAN, firma digital y gestión de clientes y productos.",
    image: "/images/projects/invoix-api.png",
    category: "Backend",
    role: "Backend Developer",
    techStack: ["PHP", "Laravel", "PostgreSQL", "Redis"],
    highlights: [
      "Arquitectura modular en servicios",
      "Sistema de colas para procesamiento asíncrono",
      "JWT para autenticación segura"
    ]
  },
  {
    title: "AuthControl",
    description: "Servicio de autenticación unificado con OAuth2, refresh tokens y administración de usuarios y permisos.",
    image: "/images/projects/authcontrol.png",
    category: "Backend",
    role: "Backend & Seguridad",
    techStack: ["Node.js", "Express", "JWT", "MongoDB"],
    highlights: [
      "Protección contra ataques comunes",
      "Integración con múltiples frontend apps",
      "Panel administrativo para gestión"
    ]
  },
  {
    title: "DataBridge",
    description: "API Gateway inteligente que centraliza datos de distintos microservicios usando GraphQL y caché distribuida.",
    image: "/images/projects/databridge.png",
    category: "Backend",
    role: "Integrador Backend",
    techStack: ["Node.js", "GraphQL", "Redis PubSub"],
    highlights: [
      "Agregación de datos en tiempo real",
      "Soporte para subscripciones",
      "Balanceo de carga lógico"
    ]
  },
  {
    title: "CoreStack",
    description: "Base de arquitectura desacoplada para apps empresariales, utilizando microservicios y servicios internos.",
    image: "/images/projects/corestack.png",
    category: "Arquitectura",
    role: "Arquitecto de Software",
    techStack: ["Docker Compose", "PostgreSQL", "RabbitMQ", "Consul"],
    highlights: [
      "Organización de servicios por dominio",
      "Auto-descubrimiento y configuración central",
      "Escalabilidad horizontal garantizada"
    ]
  },
  {
    title: "ObservaX",
    description: "Plataforma de monitoreo full stack para servidores y servicios basada en Prometheus y Grafana.",
    image: "/images/projects/observax.png",
    category: "Arquitectura",
    role: "Arquitecto DevOps",
    techStack: ["Prometheus", "Grafana", "Node Exporter", "Alertmanager"],
    highlights: [
      "Alertas en tiempo real por Telegram",
      "Dashboards por cliente y servidor",
      "Métricas de apps, contenedores y hardware"
    ]
  },
  {
    title: "ArchiDocs",
    description: "Sistema de documentación viva sincronizado con Git y generado automáticamente tras cada commit.",
    image: "/images/projects/archidocs.png",
    category: "Arquitectura",
    role: "Arquitecto Técnico",
    techStack: ["Docusaurus", "GitHub Actions", "Mermaid.js"],
    highlights: [
      "Integración CI con GitHub Actions",
      "Soporte para diagramas Mermaid",
      "Visualización de arquitectura en tiempo real"
    ]
  },
  {
    title: "DeployBot",
    description: "Sistema de despliegue continuo con rollback automático, pipelines declarativas y testing previo.",
    image: "/images/projects/deploybot.png",
    category: "DevOps",
    role: "DevOps Engineer",
    techStack: ["Docker", "GitHub Actions", "YAML", "Shell Script"],
    highlights: [
      "Rollback automático por fallos",
      "Validación de ambiente previo a deploy",
      "Despliegues simultáneos a múltiples targets"
    ]
  },
  {
    title: "WebSyncer",
    description: "Automatización de sincronización de archivos y bases de datos entre entornos (dev, staging, prod).",
    image: "/images/projects/websyncer.png",
    category: "DevOps",
    role: "Automatizador de Entornos",
    techStack: ["Node.js", "rsync", "cron"],
    highlights: [
      "Logs de sincronización detallados",
      "Modo dry-run y notificaciones",
      "Monitoreo de cambios por hash"
    ]
  },
  {
    title: "InfraScript",
    description: "CLI para levantar servidores, configurar redes y montar servicios con una sola instrucción.",
    image: "/images/projects/infrascript.png",
    category: "DevOps",
    role: "Automatización de Infraestructura",
    techStack: ["Shell Script", "Terraform", "YAML"],
    highlights: [
      "Provisionamiento de VMs y redes",
      "Templates personalizables",
      "Compatible con Proxmox y Docker"
    ]
  }
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/quality.png",
    title: "Enfoque en la Calidad",
    desc: "Aplico principios SOLID, pruebas automatizadas y revisiones de código para asegurar soluciones sostenibles y sin deuda técnica.",
    tech: ["SOLID", "TDD", "Jest", "PHPUnit"]
  },
  {
    imgPath: "/images/comunication.png",
    title: "Comunicación Confiable",
    desc: "Fomento la transparencia y documentación continua, asegurando alineación con los equipos y clientes en todo el ciclo de desarrollo.",
    tech: ["Notion", "Markdown", "Git", "Documentación"]
  },
  {
    imgPath: "/images/times.png",
    title: "Entregas Puntuales",
    desc: "Planifico entregas iterativas priorizando MVPs funcionales, optimizando recursos y evitando retrasos en entornos ágiles.",
    tech: ["MVP", "Scrum", "Jira", "ClickUp", "Trello"]
  },
  {
    imgPath: "/images/code.png",
    title: "Desarrollo de Software",
    desc: "Desarrollo soluciones backend y full stack con PHP, Laravel, JavaScript, React, Node.js y PostgreSQL, aplicando Clean Architecture.",
    tech: ["PHP", "Laravel", "React", "Node.js", "PostgreSQL"]
  },
  {
    imgPath: "/images/devops.png",
    title: "Automatización y DevOps",
    desc: "Orquesto despliegues reproducibles y escalables usando shell scripts, Docker, Proxmox, GitHub Actions y CI/CD personalizados.",
    tech: ["Shell", "Docker", "Proxmox", "CI/CD", "GitHub Actions"]
  },
  {
    imgPath: "/images/cloud.png",
    title: "Arquitectura en la Nube",
    desc: "Diseño arquitecturas modulares sobre VPS y entornos virtualizados con observabilidad, seguridad y recuperación ante fallos.",
    tech: ["VPS", "Virtualización", "Backups", "Alta disponibilidad"]
  },
  {
    imgPath: "/images/monitoring.png",
    title: "Monitoreo y Observabilidad",
    desc: "Implemento observabilidad avanzada con Prometheus, Grafana, Node Exporter y Alertmanager para servidores y clústeres Proxmox.",
    tech: ["Prometheus", "Grafana", "Alertmanager", "Node Exporter"]
  },
  {
    imgPath: "/images/security.png",
    title: "Gestión de Servidores y Seguridad",
    desc: "Administro servidores Linux con segmentación de servicios, backups automáticos, firewall UFW y claves SSH con 2FA.",
    tech: ["Linux", "SSH", "Backups", "UFW", "2FA"]
  },
  {
    imgPath: "/images/branding.png",
    title: "Branding y Estrategia Digital",
    desc: "Combino identidad visual, UX/UI y automatización para lanzar productos digitales impactantes y gestionables desde un CMS.",
    tech: ["Figma", "CMS", "Automatización", "UI/UX"]
  },
  {
    imgPath: "/images/home-automation.png",
    title: "Domótica e Integración IoT",
    desc: "Integro dispositivos y servicios usando Home Assistant, MQTT, Node-RED y scripts para automatización inteligente.",
    tech: ["Home Assistant", "MQTT", "Node-RED", "IoT"]
  }
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three.js",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Ian lideró con claridad y visión técnica el desarrollo de la plataforma, estructurando el backend y frontend de forma sólida y escalable. Su capacidad para integrar tecnologías modernas y guiar al equipo fue clave para la estabilidad y evolución del sistema.",
    imgPath: "/images/hablameexp.png",
    logoPath: "/images/hablame.png",
    title: "Líder Técnico Fullstack",
    date: "Marzo 2022 - Febrero 2025",
    responsibilities: [
      "Diseñé e implementé la arquitectura backend utilizando PHP y Node.js bajo el patrón MVC para garantizar escalabilidad y mantenibilidad.",
      "Desarrollé y mantuve APIs RESTful para facilitar la comunicación entre servicios internos y externos.",
      "Construí interfaces dinámicas con React utilizando AJAX (Fetch API) y Local Storage para optimizar la experiencia del usuario.",
      "Integré bases de datos MySQL, MongoDB y Redis para mejorar la eficiencia y confiabilidad del sistema.",
      "Desplegué servicios en servidores Linux con Docker y configuré Nginx como proxy inverso.",
      "Integré APIs de Google para autenticación e interoperabilidad con servicios externos.",
      "Lideré al equipo de desarrollo, estableciendo estándares de calidad, organizando flujos de trabajo con Git y brindando mentoría técnica.",
      "Colaboré con diseñadores UI/UX para asegurar experiencias de usuario fluidas y coherentes.",
      "Implementé buenas prácticas de CI/CD para mejorar la velocidad y confiabilidad en los despliegues."
    ],
    techStack: ["PHP", "Node.js", "React", "MySQL", "MongoDB", "Redis", "Docker", "Nginx", "CI/CD"]
  },
  {
    review:
      "En Practiko, Ian demostró liderazgo y dominio técnico en el desarrollo del sistema de facturación electrónica. Su enfoque en calidad, cumplimiento normativo y automatización impulsó mejoras tangibles en eficiencia y confiabilidad.",
    imgPath: "/images/practikoexp.png",
    logoPath: "/images/practiko.png",
    title: "Ingeniero de desarrollo - Facturación electrónica",
    date: "Enero 2020 - Diciembre 2024",
    responsibilities: [
      "Lideré el desarrollo del sistema de facturación electrónica, cumpliendo los lineamientos técnicos exigidos por la DIAN.",
      "Desarrollé funcionalidades backend utilizando PHP (Symfony), JavaScript y MySQL.",
      "Implementé la generación automática de PDFs de facturación y validación de documentos electrónicos.",
      "Integré procesos de despliegue mediante Docker, pruebas automatizadas y pipelines de CI/CD.",
      "Colaboré en la lectura técnica de documentación oficial para integrar nuevas funcionalidades requeridas por normativas.",
      "Participé en el levantamiento de requerimientos y la adaptación del sistema a cambios regulatorios.",
      "Trabajé bajo metodología Scrum, participando en reuniones diarias, planificaciones iterativas y retrospectivas.",
      "Supervisé y coordiné tareas del equipo de desarrollo, asegurando la entrega de módulos funcionales y estables."
    ],
    techStack: ["PHP", "Symfony", "JavaScript", "MySQL", "Docker", "CI/CD", "Scrum"]
  },
  {
    review:
      "Ian fue pieza fundamental en proyectos críticos de integración para clientes de alto nivel. Su capacidad de adaptarse a entornos complejos y automatizar procesos empresariales aportó gran valor al equipo técnico.",
    imgPath: "/images/redsisexp.png",
    logoPath: "/images/redsis.png",
    title: "Especialista GoAnyWhere",
    date: "Mayo 2015 - Junio 2019",
    responsibilities: [
      "Participé en el desarrollo e integración de soluciones empresariales, desde el levantamiento de requerimientos hasta la implementación punto a punto.",
      "Automatizé procesos empresariales utilizando GoAnywhere MFT, cumpliendo con estándares como PCI-DSS.",
      "Desarrollé scripts e integraciones en múltiples lenguajes según el entorno tecnológico del cliente.",
      "Modelé soluciones técnicas mediante documentación detallada y diagramas UML.",
      "Ejecuté pruebas unitarias y gestioné control de versiones para garantizar estabilidad y trazabilidad.",
      "Colaboré directamente con equipos de infraestructura y soporte para asegurar la operatividad de los servicios.",
      "Contribuí a proyectos de misión crítica para entidades como el Fondo Nacional del Ahorro (FNA), Redeban, ATH, Alquería y la Bolsa de Valores de Colombia.",
      "Adapté las soluciones técnicas a entornos complejos, asegurando disponibilidad continua y rendimiento eficiente."
    ],
    techStack: ["GoAnywhere MFT", "Shell", "JavaScript", "UML", "PCI-DSS"]
  },
  {
    review:
      "Ian destacó desde el inicio por su responsabilidad técnica y enfoque en soluciones prácticas. Su trabajo contribuyó directamente a optimizar procesos en el sector eléctrico y a fortalecer los cimientos de su perfil profesional.",
    imgPath: "/images/cenercolexp.png",
    logoPath: "/images/cenercol.png",
    title: "Analista desarrollador",
    date: "Diciembre 2014 - Mayo 2015",
    responsibilities: [
      "Administré y diseñé interfaces y aplicaciones enfocadas en el sector eléctrico, garantizando funcionalidad y usabilidad.",
      "Desarrollé soluciones personalizadas para optimizar procesos técnicos, contribuyendo a la eficiencia operativa del cliente.",
      "Implementé y gestioné bases de datos relacionales y no relacionales, asegurando integridad y rendimiento.",
      "Realicé pruebas unitarias para validar la calidad del código y minimizar errores en producción.",
      "Participé en la planificación, diseño y ejecución de proyectos técnicos orientados al sector energético.",
      "Configuré instancias EC2 y almacenamiento S3 en AWS como parte de proyectos internos de infraestructura cloud.",
      "Desplegué servicios web en entornos virtualizados y gestioné claves IAM, seguridad básica y monitoreo funcional."
    ],
    techStack: ["AWS", "EC2", "S3", "MySQL", "PostgreSQL", "Virtualización", "Pruebas Unitarias"]
  }
];

const testimonials = [
  {
    name: "Valeria Rodríguez",
    mentions: "@valeriarodriguez",
    review:
      "Trabajar con Ian fue una experiencia increíble. Transformó nuestro sistema obsoleto en una plataforma moderna, robusta y segura. Su enfoque técnico y compromiso fueron claves para el éxito del proyecto.",
    imgPath: "/images/testimonials/valeria.png",
  },
  {
    name: "Andrés Gutiérrez",
    mentions: "@andresgutierrez",
    review:
      "Ian aportó soluciones técnicas avanzadas desde el primer día. Automatizó procesos clave con CI/CD y mejoró el rendimiento de nuestras APIs. Es un líder que entiende tanto negocio como tecnología.",
    imgPath: "/images/testimonials/andres.png",
  },
   {
    name: "Carlos Ramírez",
    mentions: "@carlosramirez",
    review:
      "Gracias a Ian migramos toda nuestra plataforma a una solución escalable con Docker y Proxmox. Siempre disponible, proactivo y con soluciones efectivas. Un gran profesional.",
    imgPath: "/images/testimonials/carlos.png",
  },
  {
    name: "Lucía Hernández",
    mentions: "@luciahernandez",
    review:
      "Ian lideró la implementación de una nueva arquitectura cloud para nuestro backend. Su visión y claridad técnica marcaron una diferencia real. Muy recomendable para proyectos de alto impacto.",
    imgPath: "/images/testimonials/lucia.png",
  },
  {
    name: "Juliana Torres",
    mentions: "@julianatorres",
    review:
      "Ian logró una integración perfecta entre frontend y backend en nuestro nuevo portal. Su trabajo con React y Node.js superó nuestras expectativas. Tiene un gran ojo para los detalles.",
    imgPath: "/images/testimonials/juliana.png",
  },
  {
    name: "Miguel Castillo",
    mentions: "@miguelcastillo",
    review:
      "Excelente experiencia trabajando con Ian. Automatizó nuestros despliegues, mejoró la seguridad y nos ayudó a organizar mejor todo nuestro stack. Lo volveríamos a contratar sin dudarlo.",
    imgPath: "/images/testimonials/miguel.png",
  },
];

const socialImgs = [
  {
    id: 1,
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/ianscateni",
  },
  {
    id: 2,
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/IanScateni",
  },
  {
    id: 3,
    name: "x",
    imgPath: "/images/x.png",
    url: "https://twitter.com/IanScateni",
  },
  {
    id: 4,
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/IanScateni",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  projectItems,
  expCards,
  testimonials,
  socialImgs,
  techStackIcons,
  navLinks,
};