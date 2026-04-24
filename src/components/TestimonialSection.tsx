import { CheckCircle } from 'lucide-react';

const testimonials = [
  {
    text: "L'IA gère mes stocks et mes messages pendant que je développe ma boutique. Un gain de temps incroyable !",
    name: 'Sarah M.',
    role: 'Gérante E-commerce',
    badge: 'Vérifié',
    badgeColor: 'from-green-400 to-blue-500',
  },
  {
    text: "Nos ventes Instagram ont explosé depuis que l'IA répond instantanément et génère nos posts.",
    name: 'Karim T.',
    role: 'Community Manager',
    badge: 'Instagram',
    badgeColor: 'from-pink-500 to-yellow-400',
  },
  {
    text: "Je ne passe plus mes soirées à synchroniser mon catalogue. Tout est automatique. Merci AI COMMERCE SUITE.",
    name: 'Julie P.',
    role: 'Commerçante indépendante',
    badge: 'Shopify',
    badgeColor: 'from-green-500 to-emerald-400',
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative w-full py-24 bg-linear-to-b from-[#0a192f] to-black overflow-x-hidden">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl md:text-4xl font-black text-slate-50 mb-16 drop-shadow-lg">
          Ils automatisent leur croissance avec AI Commerce Suite
        </h2>
        <div className="relative flex flex-wrap justify-center gap-8 md:gap-12 min-h-85">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testimonial-card group relative w-full max-w-xs md:max-w-sm px-6 py-8 rounded-2xl border border-slate-700/60 bg-white/10 backdrop-blur-md shadow-xl transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-white/20 animate-float${i+1}`}
              style={{
                top: i === 1 ? 32 : i === 2 ? 64 : 0,
                zIndex: 10 - i,
                boxShadow: '0 8px 32px 0 rgba(10,25,47,0.25)',
              }}
            >
              <span className={`inline-flex items-center gap-1 mb-4 rounded-full bg-linear-to-r ${t.badgeColor} px-3 py-1 text-xs font-bold text-white shadow-lg cursor-pointer transition-all duration-300 group-hover:brightness-110`}> 
                <CheckCircle className="w-4 h-4 text-white/90" /> {t.badge}
              </span>
              <blockquote className="italic text-slate-100 text-lg leading-relaxed mb-6 drop-shadow">
                “{t.text}”
              </blockquote>
              <div className="flex flex-col items-start">
                <span className="font-bold text-slate-50">{t.name}</span>
                <span className="text-xs text-slate-300 font-medium mt-1">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Parallax & floating effect keyframes */}
      <style>{`
        @keyframes float1 { 0%{transform:translateY(0)} 50%{transform:translateY(-12px)} 100%{transform:translateY(0)} }
        @keyframes float2 { 0%{transform:translateY(0)} 50%{transform:translateY(12px)} 100%{transform:translateY(0)} }
        @keyframes float3 { 0%{transform:translateY(0)} 50%{transform:translateY(-8px)} 100%{transform:translateY(0)} }
        .animate-float1 { animation: float1 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 7s ease-in-out infinite; }
        .animate-float3 { animation: float3 5.5s ease-in-out infinite; }
        .testimonial-card:hover { box-shadow: 0 12px 48px 0 #0a192f88, 0 1.5px 0 0 #fff2; }
      `}</style>
    </section>
  );
}
