import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0c0b" },
    { media: "(prefers-color-scheme: light)", color: "#f7f6f2" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://zakihatta.vercel.app"),
  title: "Zaki Hatta — Software Engineer & Designer",
  description:
    "Personal portfolio of Zaki Hatta, software engineer and designer specializing in high-performance web applications, GIS systems, and refined digital craft.",
  keywords: [
    "Zaki Hatta",
    "Software Engineer",
    "Designer",
    "Frontend Developer",
    "Fullstack Developer",
    "Next.js Portfolio",
    "React Native",
    "Jakarta",
  ],
  authors: [{ name: "Zaki Hatta", url: "https://github.com/Zakihatta" }],
  creator: "Zaki Hatta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zakihatta.vercel.app",
    title: "Zaki Hatta — Software Engineer & Designer",
    description:
      "Crafting high-craft digital experiences, full-stack systems, and design token architectures.",
    siteName: "Zaki Hatta Portfolio",
    images: [
      {
        url: "/images/IMG4.webp",
        width: 1200,
        height: 630,
        alt: "Zaki Hatta — Software Engineer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaki Hatta — Software Engineer & Designer",
    description:
      "Crafting high-craft digital experiences, full-stack systems, and design token architectures.",
    images: ["/images/IMG4.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark h-full antialiased bg-[#0d0c0b] text-[#f1ede6]"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var savedTheme = localStorage.getItem('porto_theme');
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=Sofia+Sans+Extra+Condensed:ital,wght@0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full bg-[#0d0c0b] text-[#f1ede6] flex flex-col font-sans selection:bg-[#f1ede6] selection:text-[#0d0c0b]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
