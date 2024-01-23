import Hero from "@/components/main/Hero";
import Team from "@/components/main/Team";
import Navbar from "@/components/main/Navbar";
import Contact from "@/components/main/Contact";
import ImageSlider from "@/components/main/ImageSlider";
import Department from "@/components/main/Department";
import College from "@/components/main/College";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="h-full w-full">
        <div className="flex flex-col ">
          <Hero />
          <Department />
          <College />
          <ImageSlider />

          <Team />

          <Contact />
        </div>
      </main>
    </div>
  );
}
