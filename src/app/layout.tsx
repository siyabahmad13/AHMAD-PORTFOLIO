import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://siabahmad.problos.com"),
  title: "Siyab Ahmad — Software Engineer",
  description:
    "Siyab Ahmad is a software engineer focused on full-stack development, AI/ML and practical digital products.",
  keywords: [
    "Siyab Ahmad",
    "Siab Ahmad Khan",
    "Software Engineer",
    "Full-Stack Developer",
    "AI / ML",
    "Web Applications",
    "Problos"
  ],
  authors: [{ name: "Siyab Ahmad Khan", url: "https://siabahmad.problos.com" }],
  creator: "Siyab Ahmad Khan",
  alternates: {
    canonical: "https://siabahmad.problos.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://siabahmad.problos.com",
    title: "Siyab Ahmad — Software Engineer",
    description:
      "Siyab Ahmad is a software engineer focused on full-stack development, AI/ML and practical digital products.",
    siteName: "Siyab Ahmad Portfolio",
    images: [
      {
        url: "/images/hero-portrait.svg",
        width: 1200,
        height: 630,
        alt: "Siyab Ahmad — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siyab Ahmad — Software Engineer",
    description:
      "Siyab Ahmad is a software engineer focused on full-stack development, AI/ML and practical digital products.",
    images: ["/images/hero-portrait.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Siyab Ahmad Khan",
  alternateName: "Siyab Ahmad",
  jobTitle: "Software Engineer",
  url: "https://siabahmad.problos.com",
  worksFor: {
    "@type": "Organization",
    name: "Problos",
    url: "https://problos.com",
  },
  sameAs: [
    "https://github.com/siabahmad",
    "https://linkedin.com/in/siabahmad",
    "https://problos.com",
  ],
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "Artificial Intelligence",
    "Machine Learning",
    "React",
    "Next.js",
    "Node.js",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] selection:text-black">
        <ThemeProvider>
          {/* 1. NAVBAR */}
          <Navbar />
          
          <div className="flex-1">{children}</div>

          {/* 11. FOOTER */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
