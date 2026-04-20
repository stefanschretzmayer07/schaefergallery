import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-serif text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Schaefer's Gallery Barbershop — Miller Place, NY" },
      {
        name: "description",
        content:
          "Refined haircuts, beard trims & styling in Miller Place, NY. 10+ years of craft, 5.0 rated, family-friendly atmosphere.",
      },
      { name: "author", content: "Schaefer's Gallery Barbershop" },
      { property: "og:title", content: "Schaefer's Gallery Barbershop — Miller Place, NY" },
      {
        property: "og:description",
        content: "Refined cuts. Calm atmosphere. Family friendly. 5.0 rated barbershop in Miller Place, NY.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Schaefer's Gallery Barbershop — Miller Place, NY" },
      { name: "description", content: "A modern, minimalistic barbershop website for Schaefer's Gallery Barbershop, offering online booking and service information." },
      { property: "og:description", content: "A modern, minimalistic barbershop website for Schaefer's Gallery Barbershop, offering online booking and service information." },
      { name: "twitter:description", content: "A modern, minimalistic barbershop website for Schaefer's Gallery Barbershop, offering online booking and service information." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c55a6d5d-dada-4b8f-8f6e-24b6cc6d4e92/id-preview-8a77ee77--ad53e696-0d27-4a8a-acb2-e38c80c32fe6.lovable.app-1776692057516.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c55a6d5d-dada-4b8f-8f6e-24b6cc6d4e92/id-preview-8a77ee77--ad53e696-0d27-4a8a-acb2-e38c80c32fe6.lovable.app-1776692057516.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}
