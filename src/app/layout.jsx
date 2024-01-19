import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Spencer Sharp',
    default: 'Alex Cosmas - Software Developer | Product Designer',
  },
  description:
    'I am Alex Cosmas, a Senior Product Designer based in Nairobi, Kenya, creating solutions for complex and challenging problems through design and code. Currently, I am the Product Lead at Simple Formations, where I am building an enterprise legal entity management solution that helps corporates manage daily due diligence and compliance.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
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
