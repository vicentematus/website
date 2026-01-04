import { Music9799Card } from "./Music9799Card";
import { PokedexCard } from "./PokedexCard";
import { GreenEscapeCard } from "./GreenEscapeCard";

export const OverlappingCards = () => {
  return (
    <>
      {/* Mobile: Horizontal scroll */}
      <div className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 sm:hidden">
        <div className="h-[340px] w-[280px] flex-none snap-center">
          <GreenEscapeCard />
        </div>
        <div className="h-[340px] w-[280px] flex-none snap-center">
          <PokedexCard />
        </div>
        <div className="h-[340px] w-[280px] flex-none snap-center">
          <Music9799Card />
        </div>
      </div>

      {/* Desktop: Masonry grid layout */}
      <div className="hidden auto-rows-[193px] grid-cols-2 gap-6 sm:grid">
        <div className="row-span-2">
          <Music9799Card />
        </div>
        <GreenEscapeCard />
        <PokedexCard />
        <GreenEscapeCard />
        <PokedexCard />
      </div>

      {/* Hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};
