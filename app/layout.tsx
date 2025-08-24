import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./contexts/ThemeContext";

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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        <ThemeProvider>
          <LoadingScreen />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
