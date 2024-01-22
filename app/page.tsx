import Hero from "@/components/main/Hero";
import Team from "@/components/main/Team";
import Navbar from "@/components/main/Navbar";
import Contact from "@/components/main/Contact";
import ImageSlider from "@/components/main/ImageSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="h-full w-full">
        <div className="flex flex-col ">
          <Hero />

          <ImageSlider />

          <Team />

          <Contact />
        </div>
      </main>
    </div>
  );
}
