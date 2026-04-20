import { createFileRoute, Link } from "@tanstack/react-router";
import { Scissors, Users, Award, Heart } from "lucide-react";
import aboutImage from "@/assets/shop-waiting.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Schaefer's Gallery Barbershop" },
      {
        name: "description",
        content:
          "Over 10 years of crafting precise cuts in Miller Place, NY. Family-friendly, kids welcome, and trusted by locals.",
      },
      { property: "og:title", content: "About — Schaefer's Gallery Barbershop" },
      {
        property: "og:description",
        content: "Ten years of craft. Calm atmosphere. Family friendly.",
      },
      { property: "og:image", content: aboutImage },
      { property: "twitter:image", content: aboutImage },
    ],
  }),
  component: About,
});

const values = [
  { icon: Award, title: "10+ Years", text: "A decade of refining the craft, one cut at a time." },
  { icon: Users, title: "Family Friendly", text: "Kids welcome. Patient with every chair, every age." },
  { icon: Heart, title: "Calm Atmosphere", text: "No rush. No noise. Just careful, considered work." },
  { icon: Scissors, title: "Precision First", text: "Classic technique meets modern style." },
];

function About() {
  useReveal();

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="px-6 pb-16 pt-36 md:pt-44">
        <div className="reveal mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
            Our Story
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] md:text-6xl">
            A decade of cuts, conversations, and community.
          </h1>
        </div>
      </section>

      {/* Split */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div className="reveal overflow-hidden rounded-2xl">
            <img
              src={aboutImage}
              alt="Inside Schaefer's Gallery Barbershop — waiting area and chairs"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="reveal space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Schaefer's Gallery began with a simple belief: a haircut should be more than a service.
              It should feel like a small ritual — calm, precise, and unhurried.
            </p>
            <p>
              For over ten years, we've served Miller Place and the surrounding North Shore. We've
              watched kids grow up in our chairs, sent grooms off looking sharp, and sharpened the
              same regulars' fades for years on end.
            </p>
            <p>
              Whether you're three years old or seventy-three, you're welcome here. Bring the family.
              Take your time. Leave looking — and feeling — your best.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/40 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              What we stand for
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">Quiet luxury, lived-in.</h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="reveal rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <v.icon className="size-6 text-accent" />
                <h3 className="mt-6 font-serif text-xl">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 md:py-32">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Come see for yourself.</h2>
          <Link
            to="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
