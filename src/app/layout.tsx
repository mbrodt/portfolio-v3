import { type Metadata } from "next"

import "@/styles/tailwind.css"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
export const metadata: Metadata = {
  title: {
    template: "%s - Mads Brodt",
    default: "Mads Brodt - Front-end developer and teacher",
  },
  description: `I'm Mads, a front-end developer and online teacher from Copenhagen. I enjoy creating and supporting websites and applications using modern technologies. I also enjoy writing about my experiences and sharing what I've learned with others.`,
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="a5527196-e11d-4896-8f5e-58aeea233261"
        />
      </body>
    </html>
  )
}
