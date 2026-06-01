import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CirclePlay,
  Download,
  FileText,
  MessageCircle,
  Network,
  PackageCheck,
  PenTool,
  Sparkles,
  Star,
  Users,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const metrics = [
  { label: "Active Users", value: "18k+" },
  { label: "Services Listed", value: "5k+" },
  { label: "Products Listed", value: "1k+" },
  { label: "Jobs Posted", value: "2k+" },
];

const features = [
  {
    description:
      "Our platform connects companies with essential services, digital products, and verified professionals, helping businesses create more opportunities.",
    icon: Building2,
    title: "Company & Service Discovery",
  },
  {
    description:
      "AI-powered algorithms match you with opportunities that align with your skills, experience, and career goals.",
    icon: Sparkles,
    title: "Smart Job Matching",
  },
  {
    description:
      "Engage in secure, real-time conversations and collaborate with partners, clients, or potential hires.",
    icon: MessageCircle,
    title: "Collaboration & Messaging",
  },
  {
    description: "Connect with like-minded individuals and companies.",
    icon: Network,
    title: "Business Networking",
  },
];

const jobCategories = [
  "Engineering",
  "Business Development",
  "Finance",
  "Retail Associate",
  "Graphic Design",
  "Marketing",
  "Logo Design",
  "Human Resource",
];

const benefits = [
  "Targeted reach for the most relevant talent, services, and products.",
  "AI-powered matching that aligns with your exact needs.",
  "Simple posting and tracking for jobs, services, and product requests.",
  "Verified experts, providers, and authentic products across industries.",
];

const services = [
  {
    description:
      "We build fast, secure, and scalable websites that grow with your business.",
    icon: Wrench,
    title: "Web Development",
  },
  {
    description:
      "Reliable IT support that keeps your business running no matter what.",
    icon: CheckCircle2,
    title: "IT Support",
  },
  {
    description: "Designs that make your brand stand out.",
    icon: PenTool,
    title: "Graphic Design",
  },
  {
    description: "Capturing moments that last a lifetime.",
    icon: PackageCheck,
    title: "Photography",
  },
];

const landingImages = {
  articles:
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
  benefits:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
  jobs:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
  network:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
  products:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  services:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
  statistics:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
  video:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80",
};

function SectionHeader({
  description,
  eyebrow,
  title,
}: {
  description: string;
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
        {description}
      </p>
    </div>
  );
}

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <Button>
      {children}
      <ArrowRight />
    </Button>
  );
}

function SecondaryButton({ children }: { children: React.ReactNode }) {
  return <Button variant="outline">{children}</Button>;
}

function VisualCard({
  alt,
  eyebrow,
  src,
  title,
}: {
  alt: string;
  eyebrow: string;
  src: string;
  title: string;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          alt={alt}
          className="object-cover"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          src={src}
        />
      </div>
      <CardHeader>
        <CardDescription className="text-sm font-semibold uppercase tracking-widest">
          {eyebrow}
        </CardDescription>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
    </Card>
  );
}

export function LandingSections() {
  return (
    <div className="bg-background text-foreground">
      <section className="border-t px-6 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeader
              description="Real-time statistics showcasing our growing community and success stories."
              eyebrow="Statistics"
              title="Live insights business"
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {metrics.map((metric) => (
                <Card key={metric.label}>
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold">
                      {metric.value}
                    </CardTitle>
                    <CardDescription className="font-medium">
                      {metric.label}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <VisualCard
            alt="Professionals reviewing business growth on a shared desk"
            eyebrow="Community"
            src={landingImages.statistics}
            title="A growing network with room to move"
          />
        </div>
      </section>

      <section className="border-t px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="Experience the future of professional networking with our innovative features."
            title="Why choose us?"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <feature.icon className="size-8 text-muted-foreground" />
                  <CardTitle className="mt-6 text-2xl">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-8">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t px-6 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Professional Network
            </p>
            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
              Grow your professional network
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
              Connect with professionals, experts, businesses, and freelancers
              who match your interests, goals, and industry challenges.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton>Discover Associates</PrimaryButton>
              <SecondaryButton>Start Networking</SecondaryButton>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <VisualCard
                alt="Two professionals shaking hands after making a connection"
                eyebrow="Associates"
                src={landingImages.network}
                title="Relationships that lead to real work"
              />
            </div>
            {[
              "Verified profiles",
              "Shared interests",
              "Industry circles",
              "Trusted invites",
            ].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <Users className="size-7 text-muted-foreground" />
                  <CardTitle className="mt-4 text-lg">{item}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Jobs
              </p>
              <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
                Find the right job or internship for you
              </h2>
              <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
                Discover your next career move across diverse industries.
              </p>
            </div>
            <Card className="overflow-hidden p-0">
              <div className="relative aspect-video">
                <Image
                  alt="A focused workspace ready for job discovery"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src={landingImages.jobs}
                />
              </div>
              <CardHeader>
                <BriefcaseBusiness className="size-8 text-muted-foreground" />
                <CardTitle className="mt-4 text-4xl">
                  10k+ Open Positions
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {jobCategories.map((category) => (
              <Badge
                className="rounded-full px-5 py-3 text-sm"
                key={category}
                variant="secondary"
              >
                {category}
              </Badge>
            ))}
          </div>
          <div className="mt-10">
            <PrimaryButton>Explore Jobs</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="border-t px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
                Find qualified professionals, trusted services, and verified
                products -- all in one platform.
              </h2>
              <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
                From hiring full-time employees and freelancers to sourcing
                reliable services or discovering quality products -- we make it
                faster and easier to connect with the right match.
              </p>
            </div>
            <VisualCard
              alt="A business team discussing options around a meeting table"
              eyebrow="Matching"
              src={landingImages.benefits}
              title="Everything closer to the right match"
            />
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Card key={benefit}>
                <CardHeader>
                  <CardDescription className="text-sm font-semibold uppercase tracking-widest">
                    Benefit {String(index + 1).padStart(2, "0")}
                  </CardDescription>
                  <CardTitle className="mt-4 text-xl leading-8">
                    {benefit}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="Connect with top-rated professionals, discover trusted services, and grow your business through meaningful collaborations."
            title="Find the right services for you"
          />
          <div className="mt-12">
            <VisualCard
              alt="A technical team collaborating around laptops"
              eyebrow="Services"
              src={landingImages.services}
              title="Expert help for practical business needs"
            />
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <service.icon className="size-8 text-muted-foreground" />
                  <CardTitle className="mt-6 text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="leading-7">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <PrimaryButton>Explore Services</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="border-t px-6 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Products
            </p>
            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
              Showcase your products to a professional network
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
              Bring your products directly to your professional audience with
              visibility, verified potential buyers, and build credibility
              within your network.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton>Explore Products</PrimaryButton>
              <SecondaryButton>Buy Our Products</SecondaryButton>
            </div>
          </div>
          <Card className="overflow-hidden p-0">
            <div className="relative aspect-video">
              <Image
                alt="Digital products displayed on a laptop"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={landingImages.products}
              />
            </div>
            <CardHeader>
              <PackageCheck className="size-10 text-muted-foreground" />
            </CardHeader>
            <CardContent className="grid gap-4">
              {[
                "Verified listings",
                "Professional buyers",
                "Product credibility",
              ].map((item) => (
                <div
                  className="flex items-center gap-4 border-b pb-4 text-muted-foreground last:border-b-0 last:pb-0"
                  key={item}
                >
                  <CheckCircle2 className="size-5" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Articles
              </p>
              <h2 className="text-3xl font-bold text-foreground md:text-5xl">
                Articles
              </h2>
              <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
                Discover collaborative articles relevant to you.
              </p>
            </div>
            <PrimaryButton>Explore Articles</PrimaryButton>
          </div>
          <Card className="mt-12 overflow-hidden p-0 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-72">
              <Image
                alt="Notebook and laptop used for writing professional articles"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                src={landingImages.articles}
              />
            </div>
            <div className="py-6">
              <CardHeader>
                <FileText className="size-8 text-muted-foreground" />
                <CardTitle className="mt-6 max-w-3xl text-2xl md:text-3xl">
                  The future of web development: Trends of 2025
                </CardTitle>
                <CardDescription className="max-w-3xl text-base leading-8">
                  Exploring the latest technologies and frameworks shaping the
                  future of web development.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold">Ryanom K. Shah</p>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      <section className="border-t px-6 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Video
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-5xl">
              See it in action
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
              Watch how professionals are transforming their careers with our
              platform.
            </p>
            <div className="mt-8">
              <PrimaryButton>Watch Demo</PrimaryButton>
            </div>
          </div>
          <Card className="overflow-hidden p-0">
            <CardContent className="relative flex aspect-video items-center justify-center p-0">
              <Image
                alt="Professionals watching a product demo in a meeting room"
                className="object-cover opacity-80"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={landingImages.video}
              />
              <div className="absolute inset-0 bg-background/35" />
              <CirclePlay className="relative size-16 text-foreground" />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t px-6 py-24 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader
            description="Hear from professionals who transformed their careers."
            title="What our users say"
          />
          <Card className="mt-12 text-left">
            <CardHeader>
              <div className="flex gap-2 text-foreground">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star className="size-5 fill-current" key={index} />
                ))}
              </div>
              <CardDescription className="mt-6 text-lg leading-8">
                &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sed ad ipsam molestiae reiciendis ut labore magni aliquid. Ut
                ullam ad minima cum, autem exercitationem libero nihil adipisci
                ea vero corrupti consequatur.&quot;
              </CardDescription>
            </CardHeader>
            <CardContent className="border-t pt-6">
              <p className="font-semibold">Pearl Shah</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Digital Marketing Executive
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t px-6 py-24 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Ready to transform your professional journey?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            Join thousands of professionals who are discovering opportunities
            and growing their careers with Associates.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </section>

      <footer className="border-t px-6 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-4">
          <div>
            <p className="text-2xl font-bold">AssoXiate</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
              A professional portal for jobs, associates, services, products,
              and articles.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
              {["Home", "About Us", "Contact Us", "Support", "Help", "FAQ"].map(
                (link) => (
                  <a className="hover:text-foreground" href="#" key={link}>
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
              <p>Toll Free No: +91 4814 3145</p>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter/X</p>
              <p>LinkedIn</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Mobile Apps</h3>
            <div className="mt-4 grid gap-3">
              <SecondaryButton>
                <Download />
                Download on App Store
              </SecondaryButton>
              <SecondaryButton>
                <Download />
                Get it on Google Play
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t pt-8 text-sm text-muted-foreground">
          (c) 2025 Associates Portal
        </div>
      </footer>
    </div>
  );
}
