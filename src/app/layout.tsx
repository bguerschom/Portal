// src/app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Attendance System',
  description: 'HIK Device Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  )
}
