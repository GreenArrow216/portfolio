import { useEffect } from "react";

const useLazyLoadImages = () => {
  useEffect(() => {
    const lazyImages = document.querySelectorAll("img.lazy");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute("data-src");
            if (src) {
              img.src = src;
              img.classList.remove("lazy");
            }
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: "0px 0px 0px 0px", // Preload images slightly before they come into view
      }
    );

    lazyImages.forEach((image) => observer.observe(image));

    return () => observer.disconnect();
  }, []);
};

export default useLazyLoadImages;
