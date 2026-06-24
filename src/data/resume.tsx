import { Icons } from "@/components/icons";
import { Docker } from "@/components/ui/svgs/docker";
import { Express, ReactLight } from "@/components/ui/svgs/expressjs";
import { Java } from "@/components/ui/svgs/java";
import { MongoDB } from "@/components/ui/svgs/mongoDB";
import { Mysql } from "@/components/ui/svgs/mysql";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { SpringBoot } from "@/components/ui/svgs/springBoot";
import { Typescript } from "@/components/ui/svgs/typescript";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Samnang Chan",
  initials: "SC",
  url: "https://www.samnangchan.shop/",
  location: "Phnom Penh, Cambodia",
  locationLink: "https://www.google.com/maps/place/Phnom+Penh,+Cambodia",
  description:
    "Software Engineer specializing in application development and distributed systems, with expertise in Java, Spring Boot, and modern web technologies. Experienced in building scalable, secure, and high-performance applications, with a focus on microservices architecture.", summary:
    "I am a software engineer dedicated to building high-performance, secure digital solutions. Currently, I am expanding my skills in full-stack development and distributed architectures through hands-on project engineering and specialized training in advanced system design.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Java", icon: Java },
    { name: "Spring Boot", icon: SpringBoot },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React", icon: ReactLight },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Express },
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL", icon: Mysql },
    { name: "MongoDB", icon: MongoDB },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/samnanggchan",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/samnang-chan-bb6b493b9",
        icon: Icons.linkedin,
        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/Samnang_ch_77",
        icon: Icons.telegram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "samnanggchan@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "KVS Furniture",
      href: "#",
      badges: [],
      location: "Phnom Penh, Cambodia",
      title: "Web Developer",
      logoUrl: "/kvs.png",
      start: "January 2025",
      end: "June 2025",
      description:
      "Designed and developed responsive, mobile-friendly web interfaces using HTML5, CSS3, Bootstrap, JavaScript, jQuery, PHP, and MySQL, Maintained and enhanced legacy systems by adding new features across frontend, backend, and database layers. Developed secure database integrations and optimized application functionality for better performance and usability. Collaborated with stakeholders to deliver reliable and maintainable web solutions."
    },
  ],
  education: [
    {
      school: "Norton University",
      href: "https://www.norton-u.com",
      degree: "Computer Science",
      logoUrl: "/norton.png",
      start: "2022",
      end: "Present",
    },
    {
      school: "Institute of Science and Technology Advanced Development (ISTAD)",
      href: "https://app.istad.co",
      degree: "Full-Stack Development and Microservices Course",
      logoUrl: "/istad.jpg",
      start: "2025",
      end: "2026",
    },
  ],
projects: [
    {
      title: "AUTHGATE",
      href: "https://authgate.site/",
      dates: "December 2025 – June 2026",
      active: true,
      description:
        "SaaS platform designed to help developers manage, secure, and expose their backend services through an API Gateway. It also offers powerful features like OAuth2 and IAM for authentication and authorization, and tunneling for real-time local testing.",
      technologies: [
        "Spring Boot",
        "Spring Data JPA",
        "Spring Data MongoDB",
        "OAuth2",
        "Spring Authorization Server",
        "Spring WebFlux",
        "WebClient",
        "API Gateway",
        "Next.js",
        "Turborepo",
        "Micro Frontend",
        "Multi-Zone Architecture",
        "Docker",
        "PostgreSQL",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://authgate.site/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "authgate.png",
      video: "",
    },
    {
      title: "E-LIBRARY NORTON",
      href: "https://elibrary.nortonu.app/",
      dates: "January 2026 – Present",
      active: true,
      description:
        "An open-source library platform developed for Norton University, providing centralized access to digital learning resources including eBooks, PDFs, audio, and video content.",
      technologies: [
        "Next.js",
        "Turborepo",
        "Tailwind CSS",
        "Shadcn UI",
        "Node.js",
        "Express.js",
        "JWT Authentication",
        "PostgreSQL",
        "Redis",
        "Cloudflare R2 Storage",
        "Git/GitHub",
        "Docker",
        "Vercel",
        "Render",
      ],
      links: [
        {
          type: "Website",
          href: "https://elibrary.nortonu.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "elibrary.png",
      video: "",
    },
    {
      title: "KAVEYCODE",
      href: "#",
      dates: "March 2025 – October 2025",
      active: true,
      description:
        "An online learning platform that provides technology courses, educational resources, and skill development programs for students and professionals through a modern web-based learning experience.",
      technologies: [
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA (Hibernate)",
        "OAuth2",
        "Keycloak",
        "PostgreSQL",
        "Next.js",
        "Next Auth",
        "Keycloakify",
        "Docker",
        "Nginx",
        "Shadcn",
        "RTK Query",
      ],
      links: [],
      image: "kaveycode.png",
      video: "",
    },
    {
      title: "KOMSAN-MOVIE",
      href: "https://komsan-movie.samnangchan.shop/",
      dates: "September 2024 – November 2024",
      active: true,
      description:
        "A modern movie discovery platform that enables users to search and explore trending movies and TV shows, delivering a seamless entertainment browsing experience.",
      technologies: ["React.js", "React Router", "Tailwind CSS", "TMDB API"],
      links: [
        {
          type: "Website",
          href: "https://komsan-movie.samnangchan.shop/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "komsan-movie.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image: "",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image: "",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communicates a victim's medical data from inside an ambulance to doctors at a hospital.",
      image: "",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image: "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/samnanggchan",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image: "",
      links: [],
    },
  ],
} as const;
