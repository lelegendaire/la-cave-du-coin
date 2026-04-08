import "./globals.css";


export const metadata = {
  title: "La Cave du Coin",
  description: "Vins vivants pour cave vivante",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
