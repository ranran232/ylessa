'use client'
import React, { useEffect, useRef, useState } from "react";

// Define a type for a point card
type Point = {
  icon: string;
  title: string;
  desc: string;
};

const points: Point[] = [
  { icon: "✦", title: "Detail-Oriented & Reliable", desc: "Never miss a deadline, keep tasks organized and running smoothly." },
  { icon: "✦", title: "Strong Communication Skills", desc: "Clear, professional, and friendly interaction every step of the way." },
  { icon: "✦", title: "Social Media & Email Expertise", desc: "Stay visible and consistent online — without the stress." },
  { icon: "✦", title: "Flexible & Adaptable", desc: "Tailored support that fits your unique business needs and pace." },
  { icon: "✦", title: "Passionate About Your Success", desc: "Your goals are my priority. I show up fully for every client." },
];

const WhyWorkWithMe: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section className="relative bg-[#fdf6ef] overflow-hidden py-24 px-4">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#e8c9b0] rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4a882] rounded-full opacity-20 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c48264] bg-[#f0dccb] px-4 py-1.5 rounded-full">
            Why Work With Me
          </span>
        </div>

        <h2 className="text-center text-4xl md:text-6xl font-bold text-[#2d1f14] leading-tight tracking-tight max-w-3xl mx-auto">
          Your Business, <span className="text-[#c48264] italic">Simplified.</span>
        </h2>

        <p className="mt-6 text-center text-base md:text-lg text-[#7a5540] max-w-2xl mx-auto leading-relaxed">
          I help online business owners streamline operations, manage emails, and stay consistent on social media — so you can focus on what you do best.
        </p>

        <div className="flex items-center justify-center gap-3 mt-10 mb-14">
          <div className="h-px w-16 bg-[#d4a882]" />
          <div className="w-2 h-2 rounded-full bg-[#c48264]" />
          <div className="h-px w-16 bg-[#d4a882]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((point, i) => (
            <div
              key={i}
             ref={(el) => {
  cardRefs.current[i] = el;
}}
              data-index={i}
              className={`group relative bg-white border border-[#e8d5c4] rounded-2xl p-6 shadow-sm transform transition-all duration-700 ease-out ${
                visibleCards.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } ${i === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
            >
              <span className="text-[#c48264] text-xl font-bold mb-4 block">{point.icon}</span>
              <h3 className="text-[#2d1f14] font-semibold text-base md:text-lg mb-2 leading-snug">{point.title}</h3>
              <p className="text-[#7a5540] text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;