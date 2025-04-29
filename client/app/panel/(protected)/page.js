'use client'
import Link from 'next/link'

export default function PanelHome() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 mt-36">Admin Panel</h1>
      <p className="mb-6">Hoş geldin! Aşağıdan “Personel Yönetimi”ne gidebilirsin:</p>
      <Link
        href="/panel/users"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Personel Yönetimi
      </Link>
    </div>
  )
}
