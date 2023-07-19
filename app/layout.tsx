import React from "react";
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, NavBar } from "@/components";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Car Octo',
    description: 'Discover the best car deals today',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="relative">
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
