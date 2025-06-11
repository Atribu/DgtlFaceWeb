import React from 'react'

const BlogGridSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-12 ">

    {/* 1. Üsttek tek büyük kart */}
    <div className="grid grid-cols-1">
      <div className="bg-white p-6 rounded-lg shadow">
        {/* İçerik buraya */}
      </div>
    </div>
  
    {/* 2. Orta bölüm: 2 sütunlu büyük kartlar */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        {/* Kart 1 */}
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        {/* Kart 2 */}
      </div>
    </div>
  
    {/* 3. Alt bölüm: 3 sütunlu küçük kartlar */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded-lg shadow text-sm">
        {/* Küçük kart 1 */}
      </div>
      <div className="bg-white p-4 rounded-lg shadow text-sm">
        {/* Küçük kart 2 */}
      </div>
      <div className="bg-white p-4 rounded-lg shadow text-sm">
        {/* Küçük kart 3 */}
      </div>
    </div>
  
    {/* 4. Load More + Pagination */}
    <div className="flex flex-col items-center space-y-4">
      <button className="px-6 py-2 border-2 border-transparent hover:border-gradient-to-r from-[#a754cf] via-[#54b9cf] to-[#547dcf] transition-all text-sm rounded-md">
        Load more articles
      </button>
      <div className="flex space-x-2">
        <button className="w-8 h-8 border rounded">1</button>
        <button className="w-8 h-8 border rounded bg-gradient-to-r from-[#a754cf] to-[#547dcf] text-white">2</button>
        <button className="w-8 h-8 border rounded">3</button>
        <button className="w-8 h-8 border rounded">…</button>
        <button className="w-8 h-8 border rounded">10</button>
      </div>
    </div>
  
  </section>
  
  )
}

export default BlogGridSection
