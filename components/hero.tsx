import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80"
          alt="Sobrancelhas perfeitas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-secondary text-sm tracking-[0.3em] uppercase mb-6">
            Estúdio de Sobrancelhas
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 text-balance">
            Realce sua beleza natural com sobrancelhas perfeitas
          </h1>
          <p className="text-white/90 text-lg mb-10 leading-relaxed max-w-lg">
            Técnicas exclusivas de design, micropigmentação e laminação para valorizar o seu olhar e transformar sua autoestima.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground tracking-wide hover:bg-primary/90 transition-colors"
            >
              Agendar Horário
            </Link>
            <Link
              href="#servicos"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-white tracking-wide hover:bg-white/10 transition-colors"
            >
              Conhecer Serviços
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
