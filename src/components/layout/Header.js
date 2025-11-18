'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    // Initialize on mount
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Categories with dropdown data - Updated for user listings
  const categories = [
    {
      name: "MEN'S FASHION",
      href: '/categories/men',
      dropdown: {
        sections: [
          {
            title: "CLOTHING",
            items: ["T-Shirts", "Shirts", "Jeans", "Jackets", "Suits", "Activewear"]
          },
          {
            title: "FOOTWEAR", 
            items: ["Sneakers", "Formal Shoes", "Sports Shoes", "Sandals", "Boots"]
          },
          {
            title: "ACCESSORIES",
            items: ["Watches", "Sunglasses", "Bags", "Belts", "Wallets", "Jewelry"]
          },
          {
            title: "BRANDS",
            items: ["Nike", "Adidas", "Zara", "H&M", "Levi's", "Puma"]
          },
          {
            title: "SELL YOUR ITEM",
            items: ["List Clothing", "List Footwear", "List Accessories", "Quick Sell", "Get Quote"]
          }
        ]
      }
    },
    {
      name: "WOMEN'S FASHION",
      href: '/categories/women',
      dropdown: {
        sections: [
          {
            title: "CLOTHING",
            items: ["Dresses", "Tops", "Jeans", "Skirts", "Ethnic Wear", "Activewear"]
          },
          {
            title: "FOOTWEAR",
            items: ["Heels", "Flats", "Sneakers", "Sandals", "Boots"]
          },
          {
            title: "ACCESSORIES",
            items: ["Handbags", "Jewelry", "Watches", "Sunglasses", "Scarves"]
          },
          {
            title: "BRANDS", 
            items: ["Zara", "H&M", "Mango", "Forever 21", "Nike", "Adidas"]
          },
          {
            title: "SELL YOUR ITEM",
            items: ["List Clothing", "List Footwear", "List Accessories", "Quick Sell", "Get Quote"]
          }
        ]
      }
    },
    {
      name: "KIDS",
      href: '/categories/kids',
      dropdown: {
        sections: [
          {
            title: "BOYS",
            items: ["T-Shirts", "Shirts", "Jeans", "Footwear", "Accessories"]
          },
          {
            title: "GIRLS",
            items: ["Dresses", "Tops", "Skirts", "Footwear", "Accessories"]
          },
          {
            title: "INFANTS",
            items: ["Onesies", "Rompers", "Sets", "Footwear", "Toys"]
          },
          {
            title: "BRANDS",
            items: ["Carter's", "Gap Kids", "H&M Kids", "Zara Kids", "Nike Kids"]
          },
          {
            title: "SELL YOUR ITEM",
            items: ["List Kids Items", "List Toys", "Quick Sell", "Get Quote"]
          }
        ]
      }
    },
    {
      name: "FOOTWEAR",
      href: '/categories/footwear',
      dropdown: {
        sections: [
          {
            title: "MEN'S",
            items: ["Sneakers", "Sports", "Formal", "Casual", "Sandals"]
          },
          {
            title: "WOMEN'S", 
            items: ["Heels", "Flats", "Sneakers", "Sports", "Sandals"]
          },
          {
            title: "KIDS",
            items: ["School Shoes", "Sneakers", "Sandals", "Sports"]
          },
          {
            title: "BRANDS",
            items: ["Nike", "Adidas", "Puma", "Skechers", "Bata"]
          },
          {
            title: "SELL YOUR ITEM",
            items: ["List Footwear", "Get Valuation", "Quick Sell"]
          }
        ]
      }
    },
    {
      name: "WATCHES",
      href: '/categories/watches', 
      dropdown: {
        sections: [
          {
            title: "MEN'S WATCHES",
            items: ["Luxury", "Sports", "Casual", "Smart", "Chronograph"]
          },
          {
            title: "WOMEN'S WATCHES",
            items: ["Luxury", "Fashion", "Casual", "Smart", "Diamond"] 
          },
          {
            title: "BRANDS",
            items: ["Rolex", "Omega", "Fossil", "Casio", "Apple Watch"]
          },
          {
            title: "FEATURES",
            items: ["Automatic", "Chronograph", "Water Resistant", "Smart"]
          },
          {
            title: "SELL YOUR ITEM",
            items: ["List Watch", "Get Valuation", "Quick Sell"]
          }
        ]
      }
    },
    {
      name: "COSMETICS & PERFUME",
      href: '/categories/cosmetics',
      dropdown: {
        sections: [
          {
            title: "MAKEUP",
            items: ["Foundation", "Lipstick", "Mascara", "Eyeshadow", "Blush"]
          },
          {
            title: "SKINCARE",
            items: ["Face Creams", "Serums", "Face Wash", "Toners", "Masks"]
          },
          {
            title: "PERFUMES", 
            items: ["Men's", "Women's", "Unisex", "Luxury", "Body Sprays"]
          },
          {
            title: "BRANDS",
            items: ["MAC", "L'Oreal", "Lakme", "Chanel", "Dior"]
          },
          {
            title: "SELL YOUR ITEM",
            items: ["List Cosmetics", "List Perfumes", "Quick Sell"]
          }
        ]
      }
    },
    {
      name: "TOYS & COLLECTIBLES",
      href: '/categories/toys',
      dropdown: {
        sections: [
          {
            title: "ACTION FIGURES",
            items: ["Superheroes", "Movie Characters", "Anime", "Collectible"]
          },
          {
            title: "EDUCATIONAL",
            items: ["Building Blocks", "Puzzles", "Science Kits", "Art Supplies"]
          },
          {
            title: "OUTDOOR", 
            items: ["Ride-Ons", "Sports", "Play Sets", "Water Toys"]
          },
          {
            title: "BRANDS",
            items: ["Lego", "Barbie", "Hot Wheels", "Marvel", "Disney"]
          },
          {
            title: "SELL YOUR ITEM",
            items: ["List Toys", "List Collectibles", "Quick Sell"]
          }
        ]
      }
    },
    {
      name: "ACCESSORIES",
      href: '/categories/accessories',
      dropdown: {
        sections: [
          {
            title: "BAGS",
            items: ["Handbags", "Backpacks", "Wallets", "Luggage", "Clutches"]
          },
          {
            title: "JEWELRY",
            items: ["Necklaces", "Earrings", "Rings", "Bracelets", "Watches"]
          },
          {
            title: "EYEWEAR",
            items: ["Sunglasses", "Spectacles", "Reading Glasses"]
          },
          {
            title: "OTHER",
            items: ["Belts", "Caps", "Scarves", "Ties", "Perfumes"]
          },
          {
            title: "SELL YOUR ITEM",
            items: ["List Accessories", "Get Valuation", "Quick Sell"]
          }
        ]
      }
    }
    
  ]

  return (
    <>
      {/* MAIN HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans ${
          isScrolled ? 'bg-white text-gray-900 shadow-sm' : 'bg-transparent text-white'
        }`}
      >
        <div className="w-[95%] sm:w-[90%] mx-auto">
          <div className="flex items-center justify-between py-4 sm:py-5">
            {/* LEFT: Search + Sell Now - Desktop Only */}
            <div className="hidden md:flex flex-1 items-center space-x-4">
              {/* Search Bar */}
              <div className="relative flex items-center max-w-[200px] lg:max-w-[220px] w-full border-b-2 border-gray-400">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className={`flex-1 bg-transparent outline-none py-1.5 text-[14px] lg:text-[15px] w-full font-light tracking-wide ${
                    isScrolled
                      ? 'text-gray-800 placeholder-gray-500'
                      : 'text-white placeholder-white/80'
                  }`}
                />
                <button
                  className={`px-2 py-1.5 transition flex-shrink-0 ${
                    isScrolled ? 'text-gray-600' : 'text-white'
                  }`}
                >
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              {/* Sell Now Button */}
              <Link
                href="/sell"
                className={`text-[14px] lg:text-[15px] font-light tracking-widest uppercase transition-all duration-300 whitespace-nowrap px-4 lg:px-5 py-1.5 rounded-full ${
                  isScrolled
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                SELL NOW
              </Link>
            </div>

            {/* CENTER: Logo - Perfect Center */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="flex items-center justify-center">
                <Image
                  src="/Just Becho Logo Golden.png"
                  alt="Just Becho"
                  width={isScrolled ? 70 : 80}
                  height={isScrolled ? 70 : 80}
                  className={`transition-all duration-500 ${
                    isScrolled ? 'h-14 w-auto' : 'h-16 w-auto'
                  }`}
                  priority
                />
              </Link>
            </div>

            {/* RIGHT: Icons */}
            <div className="flex items-center space-x-4 sm:space-x-5 flex-1 justify-end">
              {/* Mobile Menu Button */}
              <button
                className="md:hidden focus:outline-none p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

              {/* Desktop Options */}
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                {/* Profile Icon */}
                <Link href="/profile" className="hover:text-gray-700 transition-all duration-300 transform hover:scale-110">
                  <FiUser className="w-6 h-6 lg:w-7 lg:h-7" />
                </Link>

                {/* Wishlist Icon */}
                <Link href="/wishlist" className="hover:text-gray-700 transition-all duration-300 transform hover:scale-110">
                  <FiHeart className="w-6 h-6 lg:w-7 lg:h-7" />
                </Link>

                {/* Cart Icon */}
                <Link href="/cart" className="relative hover:text-gray-700 transition-all duration-300 transform hover:scale-110">
                  <FiShoppingBag className="w-6 h-6 lg:w-7 lg:h-7" />
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                    0
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Search Bar - Below Header */}
          <div className="md:hidden border-t border-gray-200/50 mt-2 pt-2 pb-1">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search for products..."
                className={`flex-1 bg-white/20 backdrop-blur-sm border border-gray-300/50 rounded-full px-4 py-2 text-sm outline-none w-full font-light tracking-wide ${
                  isScrolled
                    ? 'text-gray-800 placeholder-gray-500 bg-white'
                    : 'text-white placeholder-white/80 bg-white/10'
                }`}
              />
              <button
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div
            className={`md:hidden transition-all duration-300 font-light tracking-widest uppercase ${
              isScrolled ? 'bg-white text-gray-800 shadow-lg' : 'bg-black/95 text-white'
            }`}
          >
            <nav className="flex flex-col px-6 py-4 space-y-4 text-base">
              <Link href="/sell" className="py-2 hover:text-gray-700 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                SELL NOW
              </Link>
              <Link href="/profile" className="py-2 hover:text-gray-700 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                PROFILE
              </Link>
              <Link href="/wishlist" className="py-2 hover:text-gray-700 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                WISHLIST
              </Link>
              <Link href="/cart" className="py-2 hover:text-gray-700 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                CART
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* SUBHEADER WITH CATEGORIES */}
      <div
        className={`fixed top-20 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        {/* Main Categories Bar */}
        <div className="w-[95%] sm:w-[90%] mx-auto">
          <nav className="hidden md:flex items-center justify-center space-x-8 lg:space-x-12 py-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative group"
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Category Link */}
                <Link
                  href={category.href}
                  className={`text-sm font-light tracking-widest uppercase transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-gray-600' 
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  {category.name}
                </Link>

                {/* COMPACT DROPDOWN - IMPROVED DESIGN */}
                {activeCategory === category.name && (
                  <div 
                    className="fixed left-0 right-0 top-[140px] bg-white shadow-2xl border-t border-gray-100 py-8 z-[60]"
                    onMouseEnter={() => setActiveCategory(category.name)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <div className="w-[95%] sm:w-[90%] mx-auto max-w-5xl">
                      <div className="grid grid-cols-5 gap-6">
                        {category.dropdown.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="space-y-2">
                            {/* Section Title - Compact */}
                            <h3 className="text-gray-900 text-[13px] font-semibold tracking-wide uppercase mb-1">
                              {section.title}
                            </h3>
                            
                            {/* Section Items - Compact */}
                            <ul className="space-y-1">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    href={`${category.href}?subcategory=${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-gray-600 text-[12px] font-normal hover:text-gray-900 transition-colors duration-200 block py-0.5"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* View All Button - Compact */}
                      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                        <Link
                          href={category.href}
                          className="inline-flex items-center text-gray-900 text-[13px] font-semibold tracking-wide uppercase hover:text-gray-700 transition-colors duration-200 group"
                        >
                          View All {category.name} 
                          <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile Categories - Horizontal Scroll */}
        <div className="md:hidden border-t border-gray-200/50">
          <div className="flex overflow-x-auto space-x-6 py-3 px-4 hide-scrollbar">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`flex-shrink-0 text-xs font-light tracking-widest uppercase whitespace-nowrap ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-gray-600' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {category.name.split(' ')[0]}
              </Link>
            ))}
          </div>
        </div>

        <style jsx>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </>
  )
}