export interface SkillItem {
  name: string;
  icon: string;
  tone: string;
}

export interface SkillGroup {
  title: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript/3178C6",
        tone: "border-[#3178C6]/25 bg-[#3178C6]/12 text-[#245684] dark:border-[#3178C6]/35 dark:bg-[#3178C6]/20 dark:text-[#9fccff]",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
        tone: "border-[#C8A300]/30 bg-[#F7DF1E]/18 text-[#6D5900] dark:border-[#F7DF1E]/35 dark:bg-[#F7DF1E]/18 dark:text-[#FFF6AE]",
      },
      {
        name: "Python",
        icon: "https://cdn.simpleicons.org/python/3776AB",
        tone: "border-[#3776AB]/25 bg-[#3776AB]/12 text-[#235077] dark:border-[#3776AB]/35 dark:bg-[#3776AB]/20 dark:text-[#9ed4ff]",
      },
    ],
  },
  {
    title: "Frameworks",
    items: [
      {
        name: "Astro",
        icon: "https://cdn.simpleicons.org/astro/FF5D01",
        tone: "border-[#FF5D01]/25 bg-[#FF5D01]/12 text-[#9a3900] dark:border-[#FF5D01]/35 dark:bg-[#FF5D01]/20 dark:text-[#ffd0b0]",
      },
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react/61DAFB",
        tone: "border-[#61DAFB]/25 bg-[#61DAFB]/14 text-[#166a84] dark:border-[#61DAFB]/35 dark:bg-[#61DAFB]/20 dark:text-[#b7efff]",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
        tone: "border-[#06B6D4]/25 bg-[#06B6D4]/12 text-[#0c6880] dark:border-[#06B6D4]/35 dark:bg-[#06B6D4]/20 dark:text-[#a4f2ff]",
      },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      {
        name: "Node.js",
        icon: "https://cdn.simpleicons.org/nodedotjs/339933",
        tone: "border-[#339933]/25 bg-[#339933]/12 text-[#226822] dark:border-[#339933]/35 dark:bg-[#339933]/20 dark:text-[#b2f7b2]",
      },
      {
        name: "Express",
        icon: "https://cdn.simpleicons.org/express/000000",
        tone: "border-[#636363]/25 bg-[#636363]/12 text-[#343434] dark:border-[#9A9A9A]/30 dark:bg-[#9A9A9A]/15 dark:text-[#e5e5e5]",
      },
      {
        name: "Fastify",
        icon: "https://cdn.simpleicons.org/fastify/000000",
        tone: "border-[#525252]/25 bg-[#525252]/12 text-[#313131] dark:border-[#8E8E8E]/30 dark:bg-[#8E8E8E]/15 dark:text-[#dfdfdf]",
      },
      {
        name: "GraphQL",
        icon: "https://cdn.simpleicons.org/graphql/E10098",
        tone: "border-[#E10098]/25 bg-[#E10098]/12 text-[#8e005f] dark:border-[#E10098]/35 dark:bg-[#E10098]/20 dark:text-[#ffc1ea]",
      },
    ],
  },
  {
    title: "Databases & ORM",
    items: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql/4169E1",
        tone: "border-[#4169E1]/25 bg-[#4169E1]/12 text-[#29479a] dark:border-[#4169E1]/35 dark:bg-[#4169E1]/20 dark:text-[#bad1ff]",
      },
      {
        name: "MySQL",
        icon: "https://cdn.simpleicons.org/mysql/4479A1",
        tone: "border-[#4479A1]/25 bg-[#4479A1]/12 text-[#2b5779] dark:border-[#4479A1]/35 dark:bg-[#4479A1]/20 dark:text-[#a8d9ff]",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.simpleicons.org/mongodb/47A248",
        tone: "border-[#47A248]/25 bg-[#47A248]/12 text-[#2d6b2e] dark:border-[#47A248]/35 dark:bg-[#47A248]/20 dark:text-[#b8f7b9]",
      },
      {
        name: "Prisma",
        icon: "https://cdn.simpleicons.org/prisma/2D3748",
        tone: "border-[#4B5563]/25 bg-[#4B5563]/12 text-[#364152] dark:border-[#64748B]/30 dark:bg-[#64748B]/15 dark:text-[#d7e1f0]",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        name: "Git",
        icon: "https://cdn.simpleicons.org/git/F05032",
        tone: "border-[#F05032]/25 bg-[#F05032]/12 text-[#9b301d] dark:border-[#F05032]/35 dark:bg-[#F05032]/20 dark:text-[#ffc7bd]",
      },
      {
        name: "GitHub",
        icon: "https://cdn.simpleicons.org/github/181717",
        tone: "border-[#636363]/25 bg-[#636363]/12 text-[#343434] dark:border-[#9A9A9A]/30 dark:bg-[#9A9A9A]/15 dark:text-[#e5e5e5]",
      },
      {
        name: "Figma",
        icon: "https://cdn.simpleicons.org/figma/F24E1E",
        tone: "border-[#A259FF]/25 bg-[#A259FF]/12 text-[#5c2f96] dark:border-[#A259FF]/35 dark:bg-[#A259FF]/20 dark:text-[#e1c6ff]",
      },
      {
        name: "Postman",
        icon: "https://cdn.simpleicons.org/postman/FF6C37",
        tone: "border-[#FF6C37]/25 bg-[#FF6C37]/12 text-[#9a3d1d] dark:border-[#FF6C37]/35 dark:bg-[#FF6C37]/20 dark:text-[#ffd1bf]",
      },
    ],
  },
  {
    title: "Practices",
    items: [
      {
        name: "Responsive Design",
        icon: "https://cdn.simpleicons.org/css/1572B6",
        tone: "border-[#1572B6]/25 bg-[#1572B6]/12 text-[#19517a] dark:border-[#1572B6]/35 dark:bg-[#1572B6]/20 dark:text-[#addfff]",
      },
      {
        name: "Component Architecture",
        icon: "https://cdn.simpleicons.org/storybook/FF4785",
        tone: "border-[#FF4785]/25 bg-[#FF4785]/12 text-[#99264f] dark:border-[#FF4785]/35 dark:bg-[#FF4785]/20 dark:text-[#ffc3d7]",
      },
      {
        name: "Performance Optimization",
        icon: "https://cdn.simpleicons.org/lighthouse/F44B21",
        tone: "border-[#F44B21]/25 bg-[#F44B21]/12 text-[#933117] dark:border-[#F44B21]/35 dark:bg-[#F44B21]/20 dark:text-[#ffc7ba]",
      },
    ],
  },
];
