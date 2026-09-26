import type { ComponentType } from "react";
import {
  SiBootstrap,
  SiCss,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiGoogle,
  SiGooglechrome,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiNetlify,
  SiNextdotjs,
  SiNpm,
  SiPostman,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWordpress,
} from "react-icons/si";
import {
  Accessibility,
  Activity,
  AppWindow,
  Bot,
  Boxes,
  Code,
  Gauge,
  Infinity,
  Layers,
  Plug,
  Search,
  Send,
  Server,
  Sparkles,
  SquareMousePointer,
  TabletSmartphone,
  Waves,
} from "lucide-react";

type SkillMeta = {
  Icon: ComponentType<{ size?: number; color?: string }>;
  color: string;
};

const skills: Record<string, SkillMeta> = {
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS3: { Icon: SiCss, color: "#1572B6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  "SCSS/SASS": { Icon: SiSass, color: "#CC6699" },
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "React JS": { Icon: SiReact, color: "#61DAFB" },
  ReactJs: { Icon: SiReact, color: "#61DAFB" },
  "HTML/CSS": { Icon: SiHtml5, color: "#E34F26" },
  "Gemini AI API": { Icon: SiGoogle, color: "#4285F4" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  "Redux Toolkit": { Icon: SiRedux, color: "#764ABC" },
  "React Router": { Icon: SiReactrouter, color: "#CA4245" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  "Material UI": { Icon: SiMui, color: "#007FFF" },
  Bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#FFFFFF" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  WordPress: { Icon: SiWordpress, color: "#21759B" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  Cursor: { Icon: SquareMousePointer, color: "#CAE8BD" },
  "GitHub Copilot": { Icon: SiGithubcopilot, color: "#FFFFFF" },
  "Google Antigravity": { Icon: SiGoogle, color: "#4285F4" },
  Windsurf: { Icon: Waves, color: "#38BDF8" },
  "Responsive Web Design": { Icon: TabletSmartphone, color: "#CAE8BD" },
  "SEO Optimization": { Icon: Search, color: "#CAE8BD" },
  "Performance Optimization": { Icon: Gauge, color: "#CAE8BD" },
  "Agile/Scrum": { Icon: Infinity, color: "#CAE8BD" },
  "REST API Integration": { Icon: Plug, color: "#CAE8BD" },
  JSX: { Icon: SiReact, color: "#61DAFB" },
  Vercel: { Icon: SiVercel, color: "#FFFFFF" },
  Netlify: { Icon: SiNetlify, color: "#00C7B7" },
  Vite: { Icon: SiVite, color: "#646CFF" },
  "VS Code": { Icon: Code, color: "#007ACC" },
  "Chrome DevTools": { Icon: SiGooglechrome, color: "#4285F4" },
  npm: { Icon: SiNpm, color: "#CB3837" },
  ChatGPT: { Icon: Bot, color: "#FFFFFF" },
  Motion: { Icon: SiFramer, color: "#0055FF" },
  "TanStack Query": { Icon: SiReactquery, color: "#FF4154" },
  Zustand: { Icon: Boxes, color: "#CAE8BD" },
  "React Hook Form": { Icon: SiReacthookform, color: "#EC5990" },
  Axios: { Icon: Send, color: "#5A29E4" },
  "Accessibility (a11y)": { Icon: Accessibility, color: "#CAE8BD" },
  "Core Web Vitals": { Icon: Activity, color: "#CAE8BD" },
  "SSR / SSG": { Icon: Server, color: "#CAE8BD" },
  PWA: { Icon: AppWindow, color: "#CAE8BD" },
  "Design Systems": { Icon: Layers, color: "#CAE8BD" },
};

const fallback: SkillMeta = { Icon: Sparkles, color: "#CAE8BD" };

export function SkillIcon({ name, size = 16 }: { name: string; size?: number }) {
  const { Icon, color } = skills[name] ?? fallback;
  return <Icon size={size} color={color} aria-hidden />;
}

export function SkillChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-sm text-white/85 transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/20">
      <SkillIcon name={name} />
      {name}
    </span>
  );
}
