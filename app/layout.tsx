import {Nunito} from "next/font/google";
import "./globals.css"
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "@/app/components/HOC/ClientOnly";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/app/providers/ToasterProvider";
import LoginModal from "@/app/components/modals/LoginModal";
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
        <ClientOnly>
          <ToasterProvider/>
          <LoginModal/>
          <RegisterModal/>
          <Navbar/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
