import './globals.css'
import { Inter } from 'next/font/google'
import Chat from "@/components/Chat";
import React from "react";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Demo - Academia Militara ',
  description: 'Pagina DEMO a Academiei Militare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <Providers>
            <body className={inter.className}>
                <Chat/>
                {children}
            </body>
        </Providers>
    </html>
  )
}
