'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function UsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const API = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    fetch(`${API}/api/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin h-10 w-10 border-4 border-indigo-500 border-t-transparent rounded-full"></div>
    </div>
  )

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0">
        <h1 className="text-3xl font-semibold text-gray-800">Personel Listesi</h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Ara..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <Link
            href="/panel/users/create"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
          >
            Yeni Personel Ekle
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((u, i) => (
          <motion.div
            key={u._id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col space-y-2 transition-transform"
          >
            <div className="text-xl font-medium text-gray-700">{u.name}</div>
            <div className="text-sm text-gray-500">{u.email}</div>
            <div className="mt-auto text-sm text-gray-600">{u.department}</div>
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center col-span-full text-gray-500">Kayıt bulunamadı.</p>
        )}
      </div>
    </div>
  )
}
