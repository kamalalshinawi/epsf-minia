import React from 'react'
import pharmacyPassionImg from '../assets/images/pharmacy-passion.jpg'
import amrGamilImg from '../assets/images/amr-gamil.jpg'

export const About: React.FC = () => {
  return (
    <div className="-my-12">
      {/* 1. Page Header/Banner */}
      <section
        className="relative left-1/2 w-screen -translate-x-1/2 bg-[#215E99] text-white"
        aria-labelledby="about-banner-title"
      >
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-white/80">
              EPSF-MINIA
            </p>
            <h1
              id="about-banner-title"
              className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            >
              About Us
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              Empowering pharmacy students, advancing healthcare education, and serving the community of Minia.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-10 space-y-20">
        
        {/* Intro Section: Welcome to EPSF-Minia */}
        <section aria-labelledby="welcome-title" className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block rounded-md bg-[#215E99]/10 px-3 py-1 text-xs font-bold text-[#215E99] uppercase tracking-wider">
              Local Chapter
            </div>
            <h2 id="welcome-title" className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              Welcome to <span className="text-[#215E99]">EPSF-Minia</span>
            </h2>
            <p className="text-base leading-relaxed text-black/80">
              EPSF-Minia is the local chapter of the Egyptian Pharmaceutical Students' Federation (EPSF) at Minia University. As an integral part of this non-profit, non-political, and non-religious student organization, EPSF-Minia operates in full alignment with EPSF's mission, vision, and core values, building on the voluntary efforts of pharmacy students dedicated to service and growth.
            </p>
            <p className="text-base leading-relaxed text-black/80">
              Through EPSF-Minia, we bring EPSF's programs to life at the local level — delivering pharmacy education initiatives and facilitating the Students' Exchange Program (SEP) for our fellow students, while contributing to public health projects and awareness campaigns that serve the wider community in Minia. Every initiative we undertake is aligned with the Sustainable Development Goals (SDGs) and the development goals of the International Pharmaceutical Federation (FIP), reflecting EPSF's national commitment to global standards of impact.
            </p>
            <p className="text-base leading-relaxed text-black/80">
              As one of EPSF's local associations across 38 universities throughout Egypt, EPSF-Minia conducts all its activities and collaborations in accordance with the official EPSF constitution. We operate within the strategic plan developed every three years by the national and local executive boards, working diligently toward the Key Performance Indicators (KPIs) approved by the General Assembly.
            </p>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <div className="group relative overflow-hidden rounded-2xl border border-[#215E99]/20 bg-white p-4 max-w-xl lg:max-w-2xl w-full shadow-lg transition-all duration-500 motion-reduce:animate-none animate-float hover:shadow-2xl hover:border-[#215E99]/60 hover:scale-[1.03]">
              <img
                src={pharmacyPassionImg}
                alt="Pharmacy is our passion"
                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* 01 Vision */}
        <section aria-labelledby="vision-title" className="border-t border-black/10 pt-14">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-4xl font-black text-black/20">01</span>
            <h2 id="vision-title" className="text-3xl font-extrabold text-[#215E99]">
              Vision
            </h2>
          </div>
          <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-xs">
            <p className="text-lg leading-relaxed text-black/90 font-medium">
              To be a leading organization in pharmacy, shaping the next generation of pharmacy pioneers who will make a significant impact on Egyptian & global healthcare and improve public health based on a policy-based strategy.
            </p>
          </div>
        </section>

        {/* 02 Mission */}
        <section aria-labelledby="mission-title" className="border-t border-black/10 pt-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-4xl font-black text-black/20">02</span>
            <h2 id="mission-title" className="text-3xl font-extrabold text-[#215E99]">
              Mission
            </h2>
          </div>
          <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-xs">
            <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              {[
                "Providing students with the opportunity to engage in scientific, cultural, and social activities.",
                "Enhancing the scientific and cultural standards of EPSF members and pharmacy students in general.",
                "Strengthening relations among pharmacy students across different universities and sharing perspectives on topics of mutual interest.",
                "Implementing a Student Exchange Program with countries that are members of the International Pharmaceutical Students’ Federation (IPSF) and other organizations, aiming to offer training opportunities abroad and facilitate communication between pharmacy students in Egypt and those in other countries. This promotes mutual understanding on pharmaceutical issues and fosters the exchange of ideas, culture, and knowledge, while gaining international experience.",
                "Organizing local, regional, and international seminars and conferences to encourage dialogue and collaboration.",
                "Promoting preventive health education and raising awareness of public health issues.",
                "Increasing public awareness about the vital role of pharmacists in society.",
                "Establishing a platform for dialogue between EPSF and other student organizations & NGOs.",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#215E99] text-xs font-bold text-white mt-0.5">
                    ✓
                  </span>
                  <span className="text-base text-black/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 03 Values & 04 Morals */}
        <section className="grid gap-8 md:grid-cols-2 border-t border-black/10 pt-14">
          {/* 03 EPSF Values */}
          <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-3xl font-black text-black/20">03</span>
                <h3 className="text-2xl font-extrabold text-[#215E99]">EPSF Values</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Together we achieve more.",
                  "Give more than you take.",
                  "Noblest things come from nameless hands and remain unseen.",
                ].map((val, i) => (
                  <li key={i} className="flex items-center gap-3 text-base font-semibold text-black/90">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#215E99]" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 04 EPSF Morals */}
          <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-3xl font-black text-black/20">04</span>
                <h3 className="text-2xl font-extrabold text-[#215E99]">EPSF Morals</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "We have the passion to learn.",
                  "We respect our entity.",
                  "We reflect our respect.",
                  "We believe in our potentials.",
                ].map((moral, i) => (
                  <li key={i} className="flex items-center gap-3 text-base font-semibold text-black/90">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#215E99]" />
                    <span>{moral}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 05 Organizational Profile */}
        <section aria-labelledby="org-profile-title" className="border-t border-black/10 pt-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-4xl font-black text-black/20">05</span>
            <h2 id="org-profile-title" className="text-3xl font-extrabold text-[#215E99]">
              Organizational Profile
            </h2>
          </div>
          <p className="text-base text-black/80 max-w-3xl mb-10 leading-relaxed">
            EPSF-Minia is structured into dedicated administrative bodies, specialized standing committees, and active student sub-units working in unity across Minia University.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="border border-black/10 bg-white p-7 rounded-2xl shadow-xs">
              <h3 className="text-xl font-bold text-[#215E99]">Executive Board</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/80">
                The Executive Board of EPSF-Minia leads the strategic direction, operational planning, and governance of all local operations, ensuring full compliance with the EPSF Constitution and General Assembly mandates.
              </p>
            </article>

            <article className="border border-black/10 bg-white p-7 rounded-2xl shadow-xs">
              <h3 className="text-xl font-bold text-[#215E99]">Standing Committees</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/80">
                Specialized standing committees execute targeted programs including Professional Development, Public Health, Pharmacy Education, SEP, Social & Cultural Activities, and Media & Communication.
              </p>
            </article>

            <article className="border border-black/10 bg-white p-7 rounded-2xl shadow-xs">
              <h3 className="text-xl font-bold text-[#215E99]">Local Branches & Members</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/80">
                Connecting EPSF national goals with pharmacy students across Minia University, empowering hundreds of student volunteers to lead local health campaigns and professional initiatives.
              </p>
            </article>
          </div>
        </section>

        {/* EPSF-Minia Board Section */}
        <section aria-labelledby="board-title" className="border-t border-black/10 pt-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 id="board-title" className="text-3xl font-extrabold text-[#215E99]">
              EPSF-Minia Board
            </h2>
            <p className="mt-2 text-sm text-black/70">
              Meet the executive leadership driving EPSF-Minia forward.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="border border-black/10 bg-white rounded-2xl p-6 text-center max-w-sm w-full shadow-sm transition-transform duration-200 hover:scale-[1.02]">
              <div className="overflow-hidden rounded-xl bg-black/5 mb-4 aspect-square">
                <img
                  src={amrGamilImg}
                  alt="Mr. Amr Gamil - EPSF-Minia President"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-extrabold text-[#215E99]">Mr. Amr Gamil</h3>
              <p className="mt-1 text-sm font-semibold text-black/70">EPSF-Minia President</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
