"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  package: string;
  location: string;
  propertySize: string;
  rooms: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

const PACKAGES = [
  {
    id: "appartement",
    name: "Appartement",
    price: "1,000 MAD",
    icon: "🏢",
    desc: "Apartments & studios",
    features: ["20 photos", "Interior shots", "24h delivery"],
  },
  {
    id: "riads",
    name: "Riads",
    price: "1,500 MAD",
    icon: "🏡",
    desc: "Traditional Moroccan riads",
    features: ["30 photos", "Golden hour", "12h express"],
    badge: "Popular",
  },
  {
    id: "villa",
    name: "Villa",
    price: "2,000 MAD",
    icon: "🏠",
    desc: "Luxury villas",
    features: ["40 photos", "Video tour", "Drone shots"],
  },
  {
    id: "events",
    name: "Events",
    price: "3,000 – 5,000 MAD",
    icon: "🎉",
    desc: "Events & celebrations",
    features: ["Full coverage", "Multi-photographer", "USB included"],
  },
];

const LOCATIONS = [
  "Casablanca", "Marrakech", "Tangier", "Rabat", "Agadir",
  "Fez", "Meknes", "Chefchaouen", "Essaouira", "Kenitra",
  "Ouarzazate", "Ifrane", "Other",
];

const TIMES = [
  "Morning (8AM – 12PM)", "Afternoon (12PM – 4PM)", "Evening (4PM – 7PM)", "Flexible",
];

const SIZES = ["Under 1,000 sqft", "1,000 – 2,000 sqft", "2,000 – 4,000 sqft", "4,000 – 8,000 sqft", "8,000+ sqft"];

const STEPS = ["Package", "Details", "Contact", "Schedule", "Review"];

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

function formatDate(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function CustomCalendar({ value, onChange }: { value: string; onChange: (date: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const today = new Date();
  const parsed = value ? new Date(value + "T00:00:00") : null;
  const [viewYear, setViewYear] = useState(parsed?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(parsed?.getMonth() ?? today.getMonth());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
  const todayStr = formatDate(today.getFullYear(), today.getMonth(), today.getDate());

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  const selectDate = (day: number) => {
    const selected = new Date(viewYear, viewMonth, day);
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (selected < minDate) return;
    onChange(formatDate(viewYear, viewMonth, day));
    setIsOpen(false);
  };

  const displayValue = parsed
    ? `${parsed.getDate()} ${MONTHS[parsed.getMonth()]}, ${parsed.getFullYear()}`
    : "";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="font-manrope flex w-full items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 text-left text-[13px] transition-all hover:border-gray-300 focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/10 focus:outline-none"
        style={{ color: displayValue ? "#1f2937" : "#9ca3af" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        {displayValue || "Select a date"}
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"
          className="ml-auto transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full z-50 mt-2 w-[300px] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-black/8"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 pt-4 pb-2">
              <button type="button" onClick={prevMonth} className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <p className="font-manrope text-[13px] font-semibold text-gray-800">
                {MONTHS[viewMonth]} {viewYear}
              </p>
              <button type="button" onClick={nextMonth} className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-0 px-4 pb-1">
              {DAYS.map((d) => (
                <div key={d} className="py-1 text-center font-manrope text-[10px] font-medium uppercase tracking-wider text-gray-300">
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-0 px-4 pb-4">
              {cells.map((day, i) => {
                if (day === null) return <div key={`empty-${i}`} />;
                const dateStr = formatDate(viewYear, viewMonth, day);
                const isSelected = dateStr === value;
                const isToday = dateStr === todayStr;
                const isPast = new Date(viewYear, viewMonth, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => selectDate(day)}
                    disabled={isPast}
                    className="relative flex h-9 w-full items-center justify-center"
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-medium transition-all duration-200 ${
                        isPast
                          ? "text-gray-200 cursor-not-allowed"
                          : isSelected
                            ? "bg-[var(--teal)] text-white shadow-md shadow-[var(--teal)]/30"
                            : isToday
                              ? "bg-[var(--teal)]/10 text-[var(--teal)] font-semibold"
                              : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {day}
                    </span>
                    {isToday && !isSelected && (
                      <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--teal)]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Today Button */}
            <div className="border-t border-gray-50 px-4 py-2.5">
              <button
                type="button"
                onClick={() => {
                  onChange(todayStr);
                  setViewYear(today.getFullYear());
                  setViewMonth(today.getMonth());
                  setIsOpen(false);
                }}
                className="font-manrope w-full rounded-lg py-1.5 text-center text-[12px] font-medium text-[var(--teal)] transition-colors hover:bg-[var(--teal)]/5"
              >
                Today
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BookingForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState<FormData>({
    package: "", location: "", propertySize: "", rooms: "",
    name: "", email: "", phone: "", company: "",
    preferredDate: "", preferredTime: "", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const update = (field: keyof FormData, value: string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const goNext = () => { setDirection(1); setStep((s) => s + 1); };
  const goBack = () => { setDirection(-1); setStep((s) => s - 1); };

  const canNext = () => {
    if (step === 0) return !!data.package;
    if (step === 1) return !!data.location;
    if (step === 2) return !!data.name && !!data.email && !!data.phone;
    if (step === 3) return !!data.preferredDate;
    return true;
  };

  const handleSubmit = () => {
    const pkg = PACKAGES.find((p) => p.id === data.package);
    const msg = `*New Booking Request*%0A%0A*Package:* ${pkg?.name || data.package} (${pkg?.price})%0A*Location:* ${data.location}%0A*Property Size:* ${data.propertySize || "N/A"}%0A*Rooms:* ${data.rooms || "N/A"}%0A%0A*Name:* ${data.name}%0A*Email:* ${data.email}%0A*Phone:* ${data.phone}%0A*Company:* ${data.company || "N/A"}%0A%0A*Date:* ${data.preferredDate}%0A*Time:* ${data.preferredTime || "N/A"}%0A*Notes:* ${data.notes || "None"}`;
    window.open(`https://wa.me/212621189496?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    const pkg = PACKAGES.find((p) => p.id === data.package);
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="mx-4 w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2, damping: 15 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </motion.div>
          <h2 className="font-the-seasons mb-3 text-[26px] font-light text-[var(--dark-teal)]">Booking Confirmed!</h2>
          <p className="font-manrope mb-2 text-[14px] font-light text-gray-500">
            Thank you, <span className="font-medium text-gray-700">{data.name}</span>. Your <span className="font-medium text-gray-700">{pkg?.name}</span> booking request has been sent.
          </p>
          <p className="font-manrope mb-8 text-[12px] text-gray-400">Our team will contact you within 24 hours.</p>
          <button onClick={onClose} className="rounded-full bg-[var(--dark-teal)] px-10 py-3 font-manrope text-[13px] font-medium text-white transition-all hover:bg-[var(--teal)]">
            Done
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative mx-4 flex w-full max-w-[880px] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl md:flex-row"
        style={{ maxHeight: "min(680px, 90vh)" }}
      >
        {/* Left Sidebar */}
        <div className="hidden w-[240px] shrink-0 flex-col justify-between bg-[var(--dark-teal)] p-7 md:flex">
          <div>
            <p className="font-manrope mb-1 text-[11px] uppercase tracking-[2px] text-white/40">Step {step + 1} of {STEPS.length}</p>
            <h3 className="font-the-seasons mb-8 text-[22px] font-light text-white">{STEPS[step]}</h3>
            <div className="space-y-1">
              {STEPS.map((s, i) => (
                <div key={s} className="flex items-center gap-3">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold font-manrope transition-all duration-300 ${
                    i < step ? "bg-white text-[var(--dark-teal)]" : i === step ? "bg-[var(--teal)] text-white" : "bg-white/10 text-white/40"
                  }`}>
                    {i < step ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    ) : i + 1}
                  </div>
                  <span className={`text-[12px] font-manrope transition-colors duration-300 ${i === step ? "text-white" : i < step ? "text-white/70" : "text-white/30"}`}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="font-manrope text-[11px] text-white/25">ShootYourListing</p>
        </div>

        {/* Right Content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3 md:hidden">
            <div>
              <p className="font-manrope text-[10px] uppercase tracking-[1.5px] text-gray-400">Step {step + 1}/{STEPS.length}</p>
              <p className="font-the-seasons text-[16px] font-light text-[var(--dark-teal)]">{STEPS[step]}</p>
            </div>
            <button onClick={onClose} aria-label="Close" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Close Button - Desktop */}
          <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 hidden h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 md:flex">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>

          {/* Animated Content */}
          <div className="relative flex-1 overflow-y-auto p-5 md:p-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Step 0: Package Selection */}
                {step === 0 && (
                  <div>
                    <h2 className="font-the-seasons mb-2 text-[24px] font-light text-[var(--dark-teal)]">Choose your package</h2>
                    <p className="font-manrope mb-6 text-[13px] text-gray-400">Select the plan that best fits your property.</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {PACKAGES.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => update("package", p.id)}
                          className={`group relative flex flex-col rounded-2xl border-2 p-5 text-left transition-all duration-300 ${
                            data.package === p.id
                              ? "border-[var(--teal)] bg-[var(--teal)]/5 shadow-lg shadow-[var(--teal)]/10"
                              : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-md"
                          }`}
                        >
                          {p.badge && (
                            <span className="absolute -top-2.5 left-5 rounded-full bg-[var(--teal)] px-3 py-0.5 font-manrope text-[10px] font-semibold uppercase tracking-[0.5px] text-white">
                              {p.badge}
                            </span>
                          )}
                          <div className="mb-3 flex items-center gap-3">
                            <span className="text-2xl">{p.icon}</span>
                            <div>
                              <p className="font-manrope text-[14px] font-semibold text-gray-800">{p.name}</p>
                              <p className="font-manrope text-[11px] text-gray-400">{p.desc}</p>
                            </div>
                          </div>
                          <p className="font-manrope mb-3 text-[16px] font-semibold text-[var(--teal)]">{p.price}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {p.features.map((f) => (
                              <span key={f} className="rounded-full bg-gray-50 px-2.5 py-1 font-manrope text-[10px] text-gray-500">
                                {f}
                              </span>
                            ))}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 1: Property Details */}
                {step === 1 && (
                  <div>
                    <h2 className="font-the-seasons mb-2 text-[24px] font-light text-[var(--dark-teal)]">Property details</h2>
                    <p className="font-manrope mb-6 text-[13px] text-gray-400">Tell us about your property location and size.</p>
                    <div className="space-y-5">
                      <div>
                        <label className="font-manrope mb-2 block text-[12px] font-medium uppercase tracking-[0.5px] text-gray-500">Location *</label>
                        <div className="flex flex-wrap gap-2">
                          {LOCATIONS.map((loc) => (
                            <button
                              key={loc}
                              onClick={() => update("location", loc)}
                              className={`rounded-full border px-4 py-2 text-[12px] font-medium font-manrope transition-all duration-200 ${
                                data.location === loc
                                  ? "border-[var(--teal)] bg-[var(--teal)] text-white shadow-sm"
                                  : "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                              }`}
                            >
                              {loc}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="font-manrope mb-2 block text-[12px] font-medium uppercase tracking-[0.5px] text-gray-500">Property Size</label>
                        <div className="flex flex-wrap gap-2">
                          {SIZES.map((size) => (
                            <button
                              key={size}
                              onClick={() => update("propertySize", size)}
                              className={`rounded-full border px-4 py-2 text-[12px] font-medium font-manrope transition-all duration-200 ${
                                data.propertySize === size
                                  ? "border-[var(--teal)] bg-[var(--teal)] text-white shadow-sm"
                                  : "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="font-manrope mb-2 block text-[12px] font-medium uppercase tracking-[0.5px] text-gray-500">Number of Rooms</label>
                        <input
                          type="number"
                          min="1"
                          placeholder="e.g. 3"
                          value={data.rooms}
                          onChange={(e) => update("rooms", e.target.value)}
                          className="font-manrope w-full max-w-[180px] rounded-xl border border-gray-200 px-4 py-3 text-[13px] outline-none transition-all focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/10"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Info */}
                {step === 2 && (
                  <div>
                    <h2 className="font-the-seasons mb-2 text-[24px] font-light text-[var(--dark-teal)]">Your information</h2>
                    <p className="font-manrope mb-6 text-[13px] text-gray-400">How can we reach you about this booking?</p>
                    <div className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="font-manrope mb-1.5 block text-[12px] font-medium text-gray-500">Full Name *</label>
                          <input type="text" placeholder="John Smith" value={data.name} onChange={(e) => update("name", e.target.value)}
                            className="font-manrope w-full rounded-xl border border-gray-200 px-4 py-3 text-[13px] outline-none transition-all focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/10" />
                        </div>
                        <div>
                          <label className="font-manrope mb-1.5 block text-[12px] font-medium text-gray-500">Email *</label>
                          <input type="email" placeholder="john@example.com" value={data.email} onChange={(e) => update("email", e.target.value)}
                            className="font-manrope w-full rounded-xl border border-gray-200 px-4 py-3 text-[13px] outline-none transition-all focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/10" />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="font-manrope mb-1.5 block text-[12px] font-medium text-gray-500">Phone *</label>
                          <input type="tel" placeholder="+212 6 00 00 00 00" value={data.phone} onChange={(e) => update("phone", e.target.value)}
                            className="font-manrope w-full rounded-xl border border-gray-200 px-4 py-3 text-[13px] outline-none transition-all focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/10" />
                        </div>
                        <div>
                          <label className="font-manrope mb-1.5 block text-[12px] font-medium text-gray-500">Agency / Company</label>
                          <input type="text" placeholder="Optional" value={data.company} onChange={(e) => update("company", e.target.value)}
                            className="font-manrope w-full rounded-xl border border-gray-200 px-4 py-3 text-[13px] outline-none transition-all focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Schedule */}
                {step === 3 && (
                  <div>
                    <h2 className="font-the-seasons mb-2 text-[24px] font-light text-[var(--dark-teal)]">Preferred schedule</h2>
                    <p className="font-manrope mb-6 text-[13px] text-gray-400">When would you like the shoot to take place?</p>
                    <div className="space-y-5">
                      <div>
                        <label className="font-manrope mb-2 block text-[12px] font-medium uppercase tracking-[0.5px] text-gray-500">Preferred Date *</label>
                        <CustomCalendar value={data.preferredDate} onChange={(v) => update("preferredDate", v)} />
                      </div>
                      <div>
                        <label className="font-manrope mb-2 block text-[12px] font-medium uppercase tracking-[0.5px] text-gray-500">Preferred Time</label>
                        <div className="flex flex-wrap gap-2">
                          {TIMES.map((t) => (
                            <button
                              key={t}
                              onClick={() => update("preferredTime", t)}
                              className={`rounded-full border px-4 py-2 text-[12px] font-medium font-manrope transition-all duration-200 ${
                                data.preferredTime === t
                                  ? "border-[var(--teal)] bg-[var(--teal)] text-white shadow-sm"
                                  : "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="font-manrope mb-2 block text-[12px] font-medium uppercase tracking-[0.5px] text-gray-500">Additional Notes</label>
                        <textarea
                          rows={3}
                          placeholder="Any special requests or details..."
                          value={data.notes}
                          onChange={(e) => update("notes", e.target.value)}
                          className="font-manrope w-full rounded-xl border border-gray-200 px-4 py-3 text-[13px] outline-none transition-all focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/10 resize-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Review */}
                {step === 4 && (
                  <div>
                    <h2 className="font-the-seasons mb-2 text-[24px] font-light text-[var(--dark-teal)]">Review your booking</h2>
                    <p className="font-manrope mb-6 text-[13px] text-gray-400">Please confirm all details before submitting.</p>
                    {(() => {
                      const pkg = PACKAGES.find((p) => p.id === data.package);
                      if (!pkg) return null;
                      return (
                        <div className="mb-5 flex items-center gap-4 rounded-2xl border border-[var(--teal)]/20 bg-[var(--teal)]/5 p-4">
                          <span className="text-3xl">{pkg.icon}</span>
                          <div className="flex-1">
                            <p className="font-manrope text-[14px] font-semibold text-gray-800">{pkg.name}</p>
                            <p className="font-manrope text-[11px] text-gray-400">{pkg.desc}</p>
                          </div>
                          <p className="font-manrope text-[15px] font-semibold text-[var(--teal)]">{pkg.price}</p>
                        </div>
                      );
                    })()}
                    <div className="space-y-3">
                      <ReviewRow label="Location" value={data.location || "-"} />
                      <ReviewRow label="Property Size" value={data.propertySize || "Not specified"} />
                      <ReviewRow label="Rooms" value={data.rooms ? `${data.rooms} rooms` : "Not specified"} />
                      <div className="my-2 border-t border-gray-100" />
                      <ReviewRow label="Name" value={data.name} />
                      <ReviewRow label="Email" value={data.email} />
                      <ReviewRow label="Phone" value={data.phone} />
                      <ReviewRow label="Company" value={data.company || "Not specified"} />
                      <div className="my-2 border-t border-gray-100" />
                      <ReviewRow label="Date" value={data.preferredDate ? new Date(data.preferredDate + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "-"} />
                      <ReviewRow label="Time" value={data.preferredTime || "Not specified"} />
                      <ReviewRow label="Notes" value={data.notes || "None"} />
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Navigation */}
          <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3 md:px-8">
            <button
              onClick={step > 0 ? goBack : onClose}
              className="font-manrope flex items-center gap-2 text-[12px] font-medium text-gray-400 transition-colors hover:text-[var(--dark-teal)]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              {step === 0 ? "Cancel" : "Back"}
            </button>
            <div className="hidden gap-1.5 md:flex">
              {STEPS.map((_, i) => (
                <motion.div
                  key={i}
                  className="h-1 rounded-full"
                  animate={{ width: i === step ? 24 : 8, backgroundColor: i <= step ? "var(--dark-teal)" : "#e5e7eb" }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
            {step < 4 ? (
              <button onClick={goNext} disabled={!canNext()}
                className="font-manrope flex items-center gap-2 rounded-full bg-[var(--dark-teal)] px-5 py-2.5 text-[12px] font-medium text-white transition-all hover:bg-[var(--teal)] disabled:opacity-40 disabled:hover:bg-[var(--dark-teal)]">
                Next
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            ) : (
              <button onClick={handleSubmit}
                className="font-manrope flex items-center gap-2 rounded-full bg-[var(--dark-teal)] px-7 py-2.5 text-[12px] font-medium text-white transition-all hover:bg-[var(--teal)]">
                Confirm Booking
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="font-manrope shrink-0 text-[12px] text-gray-400">{label}</span>
      <span className="font-manrope text-right text-[12px] font-medium text-gray-700">{value}</span>
    </div>
  );
}
