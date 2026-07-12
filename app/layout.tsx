import "./globals.css";

export const metadata = {
  title: "DJIMINA TRAITEUR",
  description:
    "Fatayas, nems, pastels, mini-pizzas et spécialités faites maison à Dakar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
