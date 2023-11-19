import { Alex_Brush, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const alexBrush = Alex_Brush({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-alexBrush",
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Music App",
  description: "Designed by Olatunde",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${alexBrush.variable} ${montserrat.variable} overflow-x-hidden relative`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}