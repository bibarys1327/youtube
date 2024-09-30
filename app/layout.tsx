import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Youtube v2.0 - Best video",
  description: "Generated by Bibarys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex flex-wrap">
          {/* <Sidebar /> */}
          {/* <section
            className={cn("content", {
              "content-full": !user,
            })}
          > */}
          {/* <Header /> */}
          <div className="content-wrapper">{children}</div>
          {/* </section> */}
        </main>
      </body>
    </html>
  );
}
