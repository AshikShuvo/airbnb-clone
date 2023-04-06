import {Nunito} from "next/font/google";
import "./globals.css"
import Navbar from "@/app/components/navbar/Navbar";
export const metadata = {
  title: 'Airbnb Clone',
  description: 'This is Airbnb clone',
}
const font=Nunito({
  subsets:["latin"]
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
