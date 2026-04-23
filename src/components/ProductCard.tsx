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

interface ProductCardProps {
  product: Product
  language: Language
  isActive: boolean
  index: number
  onSelect: (product: Product) => void
}

const priceLabels: Record<Language, string> = {
  fr: 'Prix',
  darija: 'السعر',
}

export function ProductCard({ product, language, isActive, index, onSelect }: ProductCardProps) {
  const cardText = product.translations[language]
  const priceLabel = priceLabels[language]
  const cardPrice = product.price[language]

  return (
    <article
      className={[
        'animate-fade-in rounded-[24px] border border-slate-100 bg-white shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:border-primary',
        isActive ? 'ring-2 ring-primary' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <button
        type="button"
        onClick={() => onSelect(product)}
        className="group flex h-full w-full flex-col gap-brand-md rounded-[24px] p-6 text-left transition-all duration-300 active:scale-95"
        aria-label={`Sélectionner ${product.color.fr}`}
      >
        <div className="overflow-hidden rounded-[24px] bg-bg-light">
          <img
            src={product.image}
            alt={cardText.title}
            className="aspect-[4/3] w-full object-cover transition-all duration-300 hover:scale-105"
          />
        </div>

        <div className="space-y-3 flex-1">
          <h3 className="text-lg font-[800] leading-snug text-text-dark">
            {language === 'darija' ? <span dir="rtl" lang="ar">{cardText.title}</span> : cardText.title}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2">
            {language === 'darija' ? <span dir="rtl" lang="ar">{cardText.description}</span> : cardText.description}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-4">
          <span className="text-xs font-[600] text-slate-600 uppercase tracking-[0.12em]">
            {language === 'darija' ? <span dir="rtl" lang="ar">{product.color.darija}</span> : product.color.fr}
          </span>
          <div className="flex items-center justify-between gap-brand-sm">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500/80">
              {language === 'darija' ? <span dir="rtl" lang="ar">{priceLabel}</span> : priceLabel}
            </span>
            <span className="text-base font-bold text-text-dark transition-colors duration-300 group-hover:text-primary">
              {language === 'darija' ? <span dir="rtl" lang="ar">{cardPrice}</span> : cardPrice}
            </span>
          </div>
        </div>
      </button>
    </article>
  )

}
