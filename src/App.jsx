import { useState, useEffect } from "react"
import { Heart, Gift, Sparkles } from "lucide-react"

const memoryPhotos = [
  { src: "/images/khusi-1.jpeg", alt: "Beautiful Khusi in peach outfit" },
  { src: "/images/khusi-2.jpeg", alt: "Khusi with flower emoji" },
  { src: "/images/khusi-3.jpeg", alt: "Khusi in pink lace at the mall" },
  { src: "/images/khusi-4.jpeg", alt: "Mirror selfie in burgundy" },
  { src: "/images/khusi-5.jpeg", alt: "Khusi in white patterned dress" },
  { src: "/images/khusi-6.jpeg", alt: "Graduation day in purple gown" },
  { src: "/images/khusi-7.jpeg", alt: "Vintage style photo" },
  { src: "/images/khusi-8.jpeg", alt: "Red top at temple" },
  { src: "/images/khusi-9.jpeg", alt: "Black dress mirror selfie" },
  { src: "/images/khusi-10.jpeg", alt: "Purple shirt heart gesture" },
]

export default function KhusiBirthdayPage() {
  const [showGift, setShowGift] = useState(false)
  const [showHearts, setShowHearts] = useState(false)

  useEffect(() => {
    setShowHearts(true)
    const timer = setTimeout(() => setShowHearts(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const openGift = () => {
    setShowGift(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-rose-200 relative overflow-hidden">
      {/* Floating Hearts Animation */}
      {showHearts && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className={`absolute text-pink-500 animate-bounce`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
              size={20 + Math.random() * 20}
            />
          ))}
        </div>
      )}

      {/* Enhanced Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="floating-particle text-pink-300"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                fontSize: `${12 + Math.random() * 8}px`,
              }}
            >
              {["💖", "✨", "🌸", "💕", "🦋", "💫"][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-rose-400/20 blur-3xl rounded-full"></div>

            <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-pink-700 via-purple-700 to-rose-700 bg-clip-text mb-8 animate-float">
              Happy Birthday
            </h1>

            <h2 className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-pink-700 via-purple-700 to-rose-700 bg-clip-text mb-8 animate-float">
              💕 Khushi 💕
            </h2>

            <div className="flex justify-center items-center gap-6 mb-12">
              <Sparkles className="text-yellow-500 animate-sparkle" size={40} />
              <Heart className="text-red-500 animate-pulse" size={40} />
              <span className="text-4xl animate-bounce">🎂</span>
              <Heart className="text-red-500 animate-pulse" size={40} />
              <Sparkles className="text-yellow-500 animate-sparkle" size={40} />
            </div>
          </div>

          <div className="gradient-border bg-white/95 backdrop-blur-lg shadow-2xl border-0 hover:shadow-pink-200/50 transition-all duration-500 rounded-2xl">
            <div className="p-10">
              <div className="text-3xl mb-6">💌</div>
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8 font-medium">
                To my dearest love, on your special day...
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Every moment with you is a treasure, every smile you share lights up my world. Today we celebrate not
                just your birthday, but the incredible person you are and all the beautiful memories we've created
                together. Here's to many more adventures, laughs, and endless love! 🌟
              </p>

              <div className="mt-8 flex justify-center gap-3">
                {[...Array(7)].map((_, i) => (
                  <Heart
                    key={i}
                    className="text-red-500 animate-pulse"
                    size={24}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Photo Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent mb-4">
              Beautiful Memories
            </h3>
            <div className="flex justify-center items-center gap-3 mb-6">
              <Heart className="text-pink-500 animate-pulse" size={24} />
              <span className="text-2xl">📸</span>
              <Heart className="text-pink-500 animate-pulse" size={24} />
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every picture tells a story, every moment captured is a treasure forever 💕 Celebrating all the wonderful
              moments
            </p>
          </div>

          {/* Masonry-style Photo Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {memoryPhotos.map((photo, index) => (
              <div
                key={index}
                className={`break-inside-avoid overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl border-0 bg-gradient-to-br from-white to-pink-50 hover:shadow-2xl hover:shadow-pink-200/50 group ${
                  index % 3 === 0 ? "rotate-1" : index % 3 === 1 ? "-rotate-1" : "rotate-0"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="p-0 relative">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating hearts on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Heart className="absolute top-4 right-4 text-white animate-pulse" size={20} />
                      <Sparkles className="absolute bottom-4 left-4 text-yellow-300 animate-bounce" size={18} />
                    </div>
                  </div>

                  {/* Photo frame effect */}
                  <div className="absolute inset-0 border-8 border-white rounded-lg shadow-inner pointer-events-none" />

                  {/* Polaroid-style caption */}
                  <div className="bg-white p-3 text-center">
                    <p className="text-sm text-gray-600 font-medium">Memory #{index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center mt-16 gap-8">
            <div className="text-4xl animate-bounce" style={{ animationDelay: "0s" }}>
              💖
            </div>
            <div className="text-4xl animate-bounce" style={{ animationDelay: "0.2s" }}>
              ✨
            </div>
            <div className="text-4xl animate-bounce" style={{ animationDelay: "0.4s" }}>
              🌸
            </div>
            <div className="text-4xl animate-bounce" style={{ animationDelay: "0.6s" }}>
              💕
            </div>
            <div className="text-4xl animate-bounce" style={{ animationDelay: "0.8s" }}>
              🦋
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Gift Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-rose-50/50"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent mb-12">
            A Special Gift for You! 🎁
          </h3>

          {!showGift ? (
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 blur-xl opacity-50 animate-pulse"></div>
              <button
                onClick={openGift}
                className=" flex magical-button text-white text-2xl px-16 py-8 rounded-full border-0 relative z-10 transform hover:scale-110 transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-2xl"
              >
                <Gift className="mr-4 animate-bounce" size={32} />
                Click to Open Your Gift!
              </button>

              {/* Floating decorations around button */}
              <div className="absolute -top-8 -right-8 animate-sparkle">
                <Sparkles className="text-yellow-500" size={28} />
              </div>
              <div className="absolute -bottom-8 -left-8 animate-pulse">
                <Heart className="text-red-500" size={28} />
              </div>
              <div className="absolute -top-6 -left-12 animate-bounce">
                <span className="text-2xl">🎀</span>
              </div>
              <div className="absolute -bottom-6 -right-12 animate-float">
                <span className="text-2xl">✨</span>
              </div>
            </div>
          ) : (
            <div className="gradient-border bg-gradient-to-br from-pink-50 to-purple-50 border-0 shadow-2xl animate-fadeIn hover:shadow-pink-200/50 transition-all duration-500 rounded-2xl">
              <div className="p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-purple-100/50 animate-shimmer"></div>

                <div className="relative z-10">
                  <div className="text-8xl mb-8 animate-bounce">🎉</div>
                  <h4 className="text-4xl font-bold bg-gradient-to-r from-pink-700 to-purple-700 bg-clip-text text-transparent mb-8">
                    Your Gift is...
                  </h4>

                  <div className="gradient-border bg-white/90 backdrop-blur-sm shadow-xl border-4 border-pink-200 mb-8 hover:shadow-2xl transition-all duration-500 rounded-2xl">
                    <div className="p-10">
                      <div className="text-6xl mb-6 animate-pulse">💝</div>
                      <h5 className="text-3xl font-bold text-purple-700 mb-6">A Promise of Forever Love</h5>
                      <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        My gift to you isn't something you can hold, but something you can feel every day - my
                        unconditional love, endless support, and the promise that no matter what life brings, I'll
                        always be here to celebrate your joys, comfort your sorrows, and love you with all my heart. You
                        are my greatest gift, and I'm grateful for every day I get to love you! 💕
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center gap-6">
                    <Heart className="text-red-500 animate-pulse" size={40} />
                    <span className="text-4xl animate-bounce">🎵</span>
                    <Sparkles className="text-yellow-500 animate-sparkle" size={40} />
                    <span className="text-4xl animate-float">🌹</span>
                    <Heart className="text-pink-500 animate-pulse" size={40} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer Message */}
      <footer className="py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="gradient-border bg-white/90 backdrop-blur-sm border-2 border-pink-200 shadow-xl rounded-2xl">
            <div className="p-8">
              <p className="text-xl text-gray-700 mb-4">Happy Birthday once again! 🎂</p>
              <p className="text-lg text-gray-600">
                May this year bring you all the happiness, success, and love you deserve. You make every day brighter
                just by being you! ✨
              </p>
              <div className="mt-6 flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="text-red-500 animate-pulse" size={20} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="text-pink-600 animate-pulse"
                size={24}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          On this special day, may all your dreams come true and may happiness follow you wherever you go. You bring so
          much joy and light into the lives of everyone around you. Here's to another year of wonderful adventures,
          beautiful memories, and endless possibilities!
        </p>

        <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600">
          Have the most amazing birthday ever! 🎂✨
        </div>
      </div>
      <div className="text-center mt-12">
        <p className="text-black text-lg">Made with ❤️ for someone very special</p>
      </div>
    </div>
  )
}
