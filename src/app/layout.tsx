import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyDSA — Structured DSA Progress Tracker",
  description:
    "A concept-gated, interview-focused DSA roadmap with 286 problems across 13 phases. Track your progress, take notes, and study with language-specific guides.",
  keywords: [
    "DSA", "LeetCode", "Data Structures",
    "Algorithms", "Interview Prep", "Progress Tracker",
  ],
  authors: [{ name: "MyDSA" }],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/favicon-64.png", type: "image/png", sizes: "64x64" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "MyDSA — Structured DSA Progress Tracker",
    description: "286 problems. 13 phases. Concept-gated and interview-focused.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
