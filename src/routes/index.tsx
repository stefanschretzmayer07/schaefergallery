import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Scissors, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Schaefer's Gallery Barbershop — Miller Place, NY" },
      {
        name: "description",
        content:
          "Premium barbershop in Miller Place, NY. Refined haircuts, beard trims, and styling in a calm, welcoming space.",
      },
      { property: "og:title", content: "Schaefer's Gallery Barbershop" },
      {
        property: "og:description",
        content: "Refined cuts. Calm atmosphere. 5.0 rated barbershop in Miller Place, NY.",
      },
      { property: "og:image", content: heroImage },
      { property: "twitter:image", content: heroImage },
    ],
  }),
  component: Home,
});

const featuredServices = [
  { name: "Haircut", price: "$35", duration: "45 min" },
  { name: "Beard Trim", price: "$20", duration: "20 min" },
  { name: "Buzz Cut", price: "$25", duration: "20 min" },
  { name: "Styling", price: "$30", duration: "30 min" },
];

function Home() {
  useReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Interior of Schaefer's Gallery Barbershop"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-accent">
            Est. Miller Place, NY
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
            Schaefer's Gallery
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/80 md:text-lg">
            Precision. Style. Experience. A refined barbershop where every cut is crafted with care.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-accent-foreground transition-all hover:scale-[1.03] hover:bg-accent/90"
            >
              Book Appointment
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center text-white/60">
          <p className="text-[10px] uppercase tracking-[0.4em]">Scroll</p>
        </div>
      </section>

      {/* Intro / About teaser */}
      <section className="bg-background px-6 py-24 md:py-32">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            The craft
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
            A calm space for a precise cut.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            For more than ten years, we've shaped looks and built relationships in Miller Place.
            Walk in for a clean fade or a full restyle — leave with confidence and a fresh perspective.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-foreground"
          >
            Our story <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Stats */}
        <div className="reveal mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {[
            { value: "10+", label: "Years of craft" },
            { value: "5.0", label: "Average rating" },
            { value: "All ages", label: "Kids welcome" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center bg-background px-6 py-10 text-center"
            >
              <span className="font-serif text-4xl text-foreground md:text-5xl">{stat.value}</span>
              <span className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured services */}
      <section className="bg-secondary/40 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="reveal flex flex-col items-end justify-between gap-4 md:flex-row">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Services
              </p>
              <h2 className="mt-2 font-serif text-3xl md:text-5xl">Crafted for every occasion</h2>
            </div>
            <Link
              to="/services"
              className="text-sm font-medium uppercase tracking-[0.2em] text-foreground"
            >
              All services →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service, i) => (
              <div
                key={service.name}
                className="reveal group relative flex flex-col justify-between rounded-2xl border border-border bg-background p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div>
                  <Scissors className="size-5 text-accent" />
                  <h3 className="mt-6 font-serif text-2xl">{service.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {service.duration}
                  </p>
                </div>
                <div className="mt-10 flex items-end justify-between">
                  <span className="font-serif text-3xl">{service.price}</span>
                  <Link
                    to="/book"
                    className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/70 group-hover:text-accent"
                  >
                    Book →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial highlight */}
      <section className="bg-background px-6 py-24 md:py-32">
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="flex justify-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-current" />
            ))}
          </div>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            5.0 · loved by locals
          </p>
          <blockquote className="mt-8 font-serif text-2xl leading-relaxed text-foreground md:text-4xl">
            "The best barber on the North Shore. Calm, professional, and the cut is always perfect.
            My son loves coming here too."
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            — Michael R.
          </p>
          <Link
            to="/reviews"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-foreground"
          >
            Read more <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary px-6 py-24 text-primary-foreground md:py-32">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl">Ready for your next cut?</h2>
          <p className="mt-4 text-primary-foreground/70">
            Book online in under a minute. Walk-ins welcome when chairs are open.
          </p>
          <Link
            to="/book"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            Book Appointment <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
