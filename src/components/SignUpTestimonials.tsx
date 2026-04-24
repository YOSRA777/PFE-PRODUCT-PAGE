import { CheckCircle } from 'lucide-react';

const testimonials = [
  {
    text: "L'IA gère mes stocks et mes messages pendant que je développe ma boutique.",
    name: 'Sarah M.',
  },
  {
    text: "Gain de temps de 30% dès la première semaine. La synchronisation est parfaite.",
    name: 'Karim T.',
  },
  {
    text: "Installation super facile. Le support est ultra réactif.",
    name: 'Julie P.',
  },
];

export default function SignUpTestimonials() {
  return (
    <div className="flex flex-col gap-8 mt-8 relative">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className={`relative rounded-2xl bg-black/70 border border-white/20 backdrop-blur-md px-5 py-6 shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-black/80 animate-float${i+1}`}
          style={{
            top: i === 1 ? 18 : i === 2 ? 36 : 0,
            zIndex: 10 - i,
          }}
        >
          <span className="absolute -top-3 left-4 flex items-center gap-1 bg-white/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-400/30 shadow">
            <CheckCircle className="w-4 h-4" /> Vérifié
          </span>
          <blockquote className="italic text-slate-100 text-base leading-relaxed mb-3">
            “{t.text}”
          </blockquote>
          <div className="flex flex-col items-start">
            <span className="font-bold text-slate-50">{t.name}</span>
          </div>
        </div>
      ))}
      <style>{`
        @keyframes float1 { 0%{transform:translateY(0)} 50%{transform:translateY(-10px)} 100%{transform:translateY(0)} }
        @keyframes float2 { 0%{transform:translateY(0)} 50%{transform:translateY(10px)} 100%{transform:translateY(0)} }
        @keyframes float3 { 0%{transform:translateY(0)} 50%{transform:translateY(-7px)} 100%{transform:translateY(0)} }
        .animate-float1 { animation: float1 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 7s ease-in-out infinite; }
        .animate-float3 { animation: float3 5.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
