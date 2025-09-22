import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Facial Recognition App",
  description: "A web app that detects faces, estimates age, gender, and expressions in real time.",
  keywords: ["face recognition", "age detection", "gender detection", "face expressions", "face-api.js", "nextjs", "webcam app"],
  authors: [{ name: "Rachel Garcia", url: "https://miportafolio-d47aa.firebaseapp.com/" }],
  creator: "Rachel Garcia",
  robots: "index, follow",
  openGraph: {
    title: "Facial Recognition App",
    description: "Detect faces, age, gender and facial expressions in real time with your webcam.",
    url: "https://facedetection-eacd9.web.app/",
    siteName: "Facial Recognition App",
    images: [
      {
        url: "https://i.ibb.co/rRhPNg4g/Gemini-Generated-Image-yucyccyucyccyucy.png",
        width: 1200,
        height: 630,
        alt: "Facial Recognition App Preview",
      },
    ],
    locale: "en_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facial Recognition App",
    description: "Detect faces, age, gender and expressions in real time with your webcam.",
    images: ["https://i.ibb.co/rRhPNg4g/Gemini-Generated-Image-yucyccyucyccyucy.png"],
    creator: "@yourtwitterhandle",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
