import { Inter, JetBrains_Mono, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
})

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans-pro",
})

export const metadata = {
  title: "Axo Elite - Optimize Your Edge",
  description: "Elite biomarker analysis for professional athletes. The same protocols used by Olympic champions.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${sourceSansPro.variable} font-source antialiased`}>
        {children}
      </body>
    </html>
  )
}
