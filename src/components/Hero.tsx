type Language = 'fr' | 'darija'

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
    fr: { title: string; description: string }
    darija: { title: string; description: string }
  }
}

interface HeroProps {
  selectedProduct: Product
  language: Language
  countdown: string
  onAddToCart: () => void
  onSelectProduct: (product: Product) => void
  products: Product[]
}

const translations: Record<Language, any> = {
  fr: {
    promoTitle: 'Profitez de la musique sans limites.',
    countdownLabel: "L'offre se termine dans:",
    priceLabel: 'Prix',
    addToCart: 'Ajouter au panier',
    trialButton: 'Essayer 2 mois gratuits',
    heroBubble: 'Promo',
    reassurance: 'Sans carte bancaire requise',
    trustLayer: 'Rejoignez +2000 utilisateurs tunisiens',
  },
  darija: {
    promoTitle: 'استمتع بالموسيقى بلا حدود.',
    countdownLabel: 'العرض يسكر بعد:',
    priceLabel: 'السعر',
    addToCart: 'أضف إلى السلة',
    trialButton: 'جرّب شهرين ببلاش',
    heroBubble: '-50%',
    reassurance: 'بدون بطاقة بنكية',
    trustLayer: 'انضم إلى أكثر من 2000 مستخدم في تونس',
  },
}

export function Hero({
  selectedProduct,
  language,
  countdown,
  onAddToCart,
  onSelectProduct,
  products,
}: HeroProps) {
  const t = translations[language]
  const productText = selectedProduct.translations[language]

  return (
    <section className="grid grid-cols-1 gap-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-bg-light via-selection/40 to-bg-light p-6 md:grid-cols-2 md:items-center md:p-10">
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-xl border border-text-dark/10 bg-bg-light">
          <div className="float-gentle absolute right-brand-md top-brand-md z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white/35 text-center text-[11px] font-bold leading-none text-text-dark shadow-[0_12px_30px_-16px_oklch(54.6%_0.245_262.881)] backdrop-blur-sm">
            {t.heroBubble}
          </div>
          <img
            src={selectedProduct.image}
            alt={productText.title}
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {products.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => onSelectProduct(product)}
              aria-label={`Sélectionner ${product.color.fr}`}
              className={[
                'overflow-hidden rounded-lg border transition-all duration-300 hover:scale-105 hover:brightness-110',
                selectedProduct.id === product.id ? 'border-primary' : 'border-text-dark/10 hover:border-primary/50',
              ].join(' ')}
            >
              <img
                src={product.image}
                alt={`${product.color.fr} preview`}
                className="aspect-square w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="animate-in fade-in slide-in-from-bottom-4 text-xl font-[700] leading-tight text-slate-500 md:text-lg">
          {language === 'darija' ? <span dir="rtl" lang="ar">{t.promoTitle}</span> : t.promoTitle}
        </h2>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 transition-all duration-300">
          {language === 'darija' ? <span dir="rtl" lang="ar">{t.countdownLabel}</span> : t.countdownLabel} <span className="font-extrabold text-primary">{countdown}</span>
        </p>
        <h1 className="text-[44px] font-[900] leading-[50px] transition-all duration-300 md:text-[52px] md:leading-[58px] text-text-dark">
          {language === 'darija' ? <span dir="rtl" lang="ar">{productText.title}</span> : productText.title}
        </h1>
        <p className="text-sm font-[600] text-slate-600 transition-all duration-300">
          {language === 'darija' ? <span dir="rtl" lang="ar">{selectedProduct.color.darija}</span> : selectedProduct.color.fr}
        </p>
        <div className="space-y-1.5 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 transition-all duration-300">
            {language === 'darija' ? <span dir="rtl" lang="ar">{t.priceLabel}</span> : t.priceLabel}
          </p>
          <p className="text-4xl font-[900] text-primary transition-all duration-300">
            {language === 'darija' ? <span dir="rtl" lang="ar">{selectedProduct.price.darija}</span> : selectedProduct.price.fr}
          </p>
        </div>
        <p className="text-sm text-slate-500 leading-relaxed transition-all duration-300">
          {language === 'darija' ? <span dir="rtl" lang="ar">{productText.description}</span> : productText.description}
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={onAddToCart}
            className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"
          >
            {language === 'darija' ? <span dir="rtl" lang="ar">{t.addToCart}</span> : t.addToCart}
          </button>
          <button
            type="button"
            className="pulse-shadow rounded-full border border-primary bg-white px-6 py-3 text-sm font-bold text-primary shadow-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-primary/5"
          >
            {language === 'darija' ? <span dir="rtl" lang="ar">{t.trialButton}</span> : t.trialButton}
          </button>
        </div>
        <p className="text-xs text-slate-500 italic transition-all duration-300">
          {language === 'darija' ? <span dir="rtl" lang="ar">{t.trustLayer}</span> : t.trustLayer}
        </p>
        <p className="text-xs text-slate-500 font-medium transition-all duration-300">
          {language === 'darija' ? <span dir="rtl" lang="ar">{t.reassurance}</span> : t.reassurance}
        </p>
      </div>
    </section>
  )
}
