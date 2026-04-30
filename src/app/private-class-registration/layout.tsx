import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata = genMeta({
  title: "Register for Private Chess Lessons - MoharChess",
  description: "Register for private chess lessons at MoharChess. Online or in-person, serving Suwanee, Johns Creek, Alpharetta, Cumming & Atlanta, GA. Beginner to advanced welcome.",
  keywords: "private chess registration Suwanee, book chess lesson Johns Creek, chess lesson signup Alpharetta, chess tutor register Cumming GA, private chess lesson Atlanta Georgia",
});

export default function PrivateClassRegistrationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
