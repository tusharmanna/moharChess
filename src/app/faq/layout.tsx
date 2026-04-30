import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata = genMeta({
  title: "FAQ - Chess Classes in Suwanee, Johns Creek & Atlanta, GA",
  description: "Common questions about MoharChess — starting age, class size, pricing, and more. Serving Suwanee, Johns Creek, Alpharetta, Cumming & Atlanta, GA.",
  keywords: "chess class FAQ Suwanee, chess school questions Johns Creek, chess lessons pricing Alpharetta, chess classes Cumming GA, kids chess FAQ Atlanta Georgia",
});

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
