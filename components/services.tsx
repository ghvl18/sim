"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Design de Sobrancelhas",
    description:
      "Análise facial personalizada para encontrar o formato ideal que harmoniza com seus traços, utilizando técnicas de visagismo.",
    price: "R$ 80",
    duration: "45 min",
  },
  {
    title: "Micropigmentação",
    description:
      "Técnica fio a fio que simula pelos naturais, preenchendo falhas e definindo o formato. Resultado duradouro e natural.",
    price: "R$ 650",
    duration: "2h30",
  },
  {
    title: "Laminação de Sobrancelhas",
    description:
      "Alinhamento e fixação dos fios para um efeito volumoso e penteado. Ideal para quem busca sobrancelhas mais cheias e definidas.",
    price: "R$ 180",
    duration: "1h",
  },
  {
    title: "Henna",
    description:
      "Coloração natural que preenche e define as sobrancelhas com efeito de maquiagem. Duração de até 15 dias.",
    price: "R$ 60",
    duration: "30 min",
  },
  {
    title: "Manutenção de Micropigmentação",
    description:
      "Retoque para manter a cor e definição da micropigmentação, recomendado a cada 12-18 meses.",
    price: "R$ 350",
    duration: "1h30",
  },
];

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="servicos" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Nossos Serviços
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Técnicas exclusivas para realçar sua beleza
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cada procedimento é realizado com produtos de alta qualidade e técnicas atualizadas para garantir os melhores resultados.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-background border border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-xl sm:text-2xl text-foreground">
                    {service.title}
                  </span>
                  <span className="text-primary font-medium hidden sm:inline">
                    {service.price}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground text-sm hidden sm:inline">
                    {service.duration}
                  </span>
                  {openIndex === index ? (
                    <Minus className="text-primary" size={20} />
                  ) : (
                    <Plus className="text-primary" size={20} />
                  )}
                </div>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-40" : "max-h-0"
                )}
              >
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-6 sm:hidden">
                    <span className="text-primary font-medium">{service.price}</span>
                    <span className="text-muted-foreground text-sm">{service.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
