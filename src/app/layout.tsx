import type { Metadata } from "next";
import "@fontsource/poppins";
import "./globals.css";

export const metadata: Metadata = {
  title: "Formulário de Consulta",
  description: "Formulário de consulta médica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head />
      <body className="font-poppins">{children}</body>
    </html>
  );
}
