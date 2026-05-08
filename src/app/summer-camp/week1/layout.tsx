import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Summer Chess Camp - Week 1",
  description: "Join MoharChess Summer Camp Week 1. An exciting week of chess learning, strategy, and fun for kids. Located in Suwanee, GA.",
  keywords: "summer chess camp week 1, kids chess camp, chess summer program, suwanee chess camp, youth chess camp atlanta",
  ogImage: "/images/summer-camp-flyer.jpg"
});

export default function Week1Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
