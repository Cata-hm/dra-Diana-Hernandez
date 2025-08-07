//Dra-Diana-HM_FEsrc/components/Tools/ToolsCarousel.tsx
import Marquee from "react-fast-marquee"
import { toolsData } from "./ToolsData"

const ToolsCarousel = () => {
  return (
    <div className="space-y-4">
      <Marquee gradient={false} speed={50}>
        {toolsData.map(({ src, alt }, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[580px] mx-4 bg-white dark:bg-gray-100 overflow-hidden"
            style={{ aspectRatio: "3 / 2" }} // Esto fija la proporción ancho:alto
          >
            <img
              src={src}
              alt={alt}
              className="w-auto h-auto max-h-[500px] object-contain bg-gray-100 dark:bg-gray-100"
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default ToolsCarousel
