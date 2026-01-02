"use client";

import React, { useState } from 'react';


const PRODUCTS = [
  { id: 1, name: "Profesyonel SEO Hizmeti", price: 70000, description: "Aylık Anahtar Kelime Optimizasyonu, Site İçi ve Dışı SEO Hizmeti." },
  { id: 2, name: "Özel Web Sitesi Geliştirme", price: 110000, description: "Next.js ile tamamen özel, mobil uyumlu ve yüksek performanslı web sitesi." },
  { id: 3, name: "Kurumsal Sosyal Medya Yönetimi", price: 100000, description: "Aylık 20 içerik üretimi, etkileşim takibi ve raporlama." },
  { id: 4, name: "Kapsamlı Google Ads Kampanya", price: 100000, description: "Hedef kitle analizi, detaylı kampanya kurulumu ve optimizasyon." },
  { id: 5, name: "E-posta Pazarlama Otomasyonu", price: 90000, description: "Gelişmiş otomasyon entegrasyonu ve 5 profesyonel e-posta şablonu." },
];

// TL Para Birimi Formatlayıcı
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 0,
    }).format(amount);
};


export default function ShopPageSingleFile() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // SEPET İŞLEMLERİ
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (!existingItem) {
      setCartItems([...cartItems, product]);
    }
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        setIsCartOpen(true);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  // ----------------------------------------------------------------------
  // 2. ÜRÜN KARTI BİLEŞENİ (Inline Tanımlama)
  // ----------------------------------------------------------------------
  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition duration-300">
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 min-h-[40px] flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
          <span className="text-2xl font-bold text-[#150016]">
            {formatCurrency(product.price)} {/* TL formatı kullanıldı */}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-[#150016] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition duration-150"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );

  // ----------------------------------------------------------------------
  // 3. SEPET KENAR ÇUBUĞU (Inline Tanımlama)
  // ----------------------------------------------------------------------
  const CartSidebar = () => (
    <>
      {/* Sepet Açma Butonu (Sadece Mobil/Tablet) */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-4 right-4 z-40 p-4 bg-[#150016] text-white rounded-full shadow-xl lg:hidden"
        aria-label="Sepeti Aç"
      >
        <span className="text-2xl">🛒</span>
        {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{cartItems.length}</span>
        )}
      </button>

      {/* Sepet Kenar Çubuğu Ana Yapısı */}
      <div
        className={`fixed mt-32 right-0 top-0 h-full w-full lg:w-96 bg-gray-50 shadow-2xl z-50 transition-transform duration-500 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:relative lg:translate-x-0 lg:shadow-none lg:border-l lg:p-6 p-4 overflow-y-auto`}
      >
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            🛒 Sepetim ({cartItems.length})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-500 hover:text-gray-700 lg:hidden text-3xl"
            aria-label="Sepeti Kapat"
          >
            &times;
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 italic text-center mt-10">Sepetiniz şuan boş. Hemen bir hizmet ekleyin!</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm">
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-[#150016] font-semibold">{formatCurrency(item.price)}</p> {/* TL formatı */}
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium ml-4 transition"
                  aria-label={`${item.name} ürününü sepetten çıkar`}
                >
                  Kaldır
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 pt-4 border-t-2 border-gray-200">
          <div className="flex justify-between font-bold text-xl text-gray-900 mb-4">
            <span>Toplam:</span>
            <span>{formatCurrency(subtotal)}</span> {/* TL formatı */}
          </div>

          {/* BANKA İÇİN INAKTİF ÖDEME BUTONU */}
          <button
            disabled={true} 
            className="w-full bg-gray-400 text-white px-6 py-3 rounded-lg font-bold text-lg cursor-not-allowed opacity-75"
            title="Sanal POS onayı bekleniyor. Bu buton şu an inaktiftir."
          >
            Ödeme Yap (İnaktif)
          </button>

        </div>
      </div>

       {/* Mobil sepet açıkken arka plan karartma (Overlay) */}
       {isCartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
    </>
  );

  // ----------------------------------------------------------------------
  // 4. SAYFA GÖVDESİ (MAIN RENDER)
  // ----------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#150016] text-white"> 
      
      {/* Max Genişlikli Konteyner */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        
        {/* ÜRÜN LİSTESİ (Shop Bölümü) */}
        <main className="w-full lg:w-3/4 p-4 sm:p-6 lg:p-8 order-2 lg:order-1 mt-32">
          <h1 className="text-4xl font-bold text-white mb-8">Dijital Hizmetler Mağazası</h1>
         

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>

        {/* SEPET BÖLÜMÜ */}
        <aside className="w-full lg:w-1/4 sticky top-0 h-full order-1 lg:order-2">
          <CartSidebar />
        </aside>

      </div>
    </div>
  );
}