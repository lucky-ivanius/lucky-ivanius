"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

import image01 from "@/assets/wedding/images/_WIL1110.jpg";
import image02 from "@/assets/wedding/images/_WIL1178.jpg";
import image03 from "@/assets/wedding/images/_WIL1200.jpg";
import image04 from "@/assets/wedding/images/_WIL1477.jpg";
import image05 from "@/assets/wedding/images/_WIL1723.jpg";
import image06 from "@/assets/wedding/images/_WIL1570.jpg";
import image07 from "@/assets/wedding/images/_WIL1878.jpg";
import image08 from "@/assets/wedding/images/_WIL1908.jpg";

gsap.registerPlugin(ScrollTrigger);

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

export default function Gallery() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const galleryTextWrapperRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current!;
      const imageWrapper = imageWrapperRef.current!;
      const galleryTextWrapper = galleryTextWrapperRef.current!;

      const chars = gsap.utils.toArray(".st0");
      const galleryImgs = gsap.utils.toArray(".gallery-image");

      const imagesTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          scrub: 2,
          end: `+=${wrapper.offsetWidth}`,
        },
      });

      imagesTimeline
        .fromTo(
          galleryImgs,
          {
            xPercent: 100,
          },
          {
            xPercent: -100 * galleryImgs.length,
            stagger: {
              axis: "x",
              from: "start",
              grid: [1, 8],
              ease: "power3.inOut",
            },
          }
        )
        .fromTo(
          imageWrapper,
          {
            rotateX: -20,
            rotateY: -10,
            scale: 1,
          },
          {
            rotateX: 0,
            rotateY: 0,
            scale: 1.3,
          },
          "<"
        )
        .to(
          wrapper,
          {
            backgroundColor: "#000",
          },
          "<"
        );

      const textTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          scrub: true,
          start: "-50% top",
        },
      });

      textTimeline.from(galleryTextWrapper, { yPercent: 10 }).to(
        chars,
        {
          strokeDasharray: 1000,
          strokeDashoffset: 0,
        },
        "<"
      );

      const outTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          scrub: true,
          start: "top -20%",
          end: "center top",
        },
      });

      outTimeline
        .fromTo(galleryTextWrapper, { yPercent: 0 }, { yPercent: 1200 })
        .to(
          chars,
          {
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
          },
          "<"
        );
    },
    { scope: wrapperRef }
  );

  return (
    <section
      ref={wrapperRef}
      id="gallery"
      className="bg-green-950 w-full h-screen overflow-hidden"
    >
      <div
        ref={imageWrapperRef}
        className="flex items-center justify-start h-full w-[800vw]"
        style={{ transform: "perspective(1000px)" }}
      >
        {images.map((image, index) => (
          <Image
            src={image}
            key={index}
            alt={`gallery-image-${index}`}
            className="gallery-image object-cover object-center h-4/6 w-1/2"
          />
        ))}
      </div>

      <svg
        ref={galleryTextWrapperRef}
        viewBox="0 0 682.715 201.369"
        className="absolute w-2/3 md:w-1/3 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <style>
          {`.st0 {
            stroke:#fff;
            stroke-dashoffset: 1000;
            stroke-dasharray: 1000;
            stroke-width: 4px;
            stroke-miterlimit: 10;
            fill:none;
            stroke-linecap: round;
          }`}
        </style>
        <path
          d="M 160.742 158.205 L 170.703 113.967 L 169.922 113.967 A 40.312 40.312 0 0 1 161.928 122.243 A 35.886 35.886 0 0 1 156.689 125.588 Q 149.023 129.592 139.941 129.592 A 37.495 37.495 0 0 1 130.09 128.335 A 32.622 32.622 0 0 1 124.023 126.027 A 34.893 34.893 0 0 1 111.816 115.822 A 44.311 44.311 0 0 1 106.384 106.453 A 56.688 56.688 0 0 1 104.004 99.806 A 67.623 67.623 0 0 1 101.687 87.619 A 86.124 86.124 0 0 1 101.27 79.006 Q 101.27 67.97 103.76 57.765 Q 106.25 47.56 111.035 38.674 A 72.029 72.029 0 0 1 137.109 10.549 Q 154.102 0.002 174.316 0.002 A 64.361 64.361 0 0 1 182.813 0.539 A 50.409 50.409 0 0 1 189.6 1.906 A 41.278 41.278 0 0 1 195.777 4.129 A 31.089 31.089 0 0 1 201.27 7.326 Q 206.055 10.939 208.594 16.066 A 24.586 24.586 0 0 1 211.011 24.822 A 29.879 29.879 0 0 1 211.133 27.541 Q 211.133 36.037 206.934 41.31 Q 204.883 43.849 202.002 45.217 A 14.061 14.061 0 0 1 195.898 46.584 A 15.9 15.9 0 0 1 188.867 44.972 Q 185.547 43.361 183.301 40.334 Q 186.146 38.437 188.352 34.557 A 28.999 28.999 0 0 0 189.355 32.619 A 26.973 26.973 0 0 0 191.409 26.607 A 22.598 22.598 0 0 0 191.895 21.974 A 16.921 16.921 0 0 0 191.503 18.22 Q 190.73 14.821 188.428 12.648 Q 184.961 9.377 178.516 9.377 Q 172.656 9.377 166.943 12.111 Q 161.23 14.845 155.957 19.826 Q 150.781 24.709 146.387 31.496 Q 141.992 38.283 138.867 46.193 A 93.067 93.067 0 0 0 132.129 81.349 Q 132.129 95.831 136.464 103.654 A 22.162 22.162 0 0 0 136.865 104.347 Q 141.602 112.209 150.684 112.209 A 20.459 20.459 0 0 0 164.054 107.176 Q 166.877 104.833 169.43 101.4 A 42.97 42.97 0 0 0 169.775 100.929 A 57.721 57.721 0 0 0 175.03 91.9 Q 179.709 82.063 183.105 67.58 L 206.738 67.775 L 192.09 134.963 A 177.823 177.823 0 0 1 187.682 151.612 Q 182.104 168.965 174.023 178.81 A 37.113 37.113 0 0 1 147.186 192.652 A 47.334 47.334 0 0 1 143.75 192.775 A 46.434 46.434 0 0 1 136.022 192.157 A 37.519 37.519 0 0 1 130.566 190.822 Q 124.609 188.869 120.313 185.256 A 24.808 24.808 0 0 1 113.672 176.564 A 25.824 25.824 0 0 1 111.337 166.27 A 29.873 29.873 0 0 1 111.328 165.529 A 28.627 28.627 0 0 1 112.843 156.167 A 27.056 27.056 0 0 1 113.379 154.738 Q 115.43 149.709 119.141 145.802 A 25.184 25.184 0 0 1 127.734 139.894 A 26.872 26.872 0 0 1 138.281 137.795 A 26.037 26.037 0 0 1 143.426 138.273 Q 146.537 138.9 148.966 140.35 A 14.819 14.819 0 0 1 150.635 141.506 A 11.961 11.961 0 0 1 155.218 150.207 A 16.261 16.261 0 0 1 155.273 151.564 A 17.328 17.328 0 0 1 155.02 154.623 Q 154.709 156.353 154.019 157.737 A 9.105 9.105 0 0 1 153.125 159.181 A 12.022 12.022 0 0 0 149.215 155.874 A 14.593 14.593 0 0 0 148.193 155.373 Q 145.117 154.006 141.699 154.006 A 15.659 15.659 0 0 0 137.442 154.555 A 11.664 11.664 0 0 0 131.934 157.912 A 13.61 13.61 0 0 0 128.363 165.291 A 19.053 19.053 0 0 0 128.125 168.361 A 17.74 17.74 0 0 0 128.714 173.047 A 13.393 13.393 0 0 0 131.836 178.713 A 11.698 11.698 0 0 0 140.37 182.796 A 15.102 15.102 0 0 0 141.113 182.814 A 14.129 14.129 0 0 0 151.091 178.72 A 20.693 20.693 0 0 0 153.027 176.613 A 29.202 29.202 0 0 0 156.382 171.249 Q 157.779 168.423 158.922 164.918 A 73.49 73.49 0 0 0 160.742 158.205 Z"
          id="2"
          className="st0"
        />
        <path
          d="M 318.359 115.529 Q 315.918 124.123 312.109 128.81 Q 310.355 130.985 308.451 132.31 A 10.845 10.845 0 0 1 302.148 134.377 Q 295.74 134.377 294.338 129.131 A 13.001 13.001 0 0 1 293.945 125.783 A 25.813 25.813 0 0 1 294.054 123.383 A 20.772 20.772 0 0 1 294.824 119.338 L 309.18 51.369 L 280.371 51.369 L 278.223 62.013 L 278.223 60.549 A 8.286 8.286 0 0 0 276.6 55.463 A 10.146 10.146 0 0 0 274.17 53.176 A 10.837 10.837 0 0 0 273.747 52.899 Q 270.903 51.135 266.25 50.612 A 38.069 38.069 0 0 0 262.012 50.392 Q 245.703 50.392 233.203 62.404 A 63.728 63.728 0 0 0 222.85 75.705 A 85.816 85.816 0 0 0 216.113 90.138 Q 213.379 97.756 211.963 105.568 A 94.418 94.418 0 0 0 211.186 110.611 A 78.486 78.486 0 0 0 210.547 120.412 A 59.145 59.145 0 0 0 210.791 125.897 Q 211.962 138.463 218.75 145.412 A 22.978 22.978 0 0 0 228.8 151.409 A 29.744 29.744 0 0 0 237.207 152.541 A 29.544 29.544 0 0 0 255.078 146.681 A 37.989 37.989 0 0 0 256.063 145.949 Q 259.062 143.643 261.924 140.515 A 64.783 64.783 0 0 0 266.992 134.181 A 34.859 34.859 0 0 0 267.298 136.249 Q 267.839 139.259 268.868 141.719 A 17.407 17.407 0 0 0 273.096 147.902 Q 276.318 150.874 280.962 151.942 A 25.236 25.236 0 0 0 286.621 152.541 A 34.096 34.096 0 0 0 299.219 150.197 A 35.061 35.061 0 0 0 305.993 146.592 A 41.368 41.368 0 0 0 313.77 139.65 A 52.112 52.112 0 0 0 317.217 135.136 A 70.223 70.223 0 0 0 317.306 135.004 M 266.797 115.529 A 30.859 30.859 0 0 1 265.78 119.162 A 24.01 24.01 0 0 1 259.766 128.713 Q 257.422 130.861 254.932 132.033 Q 252.441 133.205 250.195 133.205 A 16.975 16.975 0 0 1 248.45 133.119 A 12.679 12.679 0 0 1 246.68 132.814 A 5.226 5.226 0 0 1 245.102 132.124 A 6.632 6.632 0 0 1 243.848 131.056 Q 241.05 128.406 240.361 122.092 A 41.804 41.804 0 0 1 240.137 117.58 Q 240.137 112.795 241.016 106.886 A 84.323 84.323 0 0 1 241.043 106.702 A 90.951 90.951 0 0 1 243.652 94.924 A 110.078 110.078 0 0 1 245.075 90.215 Q 246.712 85.216 248.664 81.013 A 56.252 56.252 0 0 1 253.32 72.756 A 42.27 42.27 0 0 1 253.522 72.474 Q 256.754 67.988 260.4 65.431 A 16.515 16.515 0 0 1 262.355 64.247 A 12.61 12.61 0 0 1 268.164 62.795 A 11.102 11.102 0 0 1 269.613 62.886 A 7.652 7.652 0 0 1 274.707 65.627 A 10.401 10.401 0 0 1 275.928 68.117 Q 276.367 69.435 276.367 70.412 L 266.797 115.529 Z"
          id="3"
          className="st0"
        />
        <path
          d="M 371.777 115.529 A 36.634 36.634 0 0 1 369.3 121.647 A 26.541 26.541 0 0 1 364.551 128.224 A 20.733 20.733 0 0 1 363.958 128.794 A 18.069 18.069 0 0 1 359.424 131.886 A 13.208 13.208 0 0 1 353.711 133.205 A 21.107 21.107 0 0 1 353.184 133.198 Q 349.295 133.101 347.51 131.545 A 4.146 4.146 0 0 1 347.381 131.428 Q 345.605 129.744 345.605 125.783 A 33.748 33.748 0 0 1 345.664 123.749 Q 345.819 121.182 346.387 119.338 L 369.336 11.33 L 339.746 15.334 L 318.359 115.529 M 370.663 134.646 A 63.989 63.989 0 0 1 369.22 136.622 A 50.366 50.366 0 0 1 366.699 139.65 A 42.548 42.548 0 0 1 357.219 147.351 A 37.843 37.843 0 0 1 351.27 150.197 A 36.962 36.962 0 0 1 338.184 152.541 A 26.16 26.16 0 0 1 331.822 151.809 A 18.244 18.244 0 0 1 323.047 146.877 A 19.972 19.972 0 0 1 318.125 138.464 A 30.819 30.819 0 0 1 317.306 135.004"
          id="4"
          className="st0"
        />
        <path
          d="M 422.568 121.937 A 26.541 26.541 0 0 1 417.969 128.224 A 20.733 20.733 0 0 1 417.376 128.794 A 18.069 18.069 0 0 1 412.842 131.886 A 13.208 13.208 0 0 1 407.129 133.205 A 21.107 21.107 0 0 1 406.602 133.198 Q 402.713 133.101 400.928 131.545 A 4.146 4.146 0 0 1 400.799 131.428 Q 399.023 129.744 399.023 125.783 A 33.748 33.748 0 0 1 399.082 123.749 Q 399.237 121.182 399.805 119.338 L 422.754 11.33 L 393.164 15.334 L 371.777 115.529 M 424.392 134.198 A 63.989 63.989 0 0 1 422.638 136.622 A 50.366 50.366 0 0 1 420.117 139.65 A 42.548 42.548 0 0 1 410.637 147.351 A 37.843 37.843 0 0 1 404.687 150.197 A 36.962 36.962 0 0 1 391.602 152.541 A 26.16 26.16 0 0 1 385.24 151.809 A 18.244 18.244 0 0 1 376.465 146.877 A 19.972 19.972 0 0 1 371.543 138.464 A 30.819 30.819 0 0 1 370.663 134.646"
          id="5"
          className="st0"
        />
        <path
          d="M 422.568 121.937 A 55.632 55.632 0 0 1 422.559 120.802 A 73.16 73.16 0 0 1 422.864 114.308 Q 423.169 110.89 423.779 107.131 Q 425 99.611 427.441 92.092 A 87.074 87.074 0 0 1 434.424 76.174 Q 438.672 68.654 444.336 62.892 A 43.365 43.365 0 0 1 475.817 49.616 A 54.665 54.665 0 0 1 476.562 49.611 A 40.384 40.384 0 0 1 482.904 50.075 Q 486.271 50.611 488.934 51.769 A 16.315 16.315 0 0 1 494.336 55.47 Q 497.977 59.36 498.533 66.195 A 31.573 31.573 0 0 1 498.633 68.752 A 35.407 35.407 0 0 1 494.922 84.718 A 43.055 43.055 0 0 1 484.668 97.951 A 52.879 52.879 0 0 1 469.824 106.984 A 55.047 55.047 0 0 1 452.637 110.939 A 150.624 150.624 0 0 0 452.379 113.903 Q 452.148 116.933 452.148 118.947 Q 452.148 126.953 454.643 130.89 A 8.874 8.874 0 0 0 455.859 132.424 Q 458.962 135.621 466.049 135.739 A 32.99 32.99 0 0 0 466.602 135.744 Q 477.441 135.744 486.426 129.884 A 47.422 47.422 0 0 0 492.755 125.003 A 53.357 53.357 0 0 0 493.75 124.074 A 121.17 121.17 0 0 0 496.552 121.293 Q 497.787 120.028 499.138 118.587 A 244.699 244.699 0 0 0 501.924 115.561 M 454.199 101.369 A 107.588 107.588 0 0 1 458.203 86.427 Q 460.742 79.103 463.867 73.342 Q 465.897 69.689 468.012 66.965 A 30.425 30.425 0 0 1 470.947 63.674 Q 472.778 61.916 474.597 61.037 A 8.273 8.273 0 0 1 478.223 60.158 A 5.873 5.873 0 0 1 479.379 60.266 A 3.756 3.756 0 0 1 482.08 62.258 A 6.254 6.254 0 0 1 482.202 62.497 Q 482.888 63.925 483.104 66.152 A 22.971 22.971 0 0 1 483.203 68.361 A 31.458 31.458 0 0 1 480.859 80.226 Q 478.516 86.037 474.414 90.724 Q 470.313 95.314 465.039 98.146 A 30.661 30.661 0 0 1 464.048 98.656 A 26.372 26.372 0 0 1 454.199 101.369 Z M 498.976 129.474 A 102.279 102.279 0 0 1 498.778 129.709 A 77.489 77.489 0 0 1 487.012 141.017 A 55.723 55.723 0 0 1 467.211 150.852 A 52.981 52.981 0 0 1 453.809 152.541 A 46.983 46.983 0 0 1 444.857 151.742 Q 439.725 150.745 435.722 148.503 A 24.301 24.301 0 0 1 431.055 145.119 A 24.555 24.555 0 0 1 424.584 134.799 A 38.618 38.618 0 0 1 424.392 134.198"
          id="6"
          className="st0"
        />
        <path
          d="M 498.976 129.474 L 494.336 151.369 L 523.145 151.369 L 539.16 75.392 A 102.281 102.281 0 0 1 540.015 74.62 Q 543.936 71.121 546.582 69.533 A 11.955 11.955 0 0 1 550.394 68.088 A 16.712 16.712 0 0 1 553.711 67.775 A 3.538 3.538 0 0 1 554.473 67.852 A 2.203 2.203 0 0 1 555.859 68.752 A 3.891 3.891 0 0 1 555.957 68.912 Q 556.581 69.995 557.205 72.505 A 50.043 50.043 0 0 1 557.617 74.318 A 11.88 11.88 0 0 0 557.967 75.704 A 14.734 14.734 0 0 0 558.691 77.541 A 6.127 6.127 0 0 0 561.133 80.08 Q 562.695 80.959 565.332 80.959 A 17.219 17.219 0 0 0 567.001 80.879 A 14.142 14.142 0 0 0 571.533 79.689 A 16.136 16.136 0 0 0 571.555 79.679 A 14.375 14.375 0 0 0 576.27 76.271 Q 578.027 74.22 578.906 71.681 A 16.007 16.007 0 0 0 579.785 66.408 A 20.519 20.519 0 0 0 579.777 65.82 A 18.054 18.054 0 0 0 578.906 60.695 A 13.779 13.779 0 0 0 576.27 55.959 A 12.554 12.554 0 0 0 570.883 52.178 A 14.627 14.627 0 0 0 565.918 51.369 A 23.053 23.053 0 0 0 558.684 52.574 A 31.171 31.171 0 0 0 552.93 55.177 Q 549.707 57.082 545.056 60.964 A 146.962 146.962 0 0 0 541.797 63.771 L 544.336 51.369 L 515.527 51.369 L 501.924 115.561"
          id="7"
          className="st0"
        />
        <path
          d="M 618.555 152.15 L 620.996 141.408 A 39.18 39.18 0 0 1 615.288 146.614 A 29.862 29.862 0 0 1 608.301 150.49 A 30.648 30.648 0 0 1 598.101 152.523 A 35.122 35.122 0 0 1 596.973 152.541 A 26.16 26.16 0 0 1 590.611 151.809 A 18.244 18.244 0 0 1 581.836 146.877 A 19.972 19.972 0 0 1 576.914 138.464 Q 575.939 135.297 575.68 131.47 A 42.292 42.292 0 0 1 575.586 128.615 A 50.216 50.216 0 0 1 575.884 123.329 Q 576.173 120.613 576.74 117.583 A 93.112 93.112 0 0 1 577.148 115.529 L 590.723 51.369 L 619.531 51.369 L 605.176 119.338 A 21.687 21.687 0 0 0 604.59 124.416 Q 604.59 128.224 605.859 130.47 A 5.296 5.296 0 0 0 607.272 132.189 Q 608.583 133.205 610.547 133.205 A 11.513 11.513 0 0 0 617.678 130.704 A 17.008 17.008 0 0 0 620.02 128.517 A 22.142 22.142 0 0 0 622.578 124.993 Q 624.585 121.62 626.172 116.799 L 640.137 51.369 L 668.945 51.369 L 649.121 144.142 A 40.222 40.222 0 0 0 657.15 140.535 A 30.807 30.807 0 0 0 664.258 134.767 A 36.669 36.669 0 0 0 668.886 128.342 Q 671.997 122.951 674.316 115.529 L 682.715 115.529 Q 678.06 130.933 669.443 140.249 A 44.41 44.41 0 0 1 666.699 142.97 A 42.618 42.618 0 0 1 653.223 151.086 A 53.246 53.246 0 0 1 647.363 152.931 L 644.336 167.384 A 64.146 64.146 0 0 1 641.016 178.81 Q 638.5 185.065 634.771 189.642 A 32.505 32.505 0 0 1 629.102 195.119 A 30.449 30.449 0 0 1 616.398 200.63 A 42.421 42.421 0 0 1 608.301 201.369 A 31.762 31.762 0 0 1 602.288 200.818 A 27.426 27.426 0 0 1 599.561 200.148 A 20.857 20.857 0 0 1 594.96 198.161 A 17.979 17.979 0 0 1 592.578 196.486 A 16.919 16.919 0 0 1 587.695 190.383 A 17.594 17.594 0 0 1 586.185 185.366 A 22.963 22.963 0 0 1 585.938 181.935 A 22.202 22.202 0 0 1 592.177 166.478 A 33.695 33.695 0 0 1 596.582 162.502 Q 604.59 156.545 618.555 152.15 Z M 615.332 167.97 L 616.504 162.209 A 89.23 89.23 0 0 0 611.306 164.341 Q 606.584 166.468 603.607 168.632 A 23.965 23.965 0 0 0 602.93 169.142 A 19.687 19.687 0 0 0 599.918 171.904 Q 598.307 173.754 597.577 175.763 A 9.992 9.992 0 0 0 596.973 179.201 A 6.895 6.895 0 0 0 597.314 181.41 A 5.879 5.879 0 0 0 598.633 183.595 A 6.088 6.088 0 0 0 602.641 185.68 A 8.698 8.698 0 0 0 603.711 185.744 A 5.028 5.028 0 0 0 606.036 185.126 Q 608.02 184.096 610.156 181.349 A 19.055 19.055 0 0 0 612.222 177.922 Q 613.944 174.327 615.123 168.957 A 69.039 69.039 0 0 0 615.332 167.97 Z"
          id="8"
          className="st0"
        />
      </svg>
    </section>
  );
}
