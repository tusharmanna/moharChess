import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Forms and Links - Enrollment",
  description: "Enroll in MoharChess programs including tournaments, private classes, group classes, chess camps, and senior classes. Contact us to get started on your chess journey.",
  keywords: "chess enrollment, chess registration, chess classes enrollment, tournament registration, chess camp registration"
});

export default function FormsAndLinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

