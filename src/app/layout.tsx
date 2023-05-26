import Navbar from './components/navbar'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <div className='flex fixed bottom-0 justify-center items-center w-full bg-black text-white'>Footer copyright</div>
        </body>
    </html>
  )
}
