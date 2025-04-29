'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail]     = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]     = useState('')
  const router                = useRouter()
  const API                   = process.env.NEXT_PUBLIC_API_URL

  async function handleSubmit(e) {
    e.preventDefault()
    const res  = await fetch(`${API}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    if (res.ok) {
      localStorage.setItem('token', data.token)
      router.push('/panel')
    } else {
      setError(data.error)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow rounded w-full max-w-sm">
        <h2 className="text-2xl mb-4">Giriş Yap</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input type="email" placeholder="E-posta" value={email}
          onChange={e=>setEmail(e.target.value)}
          className="w-full mb-2 p-2 border rounded" required />
        <input type="password" placeholder="Şifre" value={password}
          onChange={e=>setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Giriş
        </button>
        <p className="mt-4 text-sm">
          Hesabın yok mu? <a href="/panel/register" className="text-blue-600 underline">Kayıt Ol</a>
        </p>
      </form>
    </div>
  )
}
