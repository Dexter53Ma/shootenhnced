"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import WelcomeSection from "@/components/WelcomeSection";
import RegionSelector from "@/components/RegionSelector";
import UaeSectionHeading from "@/components/UaeSectionHeading";
import UaePropertiesCarousel from "@/components/UaePropertiesCarousel";
import AwardsSection from "@/components/AwardsSection";
import CaribbeanSection from "@/components/CaribbeanSection";
import Footer from "@/components/Footer";

export default function HomePageClient() {
  return (
    <div id="main-content" className="relative">
      <Navigation />
      <HeroSlider />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="sr-only">ShootYourListing — Premium Real Estate Photography & Drone Services</h1>
        <WelcomeSection />
        <RegionSelector />
        <UaeSectionHeading />
        <UaePropertiesCarousel />
        <AwardsSection />
        <CaribbeanSection />
        <Footer />
      </motion.div>
    </div>
  );
}
