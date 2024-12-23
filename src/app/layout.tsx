import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { NavigationBar } from '@/components/nav-bar'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistSans } from "geist/font/sans";


export const metadata: Metadata = {
    title: 'Vineet Jadhav',
    description: 'I plan, design, build, test and deploy software',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={GeistSans.className}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                    disableTransitionOnChange
                >
                    <NavigationBar />
                    <main className='container mx-auto'>
                        {children}
                    </main>
                    <footer className="container mx-auto py-4">
                        <p className="text-center text-sm text-muted-foreground hover:text-white transition-all">
                            © Designed & Built by Vineet Jadhav · 2024
                        </p>
                    </footer>
                </ThemeProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
