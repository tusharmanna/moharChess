import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata = genMeta({
  title: "Contact Us - MoharChess Suwanee, GA",
  description: "Contact MoharChess serving Suwanee, Johns Creek, Alpharetta, Cumming & Atlanta, GA. Call, email, or WhatsApp us about chess classes, lessons, or tournaments. Reply within 24 hours.",
  keywords: "contact MoharChess Suwanee, chess school phone Johns Creek, chess inquiry Alpharetta, chess lessons contact Cumming GA, chess school Atlanta Georgia",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
