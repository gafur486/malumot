import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ғафурҷон Уайдулоев — Барномасоз",
  description: "Портфолиои Ғафурҷон Уайдулоев: TOJ POS, TOJ ERP ва системаҳои автоматизатсияи тиҷорат.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tg"><body>{children}</body></html>;
}

