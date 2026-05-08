import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Chess Workshops - Intensive Training Near Atlanta, GA",
  description: "Intensive chess workshops for kids and teens near Atlanta, GA — serving Suwanee, Johns Creek, Alpharetta & Cumming. Learn openings, tactics, and endgames. All skill levels welcome.",
  keywords: "chess workshop Suwanee, chess training Johns Creek, intensive chess Alpharetta, chess workshop Cumming GA, kids chess workshop Atlanta Georgia, chess tactics class near me",
});

export default function WorkshopsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
