import { Link } from "react-router-dom";

interface HomeStat {
  value: string;
  label: string;
}
type FocusIconName = "advocacy" | "education" | "partnership";
interface FocusArea {
  title: string;
  description: string;
  icon: FocusIconName;
}
interface StructureItem {
  title: string;
  description: string;
}

const stats: HomeStat[] = [
  { value: "38", label: "Universities" },
  { value: "4,000+", label: "Members" },
  { value: "Est. 1982", label: "Established" },
  { value: "Nationwide", label: "Reach" },
];

const focusAreas: FocusArea[] = [
  {
    title: "Advocacy and Representation",
    description:
      "We represent the shared interests of pharmacy students in Minia through responsible dialogue and coordinated advocacy.",
    icon: "advocacy",
  },
  {
    title: "Education and Development",
    description:
      "We create opportunities for professional growth, scientific learning, and skill development for pharmacy students.",
    icon: "education",
  },
  {
    title: "Partnership and Outreach",
    description:
      "We build constructive relationships with health institutions and local partners to serve our community.",
    icon: "partnership",
  },
];

const structureItems: StructureItem[] = [
  {
    title: "Executive Board",
    description:
      "The Executive Board provides strategic direction, governance, and oversight for the organization’s work.",
  },
  {
    title: "Committees",
    description:
      "Dedicated committees develop specialist programmes and support transparent decision-making.",
  },
  {
    title: "Local Branches",
    description:
      "Connecting national priorities with the needs and perspectives of pharmacy students across Minia.",
  },
];

const FocusIcon = ({ name }: { name: FocusIconName }): React.JSX.Element => {
  const paths: Record<FocusIconName, React.JSX.Element> = {
    advocacy: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v18m0-18c-2.2 0-4 1.4-4 3.2S9.8 9.5 12 9.5s4 1.4 4 3.2-1.8 3.2-4 3.2-4 1.4-4 3.2S9.8 22 12 22"
      />
    ),
    education: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 6.5 12 3l9 3.5-9 3-9-3Zm3.5 2v5.2c0 .7 2.5 2.3 5.5 2.3s5.5-1.6 5.5-2.3V8.5M21 7v6"
      />
    ),
    partnership: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.5 13.5 2.2 2.2a1.8 1.8 0 0 0 2.6 0l2.9-2.9m-7.7.7-1.2 1.2a1.8 1.8 0 0 1-2.6 0l-1.2-1.2a1.8 1.8 0 0 1 0-2.6l4-4a1.8 1.8 0 0 1 2.6 0l.8.8m4.6-1.3 2.5-2.5a1.8 1.8 0 0 1 2.6 0l1.2 1.2a1.8 1.8 0 0 1 0 2.6l-4.5 4.5a1.8 1.8 0 0 1-2.6 0l-2-2"
      />
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-7 w-7"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

export const Home = (): React.JSX.Element => (
  <div className="-my-12">
    <section
      className="relative left-1/2 w-screen -translate-x-1/2 bg-[#215E99] text-white"
      aria-labelledby="home-hero-title"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="max-w-3xl motion-reduce:animate-none animate-hero-enter">
          <p className="text-base font-extrabold uppercase tracking-[0.2em] text-white">
            EPSF-MINIA
          </p>
          <h1
            id="home-hero-title"
            className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Egyptian Pharmaceutical Students' Federation - Minia
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Bringing pharmacy students and health institutions together to advance healthcare, leadership, and public engagement in Minia.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-bold text-[#215E99] transition-colors hover:bg-white/90"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-sm border border-white px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section
      className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10"
      aria-label="Organization highlights"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, label }) => (
          <article
            key={label}
            className="border border-black/10 bg-white px-6 py-6 text-center shadow-sm"
          >
            <p className="text-3xl font-bold tracking-tight text-[#215E99]">
              {value}
            </p>
            <p className="mt-2 text-sm font-medium text-black/70">{label}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-white border-y border-black/10" aria-labelledby="what-we-do-title">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#215E99]">
            Our work
          </p>
          <h2
            id="what-we-do-title"
            className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl"
          >
            What We Do
          </h2>
          <p className="mt-4 leading-7 text-black/70">
            Our core areas of work guide how we serve pharmacy students, healthcare partners, and the community.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {focusAreas.map(({ title, description, icon }) => (
            <article
              key={title}
              className="border border-black/10 bg-white p-7 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#215E99] text-white">
                <FocusIcon name={icon} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#215E99]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/80">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section
      className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20"
      aria-labelledby="structure-title"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#215E99]">
          Governance
        </p>
        <h2
          id="structure-title"
          className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl"
        >
          Our Structure
        </h2>
      </div>
      <div className="mt-10 grid divide-y divide-black/10 border-y border-black/10 md:grid-cols-3 md:divide-x md:divide-y-0">
        {structureItems.map(({ title, description }) => (
          <article
            key={title}
            className="px-0 py-7 md:px-7 md:py-2 first:md:pl-0 last:md:pr-0"
          >
            <h3 className="text-xl font-bold text-[#215E99]">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-black/80">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>

    <section
      className="w-full mb-10 bg-[#215E99] text-center text-white"
      aria-labelledby="contact-cta-title"
    >
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 lg:py-20">
        <h2
          id="contact-cta-title"
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Let’s Start a Conversation
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
          Contact our team to learn more about EPSF Minia and ways to connect with our work.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-bold text-[#215E99] transition-colors hover:bg-white/90"
        >
          Contact Us
        </Link>
      </div>
    </section>
  </div>
);
