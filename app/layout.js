import "./globals.css";
import "@fontsource/karla";

import { NavBar } from "@/components";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Afri Foods - Home",
  description: "Growing fresh and tasty vegetables in the heart of Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
