import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductCard } from './components/ProductCard'
import { Footer } from './components/Footer'
import { Toast } from './components/Toast'

interface Product {
  id: string
  color: {
    fr: string
    darija: string
  }
  price: {
    fr: string
    darija: string
  }
  image: string
  translations: {
    fr: {
      title: string
      description: string
    }
    darija: {
      title: string
      description: string
    }
  }
}

const PRODUCTS: Product[] = [
  {
    id: 'onyx',
    color: {
      fr: 'Noir onyx',
      darija: 'أسود ملكي',
    },
    price: {
      fr: '299 DT',
      darija: '299 د.ت',
    },
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80&auto=format&fit=crop',
    translations: {
      fr: {
        title: 'Casque audio sans fil haut de gamme - Noir onyx',
        description:
          'Son haute qualité, réduction de bruit active, confort enveloppant et autonomie longue durée pour écouter partout.',
      },
      darija: {
        title: 'سماعات لاسلكية عالية الجودة - كحل أونيكس',
        description: 'صوت عالي، عزل ضجيج فعّال، راحة كبيرة، وبطارية تدوم للاستماع في كل بلاصة.',
      },
    },
  },
  {
    id: 'silver',
    color: {
      fr: 'Argent glacé',
      darija: 'فضّي لامع',
    },
    price: {
      fr: '319 DT',
      darija: '319 د.ت',
    },
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=80&auto=format&fit=crop',
    translations: {
      fr: {
        title: 'Casque audio sans fil haut de gamme - Argent glacé',
        description:
          'Une finition lumineuse avec un rendu sonore précis, confortable et pensée pour les longues sessions.',
      },
      darija: {
        title: 'سماعات لاسلكية عالية الجودة - فضّي لامع',
        description: 'تشطيب أنيق، صوت واضح ودقيق، وراحة ممتازة للاستعمال الطويل.',
      },
    },
  },
  {
    id: 'sand',
    color: {
      fr: 'Sable doux',
      darija: 'رمل ناعم',
    },
    price: {
      fr: '289 DT',
      darija: '289 د.ت',
    },
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=80&auto=format&fit=crop',
    translations: {
      fr: {
        title: 'Casque audio sans fil haut de gamme - Sable doux',
        description:
          'Une version plus douce visuellement, idéale pour un style minimaliste avec une autonomie fiable.',
      },
      darija: {
        title: 'سماعات لاسلكية عالية الجودة - رمل ناعم',
        description: 'نسخة هادئة ومرتبة، مثالية للّي يحبّ ستيل بسيط وبطارية موثوقة.',
      },
    },
  },
]

type Language = 'fr' | 'darija'

const CATEGORIES = {
  fr: ['Tous', 'Casques', 'Écouteurs'],
  darija: ['الكل', 'سماعات رأس', 'سماعات أذن'],
}

function formatCountdown(targetTime: number) {
  const now = Date.now()
  const totalSeconds = Math.max(0, Math.floor((targetTime - now) / 1000))
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
  const seconds = String(totalSeconds % 60).padStart(2, '0')

  return `${hours}h ${minutes}m ${seconds}s`
}

const toastMessages: Record<Language, string> = {
  fr: 'Produit ajouté au panier!',
  darija: 'تزاد المنتج للسلة!',
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0])
  const [language, setLanguage] = useState<Language>('fr')
  const [countdown, setCountdown] = useState('02h 45m 10s')
  const [cartCount, setCartCount] = useState(0)
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    const targetTime = Date.now() + 2 * 60 * 60 * 1000 + 45 * 60 * 1000 + 10 * 1000

    const updateCountdown = () => {
      setCountdown(formatCountdown(targetTime))
    }

    updateCountdown()
    const timerId = window.setInterval(updateCountdown, 1000)

    return () => window.clearInterval(timerId)
  }, [])

  const handleAddToCart = () => {
    setCartCount((c) => c + 1)
    setToast(toastMessages[language])
  }

  return (
    <div className="min-h-screen bg-bg-light text-text-dark">
      <Header language={language} onLanguageChange={setLanguage} cartCount={cartCount} />

      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <Hero
          selectedProduct={selectedProduct}
          language={language}
          countdown={countdown}
          onAddToCart={handleAddToCart}
          onSelectProduct={setSelectedProduct}
          products={PRODUCTS}
        />

        <section className="mt-brand-lg space-y-brand-md">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Catalogue</p>
            <h2 className="text-2xl font-[800] leading-[40px] text-text-dark">Variantes disponibles</h2>
          </div>

          <div className="mb-brand-lg flex flex-wrap gap-brand-sm">
            {CATEGORIES[language].map((category) => (
              <button
                key={category}
                type="button"
                className="rounded-full border border-primary bg-selection px-4 py-2 text-sm font-semibold text-text-dark transition-all duration-300 hover:bg-primary hover:text-bg-light"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-brand-md md:grid-cols-3">
            {PRODUCTS.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                language={language}
                isActive={selectedProduct.id === product.id}
                index={index}
                onSelect={setSelectedProduct}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {toast && <Toast message={toast} />}
    </div>
  )
}