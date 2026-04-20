import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { format } from "date-fns";
import { Check, ChevronLeft, Scissors, Calendar as CalendarIcon, Clock, User } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Schaefer's Gallery Barbershop" },
      {
        name: "description",
        content:
          "Book your appointment at Schaefer's Gallery Barbershop. Pick a service, date, and time in under a minute.",
      },
      { property: "og:title", content: "Book Appointment — Schaefer's Gallery" },
      {
        property: "og:description",
        content: "Pick a service, date, and time. Confirm in under a minute.",
      },
    ],
  }),
  component: Book,
});

const services = [
  { name: "Haircut", price: "$30", duration: "45 min" },
  { name: "Beard Trim", price: "$20", duration: "20 min" },
  { name: "Buzz Cut", price: "$25", duration: "20 min" },
  { name: "Styling", price: "$30", duration: "30 min" },
  { name: "Haircut + Beard", price: "$45", duration: "60 min" },
  { name: "Kids' Cut (under 12)", price: "$25", duration: "30 min" },
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM",
];

const stepLabels = ["Service", "Date", "Time", "Details"] as const;

function Book() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<string | null>(null);
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setConfirmed(true);
    toast.success("Appointment confirmed", {
      description: `${service} · ${date && format(date, "PPP")} · ${time}`,
    });
  };

  if (confirmed) {
    return (
      <div className="bg-background">
        <section className="flex min-h-[80vh] items-center px-6 pt-36 md:pt-44">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-accent">
              <Check className="size-7 text-accent-foreground" />
            </div>
            <h1 className="mt-8 font-serif text-4xl md:text-5xl">You're booked.</h1>
            <p className="mt-4 text-muted-foreground">
              We've reserved your chair, {name.split(" ")[0]}. We'll see you soon.
            </p>

            <div className="mt-10 rounded-2xl border border-border bg-background p-8 text-left">
              <h2 className="font-serif text-xl">Appointment Details</h2>
              <dl className="mt-6 space-y-4 text-sm">
                {[
                  ["Service", service],
                  ["Date", date && format(date, "EEEE, MMMM d, yyyy")],
                  ["Time", time],
                  ["Name", name],
                  ["Phone", phone],
                ].map(([k, v]) => (
                  <div key={k as string} className="flex justify-between gap-6 border-b border-border pb-3">
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                    <dd className="text-right font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs text-muted-foreground">
                Need to change your booking? Call us at{" "}
                <a href="tel:6314521992" className="underline">
                  (631) 452-1992
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <section className="px-6 pb-16 pt-36 md:pt-44">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
              Booking
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.1] md:text-5xl">
              Reserve your chair.
            </h1>
            <div className="mx-auto mt-6 max-w-xl rounded-xl border border-border bg-secondary/40 px-5 py-4 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Heads up:</span> Tuesdays & Wednesdays are{" "}
              <span className="font-medium text-foreground">walk-in only</span> — no appointments needed. Book online for Mon, Thu, Fri & Sat.
            </div>
          </div>

          {/* Stepper */}
          <div className="mt-12 flex items-center justify-between gap-2">
            {stepLabels.map((label, i) => (
              <div key={label} className="flex flex-1 items-center gap-2">
                <div
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full border text-xs font-medium transition-colors",
                    i <= step
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground",
                  )}
                >
                  {i < step ? <Check className="size-4" /> : i + 1}
                </div>
                <span
                  className={cn(
                    "hidden text-xs uppercase tracking-[0.15em] sm:inline",
                    i === step ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {label}
                </span>
                {i < stepLabels.length - 1 && (
                  <div className="ml-2 h-px flex-1 bg-border" />
                )}
              </div>
            ))}
          </div>

          {/* Step content */}
          <div className="mt-12 rounded-2xl border border-border bg-background p-6 md:p-10">
            {step === 0 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <Scissors className="size-5 text-accent" />
                  <h2 className="font-serif text-2xl">Choose your service</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {services.map((s) => (
                    <button
                      key={s.name}
                      type="button"
                      onClick={() => setService(s.name)}
                      className={cn(
                        "group flex items-center justify-between rounded-xl border p-5 text-left transition-all hover:-translate-y-0.5",
                        service === s.name
                          ? "border-primary bg-primary/5"
                          : "border-border bg-background hover:border-accent",
                      )}
                    >
                      <div>
                        <p className="font-serif text-lg">{s.name}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                          {s.duration}
                        </p>
                      </div>
                      <span className="font-serif text-xl">{s.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <CalendarIcon className="size-5 text-accent" />
                  <h2 className="font-serif text-2xl">Pick a date</h2>
                </div>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < today || d.getDay() === 0 || d.getDay() === 2 || d.getDay() === 3}
                    className={cn("pointer-events-auto rounded-xl border border-border p-3")}
                  />
                </div>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Tue & Wed are walk-in only · Closed Sundays
                </p>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <Clock className="size-5 text-accent" />
                  <h2 className="font-serif text-2xl">Pick a time</h2>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTime(slot)}
                      className={cn(
                        "rounded-lg border px-3 py-3 text-sm transition-all",
                        time === slot
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background hover:border-accent",
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <div className="mb-6 flex items-center gap-3">
                  <User className="size-5 text-accent" />
                  <h2 className="font-serif text-2xl">Your details</h2>
                </div>

                {/* Summary */}
                <div className="mb-8 rounded-xl bg-secondary/50 p-5 text-sm">
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <span className="text-muted-foreground">Service</span>
                    <span className="font-medium">{service}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/60 py-2">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-medium">{date && format(date, "PPP")}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-muted-foreground">Time</span>
                    <span className="font-medium">{time}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Full name
                    </Label>
                    <Input
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="mt-2 h-12 rounded-lg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      className="mt-2 h-12 rounded-lg"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!name || !phone}
                  className="mt-8 h-12 w-full rounded-full text-xs font-semibold uppercase tracking-[0.25em]"
                >
                  Confirm Booking
                </Button>
              </form>
            )}
          </div>

          {/* Navigation */}
          {step < 3 && (
            <div className="mt-6 flex items-center justify-between">
              <Button
                type="button"
                variant="ghost"
                onClick={back}
                disabled={step === 0}
                className="text-xs uppercase tracking-[0.2em]"
              >
                <ChevronLeft className="size-4" /> Back
              </Button>
              <Button
                type="button"
                onClick={next}
                disabled={
                  (step === 0 && !service) ||
                  (step === 1 && !date) ||
                  (step === 2 && !time)
                }
                className="rounded-full px-8 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                Continue
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
