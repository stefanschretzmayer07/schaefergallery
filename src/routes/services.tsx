import { createFileRoute, Link } from "@tanstack/react-router";
import { Scissors } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Schaefer's Gallery Barbershop" },
      {
        name: "description",
        content:
          "Haircuts, beard trims, buzz cuts and styling in Miller Place, NY. Transparent pricing, expert craft.",
      },
      { property: "og:title", content: "Services — Schaefer's Gallery Barbershop" },
      {
        property: "og:description",
        content: "Haircuts, beard trims, buzz cuts, styling. Honest pricing.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    name: "Haircut",
    price: "$30",
    duration: "45 min",
    description:
      "A precision cut tailored to your hair, face shape, and lifestyle. Includes consultation, wash, cut, and finish.",
  },
  {
    name: "Beard Trim",
    price: "$20",
    duration: "20 min",
    description:
      "Shape, line up, and refine. Hot towel finish to leave skin clean and your beard looking sharp.",
  },
  {
    name: "Buzz Cut",
    price: "$25",
    duration: "20 min",
    description:
      "Clean, even, and quick. Perfect for a low-maintenance look done with care and precision.",
  },
  {
    name: "Styling",
    price: "$30",
    duration: "30 min",
    description:
      "Wash, blow dry, and styling using premium products. Ideal before an event or photo shoot.",
  },
  {
    name: "Haircut + Beard",
    price: "$45",
    duration: "60 min",
    description:
      "The complete package. A full haircut paired with a refined beard trim and finishing touches.",
  },
  {
    name: "Kids' Cut (under 12)",
    price: "$25",
    duration: "30 min",
    description:
      "Patient, friendly, and unhurried. We make sure first cuts — and every cut — feel calm.",
  },
];

function Services() {
  useReveal();

  return (
    <div className="bg-background">
      <section className="px-6 pb-16 pt-36 md:pt-44">
        <div className="reveal mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
            Services
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] md:text-6xl">
            Honest pricing. Considered craft.
          </h1>
          <p className="mt-6 text-base text-muted-foreground md:text-lg">
            Every service includes a consultation. Walk in, sit down, and tell us what you're after.
          </p>
          <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-border bg-secondary/40 px-5 py-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Tuesdays & Wednesdays are walk-in only.</span>{" "}
            Mon, Thu, Fri & Sat are by appointment — book online or call.
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <ul className="divide-y divide-border border-y border-border">
            {services.map((service, i) => (
              <li
                key={service.name}
                className="reveal group flex flex-col gap-4 py-8 md:flex-row md:items-center md:gap-10 md:py-10"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-4 md:w-72">
                  <Scissors className="size-4 text-accent" />
                  <h3 className="font-serif text-2xl md:text-3xl">{service.name}</h3>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {service.description}
                </p>
                <div className="flex items-center justify-between gap-6 md:flex-col md:items-end md:gap-1">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {service.duration}
                  </span>
                  <span className="font-serif text-3xl">{service.price}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="reveal mt-16 text-center">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
