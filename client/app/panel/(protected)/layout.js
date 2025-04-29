'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { FiHome, FiUsers, FiLogOut } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function PanelLayout({ children }) {
  const router = useRouter()

  // Eğer token yoksa login’e yönlendir
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.replace('/panel/login')
    }
  }, [])

  const navItems = [
    { href: '/panel', icon: <FiHome size={20} />, label: 'Dashboard' },
    { href: '/panel/users', icon: <FiUsers size={20} />, label: 'Personel' },
    // İleride ek linkler burada
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-br from-indigo-700 to-purple-600 text-white flex flex-col p-6 shadow-lg">
        <div className="mb-8">
          <Link href="/panel" className="flex items-center space-x-2 text-2xl font-bold">
            <span>DGTLFACE</span>
          </Link>
        </div>

        <nav className="flex-1">
          <ul className="space-y-4">
            {navItems.map(item => (
              <motion.li
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-white/20 transition-colors"
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => {
            localStorage.removeItem('token')
            router.replace('/panel/login')
          }}
          className="mt-6 flex items-center space-x-2 py-2 px-4 bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
        >
          <FiLogOut size={20} />
          <span className="font-medium">Çıkış Yap</span>
        </button>
      </aside>

      {/* Sayfa içeriği */}
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  )
}
