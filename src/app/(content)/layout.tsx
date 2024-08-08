import { Providers } from "@/app/providers"
import { Layout } from "@/components/Layout"

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="flex w-full bg-zinc-50 dark:bg-black">
        <Layout>{children}</Layout>
      </div>
    </Providers>
  )
}

export default DefaultLayout
