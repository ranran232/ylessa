'use client'
import React, { useEffect, useRef, useState } from "react";

// Define type for a service card
type Service = {
  title: string;
  tagline: string;
  icon: string;
  description: string;
  features: string[];
  accent: string;
};

const services: Service[] = [
  {
    title: "Email Management",
    tagline: "Inbox Zero, Every Day",
    icon: "✉",
    description:
      "I organize, filter, and respond to emails on your behalf — so your inbox works for you, not the other way around. No more missed messages or drowning in threads.",
    features: ["Inbox organization & labeling", "Draft & send responses", "Spam filtering & unsubscribes", "Follow-up tracking"],
    accent: "text-[#c48264]",
  },
  {
    title: "Social Media Support",
    tagline: "Consistent. On-Brand. Effortless.",
    icon: "◈",
    description:
      "From scheduling posts to engaging with your community, I help you stay visible online without the daily grind. Your brand voice, amplified.",
    features: ["Content scheduling & posting", "Caption writing & hashtag research", "Community engagement", "Analytics reporting"],
    accent: "text-[#b36f52]",
  },
  {
    title: "Calendar & Scheduling",
    tagline: "Your Time, Reclaimed.",
    icon: "◷",
    description:
      "I manage your calendar so meetings, deadlines, and personal time all have a place. You focus on what matters — I handle the logistics.",
    features: ["Appointment scheduling", "Meeting coordination", "Deadline tracking", "Time-blocking & planning"],
    accent: "text-[#c48264]",
  },
  {
    title: "Admin & Data Entry",
    tagline: "Organized, Accurate & Ready.",
    icon: "⊞",
    description:
      "From spreadsheets to CRMs, I keep your data clean and your systems running smoothly. The behind-the-scenes work that keeps everything on track.",
    features: ["Data entry & cleanup", "Document formatting", "CRM management", "Research & reporting"],
    accent: "text-[#b36f52]",
  },
];

const Services: React.FC = () => {
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
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section id="services" className="bg-[#faf5ef] py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="flex items-center justify-center text-xs md:text-sm font-medium tracking-widest uppercase text-[#c48264] mb-5">
            <span className="inline-block w-10 h-px bg-[#c48264] opacity-60 mr-3"></span>
            What I Offer
          </p>
          <h2 className="text-3xl md:text-6xl font-serif font-light text-[#1e1209] mb-6 leading-tight">
            Services Built for <br />
            <em className="italic font-normal text-[#c48264]">Busy Founders</em>
          </h2>
          <p className="text-[#7a5540] text-base md:text-lg font-sans font-light max-w-lg mx-auto leading-relaxed">
            Delegating doesn't have to be stressful. Here's exactly how I can take things off your plate — starting today.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              data-index={i}
              className={`relative bg-[#fdf8f2]/90 backdrop-blur-md border border-[#c48264]/20 rounded-2xl p-10 transition-all duration-700 ease-out
              transform ${visibleCards.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              hover:translate-y-[-6px] hover:shadow-[0_32px_64px_rgba(45,26,14,0.22),0_8px_16px_rgba(45,26,14,0.12)] hover:border-transparent`}
            >
              {/* Large number */}
              <span className="absolute top-7 right-8 text-[4rem] font-serif font-light text-[#c48264]/30 select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Card Content */}
              <div className="relative z-10">
                <span className={`text-2xl mb-5 block transition-all duration-300 ${service.accent}`}>
                  {service.icon}
                </span>
                <p className={`uppercase text-xs md:text-sm font-medium tracking-widest mb-1 ${service.accent}`}>
                  {service.tagline}
                </p>
                <h3 className="text-xl md:text-2xl font-serif font-normal text-[#1e1209] mb-3 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#7a5540] text-sm md:text-base font-sans font-light leading-relaxed mb-5 transition-colors duration-300 hover:text-[#c4a090]">
                  {service.description}
                </p>
                <div className="h-px w-full bg-gradient-to-r from-[#c48264]/30 to-transparent mb-5 transition-all duration-300 hover:from-[#c48264]/50"></div>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${service.accent} transition-all duration-300 hover:scale-125`}></span>
                      <span className="text-[#6b4c35] text-sm md:text-base font-sans font-light transition-colors duration-300 hover:text-[#c4a090]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;