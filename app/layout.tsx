import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import LoadingScreen from "./components/LoadingScreen";

export const metadata: Metadata = {
  icons: {
    icon: "/alogo.png",
  },
  title: "Areeba",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
