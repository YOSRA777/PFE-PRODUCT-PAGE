import { useState } from 'react'
import { Eye, EyeOff, User, Mail, Lock, Phone, Building2, Briefcase, DollarSign, CheckCircle } from 'lucide-react'
import SignUpTestimonials from './SignUpTestimonials'

interface SignUpProps {
  onLoginClick: () => void
  onHomeClick: () => void
}

export default function SignUp({ onLoginClick, onHomeClick }: SignUpProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    businessType: '',
    businessSize: '',
    activitySector: '',
    taxId: '',
    newsletter: false,
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Sign up with:', formData)
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
        {/* Colonne Réassurance (GAUCHE) */}
        <aside className="hidden md:flex flex-col w-1/3 min-w-[320px] max-w-100 bg-linear-to-b from-[#0aa4e7] to-black border-r border-slate-900 p-0 relative overflow-y-auto">
          <div className="p-10 pb-0">
            <h2 className="text-2xl font-extrabold mb-8 text-white">Passez à la vitesse supérieure</h2>
            <ul className="space-y-3 mb-10">
              <li className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle className="text-green-400" size={18}/>Aucune carte bancaire requise</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle className="text-green-400" size={18}/>Installation en 2 minutes</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle className="text-green-400" size={18}/>Annulation en un clic</li>
            </ul>
            <SignUpTestimonials />
          </div>
        </aside>
        {/* Colonne Formulaire (DROITE) */}
        <section className="w-full md:w-2/3 bg-white md:bg-slate-50 flex flex-col justify-center p-8 md:p-16">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-black tracking-tight text-slate-900">Créer votre compte</h1>
            <p className="mt-3 text-lg text-slate-600">Commencez votre essai gratuit — 2 mois gratuits, sans engagement</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Ligne 1 */}
            <div className="grid gap-4 md:grid-cols-3">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nom complet *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 placeholder-slate-400 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email professionnel *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vous@entreprise.com"
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 placeholder-slate-400 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>
              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Mot de passe *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
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
                <p className="mt-1 text-xs text-slate-400">8 caractères minimum, dont un chiffre.</p>
              </div>
            </div>
            {/* Ligne 2 */}
            <div className="grid gap-4 md:grid-cols-3">
              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Téléphone *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+33 1 23 45 67 89"
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 placeholder-slate-400 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>
              {/* Business Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Type d'entreprise *</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none"
                    required
                  >
                    <option value="">Sélectionner...</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="boutique-physique">Boutique Physique</option>
                    <option value="saas">SaaS</option>
                    <option value="agence">Agence</option>
                    <option value="freelance">Freelance</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>
              {/* Business Size */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Taille de l'entreprise *</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <select
                    name="businessSize"
                    value={formData.businessSize}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none"
                    required
                  >
                    <option value="">Sélectionner...</option>
                    <option value="solo">Solo</option>
                    <option value="1-5">1-5 personnes</option>
                    <option value="6-20">6-20 personnes</option>
                    <option value="21-50">21-50 personnes</option>
                    <option value="50+">50+ personnes</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Ligne 3 */}
            <div className="grid gap-4 md:grid-cols-2">
              {/* Activity Sector */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Secteur d'activité *</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <select
                    name="activitySector"
                    value={formData.activitySector}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none"
                    required
                  >
                    <option value="">Sélectionner...</option>
                    <option value="retail">Vente au détail</option>
                    <option value="fmcg">FMCG</option>
                    <option value="electronics">Électronique</option>
                    <option value="fashion">Mode & Vêtements</option>
                    <option value="food">Alimentation</option>
                    <option value="home">Maison & Décoration</option>
                    <option value="beauty">Beauté & Bien-être</option>
                    <option value="services">Services</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>
              {/* Tax ID */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Matricule Fiscale (SIRET) <span className='text-xs text-slate-400'>(Optionnel)</span></label>
                <input
                  type="text"
                  name="taxId"
                  value={formData.taxId}
                  onChange={handleChange}
                  placeholder="SIRET (14 chiffres)"
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 px-4 text-sm font-medium text-slate-900 placeholder-slate-400 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            {/* Newsletter */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="h-5 w-5 rounded-lg border-slate-200 text-primary focus:ring-primary"
              />
              <label htmlFor="newsletter" className="text-sm text-slate-600">
                S'abonner à la newsletter pour recevoir des conseils d'automatisation.
              </label>
            </div>
            {/* Terms & Conditions */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="terms"
                required
                className="h-5 w-5 rounded-lg border-slate-200 text-primary focus:ring-primary"
              />
              <label htmlFor="terms" className="text-xs text-slate-600">
                J'accepte les{' '}
                <a href="#" className="font-semibold text-primary hover:text-accent-500">
                  conditions d'utilisation
                </a>{' '}
                et la{' '}
                <a href="#" className="font-semibold text-primary hover:text-accent-500">
                  politique de confidentialité
                </a>
              </label>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#0554BD] py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Créer mon compte — 2 mois gratuits
            </button>
          </form>
          {/* Login Link */}
          <div className="mt-8 border-t border-slate-200 pt-8 text-center">
            <p className="text-sm text-slate-600">
              Déjà membre ?{' '}
              <button
                type="button"
                onClick={onLoginClick}
                className="font-bold text-primary hover:text-accent-500"
              >
                Se connecter
              </button>
            </p>
          </div>
        </section>
      </main>
      {/* Responsive Réassurance (mobile) */}
      <aside className="md:hidden flex flex-col items-center gap-6 bg-linear-to-br from-[#eaf2fb] via-[#f3f8fe] to-[#eaf6fb] border-b border-slate-100 px-6 py-8 w-full">
        <h2 className="text-xl font-extrabold mb-2" style={{color:'#0554BD'}}>Passez à la vitesse supérieure</h2>
        <ul className="space-y-3 mb-2">
          <li className="flex items-center gap-2 text-base text-slate-700"><CheckCircle className="text-green-500" size={20}/>Aucune carte bancaire requise</li>
          <li className="flex items-center gap-2 text-base text-slate-700"><CheckCircle className="text-green-500" size={20}/>Installation en 2 minutes</li>
          <li className="flex items-center gap-2 text-base text-slate-700"><CheckCircle className="text-green-500" size={20}/>Annulation en un clic</li>
        </ul>
        <div className="flex flex-col items-start gap-2 rounded-2xl bg-white/90 border border-slate-100 shadow px-4 py-4 w-full max-w-xs relative">
          <span className="absolute -top-4 left-4 flex items-center gap-1 bg-[#eaf6fb] text-primary text-xs font-bold px-3 py-1 rounded-full shadow border border-primary/10"><CheckCircle className="w-4 h-4 text-green-500"/> Vérifié</span>
          <span className="text-base text-slate-700 italic mb-2">"L'IA gère mes stocks et mes messages pendant que je développe ma boutique. Un gain de temps incroyable !"</span>
          <span className="text-xs font-semibold text-slate-500 mt-1">Sarah M., Gérante E-commerce</span>
        </div>
      </aside>
    </div>
  )
}
