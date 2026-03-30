import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oussama Lassoued — UI/UX Designer & Digital Creator",
  description: "A UI/UX designer blending art and technology to craft immersive digital experiences. Available for freelance projects and collaborations.",
  keywords: ["UI/UX Designer", "Digital Designer", "Web Design", "Visual Design", "Interactive Design"],
  authors: [{ name: "Oussama Lassoued" }],
  openGraph: {
    title: "Oussama Lassoued — UI/UX Designer",
    description: "Designing experiences where art meets interaction",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
