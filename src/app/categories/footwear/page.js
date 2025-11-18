// app/categories/footwear/page.js
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function FootwearPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const mockProducts = [
    {
      id: 1, name: "NIKE AIR MAX", price: "₹5,499", originalPrice: "₹8,999", 
      image: "/products/footwear/nike.jpg", category: "sneakers", brand: "Nike", 
      condition: "Like New", rating: 4.8, isBestseller: true, isVerified: true
    },
    {
      id: 2, name: "ADIDAS RUNNING", price: "₹4,299", originalPrice: "₹6,499", 
      image: "/products/footwear/adidas.jpg", category: "sports", brand: "Adidas", 
      condition: "Excellent", rating: 4.6, isBestseller: true, isVerified: true
    },
    {
      id: 3, name: "FORMAL LEATHER SHOES", price: "₹3,999", originalPrice: "₹5,999", 
      image: "/products/footwear/formal.jpg", category: "formal", brand: "Bata", 
      condition: "Good", rating: 4.3, isBestseller: false, isVerified: true
    },
    {
      id: 4, name: "CASUAL SNEAKERS", price: "₹2,499", originalPrice: "₹3,999", 
      image: "/products/footwear/casual.jpg", category: "casual", brand: "Puma", 
      condition: "Excellent", rating: 4.5, isBestseller: false, isVerified: true
    },
    {
      id: 5, name: "SPORTS SANDALS", price: "₹1,799", originalPrice: "₹2,499", 
      image: "/products/footwear/sandals.jpg", category: "sandals", brand: "Skechers", 
      condition: "Like New", rating: 4.4, isBestseller: true, isVerified: true
    },
    {
      id: 6, name: "WINTER BOOTS", price: "₹4,799", originalPrice: "₹6,999", 
      image: "/products/footwear/boots.jpg", category: "boots", brand: "Woodland", 
      condition: "Excellent", rating: 4.7, isBestseller: false, isVerified: true
    }
  ]

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts)
      setLoading(false)
    }, 1000)
  }, [])

  const categories = [
    { id: 'all', name: 'All Items', count: 42 },
    { id: 'sneakers', name: 'Sneakers', count: 15 },
    { id: 'sports', name: 'Sports', count: 8 },
    { id: 'formal', name: 'Formal', count: 6 },
    { id: 'casual', name: 'Casual', count: 7 },
    { id: 'sandals', name: 'Sandals', count: 4 },
    { id: 'boots', name: 'Boots', count: 2 }
  ]

  const brands = ['Nike', 'Adidas', 'Puma', 'Skechers', 'Bata', 'All']
  const conditions = ['Brand New', 'Like New', 'Excellent', 'Good', 'Fair']

  const filteredProducts = products.filter(product => 
    activeFilter === 'all' || product.category === activeFilter
  )

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section - FULL SCREEN */}
        <section className="relative h-[60vh] sm:h-[75vh] md:h-[85vh] overflow-hidden">
          <Header />
          
          <div className="absolute inset-0 z-0">
            <Image
              src="/categories/footwear-banner.jpg"
              alt="Footwear - Just Becho"
              fill
              className="object-cover object-center brightness-110 contrast-105 saturate-110"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white px-4 sm:px-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-widest uppercase mb-6 opacity-0 animate-fade-in-up"
                  style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                FOOTWEAR
              </h1>
              <p className="text-xl sm:text-2xl font-light tracking-widest uppercase opacity-90 max-w-2xl mx-auto opacity-0 animate-fade-in-up"
                 style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                Step into style with pre-loved luxury footwear
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 opacity-0 animate-fade-in-up"
                   style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}>
                <Link
                  href="#products"
                  className="bg-white text-gray-900 px-8 py-4 font-light tracking-widest uppercase hover:bg-gray-100 transition-all duration-300 rounded-full text-lg"
                >
                  SHOP NOW
                </Link>
                <Link
                  href="/sell"
                  className="border-2 border-white text-white px-8 py-4 font-light tracking-widest uppercase hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-full text-lg"
                >
                  SELL ITEMS
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
            <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white rounded-full mt-1"></div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section id="products" className="py-16 bg-white">
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Sidebar Filters */}
              <div className="lg:w-80 flex-shrink-0">
                <div className="bg-gray-50 rounded-2xl p-6 sticky top-32">
                  
                  <div className="mb-8">
                    <h3 className="text-gray-900 text-lg font-light tracking-widest uppercase mb-4">
                      CATEGORIES
                    </h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <button
                          key={category.id}
                          onClick={() => setActiveFilter(category.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 flex justify-between items-center ${
                            activeFilter === category.id 
                              ? 'bg-black text-white' 
                              : 'text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          <span className="text-sm font-light">{category.name}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            activeFilter === category.id 
                              ? 'bg-white text-black' 
                              : 'bg-gray-300 text-gray-700'
                          }`}>
                            {category.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-gray-900 text-lg font-light tracking-widest uppercase mb-4">
                      BRANDS
                    </h3>
                    <div className="space-y-2">
                      {brands.map(brand => (
                        <label key={brand} className="flex items-center space-x-3 cursor-pointer group">
                          <input type="checkbox" className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black" />
                          <span className="text-gray-600 text-sm font-light group-hover:text-gray-900 transition-colors">
                            {brand}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-gray-900 text-lg font-light tracking-widest uppercase mb-4">
                      CONDITION
                    </h3>
                    <div className="space-y-2">
                      {conditions.map(condition => (
                        <label key={condition} className="flex items-center space-x-3 cursor-pointer group">
                          <input type="checkbox" className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black" />
                          <span className="text-gray-600 text-sm font-light group-hover:text-gray-900 transition-colors">
                            {condition}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-gray-900 text-lg font-light tracking-widest uppercase mb-4">
                      PRICE RANGE
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <input 
                          type="number" 
                          placeholder="Min" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black"
                        />
                        <input 
                          type="number" 
                          placeholder="Max" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black"
                        />
                      </div>
                      <button className="w-full bg-black text-white py-2 rounded-lg text-sm font-light tracking-widest uppercase hover:bg-gray-800 transition-colors">
                        APPLY
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Products Grid */}
              <div className="flex-1">
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm font-light">
                      Showing {filteredProducts.length} of {products.length} products
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-black"
                    >
                      <option value="newest">Newest First</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                    
                    <button className="bg-black text-white px-6 py-2 rounded-lg text-sm font-light tracking-widest uppercase hover:bg-gray-800 transition-colors">
                      SELL ITEM
                    </button>
                  </div>
                </div>

                {loading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className="bg-gray-200 aspect-square rounded-lg mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                      <div key={product.id} className="group cursor-pointer">
                        <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500 mb-4">
                          <div className="w-full h-full bg-gradient-to-br from-brown-100 to-amber-100 flex items-center justify-center">
                            <span className="text-gray-500 text-sm font-light">PRODUCT IMAGE</span>
                          </div>
                          
                          <div className="absolute top-3 left-3 flex flex-col gap-2">
                            {product.isBestseller && (
                              <span className="bg-white text-gray-900 text-xs font-light tracking-widest uppercase px-3 py-1 rounded-full">
                                BESTSELLER
                              </span>
                            )}
                            {product.isVerified && (
                              <span className="bg-green-500 text-white text-xs font-light tracking-widest uppercase px-3 py-1 rounded-full">
                                VERIFIED
                              </span>
                            )}
                          </div>

                          <div className="absolute top-3 right-3">
                            <span className="bg-black/80 text-white text-xs font-light px-2 py-1 rounded-full">
                              {product.condition}
                            </span>
                          </div>

                          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="bg-white text-gray-900 p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-start">
                            <h3 className="text-gray-900 text-base font-light tracking-widest uppercase flex-1">
                              {product.name}
                            </h3>
                            <div className="flex items-center gap-1 ml-2">
                              <span className="text-yellow-500 text-sm">★</span>
                              <span className="text-gray-600 text-sm">{product.rating}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 text-sm font-light uppercase">
                            {product.brand}
                          </p>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-gray-900 text-lg font-light">
                              {product.price}
                            </span>
                            <span className="text-gray-400 text-sm line-through">
                              {product.originalPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {!loading && (
                  <div className="text-center mt-12">
                    <button className="border-2 border-black text-black px-8 py-3 font-light tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300 rounded-full">
                      LOAD MORE
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-gray-900 text-3xl sm:text-4xl font-light tracking-widest uppercase mb-4">
                WHY SHOP FOOTWEAR AT JUST BECHO
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-gray-900 text-lg font-light tracking-widest uppercase mb-2">
                  AUTHENTICITY GUARANTEED
                </h3>
                <p className="text-gray-600 text-sm">
                  Every pair verified by footwear experts
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-white text-2xl">💎</span>
                </div>
                <h3 className="text-gray-900 text-lg font-light tracking-widest uppercase mb-2">
                  PREMIUM QUALITY
                </h3>
                <p className="text-gray-600 text-sm">
                  Only genuine pre-loved luxury footwear
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-white text-2xl">🚚</span>
                </div>
                <h3 className="text-gray-900 text-lg font-light tracking-widest uppercase mb-2">
                  FREE SHIPPING
                </h3>
                <p className="text-gray-600 text-sm">
                  Free shipping on all orders above ₹1999
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}