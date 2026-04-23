import { useState } from 'react'

type Language = 'fr' | 'darija'

interface HeaderProps {
  language: Language
  onLanguageChange: (lang: Language) => void
  cartCount: number
}

const languageLabels: Record<Language, { label: string; toggle: string; navItems: string[]; signup: string; login: string; reassurance: string }> = {
  fr: {
    label: 'FR | عربي',
    toggle: 'Darija',
    navItems: ['Accueil', 'Boutique', 'À propos', 'Contact'],
    signup: "S'inscrire",
    login: 'Se connecter',
    reassurance: 'Sans carte bancaire requise',
  },
  darija: {
    label: 'FR | عربي',
    toggle: 'Français',
    navItems: ['الدار', 'المتجر', 'حولنا', 'اتصال'],
    signup: 'سجّل',
    login: 'دخول',
    reassurance: 'بدون بطاقة بنكية',
  },
}

export function Header({ language, onLanguageChange, cartCount }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const labels = languageLabels[language]

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 md:gap-8 md:px-6">
        {/* Logo */}
        <a href="#" className="inline-flex items-center gap-3" aria-label="Accueil">
          <span className="grid h-10 w-10 place-items-center rounded border border-primary bg-selection text-xs font-bold">
            LOGO
          </span>
          <span className="text-sm font-semibold tracking-[0.12em]">MARQUE PRODUIT</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-5 text-sm font-medium lg:gap-6">
            {labels.navItems.map((item, idx) => (
              <li key={idx}>
                <a href="#" className="transition-colors duration-300 hover:text-primary">
                  {item}
                </a>
              </li>
            ))}

            {/* Language Toggle */}
            <li>
              <button
                type="button"
                onClick={() => onLanguageChange(language === 'fr' ? 'darija' : 'fr')}
                className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-selection px-4 py-2 text-xs font-bold text-text-dark transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-bg-light hover:scale-105"
                aria-label={`Basculer vers ${labels.toggle}`}
              >
                <span aria-hidden="true">🌐</span>
                <span>{labels.label}</span>
              </button>
            </li>

            {/* Cart Button */}
            <li className="relative">
              <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary bg-selection text-sm font-bold text-text-dark transition-all duration-300 hover:bg-primary hover:text-bg-light hover:scale-110" aria-label="Panier">
                🛒
                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-bg-light shadow-lg animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
            </li>

            {/* Auth Buttons */}
            <li>
              <button
                type="button"
                className="rounded-full border border-primary px-4 py-2 text-xs font-bold text-primary transition-all duration-300 hover:bg-selection hover:scale-105"
              >
                {labels.login}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-bg-light shadow-primary/20 transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-lg"
              >
                {labels.signup}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle & Actions */}
        <div className="md:hidden flex items-center gap-2">
          {/* Cart Button Mobile */}
          <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary bg-selection text-sm font-bold text-text-dark transition-all duration-300 hover:bg-primary hover:text-bg-light" aria-label="Panier">
            🛒
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-bg-light shadow-lg animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Burger Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-primary bg-selection transition-all duration-300 hover:bg-primary"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-text-dark/10 bg-bg-light">
          <ul className="flex flex-col gap-3 px-4 py-4 text-sm font-medium">
            {labels.navItems.map((item, idx) => (
              <li key={idx}>
                <a href="#" className="transition-colors duration-300 hover:text-primary">
                  {item}
                </a>
              </li>
            ))}

            {/* Language Toggle Mobile */}
            <li>
              <button
                type="button"
                onClick={() => {
                  onLanguageChange(language === 'fr' ? 'darija' : 'fr')
                  setMenuOpen(false)
                }}
                className="w-full rounded-full border border-primary/60 bg-selection px-4 py-2 text-xs font-bold text-text-dark transition-all duration-300 hover:bg-primary hover:text-bg-light"
              >
                {labels.toggle}
              </button>
            </li>

            {/* Auth Buttons Mobile */}
            <li>
              <button
                type="button"
                className="w-full rounded-full border border-primary px-brand-md py-brand-sm text-xs font-bold text-primary transition-all duration-300 hover:bg-selection"
              >
                {labels.login}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="w-full rounded-full bg-primary px-brand-md py-brand-sm text-xs font-bold text-bg-light shadow-lg transition-all duration-300 hover:brightness-110"
              >
                {labels.signup}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
