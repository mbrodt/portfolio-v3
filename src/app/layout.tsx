import { type Metadata } from "next"

import { Providers } from "@/app/providers"
import { Layout } from "@/components/Layout"

import "@/styles/tailwind.css"

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
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
