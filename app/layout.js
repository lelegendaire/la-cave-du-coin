import "./globals.css";


export const metadata = {
  title: "La Cave du Coin",
  description: "Vins vivants pour cave vivante",
  openGraph: {
    title: "La Cave du Coin",
    description:
      "Vins vivants pour cave vivante.",
    url: "https://la-cave-du-coin.vercel.app",
    siteName: "La Cave du Coin",
    images: [
      {
        url: "https://la-cave-du-coin.vercel.app/lacaveducoin_og.webp",
        width: 1200,
        height: 630,
        alt: "La Cave du Coin",
      },
    ],
    locale: "en_FR",
    type: "website",
  },
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
