import React, { useEffect } from "react";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
import UnbanHero from "../components/unban/UnbanHero";
import AssetTypes from "../components/unban/AssetTypes";
import UnbanProcess from "../components/unban/UnbanProcess";
import UnbanPricing from "../components/unban/UnbanPricing";
import UnbanGuarantee from "../components/unban/UnbanGuarantee";
import UnbanFAQ from "../components/unban/UnbanFAQ";
import UnbanCTA from "../components/unban/UnbanCTA";

export default function UnbanService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <UnbanHero />
      <AssetTypes />
      <UnbanProcess />
      <div id="pricing">
        <UnbanPricing />
      </div>
      <UnbanGuarantee />
      <UnbanFAQ />
      <UnbanCTA />
      <Footer />
    </div>
  );
}