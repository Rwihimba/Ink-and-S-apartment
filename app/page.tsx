import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Amenities from "@/components/Amenities";
import Experience from "@/components/Experience";
import Location from "@/components/Location";
import ThisMonth from "@/components/ThisMonth";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import PropertyTour from "@/components/PropertyTour";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <Amenities />
      <Experience />
      <Location />
      <ThisMonth />
      <Reviews />
      <Gallery />
      <PropertyTour />
      <FAQ />
      <Booking />
    </>
  );
}
