
import DownloadSection from "@/components/DownloadSection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import QuestionSection from "@/components/QuestionSection";
import ReviewSection from "@/components/ReviewSection";
import Footer from "@/components/footer";


import React from "react";

function HomePage() {
  return (
    <>
      <div className=" flex flex-col lg:ml-40 px-10 lg:px-0">
        <Navbar />
        <HeroSection />
      </div>
      <FeatureSection />
      <ReviewSection />
      <QuestionSection/>
      <DownloadSection/>
      <Footer/>
      
    </>
  );
}

export default HomePage;
