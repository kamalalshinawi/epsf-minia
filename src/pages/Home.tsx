import React from 'react'
import { Link } from 'react-router-dom'
import publicHealthImg from '../assets/images/public-health.jpg'
import sepProgramImg from '../assets/images/sep-program.jpg'
import pharmacyPassionImg from '../assets/images/pharmacy-passion.jpg'
import sdgsImg from '../assets/images/sdgs.png'
import bloodDonationImg from '../assets/images/blood-donation.png'
import environmentImg from '../assets/images/environment.png'
import pharmacyBookImg from '../assets/images/pharmacy-book.png'
import interactiveWorkshopImg from '../assets/images/interactive-workshop.png'
import charityImg from '../assets/images/charity.png'
import skillGrowthImg from '../assets/images/skill-growth.png'
import globalNetworkImg from '../assets/images/global-network.png'
import fipGoalsImg from '../assets/images/fip-goals.png'

interface HomeStat {
  value: string
  label: string
  sublabel?: string
}

interface FocusArea {
  title: string
  description: string
  image: string
}

interface StructureItem {
  title: string
  description: string
}

interface ImpactPillar {
  title: string
  description: string
  icon: string
}

const STATS: HomeStat[] = [
  { value: '38', label: 'Universities' },
  { value: '20+', label: 'SEPers', sublabel: 'in last 5 years' },
  { value: '1,000+', label: 'Pharmacy Students', sublabel: 'Served yearly' },
  { value: '300', label: 'Members', sublabel: 'Students & Graduates' },
  { value: 'Est. 1998', label: 'Serving Pharmacy', sublabel: 'Students Since 1998' },
]

const FOCUS_AREAS: FocusArea[] = [
  {
    title: 'Public Health',
    description:
      'Public health projects aim mainly to serve Egyptian community through many aspects including awareness about many common diseases in the community, humanitarian and environmental aspects & our big project; Blood Donation campaign, all aligned with SDGs.',
    image: publicHealthImg,
  },
  {
    title: 'Student Exchange Program',
    description:
      'Being a part of IPSF, we aim to empower the pharmacy students nationally & internationally, the student exchange program represents a great opportunity for culture exchange and widening students’ horizon on both pharmaceutical and personal scale!',
    image: sepProgramImg,
  },
  {
    title: 'Pharmacy Education',
    description:
      'As pharmacy students, pharmacy is our passion, we aim to empower the pharmaceutical field in Egypt, starting from the pharmacy student, presenting many educational programs and conferences with experts and providing them with training opportunities and large-scale competitions to build a strong future pharmacist!',
    image: pharmacyPassionImg,
  },
]

const IMPACT_PILLARS: ImpactPillar[] = [
  {
    title: 'Sustainable Development Goals (SDGs)',
    description:
      'All EPSF-Minia projects are aligned with the United Nations Sustainable Development Goals to ensure global impact.',
    icon: sdgsImg,
  },
  {
    title: 'Blood Donation Campaigns',
    description:
      'Organizing nationwide blood donation drives to save lives and support Egyptian hospitals.',
    icon: bloodDonationImg,
  },
  {
    title: 'Environmental & Humanitarian Outreach',
    description:
      'Promoting sustainability, climate awareness, and community welfare programs across Minia.',
    icon: environmentImg,
  },
  {
    title: 'Pharmacy Education & Clinical Training',
    description:
      'Empowering pharmacy students with clinical knowledge, workshops, and expert-led training.',
    icon: pharmacyBookImg,
  },
  {
    title: 'Workshops & Interactive Competitions',
    description:
      'Hosting interactive webinars, national patient counseling competitions, and skill-building sessions.',
    icon: interactiveWorkshopImg,
  },
  {
    title: 'Humanitarian Aid & Relief',
    description:
      'Supporting underprivileged families, charity drives, and social welfare programs in Minia.',
    icon: charityImg,
  },
  {
    title: 'Skill Growth & Leadership',
    description:
      'Developing personal capacity, communication skills, and leadership for future pharmacy pioneers.',
    icon: skillGrowthImg,
  },
  {
    title: 'Global Network & Cultural Exchange',
    description:
      'Connecting pharmacy students internationally through IPSF exchanges and global dialogue.',
    icon: globalNetworkImg,
  },
  {
    title: 'FIP Development Goals',
    description:
      'Advancing pharmaceutical practice, policy, and education aligned with International Pharmaceutical Federation standards.',
    icon: fipGoalsImg,
  },
]

const STRUCTURE_ITEMS: StructureItem[] = [
  {
    title: 'Executive Board',
    description:
      'The Executive Board provides strategic leadership, administrative governance, and operational supervision for all EPSF-Minia projects and initiatives.',
  },
  {
    title: 'Standing Committees',
    description:
      'Dedicated committees manage specialized portfolios, including Public Health, Pharmacy Education, SEP, Professional Development, and Media & IT.',
  },
  {
    title: 'Local Branches & Members',
    description:
      'Empowering over 300 member students and pharmacy graduates across Minia University to lead local impact campaigns and nationwide events.',
  },
]

export const Home = (): React.JSX.Element => (
  <div className="-my-12">
    {/* 1. Hero Section */}
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white py-16 sm:py-20 lg:py-24">
      {/* Decorative concentric background rings */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="h-[600px] w-[600px] rounded-full border border-blue-200/60" />
        <div className="absolute h-[450px] w-[450px] rounded-full border border-blue-200/60" />
        <div className="absolute h-[300px] w-[300px] rounded-full border border-blue-200/60" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl">
          We Are <span className="text-[#0047ba]">EPSF-Minia</span>
          <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-black/90">
            Pharmacy Is Our Passion
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-black/75">
          EPSF-Minia is the local chapter of the Egyptian Pharmaceutical Students' Federation (EPSF) at Minia University, proudly representing one of the 38 universities that make up Egypt's largest student organization. As part of a full member federation of the International Pharmaceutical Students' Federation (IPSF), operating under the supervision of the Pharmacists' Syndicate, EPSF-Minia shares the same mission of serving both the pharmacy student and the local community — brought to life through pharmacy education conferences, public health projects, and the Student Exchange Program (SEP).
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-md bg-[#0047ba] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#003896] hover:shadow-lg"
          >
            Learn More
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border border-black/20 bg-white px-7 py-3.5 text-sm font-bold text-black shadow-xs transition-all hover:bg-black/5"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>

    {/* 2. Stats / Highlights Row */}
    <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {STATS.map(({ value, label, sublabel }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center rounded-2xl border border-black/10 bg-white p-6 text-center shadow-xs transition-transform hover:scale-[1.03]"
          >
            <span className="text-3xl font-extrabold tracking-tight text-[#0047ba]">
              {value}
            </span>
            <span className="mt-2 text-xs sm:text-sm font-bold text-black">{label}</span>
            {sublabel && <span className="text-xs text-black/60 mt-0.5">{sublabel}</span>}
          </div>
        ))}
      </div>
    </section>

    {/* 3. About EPSF-Minia Highlight Section */}
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl leading-tight">
            About EPSF-Minia: <br className="hidden sm:inline" />
            <span className="text-[#0047ba]">Shaping the Future of Pharmacy Education</span>
          </h2>
          <p className="text-base leading-relaxed text-black/80">
            Through EPSF-Minia, we bring EPSF's programs to life at the local level — delivering pharmacy education initiatives and facilitating the Students' Exchange Program (SEP) for our fellow students, while contributing to public health projects and awareness campaigns that serve the wider community in Minia. Every initiative we undertake is aligned with the Sustainable Development Goals (SDGs) and the development goals of the International Pharmaceutical Federation (FIP), reflecting EPSF's national commitment to global standards of impact.
          </p>
          <div>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md bg-[#0047ba] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#003896]"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white p-3 shadow-lg max-w-lg w-full">
            <img
              src={pharmacyPassionImg}
              alt="EPSF-Minia Pharmacy Education"
              className="w-full h-72 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>

    {/* 4. "What We Do" Core Feature Cards Section */}
    <section className="bg-slate-50/50 py-16 sm:py-20 border-y border-black/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-3 text-base text-black/70">
            Serving pharmacy students and our local community through education, health campaigns, and international exchange.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {FOCUS_AREAS.map(({ title, description, image }) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-56 w-full overflow-hidden bg-black/5">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-[#0047ba] p-6 text-white">
                <div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 5. Developing Pharmacy and Community Section (Right-to-Left Marquee) */}
    <section className="bg-white py-16 sm:py-20 border-b border-black/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 mb-10 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
          Developing <span className="text-[#0047ba]">Pharmacy</span> and Community
        </h2>
        <p className="mt-3 text-base text-black/70 max-w-2xl mx-auto leading-relaxed">
          Our core initiatives driving health awareness, educational growth, and sustainable community impact in Minia.
        </p>
      </div>

      {/* Marquee Ticker Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient edge masks for smooth fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused] py-4">
          {[...IMPACT_PILLARS, ...IMPACT_PILLARS].map((pillar, idx) => (
            <div
              key={`${pillar.title}-${idx}`}
              className="flex w-72 flex-col items-center text-center rounded-2xl border border-black/10 bg-white p-6 shadow-xs transition-all duration-300 hover:shadow-lg hover:border-[#0047ba]/40 shrink-0 group"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50/80 p-3 mb-4 transition-transform duration-300 group-hover:scale-110">
                <img src={pillar.icon} alt={pillar.title} className="h-full w-full object-contain" />
              </div>
              <h3 className="text-sm font-bold text-black mb-2 leading-snug group-hover:text-[#0047ba] transition-colors line-clamp-2">
                {pillar.title}
              </h3>
              <p className="text-xs leading-relaxed text-black/70 line-clamp-3">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 6. "Our Structure" Section */}
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
          Our Structure
        </h2>
        <p className="mt-3 text-base text-black/70">
          How EPSF-Minia operates to empower student leadership and deliver impact.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {STRUCTURE_ITEMS.map(({ title, description }) => (
          <article
            key={title}
            className="rounded-2xl border border-black/10 bg-white p-7 shadow-xs hover:border-[#0047ba]/30 transition-colors"
          >
            <h3 className="text-xl font-bold text-[#0047ba]">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/80">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>

    {/* 7. Closing CTA Band */}
    <section className="w-full bg-[#0047ba] text-center text-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Get in Touch with EPSF-Minia
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/90">
          Whether you are a pharmacy student, partner organization, or community member, we welcome your inquiries and collaboration.
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-sm font-bold text-[#0047ba] shadow-md transition-all hover:bg-white/90"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  </div>
)
