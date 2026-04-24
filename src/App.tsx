import { useState } from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'
// import TestimonialSection from './components/TestimonialSection'

const features = [
  {
    title: 'Synchronisation Intelligente',
    description: 'Connectez votre catalogue produit à tous vos canaux (Facebook, Instagram, Boutique). Gérez vos stocks et vos commandes en temps réel depuis une interface unique.',
  },
  {
    title: 'Analytics & KPIs IA',
    description: 'Anticipez les tendances de vente. L\'IA analyse vos performances, suit vos KPIs critiques et vous suggère des actions concrètes pour augmenter votre CA.',
  },
  {
    title: 'Génération de Contenu IA',
    description: 'Ne soyez plus jamais en panne d\'inspiration. Générez automatiquement des posts engageants, des captions optimisées et des campagnes publicitaires en un clic.',
  },
]

const plans = [
  {
    name: 'Starter',
    volume: '1',
    unit: 'Boutique connectée',
    description: 'Parfait pour démarrer',
    features: ['1 Boutique connectée', '500 messages/mois', 'Analytics de base', 'Support email'],
    cta: 'Commencer gratuitement',
    popular: false,
  },
  {
    name: 'Growth',
    volume: '3',
    unit: 'Boutiques',
    description: 'Pour boutiques en croissance',
    features: ['Jusqu\'à 3 Boutiques', '2 000 messages/mois', 'Synchronisation Catalogue', 'Génération de contenu IA', 'Priorisation IA', 'Support prioritaire'],
    cta: 'Choisir Growth',
    popular: true,
  },
  {
    name: 'Scale',
    volume: '∞',
    unit: 'Boutiques illimitées',
    description: 'Pour fort volume',
    features: ['Boutiques illimitées', '10 000+ messages/mois', 'API complète', 'Multi-boutiques avancé', 'Support dédié 24/7'],
    cta: 'Contacter ventes',
    popular: false,
  },
]

type PageState = 'home' | 'login' | 'signup'

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageState>('home')

  // Render Login page
  if (currentPage === 'login') {
    return (
      <Login
        onSignUpClick={() => setCurrentPage('signup')}
        onHomeClick={() => setCurrentPage('home')}
      />
    )
  }

  // Render SignUp page
  if (currentPage === 'signup') {
    return (
      <SignUp
        onLoginClick={() => setCurrentPage('login')}
        onHomeClick={() => setCurrentPage('home')}
      />
    )
  }

  // Render Home page
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg-light text-text-dark">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(5,84,189,0.14),transparent_36%),radial-gradient(circle_at_80%_10%,rgba(10,164,231,0.2),transparent_34%),linear-gradient(180deg,#f8fbff_0%,#eff5ff_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(5,84,189,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(5,84,189,0.07)_1px,transparent_1px)] bg-size-[38px_38px] opacity-35" />

      <header className="sticky top-0 z-50 border-b border-primary/20 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <button onClick={() => setCurrentPage('home')} className="inline-flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" aria-label="Accueil">
            <span className="grid h-10 w-10 place-items-center rounded-md border border-primary/30 bg-white text-[11px] font-black tracking-[0.15em] text-primary shadow-lg shadow-primary/20">
              LOGO
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] md:text-sm">AI COMMERCE SUITE</span>
          </button>

          <nav className="flex items-center gap-2 md:gap-3" aria-label="Navigation principale">
            <button
              type="button"
              onClick={() => setCurrentPage('login')}
              className="rounded-full border border-primary/35 bg-white px-4 py-2 text-xs font-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-selection"
            >
              Se connecter
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage('signup')}
              className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-white shadow-lg shadow-primary/35 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              S'inscrire
            </button>
          </nav>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-12 md:px-8 md:pt-20">
        {/* HERO SECTION */}
        <section className="relative mb-24 text-center">
          {/* Floating badges */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <span className="hero-badge rounded-full border border-primary/30 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary backdrop-blur-sm">
              SaaS Automation
            </span>
            <span className="hero-badge rounded-full bg-linear-to-r from-primary to-accent-500 px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-lg shadow-primary/30">
              2 mois gratuits
            </span>
          </div>

          {/* Main headline */}
          <h1 className="hero-title mx-auto max-w-4xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            <span className="text-slate-900">Vendez plus,</span>{' '}
            <span className="text-accent-500">travaillez moins.</span>
          </h1>

          <p className="hero-subtitle mx-auto mt-8 max-w-2xl text-lg text-slate-600 md:text-xl">
            Une plateforme IA unique pour synchroniser votre boutique et automatiser vos réseaux sociaux en un clic.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta mt-12 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setCurrentPage('signup')}
              className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="relative z-10">S'inscrire — 2 mois gratuits</span>
              <div className="absolute inset-0 z-0 bg-linear-to-r from-accent-500 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage('login')}
              className="rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              Se connecter
            </button>
          </div>

          {/* Hero Mockup */}
          <div className="hero-mockup relative mx-auto mt-16 max-w-4xl">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 rounded-t-xl bg-slate-50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 flex-1 rounded-lg bg-white px-3 py-1 text-xs text-slate-400">
                  facebook.com/messages
                </div>
              </div>
              
              {/* Mockup content */}
              <div className="grid gap-4 rounded-b-xl bg-linear-to-br from-slate-900 to-[#0a1f3d] p-6 md:grid-cols-[1fr,1.2fr]">
                {/* Chat list */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3">
                    <div className="h-10 w-10 rounded-full bg-linear-to-br from-primary to-accent-500" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">Sarah M.</p>
                      <p className="text-xs text-white/60">Commande #1234 — Répondu ✓</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
                    <div className="h-10 w-10 rounded-full bg-slate-600" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">Ahmed K.</p>
                      <p className="text-xs text-white/60">Question stock...</p>
                    </div>
                    <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white">IA</span>
                  </div>
                </div>
                
                {/* Chat preview */}
                <div className="rounded-xl bg-white/5 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/50">Agent IA actif</p>
                    <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <div className="space-y-3">
                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-white">
                      Bonjour ! Votre colis est en transit. Livraison demain avant 18h 📦
                    </div>
                    <p className="text-xs text-white/40">Réponse générée en 2.3s</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -left-8 top-1/4 rounded-xl border border-white/50 bg-white/90 p-3 shadow-xl backdrop-blur-sm animate-float-slow">
              <p className="text-xs font-bold text-primary">⚡ Réponse instantanée</p>
            </div>
            <div className="absolute -right-4 bottom-1/4 rounded-xl border border-white/50 bg-white/90 p-3 shadow-xl backdrop-blur-sm animate-float-delayed">
              <p className="text-xs font-bold text-green-600">✓ Erreur évitée</p>
            </div>
          </div>
        </section>



        {/* FEATURES SECTION */}
        <section className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">Les 3 piliers de votre succès</h2>
            <p className="mt-3 text-slate-600">Synchronisation, Analytics, Contenu — tout ce qu'il vous faut</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/10 to-accent-500/10 text-lg font-bold text-primary">
                  {i + 1}
                </div>
                <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">Choisissez votre plan</h2>
            <p className="mt-3 text-slate-600">Chaque plan inclut 2 mois gratuits sur souscription annuelle</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-1 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'bg-linear-to-b from-primary to-accent-500 shadow-2xl shadow-primary/25'
                    : 'bg-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-amber-400 to-orange-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
                    Recommandé
                  </div>
                )}
                <div className="h-full rounded-[22px] bg-white p-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-black text-slate-900">{plan.volume}</span>
                    <span className="ml-2 text-sm text-slate-500">{plan.unit}</span>
                  </div>

                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setCurrentPage('signup')}
                    className={`w-full rounded-xl py-3 text-sm font-bold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'border-2 border-slate-200 text-slate-700 hover:border-primary hover:text-primary'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary to-[#0a3f99] px-8 py-16 text-center text-white shadow-2xl shadow-primary/25 md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          
          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl text-3xl font-black leading-tight md:text-5xl">
              Transformez votre E-commerce avec l'IA
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              2 mois gratuits pour tester. Sans engagement. Annulez quand vous voulez.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setCurrentPage('signup')}
                className="rounded-full bg-white px-8 py-4 text-sm font-bold text-primary shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                S'inscrire gratuitement
              </button>
              <button
                type="button"
                className="rounded-full border-2 border-white/40 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                Voir une démo
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}