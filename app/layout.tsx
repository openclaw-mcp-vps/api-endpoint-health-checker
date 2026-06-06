import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Endpoint Health Checker — Monitor API Performance Globally",
  description:
    "Monitor API endpoint performance from multiple geographic locations. Track response times, uptime, and get instant alerts on degradation."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="75de3e77-a80e-4cf1-b354-7c4cf9a91f6f"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
