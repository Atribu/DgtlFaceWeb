'use client'
import { usePathname } from 'next/navigation'
import Header from './header/Header'

export default function HeaderWrapper() {
  const pathname = usePathname()
  // eğer rota /panel ile başlıyorsa Header'ı gizle
  if (pathname.startsWith('/panel')) return null
  return <Header />
}
