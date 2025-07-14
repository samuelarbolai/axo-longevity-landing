import { Montserrat, Qwitcher_Grypen } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-montserrat",
})

const qwitcherGrypen = Qwitcher_Grypen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-qwitcher",
})

export const metadata = {
  title: "Axo Longevity - Long Live You",
  description: "Take control of your health with 100+ lab tests and insights from top doctors.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,200;8..60,300;8..60,400;8..60,500;8..60,600;8..60,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${montserrat.variable} ${qwitcherGrypen.variable} font-montserrat antialiased`}>
        {children}
      </body>
    </html>
  )
}
