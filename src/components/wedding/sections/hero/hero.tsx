import ImageSlideshow from "./components/image-slideshow";
import WeddingOf from "./components/wedding-of";

export default function Hero() {
  return (
    <section id="hero" className="relative">
      <ImageSlideshow />
      <div className="relative h-screen flex flex-col items-center justify-end overflow-hidden">
        <WeddingOf />
      </div>
    </section>
  );
}
