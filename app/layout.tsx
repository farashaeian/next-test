import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Test",
  description: "Next 14 Test Project",
};


const vazirFont = localFont({
  src: "../public/font/Vazirmatn-Regular.woff2",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*<body className={inter.className}>{children}</body>*/}
      <body className={`bg-slate-500 text-slate-200 ${vazirFont.className}`}><main className={`p-5`}>{children}</main></body>
    </html>
  );
}
