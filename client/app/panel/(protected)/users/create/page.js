'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaArrowLeft, FaSave } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function CreateUserPage() {
  const [name, setName]           = useState('')
  const [email, setEmail]         = useState('')
  const [password, setPassword]   = useState('')
  const [department, setDepartment] = useState('')
  const [error, setError]         = useState('')
  const [loading, setLoading]     = useState(false)
  const router                    = useRouter()
  const API                       = process.env.NEXT_PUBLIC_API_URL

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${API}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, department })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Bir hata oluştu')
      router.push('/panel/users')
    } catch(err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg">
      <Link href="/panel/users" className="flex items-center text-gray-500 hover:text-gray-700 mb-4">
        <FaArrowLeft className="mr-2" /> Geri Dön
      </Link>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Yeni Personel Ekle</h2>

      {error && (<p className="text-red-500 mb-4">{error}</p>)}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/** Name */}
        <div>
          <label className="block text-gray-700 mb-1">Ad Soyad</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/** Email */}
        <div>
          <label className="block text-gray-700 mb-1">E-posta</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/** Password */}
        <div>
          <label className="block text-gray-700 mb-1">Şifre</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/** Department */}
        <div>
          <label className="block text-gray-700 mb-1">Departman</label>
          <input
            type="text"
            value={department}
            onChange={e => setDepartment(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
        >
          {loading ? 'Kaydediliyor...' : (<><FaSave className="mr-2" /> Kaydet</>)}
        </motion.button>
      </form>
    </div>
  )
}
