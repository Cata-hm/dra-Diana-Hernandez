//Dra-Diana-HM_FEsrc/components/Tools/ToolsCarousel.tsx
import { useEffect, useRef, useState } from "react";
import { toolsData } from "./ToolsData";

const ToolsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollSpeed = 1; // automatic scroll speed
    let animationFrameId: number;

    const step = () => {
      if (!container || isDragging) {
        // pause automatic scrolling while dragging
        animationFrameId = requestAnimationFrame(step);
        return;
      }

      container.scrollLeft += scrollSpeed;

      // infinite loop: reset scroll when reaching half the scrollWidth
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeftStart(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container || !isDragging) return;
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX;
    container.scrollLeft = scrollLeftStart - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - container.offsetLeft);
    setScrollLeftStart(container.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const container = containerRef.current;
    if (!container || !isDragging) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = x - startX;
    container.scrollLeft = scrollLeftStart - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <div className="overflow-hidden relative">
      <div
        ref={containerRef}
        className="flex space-x-1 cursor-grab select-none hide-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          scrollBehavior: "smooth", // smooth scrolling when user drags
          overflowX: "scroll",
        }}
      >
        {/* Duplicate items for infinite loop */}
        {[...toolsData, ...toolsData].map(({ src, alt }, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[580px] bg-white dark:bg-gray-100 overflow-hidden"
            style={{ aspectRatio: "3 / 2", flexShrink: 0 }}
          >
            <img
              src={src}
              alt={alt}
              className="w-auto h-auto max-h-[500px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsCarousel;
