import type { Metadata } from "next";
import { Providers } from './providers'

export const metadata: Metadata = {
  title: "OurDates",
  description: "Nossas ideias de Dates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
