import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Forms & Links - MoharChess Registration Resources",
  description: "All MoharChess registration forms and links in one place. Enroll in classes, camps, or tournaments serving Suwanee, Johns Creek, Alpharetta, Cumming & Atlanta, GA.",
  keywords: "chess registration forms Suwanee, chess enrollment Johns Creek, MoharChess forms Alpharetta, chess tournament entry Cumming GA, chess school links Atlanta Georgia",
});

export default function FormsAndLinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

