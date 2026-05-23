import type { Route } from "./+types/home";
import { DashboardTruthPanel } from "../components/DashboardTruthPanel";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Melife Core - Truth Panel" },
    { name: "description", content: "Melife Dashboard active prototype surface." },
  ];
}

export default function Home() {
  return <DashboardTruthPanel />;
}
