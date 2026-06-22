"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const filters = ["All", "Interior", "Exterior", "Aerial", "Commercial", "Luxury"];

const images = [
  { src: "/images/722562578_17917290660393261_2104221187982964139_n.jpg", name: "Bluewaters Residences", category: "Interior" },
  { src: "/images/706483388_17913740655393261_8362131622452443406_n.jpg", name: "Palm Jumeirah Villa", category: "Interior" },
  { src: "/images/711329678_17914469814393261_5632974814547833169_n.jpg", name: "Downtown Penthouse", category: "Interior" },
  { src: "/images/645772234_17900176197393261_5522100353769301722_n.jpg", name: "Marina Gate", category: "Interior" },
  { src: "/images/645831461_17900176023393261_9175279617198108912_n.jpg", name: "JBR Beach Resort", category: "Interior" },
  { src: "/images/645873783_17900171343393261_5221404496053826012_n.jpg", name: "Emirates Hills", category: "Interior" },
  { src: "/images/706483498_17913191469393261_3302957168318762362_n.jpg", name: "Casablanca Loft", category: "Interior" },
  { src: "/images/706538138_17913737130393261_6467670856105330432_n.jpg", name: "Business Bay Studio", category: "Interior" },
  { src: "/images/706610930_17913740133393261_7206770705170491794_n.jpg", name: "JVC Apartment", category: "Interior" },
  { src: "/images/706818835_17913737808393261_3087310706266516066_n.jpg", name: "DIFC Office", category: "Interior" },
  { src: "/images/707668449_17913739533393261_4709376581825798209_n.jpg", name: "City Walk Residence", category: "Interior" },
  { src: "/images/708209581_17913739398393261_5293435983475789279_n.jpg", name: "Marrakech Villa", category: "Interior" },
  { src: "/images/722605263_17917291743393261_2218950939708537535_n.jpg", name: "MBR City Penthouse", category: "Interior" },
  { src: "/images/722605271_17916741630393261_3883094405287334108_n.jpg", name: "Al Barari Villa", category: "Interior" },
  { src: "/images/722934613_17916743925393261_6064837016089231204_n.jpg", name: "Tilal Al Ghaf", category: "Interior" },
  { src: "/images/723110740_17916724977393261_3992475651805233790_n.jpg", name: "Damac Hills 2", category: "Interior" },
  { src: "/images/723137207_17916744198393261_4075359923924814503_n.jpg", name: "Sobha Hartland", category: "Interior" },
  { src: "/images/720675578_17916356172393261_7436296106074224862_n.jpg", name: "Saadiyat Island", category: "Exterior" },
  { src: "/images/724484901_17917284822393261_3224487934737261169_n.jpg", name: "Al Maryah Island", category: "Exterior" },
  { src: "/images/719490942_17915921343393261_8167824527571734183_n.jpg", name: "Yas Island", category: "Exterior" },
  { src: "/images/723085066_17917396026393261_2746549352432591255_n.jpg", name: "Reem Island", category: "Exterior" },
  { src: "/images/703691869_17913191682393261_5123223341527474306_n.jpg", name: "Al Raha Beach", category: "Exterior" },
  { src: "/images/703564895_17913191769393261_7331560962352217871_n.jpg", name: "Corniche Waterfront", category: "Exterior" },
  { src: "/images/704057069_17913192129393261_6440237618080423426_n.jpg", name: "Yas Bay", category: "Exterior" },
  { src: "/images/704287606_17913191229393261_5501236837716995344_n.jpg", name: "Saadiyat Beach", category: "Exterior" },
  { src: "/images/706417343_17913191031393261_8693995630158498422_n.jpg", name: "Al Reem Island", category: "Exterior" },
  { src: "/images/722296424_17916515901393261_2147057843375880472_n.jpg", name: "Al Ghadeer", category: "Exterior" },
  { src: "/images/722364187_17917253031393261_9092373057564835825_n.jpg", name: "Tangier Heights", category: "Exterior" },
  { src: "/images/722858422_17917392711393261_6066147318357516352_n.jpg", name: "Expo City", category: "Exterior" },
  { src: "/images/724045427_17917395714393261_3276041089295120952_n.jpg", name: "Town Square", category: "Exterior" },
  { src: "/images/724239483_17917385031393261_1203274265648523239_n.jpg", name: "Meydan", category: "Exterior" },
  { src: "/images/724247210_17917395186393261_3098682853720674154_n.jpg", name: "Rabat Residence", category: "Exterior" },
  { src: "/images/724256978_17917291029393261_6412085886136349718_n.jpg", name: "Arjan", category: "Exterior" },
  { src: "/images/720751353_17916439026393261_8552304128591804906_n.jpg", name: "Palm Aerial View", category: "Aerial" },
  { src: "/images/721463161_17916508992393261_2613060612724587922_n.jpg", name: "Casablanca Skyline", category: "Aerial" },
  { src: "/images/721667198_17916578730393261_6059273705413900669_n.jpg", name: "Marina Aerial", category: "Aerial" },
  { src: "/images/720776357_17916439680393261_5483504347130892500_n.jpg", name: "JBR Coastline", category: "Aerial" },
  { src: "/images/721575598_17916438678393261_5061165465992817883_n.jpg", name: "Downtown Aerial", category: "Aerial" },
  { src: "/images/721817590_17917283496393261_6859885367909852097_n.jpg", name: "Business Bay Aerial", category: "Aerial" },
  { src: "/images/722909988_17917290198393261_3129732607416797432_n.jpg", name: "Palm Crescent", category: "Aerial" },
  { src: "/images/723987950_17917253319393261_212804384762993207_n.jpg", name: "Casablanca Landmark", category: "Aerial" },
  { src: "/images/723256853_17917386006393261_1045073267955173653_n.jpg", name: "Ras Al Khaimah", category: "Aerial" },
  { src: "/images/723613176_17916741981393261_8169243480480807643_n.jpg", name: "Al Marjan Island", category: "Aerial" },
  { src: "/images/709092565_17914471251393261_2106576322800239147_n.jpg", name: "Office Tower", category: "Commercial" },
  { src: "/images/709101622_17914472157393261_884900051124879614_n.jpg", name: "Retail Space", category: "Commercial" },
  { src: "/images/709655136_17914471869393261_6877004265628183624_n.jpg", name: "Showroom", category: "Commercial" },
  { src: "/images/709844383_17914470924393261_6940116219085748849_n.jpg", name: "Warehouse District", category: "Commercial" },
  { src: "/images/710474413_17914471509393261_2174485250723757625_n.jpg", name: "Co-working Hub", category: "Commercial" },
  { src: "/images/710537681_17914922214393261_8912327613566277981_n.jpg", name: "Tech Park", category: "Commercial" },
  { src: "/images/713023554_17914921353393261_4736652705655431245_n.jpg", name: "Media City", category: "Commercial" },
  { src: "/images/713143876_17914923222393261_4703759715342749711_n.jpg", name: "Internet City", category: "Commercial" },
  { src: "/images/719565710_17915921124393261_3397495213468384187_n.jpg", name: "Ultra Luxury Villa", category: "Luxury" },
  { src: "/images/719585458_17916437313393261_6290031401254010589_n.jpg", name: "Beachfront Mansion", category: "Luxury" },
  { src: "/images/719754953_839320332230423_6599070902692179555_n.jpg", name: "Hillside Estate", category: "Luxury" },
  { src: "/images/719908658_17916154134393261_6819549747089087572_n.jpg", name: "Waterfront Palace", category: "Luxury" },
  { src: "/images/722909988_17917290198393261_3129732607416797432_n.jpg", name: "Penthouse Suite", category: "Luxury" },
];

function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export default function PortfolioPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useScrollAnimation(0.05);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = activeFilter === "All"
    ? images
    : images.filter((img) => img.category === activeFilter);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroEl.classList.add("animate-fade-in");
          observer.unobserve(heroEl);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <Navigation />

      <section
        className="relative flex w-full items-end overflow-hidden"
        style={{ minHeight: 500, height: "100vh" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/722562578_17917290660393261_2104221187982964139_n.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          ref={heroRef}
          className="relative z-10 w-full max-w-[1296px] px-6 pb-[120px] opacity-0 md:px-[72px]"
        >
          <h1
            className="font-the-seasons font-light text-[var(--light-grey)]"
            style={{
              fontSize: "clamp(36px, 5vw, 64.8px)",
              lineHeight: "clamp(44px, 5.4vw, 77.76px)",
              maxWidth: 800,
            }}
          >
            Our Portfolio
          </h1>
          <p
            className="font-manrope mt-6 max-w-[600px] font-light"
            style={{
              fontSize: 14.4,
              lineHeight: "21.6px",
              color: "rgba(245,244,242,0.85)",
            }}
          >
            A showcase of our finest real estate photography, videography, and drone work
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[80px] md:px-[72px]">
          <div ref={galleryRef} className="opacity-0">
            <h2 className="sr-only">Gallery</h2>
            <div className="mb-12 flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`font-manrope rounded-full px-6 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-[var(--dark-teal)] text-white"
                      : "bg-[var(--light-grey)] text-[var(--dark-teal)] hover:bg-[var(--dark-teal)] hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div
              className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4"
              style={{ columnFill: "balance" }}
            >
              {filteredImages.map((img, i) => (
                <div
                  key={`${img.src}-${i}`}
                  className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                >
                  <Image
                    src={img.src}
                    alt={img.name}
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full p-5 transition-all duration-300 group-hover:translate-y-0">
                    <span className="font-manrope mb-1 block text-[11px] font-medium uppercase tracking-[2px] text-white/70">
                      {img.category}
                    </span>
                    <h3 className="font-the-seasons text-lg font-light text-white">
                      {img.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
