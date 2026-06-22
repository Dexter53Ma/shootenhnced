"use client";

import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type FormData = {
  name: string;
  phone: string;
  email: string;
  enquiryType: string;
  subject: string;
  message: string;
  consent: boolean;
};

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  enquiryType: "",
  subject: "",
  message: "",
  consent: false,
};

export default function ContactUsPageClient() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);
  const bottomSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = [heroRef, formSectionRef, bottomSectionRef];
    const observers: IntersectionObserver[] = [];

    refs.forEach((ref) => {
      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("animate-fade-in-up");
            observer.unobserve(el);
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.enquiryType ||
      !formData.subject ||
      !formData.message ||
      !formData.consent
    ) {
      return;
    }
    const msg = `*New Contact Enquiry*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Enquiry Type:* ${encodeURIComponent(formData.enquiryType)}%0A*Subject:* ${encodeURIComponent(formData.subject)}%0A*Message:* ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/212621189496?text=${msg}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setError(false);
  };

  const inputClasses =
    "w-full border border-[#dfdfdf] bg-white px-4 py-3 text-[14px] font-manrope font-light text-[#222a2c] placeholder:text-[#999] focus:border-[#648992] focus:outline-none focus:ring-1 focus:ring-[#648992] transition-colors";

  return (
    <div className="relative">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex w-full items-center justify-center opacity-0"
        style={{
          minHeight: 400,
          backgroundImage:
            "linear-gradient(148deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%), url(/images/704057069_17913192129393261_6440237618080423426_n.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="font-the-seasons text-[48px] font-light text-white md:text-[72px]">
          Contact Us
        </h1>
      </section>

      {/* Contact Form Section */}
      <section
        ref={formSectionRef}
        className="w-full bg-white opacity-0 px-5 py-12 md:px-[72px] md:py-20"
      >
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-16 lg:flex-row">
          {/* Left Column */}
          <div className="flex flex-1 flex-col gap-8">
            <h2 className="font-the-seasons text-[28px] font-light leading-[38px] text-[#222a2c] md:text-[36px] md:leading-[46px]">
              Let&apos;s create something extraordinary for your property.
            </h2>

            <p className="font-manrope text-[14px] font-light leading-[22px] text-[#3d4a4d]">
              Whether you need photography for a single listing or a full visual
              campaign for a development, our team is ready to bring your vision
              to life. Reach out and let&apos;s discuss your project.
            </p>

            <div className="mt-4 flex flex-col gap-6">
              <div>
                <p className="mb-1 font-manrope text-[12px] font-semibold uppercase tracking-[1px] text-[#3d4a4d]">
                  General Enquiries
                </p>
                <a
                  href="mailto:info@shootyourlisting.com"
                  className="font-manrope text-[14px] font-light text-[#222a2c] underline transition-colors hover:text-[#648992]"
                >
                  info@shootyourlisting.com
                </a>
              </div>

              <div>
                <p className="mb-1 font-manrope text-[12px] font-semibold uppercase tracking-[1px] text-[#3d4a4d]">
                  Bookings
                </p>
                <a
                  href="mailto:bookings@shootyourlisting.com"
                  className="font-manrope text-[14px] font-light text-[#222a2c] underline transition-colors hover:text-[#648992]"
                >
                  bookings@shootyourlisting.com
                </a>
                <a
                  href="tel:+212621189496"
                  className="font-manrope text-[14px] font-light text-[#222a2c] transition-colors hover:text-[#648992]"
                >
                  +212 6 21 18 94 96
                </a>
              </div>

              <div>
                <p className="mb-1 font-manrope text-[12px] font-semibold uppercase tracking-[1px] text-[#3d4a4d]">
                  Address
                </p>
                <p className="font-manrope text-[14px] font-light leading-[22px] text-[#222a2c]">
                  Office 1204, Media Hub Tower, Casablanca, Morocco
                </p>
              </div>

              <div>
                <p className="mb-1 font-manrope text-[12px] font-semibold uppercase tracking-[1px] text-[#3d4a4d]">
                  Business Hours
                </p>
                <p className="font-manrope text-[14px] font-light leading-[22px] text-[#222a2c]">
                  Monday – Saturday: 8:00 AM – 8:00 PM<br />
                  Sunday: Closed<br />
                  Morocco Time (GMT+1)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20">
                <h3 className="font-the-seasons mb-4 text-[28px] font-light text-[#222a2c]">
                  Thank You
                </h3>
                <p className="font-manrope text-[14px] font-light text-[#3d4a4d]">
                  Thank you for submitting the form.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="mb-1 block font-manrope text-[13px] font-medium text-[#222a2c]">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Insert your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="mb-1 block font-manrope text-[13px] font-medium text-[#222a2c]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="mb-1 block font-manrope text-[13px] font-medium text-[#222a2c]">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="myemail@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="mb-1 block font-manrope text-[13px] font-medium text-[#222a2c]">
                    What is your enquiry about? *
                  </label>
                  <select
                    name="enquiryType"
                    required
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_12px_center] bg-no-repeat pr-8`}
                  >
                    <option value="">Select enquiry type</option>
                    <option value="Photography enquiry">
                      Photography enquiry
                    </option>
                    <option value="Drone / Aerial enquiry">
                      Drone / Aerial enquiry
                    </option>
                    <option value="Virtual tour enquiry">
                      Virtual tour enquiry
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block font-manrope text-[13px] font-medium text-[#222a2c]">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Tell us about your project"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="mb-1 block font-manrope text-[13px] font-medium text-[#222a2c]">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Type your message.."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 shrink-0 accent-[#648992]"
                  />
                  <label className="font-manrope text-[13px] font-light leading-[20px] text-[#3d4a4d]">
                    By submitting this form, you consent to us contacting you regarding your inquiry. View our{" "}
                    <a href="/privacy-policy" className="underline hover:text-[var(--teal)]">Privacy Policy</a>{" "}
                    for details on how we handle your data.
                  </label>
                </div>

                {error && (
                  <p className="font-manrope text-[13px] text-red-500">
                    Oops! Something went wrong while submitting the form.
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-2 w-full rounded-none border border-[#222a2c] bg-[#222a2c] px-8 py-3 font-the-seasons text-[14px] text-white transition-all duration-300 hover:bg-white hover:text-[#222a2c]"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section
        ref={bottomSectionRef}
        className="w-full opacity-0"
        style={{
          height: "clamp(300px, 50vw, 600px)",
          backgroundImage:
            "linear-gradient(148deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%), url(/images/balconyImg.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Footer />
    </div>
  );
}
