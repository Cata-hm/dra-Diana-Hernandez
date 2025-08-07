// Metodik_FE/src/components/Tools/Tools.tsx
// This component renders the tools section of the Metodika application, displaying various tools used in project management
import ToolsCarousel from "./ToolsCarousel";
import { useTranslation } from "react-i18next";
import { tools } from "./ToolsData";

const Tools = () => {
  const { t } = useTranslation();
  const allToolsArray = Object.values(tools).flat();

  return (
    <section id="tools" className="w-full py-16 relative bg-gray-100 text-black">
      <div className="w-full text-center overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-wide bg-gradient bg-clip-text text-transparent">
          {t("tools.title")}
        </h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          {t("tools.subtitle")}
        </p>

        {/* Carousel de herramientas */}
        <ToolsCarousel tools={allToolsArray} />
      </div>
    </section>
  );
};

export default Tools;
