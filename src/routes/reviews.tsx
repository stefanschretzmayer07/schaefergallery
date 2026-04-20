import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Schaefer's Gallery Barbershop" },
      {
        name: "description",
        content: "5.0-rated barbershop in Miller Place, NY. Real words from real clients.",
      },
      { property: "og:title", content: "Reviews — 5.0 ★" },
      {
        property: "og:description",
        content: "What clients say about Schaefer's Gallery Barbershop.",
      },
    ],
  }),
  component: Reviews,
});

const reviews = [
  {
    name: "Michael R.",
    text: "The best barber on the North Shore. Calm, professional, and the cut is always perfect. My son loves coming here too.",
  },
  {
    name: "Anthony D.",
    text: "Been coming here for years. Schaefer pays attention to every detail. You can tell he genuinely cares.",
  },
  {
    name: "Jessica L.",
    text: "Brought my 5-year-old for his first real haircut. So patient and kind. He didn't want to leave.",
  },
  {
    name: "David K.",
    text: "Clean shop, great vibe, and the haircut is consistently sharp. Highly recommend.",
  },
  {
    name: "Marcus T.",
    text: "Skilled, friendly, and never rushed. It's the kind of place you actually look forward to going to.",
  },
  {
    name: "Steven P.",
    text: "The fade is always tight, the conversation easy. Worth every dollar.",
  },
];

function Reviews() {
  useReveal();

  return (
    <div className="bg-background">
      <section className="px-6 pb-12 pt-36 md:pt-44">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
            What clients say
          </p>
          <div className="mt-6 flex items-baseline justify-center gap-3">
            <span className="font-serif text-7xl md:text-8xl">5.0</span>
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current md:size-6" />
              ))}
            </div>
          </div>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Loved by Miller Place
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className="reveal flex flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 flex-1 font-serif text-lg leading-relaxed text-foreground">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="reveal mt-16 text-center">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Book Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
