'use client'
import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-reveal]").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const revealStyle = {
    opacity: 0,
    transform: "translateY(28px)",
    transition: "opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)",
  };

  const qualities = [
    { icon: "✦", label: "Communication", desc: "Excellent" },
    { icon: "◈", label: "Adaptability", desc: "Quick Learner" },
    { icon: "⬡", label: "Tech Skills", desc: "Proficient" },
  ];

  const skills = ["Email Management", "Scheduling", "Social Media", "Admin Support", "ESL Background"];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#fdf6ee] py-28 px-6"
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#e8c9a8] opacity-20 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#c48264] opacity-10 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* Section label */}
        <div data-reveal style={revealStyle} className="flex items-center gap-4 mb-16 justify-center md:justify-start">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c48264]" />
          <span className="text-[#c48264] text-xs font-medium tracking-[0.25em] uppercase">
            About Me
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c48264]" />
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-20">

          {/* ── Left Column ── */}
          <div className="lg:w-5/12 flex flex-col items-center gap-10 w-full">

            {/* Photo */}
            <div data-reveal style={revealStyle} className="relative self-center">
              {/* Gradient backing offset */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-gradient-to-br from-[#e8c9a8] to-[#c48264] z-0" />
              <img
                src="https://res.cloudinary.com/dtvjjump9/image/upload/v1771848109/portrait_gsmwss.avif"
                alt="Ylessa Rose Dumas"
                className="relative z-10 w-64 h-80 object-cover rounded-2xl shadow-2xl"
              />
              {/* Floating name tag */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 bg-white border border-[#ede0cf] text-[#6b4c35] text-xs font-medium px-5 py-2 rounded-full shadow-md whitespace-nowrap">
                ✦ Ylessa Rose Dumas ✦
              </div>
            </div>

            {/* Quality cards */}
            <div data-reveal style={revealStyle} className="flex flex-col gap-3 w-full max-w-sm mt-4">
              {qualities.map((q) => (
                <div
                  key={q.label}
                  className="flex items-center gap-4 rounded-2xl px-5 py-4 bg-white border border-[#ede0cf] shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-[#c48264] text-xl w-7 text-center">{q.icon}</span>
                  <div>
                    <p className="text-[#b09080] text-[10px] font-medium tracking-widest uppercase">
                      {q.label}
                    </p>
                    <p className="text-[#2d1f14] text-lg font-semibold leading-tight">
                      {q.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="lg:w-7/12 flex flex-col justify-center text-center lg:text-left pt-4 w-full">

            <div data-reveal style={revealStyle} className="mb-2">
              <span className="text-[#c48264] text-xl italic">
                Your reliable partner in productivity
              </span>
            </div>

            <h2 data-reveal style={revealStyle} className="text-5xl md:text-6xl font-light leading-tight text-[#2d1f14] mb-2">
              Virtual{" "}
              <span className="text-[#c48264] font-semibold">Assistant</span>
            </h2>
            <h3 data-reveal style={revealStyle} className="text-3xl md:text-4xl italic font-light text-[#2d1f14] mb-8">
              at your service
            </h3>

            {/* Divider */}
            <div data-reveal style={revealStyle} className="h-px bg-gradient-to-r from-[#c48264] via-[#e8c9a8] to-transparent w-24 mb-8 self-center lg:self-start" />

            <p data-reveal style={revealStyle} className="text-[#6b4c35] text-base leading-[1.9] font-light mb-5">
              Hi! I'm Ylessa — a detail-oriented and adaptable Virtual Assistant with
              experience as an ESL tutor. Working with students from diverse backgrounds
              helped me hone my communication skills, understand different perspectives,
              and adapt quickly to various needs.
            </p>

            <p data-reveal style={revealStyle} className="text-[#6b4c35] text-base leading-[1.9] font-light mb-10">
              I enjoy helping businesses run smoothly by managing emails, scheduling,
              social media support, and general admin tasks. I bring reliability, patience,
              and a positive attitude to every project.
            </p>

            {/* Skill badges */}
            <div data-reveal style={revealStyle} className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium tracking-wide px-4 py-2 rounded-full bg-[#fdf0e6] text-[#6b4c35] border border-[#e8c9a8] hover:bg-[#c48264] hover:text-white hover:border-[#c48264] transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;