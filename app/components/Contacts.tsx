'use client'
import React, { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const response = await fetch("https://formspree.io/f/xbdapkaz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) console.error("Form submission failed");
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <section
      id="contacts"
      className="bg-[linear-gradient(160deg,_#fdf6ee_0%,_#f5e6d3_60%,_#ede0cf_100%)] py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[#c48264] uppercase tracking-[0.2em] text-sm font-semibold mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d1f14] leading-tight">
            Let's Work Together
          </h2>
          <p className="mt-4 text-[#6b4c35] text-lg max-w-xl mx-auto">
            Ready to get organized and grow your business? Reach out and let's
            chat about how I can help.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-[#c48264] opacity-50" />
            <div className="w-2 h-2 rounded-full bg-[#c48264]" />
            <div className="h-px w-16 bg-[#c48264] opacity-50" />
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">

          {/* Left - Contact Info */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* Info Card */}
            <div className="bg-white/60 backdrop-blur-sm border border-[#e8d5c0] rounded-2xl p-7 shadow-sm">
              <h3 className="text-[#2d1f14] font-bold text-xl mb-5">Contact Info</h3>
              <div className="flex flex-col gap-5">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2d1f14] flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-5 h-5 text-[#c48264]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#c48264] uppercase tracking-wider font-semibold mb-0.5">Email</p>
                    <a href="mailto:ylessadumas@gmail.com" className="text-[#2d1f14] font-medium hover:text-[#c48264] transition-colors duration-200">
                      ylessadumas@gmail.com
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2d1f14] flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-5 h-5 text-[#c48264]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#c48264] uppercase tracking-wider font-semibold mb-0.5">Response Time</p>
                    <p className="text-[#2d1f14] font-medium">Within 24–48 hours</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2d1f14] flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-5 h-5 text-[#c48264]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#c48264] uppercase tracking-wider font-semibold mb-0.5">Availability</p>
                    <p className="text-[#2d1f14] font-medium">Mon – Fri, 9AM – 5PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
         {/* Social Links */}
<div className="bg-white/60 backdrop-blur-sm border border-[#e8d5c0] rounded-2xl p-7 shadow-sm">
  <h3 className="text-[#2d1f14] font-bold text-xl mb-5">Find Me On</h3>
  <div className="flex flex-col gap-3">
    {[
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ylessa-rose-dumas-8244563b3/",
        icon: (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        ),
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/ylessaaa/",
        icon: (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        ),
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/ylessarose.dumas",
        icon: (
            <svg
    className="w-4 h-4"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.019 4.388 11.01 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.955.925-1.955 1.874v2.252h3.328l-.532 3.49h-2.796V24C19.612 23.083 24 18.092 24 12.073z" />
  </svg>
        ),
      },
    ].map(({ label, href, icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#e8d5c0] text-[#6b4c35] hover:bg-[#2d1f14] hover:text-white hover:border-[#2d1f14] transition-all duration-300 group"
      >
        <span className="text-[#c48264] group-hover:text-[#c48264]">{icon}</span>
        <span className="font-medium text-sm">{label}</span>
        <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    ))}
  </div>
</div>
          </div>

          {/* Right - DirectOrder Form */}
          <div className="md:col-span-3">
            <div className="bg-white/60 backdrop-blur-sm border border-[#e8d5c0] rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#2d1f14] flex items-center justify-center mb-5 shadow-lg">
                    <svg className="w-8 h-8 text-[#c48264]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2d1f14] mb-2">Message Sent!</h3>
                  <p className="text-[#6b4c35]">Thank you for reaching out. I'll be in touch within 24–48 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-8 px-6 py-2.5 border border-[#c48264] text-[#c48264] rounded-xl text-sm hover:bg-[#c48264] hover:text-white transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-[#2d1f14] font-bold text-xl mb-1">Send a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#c48264] uppercase tracking-wider font-semibold">
                        Full Name <span className="text-[#c48264]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="px-4 py-3 rounded-xl border border-[#e8d5c0] bg-white/70 text-[#2d1f14] placeholder-[#c4a88a] focus:outline-none focus:border-[#c48264] focus:ring-2 focus:ring-[#c48264]/20 transition-all duration-200 text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#c48264] uppercase tracking-wider font-semibold">
                        Email Address <span className="text-[#c48264]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@business.com"
                        className="px-4 py-3 rounded-xl border border-[#e8d5c0] bg-white/70 text-[#2d1f14] placeholder-[#c4a88a] focus:outline-none focus:border-[#c48264] focus:ring-2 focus:ring-[#c48264]/20 transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#c48264] uppercase tracking-wider font-semibold">
                      What can I help with? <span className="text-[#c48264]">*</span>
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl border border-[#e8d5c0] bg-white/70 text-[#2d1f14] focus:outline-none focus:border-[#c48264] focus:ring-2 focus:ring-[#c48264]/20 transition-all duration-200 text-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a service...</option>
                      <option value="email-management">Email Management</option>
                      <option value="social-media">Social Media Support</option>
                      <option value="admin-support">Administrative Support</option>
                      <option value="calendar">Calendar & Scheduling</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#c48264] uppercase tracking-wider font-semibold">
                      Your Message <span className="text-[#c48264]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me a bit about your business and what you're looking for..."
                      className="px-4 py-3 rounded-xl border border-[#e8d5c0] bg-white/70 text-[#2d1f14] placeholder-[#c4a88a] focus:outline-none focus:border-[#c48264] focus:ring-2 focus:ring-[#c48264]/20 transition-all duration-200 text-sm resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full mt-2 px-6 py-3.5 bg-[#1a1009] text-white rounded-xl shadow-md transition-all transform hover:-translate-y-1 duration-300 font-semibold text-sm tracking-wide flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;