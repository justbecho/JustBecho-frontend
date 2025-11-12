import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {

  // Brands data with better logo URLs
  const brands = [
    { 
      name: "H&M", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" 
    },
    { 
      name: "Louis Vuitton", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Louis_Vuitton_logo_and_wordmark.svg/2560px-Louis_Vuitton_logo_and_wordmark.svg.png" 
    },
    { 
      name: "Jordan", 
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/800px-Jumpman_logo.svg.png" 
    },
    { 
      name: "Nike", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2560px-Logo_NIKE.svg.png" 
    },
    { 
      name: "Adidas", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png" 
    },
    { 
      name: "Chanel", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Chanel_logo.png/800px-Chanel_logo.png" 
    },
    { 
      name: "Zara", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png" 
    },
    { 
      name: "Gucci", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Gucci_Logo.svg/2560px-Gucci_Logo.svg.png" 
    },
    { 
      name: "Puma", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Puma_logo.svg/1200px-Puma_logo.svg.png" 
    },
    { 
      name: "Apple", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png" 
    },
    { 
      name: "Samsung", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" 
    },
    { 
      name: "Sony", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/2560px-Sony_logo.svg.png" 
    },
  ]

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands]

  // Category-wise products
  const categorySections = [
    {
      name: "Men's Fashion",
      href: '/categories/men',
      products: [
        { id: 1, name: "Zara Leather Jacket", price: "₹8,499", image: "/products/bag.jpg", isBestseller: true },
        { id: 2, name: "Denim Shirt", price: "₹2,499", image: "/products/bag.jpg", isBestseller: false },
        { id: 3, name: "Casual Trousers", price: "₹1,999", image: "/products/bag.jpg", isBestseller: true },
        { id: 4, name: "Formal Blazer", price: "₹5,999", image: "/products/bag.jpg", isBestseller: false },
      ]
    },
    {
      name: "Women's Fashion",
      href: '/categories/women',
      products: [
        { id: 1, name: "H&M Summer Dress", price: "₹2,499", image: "/products/bag.jpg", isBestseller: true },
        { id: 2, name: "Designer Saree", price: "₹3,999", image: "/products/bag.jpg", isBestseller: false },
        { id: 3, name: "Casual Top", price: "₹1,299", image: "/products/bag.jpg", isBestseller: true },
        { id: 4, name: "Designer Kurti", price: "₹2,199", image: "/products/bag.jpg", isBestseller: false },
      ]
    },
    {
      name: "Footwear",
      href: '/categories/footwear',
      products: [
        { id: 1, name: "Nike Air Jordan 1", price: "₹12,499", image: "/products/bag.jpg", isBestseller: true },
        { id: 2, name: "Adidas Running Shoes", price: "₹8,999", image: "/products/bag.jpg", isBestseller: false },
        { id: 3, name: "Formal Leather Shoes", price: "₹6,499", image: "/products/bag.jpg", isBestseller: true },
        { id: 4, name: "Casual Sneakers", price: "₹3,999", image: "/products/bag.jpg", isBestseller: false },
      ]
    },
    {
      name: "Accessories",
      href: '/categories/accessories',
      products: [
        { id: 1, name: "Leather Handbag", price: "₹4,999", image: "/products/bag.jpg", isBestseller: true },
        { id: 2, name: "Sunglasses", price: "₹1,999", image: "/products/bag.jpg", isBestseller: false },
        { id: 3, name: "Silver Necklace", price: "₹2,499", image: "/products/bag.jpg", isBestseller: true },
        { id: 4, name: "Designer Watch", price: "₹7,999", image: "/products/bag.jpg", isBestseller: false },
      ]
    },
    {
      name: "Electronics",
      href: '/categories/electronics',
      products: [
        { id: 1, name: "Apple AirPods Pro", price: "₹18,999", image: "/products/bag.jpg", isBestseller: true },
        { id: 2, name: "Smart Watch", price: "₹5,999", image: "/products/bag.jpg", isBestseller: false },
        { id: 3, name: "Bluetooth Speaker", price: "₹3,499", image: "/products/bag.jpg", isBestseller: true },
        { id: 4, name: "Gaming Headphones", price: "₹6,999", image: "/products/bag.jpg", isBestseller: false },
      ]
    }
  ]

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[65vh] sm:h-[75vh] md:h-[85vh] overflow-hidden">
          <Header />

          <div className="absolute inset-0 z-0">
            <Image
              src="/2_5.webp.jpeg"
              alt="Just Becho - Buy and Sell Pre-loved Items"
              fill
              className="object-cover object-center brightness-110 contrast-105 saturate-110"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1700px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl  text-text-primary mb-4 tracking-tight">
                SHOP BY CATEGORY
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto font-normal">
                Discover collections curated for every style and need
              </p>
            </div>

            {/* Circular Category Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10 lg:gap-12">
              {[
                { name: "MEN'S FASHION", img: '/categories/backpacks.jpg', href: '/categories/men' },
                { name: "WOMEN'S FASHION", img: '/categories/doffel.jpg', href: '/categories/women' },
                { name: 'FOOTWEAR', img: '/categories/drinkware.jpg', href: '/categories/footwear' },
                { name: 'ACCESSORIES', img: '/categories/handbag.jpg', href: '/categories/accessories' },
                { name: 'HOME & LIVING', img: '/categories/planter.jpg', href: '/categories/home' },
                { name: 'WATCHES', img: '/categories/planter.jpg', href: '/categories/watches' },
                { name: 'ELECTRONICS', img: '/categories/handbag.jpg', href: '/categories/electronics' },
              ].map((cat, index) => (
                <Link
                  href={cat.href}
                  key={index}
                  className="group flex flex-col items-center text-center transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                    <Image
                      src={cat.img}
                      alt={cat.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg text-text-primary group-hover:text-primary transition-colors duration-300">
                    {cat.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Category-wise Sections - All White Background */}
        {categorySections.map((category) => (
          <section key={category.name} className="py-20 bg-white">
            <div className="max-w-[1700px] mx-auto px-6">
              {/* Heading */}
              <div className="text-center mb-16">
                <h2 className="text-4xl text-gray-900 mb-3 tracking-tight">
                  {category.name}
                </h2>
                <p className="text-gray-500 text-lg font-normal">
                  Explore our curated collection of {category.name.toLowerCase()}
                </p>
              </div>

              {/* Product Grid - Same Width as Categories */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {category.products.map((item) => (
                  <div
                    key={item.id}
                    className="group cursor-pointer"
                  >
                    {/* Large Square Image Container - Same Size as Category Circles */}
                    <div className="relative w-full aspect-square overflow-hidden mb-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Bestseller Badge - Only if it's a bestseller */}
                      {item.isBestseller && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-black text-white px-3 py-1 text-sm font-medium">
                            Bestseller
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="text-left">
                      <h3 className="text-gray-800 font-normal text-base mb-1 leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-gray-900 font-medium text-base">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* View More Link */}
              <div className="text-center mt-16">
                <Link
                  href={category.href}
                  className="text-gray-900 font-medium text-lg hover:underline underline-offset-4 transition-all duration-300"
                >
                  View More in {category.name}
                </Link>
              </div>
            </div>
          </section>
        ))}

        {/* Brands Carousel Section - Before Footer */}
        <section className="py-16 bg-white ">
          <div className="w-full overflow-hidden">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Featured Brands
              </h2>
              
            </div>
            
            {/* Infinite Moving Carousel */}
            <div className="relative">
              <div className="flex animate-marquee whitespace-nowrap">
                {duplicatedBrands.map((brand, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center justify-center mx-8 group"
                  >
                    <div className="flex flex-col items-center space-y-3">
                      {/* Brand Logo Container */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-lg flex items-center justify-center p-3 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-200 overflow-hidden">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      {/* Brand Name */}
                      <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}