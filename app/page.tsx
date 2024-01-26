import Hero from "@/components/main/Hero";
import Team from "@/components/main/Team";
import Navbar from "@/components/main/Navbar";
import Contact from "@/components/main/Contact";
import ImageSlider from "@/components/main/ImageSlider";
import Department from "@/components/main/Department";
import College from "@/components/main/College";
import Team2 from "@/components/main/Team2";
import Conveners from "@/components/main/Conveners";
import Card from "@/components/sub/Card";

export default function Home() {
  const card1 = () => (
    <Card src="/jeff.png" title="Jeffrin Joel Raj" description="President" />
  );
  const card2 = () => (
    <Card src="/jeff.png" title="Jeffrin Joel Raj" description="President" />
  );
  const card3 = () => (
    <Card src="/jeff.png" title="Jeffrin Joel Raj" description="President" />
  );
  const card4 = () => (
    <Card src="/jeff.png" title="Jeffrin Joel Raj" description="President" />
  );
  const card5 = () => (
    <Card src="/jeff.png" title="Jeffrin Joel Raj" description="President" />
  );
  const cards = [card1, card2, card3, card4, card5];
  return (
    <div>
      <Navbar />
      <main className="h-full w-full">
        <div className="flex flex-col justify-center">
          <Hero />
          <Department />
          <College />
          <ImageSlider />

          <Team />
          <Team2 data={cards} />
          <Conveners />

          <Contact />
        </div>
      </main>
    </div>
  );
}
