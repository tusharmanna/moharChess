import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Photo & Video Gallery - MoharChess Classes and Events",
  description: "Browse photos and videos from MoharChess classes, tournaments, and events in Suwanee, Johns Creek, Alpharetta & Atlanta, GA. See students learning and competing.",
  keywords: "chess gallery Suwanee, chess photos Johns Creek, chess tournament photos Atlanta, chess class Alpharetta, chess events Cumming GA, MoharChess Georgia"
});

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
