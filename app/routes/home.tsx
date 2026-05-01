import type { Route } from "./+types/home";
import { Welcome } from "./landing/landing"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Miner Legacy" },
    { name: "description", content: "The official site for Miner Legacy." },
  ];
}

export default function Home() {
  return <Welcome />
}
