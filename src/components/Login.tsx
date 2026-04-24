import { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, Zap, BarChart3 } from 'lucide-react'

interface LoginProps {
  onSignUpClick: () => void
  onHomeClick: () => void
}

export default function Login({ onSignUpClick, onHomeClick }: LoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login with:', { email, password })
    // API call here
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 font-inter text-text-dark">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(5,84,189,0.08),transparent_36%),radial-gradient(circle_at_80%_10%,rgba(5,84,189,0.10),transparent_34%)]" />
      {/* Header */}
      <header className="border-b border-primary/20 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <button onClick={onHomeClick} className="inline-flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" aria-label="Accueil">
            <span className="grid h-10 w-10 place-items-center rounded-md border border-primary/30 bg-white text-[11px] font-black tracking-[0.15em] text-primary shadow-lg shadow-primary/20">
              LOGO
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] md:text-sm">AI COMMERCE SUITE</span>
          </button>
          <button onClick={onHomeClick} className="text-sm font-semibold text-primary hover:text-accent-500 cursor-pointer bg-transparent border-none">
            Retour à l'accueil
          </button>
        </div>
      </header>
      {/* Main Content Split-Screen */}
      <main className="relative mx-auto w-full max-w-6xl px-0 py-0 md:py-16 flex flex-col md:flex-row rounded-3xl shadow-xl overflow-hidden mt-8 md:mt-16">
        {/* Colonne Motivation (GAUCHE) */}
        <aside className="hidden md:flex flex-col w-1/3 min-w-[320px] max-w-100 bg-linear-to-b from-[#0aa4e7] to-black border-r border-slate-900 p-0 relative overflow-y-auto">
          <div className="flex flex-col h-full justify-between p-10 pb-0">
            <div>
              <h2 className="text-2xl font-extrabold mb-6 text-white">Content de vous revoir !</h2>
              <p className="text-base text-slate-200 mb-10">Prêt à booster vos ventes aujourd'hui ?</p>
            </div>
            <div className="flex flex-col items-center mt-auto mb-2">
              <Zap className="w-10 h-10 text-accent-400 opacity-80 mb-2" />
              {/* Ou remplacer par <BarChart3 ... /> pour un visuel croissance */}
            </div>
          </div>
        </aside>
        {/* Colonne Formulaire (DROITE) */}
        <section className="w-full md:w-2/3 bg-white flex flex-col justify-center p-8 md:p-16">
          <div className="mb-10 text-left">
            <h1 className="text-3xl font-black tracking-tight text-slate-900">Connexion à votre espace</h1>
            <p className="mt-2 text-slate-600">Entrez vos identifiants professionnels pour accéder à votre tableau de bord.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email professionnel</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vous@entreprise.com"
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 placeholder-slate-400 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
            </div>
            {/* Password Field */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-semibold text-slate-700">Mot de passe</label>
                <a href="#" className="text-xs font-semibold text-accent-400 hover:text-accent-500">Mot de passe oublié ?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-11 text-sm font-medium text-slate-900 placeholder-slate-400 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#0554BD] py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Se connecter
            </button>
          </form>
          {/* Sign Up Link */}
          <div className="mt-8 border-t border-slate-200 pt-8 text-left">
            <p className="text-sm text-slate-600">
              Pas encore de compte ?{' '}
              <button
                type="button"
                onClick={onSignUpClick}
                className="font-bold text-primary hover:text-accent-500"
              >
                Créer un compte gratuitement
              </button>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
