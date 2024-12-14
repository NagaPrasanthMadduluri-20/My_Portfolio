import { Barlow } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "  @/components/theme-provider";
import Header from "./components/Header";

const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
  weight: ["500", "600", "800", "900"],
});

export const metadata = {
  title: {
    default: "Naga Prasanth - Frontend Developer Portfolio",
    template: "%s | Naga Prasanth Portfolio"
  },
  description: "Professional portfolio showcasing web development skills, projects, and expertise in frontend technologies",
  keywords: [
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "NextJS",
    "Portfolio",
    "Web Design",
    "Frontend Engineering"
  ],
  authors: [{ name: "Naga Prasanth" }],
  creator: "Naga Prasanth",
  publisher: "Naga Prasanth",
  openGraph: {
    title: "Naga Prasanth - Frontend Developer Portfolio",
    description: "Professional portfolio showcasing web development skills and projects",
    url: "https://myportfolio-46x.pages.dev/",
    siteName: "My Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Open Graph image
        width: 1200,
        height: 630
      }
    ],
    locale: "en_US",
    type: "website"
  },
};

export default function RootLayout({ children }) {
  return (
    <html className={`${barlow.variable}`} lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
            <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
