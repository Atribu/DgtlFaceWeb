'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [name, setName]           = useState('')
  const [email, setEmail]         = useState('')
  const [password, setPassword]   = useState('')
  const [department, setDepartment] = useState('')
  const [error, setError]         = useState('')
  const [success, setSuccess]     = useState('')
  const router                    = useRouter()
  const API                       = process.env.NEXT_PUBLIC_API_URL

  const handleSubmit = async e => {
    e.preventDefault()
    setError(''); setSuccess('')

    const res = await fetch(`${API}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ name, email, password, department })
    })
    const data = await res.json()

    if (res.ok) {
      setSuccess('Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz…')
      setTimeout(() => router.push('/panel/login'), 1500)
    } else {
      setError(data.error || 'Kayıt sırasında hata oluştu.')
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <form onSubmit={handleSubmit}
            className="p-6 bg-white shadow rounded w-full max-w-sm">
        <h2 className="text-2xl mb-4">Kayıt Ol</h2>
        {error   && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-600 mb-2">{success}</p>}
        <input type="text" placeholder="Ad Soyad"
               value={name} onChange={e=>setName(e.target.value)}
               className="w-full mb-2 p-2 border rounded" required />
        <input type="email" placeholder="E-posta"
               value={email} onChange={e=>setEmail(e.target.value)}
               className="w-full mb-2 p-2 border rounded" required />
        <input type="password" placeholder="Şifre"
               value={password} onChange={e=>setPassword(e.target.value)}
               className="w-full mb-2 p-2 border rounded" required />
        <input type="text" placeholder="Departman"
               value={department} onChange={e=>setDepartment(e.target.value)}
               className="w-full mb-4 p-2 border rounded" required />
        <button type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded">
          Kayıt Ol
        </button>
        <p className="mt-4 text-sm">
          Zaten üye misin?{' '}
          <a href="/panel/login" className="text-blue-600 underline">
            Giriş Yap
          </a>
        </p>
      </form>
    </div>
  )
}
