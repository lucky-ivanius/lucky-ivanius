import Image from "next/image";

import image01 from "@/assets/wedding/images/_WIL1110.jpg";
import image02 from "@/assets/wedding/images/_WIL1178.jpg";
import image03 from "@/assets/wedding/images/_WIL1200.jpg";
import image04 from "@/assets/wedding/images/_WIL1477.jpg";
import image05 from "@/assets/wedding/images/_WIL1723.jpg";
import image06 from "@/assets/wedding/images/_WIL1570.jpg";
import image07 from "@/assets/wedding/images/_WIL1878.jpg";
import image08 from "@/assets/wedding/images/_WIL1908.jpg";

const images = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
];

export default function Images() {
  return (
    <>
      {images.map((image, index) => (
        <Image
          loading="eager"
          src={image}
          key={index}
          alt={`gallery-image-${index}`}
          className="gallery-image object-cover object-center h-4/6 md:h-full w-1/2"
        />
      ))}
    </>
  );
}
